/**
 * fetch-zenodo.mjs
 *
 * Busca publicações no Zenodo e salva em src/data/publicacoes.json.
 * Roda como parte do workflow sync-zenodo.yml no GitHub Actions.
 *
 * Fontes:
 *   1. Comunidade Zenodo da Revista Nexus Científico
 *   2. Publicações pessoais da autora (livros e capítulos)
 */

import { writeFileSync, readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = resolve(__dirname, '../src/data/publicacoes.json')

// Configuração via variáveis de ambiente (definidas no GitHub Actions)
const COMMUNITY_SLUG = process.env.ZENODO_COMMUNITY_SLUG || 'nexus-cientifico'
const AUTHOR_NAME    = process.env.ZENODO_AUTHOR_NAME    || 'Christiane Moura Cherkasov'
const BASE_URL       = 'https://zenodo.org/api'

// ── Helpers ─────────────────────────────────────────────────────────────────

async function fetchJSON(url) {
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'NexusCientifico-Bot/1.0 (nexuscientifico.com.br)',
    },
  })
  if (!res.ok) {
    console.warn(`  ⚠  HTTP ${res.status} ao buscar: ${url}`)
    return null
  }
  return res.json()
}

/**
 * Normaliza um registro Zenodo (novo ou antigo formato) para o formato interno.
 */
function normalizar(rec) {
  // O Zenodo novo usa rec.metadata; o legado também — mas os campos diferem.
  const meta   = rec.metadata || {}
  const id     = String(rec.id)
  const doi    = rec.doi || rec.conceptdoi || `10.5281/zenodo.${id}`

  // Título
  const titulo = meta.title || '(sem título)'

  // Autores
  const autores = (meta.creators || []).map(c => {
    // Novo formato: { person_or_org: { name, given_name, family_name } }
    // Antigo formato: { name: "Sobrenome, Nome" }
    if (c.person_or_org) {
      return c.person_or_org.name || [c.person_or_org.family_name, c.person_or_org.given_name].filter(Boolean).join(', ')
    }
    return c.name || ''
  }).filter(Boolean)

  // Data
  const data = meta.publication_date || meta.created || rec.created || ''
  const dataFormatada = data.slice(0, 10) // YYYY-MM-DD

  // Resumo (remover tags HTML básicas)
  const resumoBruto = meta.description || ''
  const resumo      = resumoBruto.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 600)

  // Tipo de recurso
  const tipo = (meta.resource_type?.subtype || meta.resource_type?.type || 'publication')

  // Arquivo PDF principal
  const arquivos = rec.files || []
  let pdfUrl = ''
  if (Array.isArray(arquivos)) {
    const pdf = arquivos.find(f => f.key?.toLowerCase().endsWith('.pdf') || f.filename?.toLowerCase().endsWith('.pdf'))
    if (pdf) {
      pdfUrl = pdf.links?.self || pdf.links?.download || ''
    }
  } else if (typeof arquivos === 'object') {
    // Novo formato: { entries: { "file.pdf": { links: { self: "..." } } } }
    const entries = Object.entries(arquivos.entries || arquivos)
    const pdfEntry = entries.find(([name]) => name.toLowerCase().endsWith('.pdf'))
    if (pdfEntry) pdfUrl = pdfEntry[1]?.links?.self || ''
  }

  // Revista / Periódico
  const periódico   = meta.journal?.title || ''
  const issn        = meta.journal?.issn  || ''
  const isbn        = (meta.identifiers || []).find(i => i.scheme === 'isbn')?.identifier || ''

  // Palavras-chave
  const palavrasChave = (meta.keywords || []).join(', ')

  return {
    id,
    doi,
    titulo,
    autores,
    data: dataFormatada,
    resumo,
    tipo,
    pdfUrl,
    periódico,
    issn,
    isbn,
    palavrasChave,
    zenodoUrl: `https://zenodo.org/records/${id}`,
    paginaUrl: `/artigos/${id}`,
  }
}

// ── Busca: comunidade ────────────────────────────────────────────────────────

async function buscarComunidade() {
  console.log(`\n📚 Buscando artigos da comunidade: ${COMMUNITY_SLUG}`)

  // Tenta a nova API InvenioRDM primeiro
  const urlNova = `${BASE_URL}/communities/${COMMUNITY_SLUG}/records?sort=newest&size=100`
  const dadosNovos = await fetchJSON(urlNova)
  if (dadosNovos?.hits?.hits?.length > 0) {
    console.log(`  ✓ ${dadosNovos.hits.hits.length} registros encontrados (nova API)`)
    return dadosNovos.hits.hits
  }

  // Fallback: API legada
  const urlLegada = `${BASE_URL}/records?communities=${COMMUNITY_SLUG}&sort=newest&size=100`
  const dadosLegados = await fetchJSON(urlLegada)
  if (dadosLegados?.hits?.hits?.length > 0) {
    console.log(`  ✓ ${dadosLegados.hits.hits.length} registros encontrados (API legada)`)
    return dadosLegados.hits.hits
  }

  console.log('  ℹ  Comunidade vazia ou slug ainda não existe — aguardando primeiras publicações.')
  return []
}

// ── Busca: autora (livros e capítulos) ──────────────────────────────────────

async function buscarAutora() {
  console.log(`\n📖 Buscando publicações da autora: ${AUTHOR_NAME}`)
  const query = encodeURIComponent(`creators.name:"${AUTHOR_NAME}"`)
  const url   = `${BASE_URL}/records?q=${query}&sort=newest&size=100`
  const dados = await fetchJSON(url)
  if (dados?.hits?.hits?.length > 0) {
    console.log(`  ✓ ${dados.hits.hits.length} registros encontrados`)
    return dados.hits.hits
  }

  console.log('  ℹ  Nenhuma publicação pessoal encontrada ainda.')
  return []
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('═══════════════════════════════════════════')
  console.log('  Nexus Científico — Sync Zenodo')
  console.log('═══════════════════════════════════════════')

  const [recsComunidade, recsAutora] = await Promise.all([
    buscarComunidade(),
    buscarAutora(),
  ])

  // Mescla e deduplica por ID
  const mapa = new Map()
  for (const rec of [...recsComunidade, ...recsAutora]) {
    const norm = normalizar(rec)
    if (!mapa.has(norm.id)) mapa.set(norm.id, norm)
  }

  const publicacoes = [...mapa.values()].sort((a, b) => b.data.localeCompare(a.data))

  // Lê o arquivo atual para comparar
  let atual = []
  try {
    atual = JSON.parse(readFileSync(OUTPUT_PATH, 'utf8'))
  } catch (_) { /* arquivo não existe ainda */ }

  const novas = publicacoes.filter(p => !atual.find(a => a.id === p.id))

  console.log(`\n📊 Resultado:`)
  console.log(`   Total encontrado: ${publicacoes.length}`)
  console.log(`   Publicações novas: ${novas.length}`)

  writeFileSync(OUTPUT_PATH, JSON.stringify(publicacoes, null, 2) + '\n', 'utf8')
  console.log(`\n✅ Salvo em src/data/publicacoes.json`)

  // Sinaliza ao GitHub Actions se houve mudança
  if (novas.length > 0) {
    console.log(`\n🆕 Novas publicações:`)
    novas.forEach(p => console.log(`   - ${p.titulo} (${p.doi})`))
    process.exit(0)
  } else {
    console.log('\n✓ Nenhuma publicação nova. Deploy será ignorado.')
    process.exit(0)
  }
}

main().catch(err => {
  console.error('Erro fatal:', err)
  process.exit(1)
})
