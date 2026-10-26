/**
 * generate-scholar-pages.mjs
 *
 * Roda após `vite build`. Para cada publicação em src/data/publicacoes.json,
 * gera um arquivo dist/artigos/[id]/index.html com as meta tags do Google Scholar
 * já presentes no HTML inicial — sem depender de JavaScript.
 *
 * O Google Scholar indexa apenas o HTML estático; este script garante
 * que os bots encontrem os metadados corretos.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { fileURLToPath }  from 'url'
import { dirname, resolve } from 'path'

const __dirname   = dirname(fileURLToPath(import.meta.url))
const DATA_PATH   = resolve(__dirname, '../src/data/publicacoes.json')
const DIST_INDEX  = resolve(__dirname, '../dist/index.html')
const DIST_DIR    = resolve(__dirname, '../dist/artigos')
const SITE_BASE   = 'https://nexuscientifico.com.br'

// ── Helpers ─────────────────────────────────────────────────────────────────

function escapar(str = '') {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function formatarData(data = '') {
  // YYYY-MM-DD → YYYY/MM/DD (formato Google Scholar)
  return data.replace(/-/g, '/')
}

function gerarMetaTags(pub) {
  const tags = []

  // Título
  tags.push(`  <meta name="citation_title" content="${escapar(pub.titulo)}">`)

  // Autores (uma tag por autor)
  for (const autor of pub.autores) {
    tags.push(`  <meta name="citation_author" content="${escapar(autor)}">`)
  }

  // Data
  if (pub.data) {
    tags.push(`  <meta name="citation_publication_date" content="${formatarData(pub.data)}">`)
  }

  // DOI
  if (pub.doi) {
    tags.push(`  <meta name="citation_doi" content="${escapar(pub.doi)}">`)
  }

  // Periódico (para artigos)
  if (pub.periódico) {
    tags.push(`  <meta name="citation_journal_title" content="${escapar(pub.periódico)}">`)
  } else if (pub.tipo === 'article' || pub.tipo === 'publication-article') {
    tags.push(`  <meta name="citation_journal_title" content="Revista Nexus Científico">`)
  }

  // ISSN
  if (pub.issn) {
    tags.push(`  <meta name="citation_issn" content="${escapar(pub.issn)}">`)
  }

  // ISBN (para livros)
  if (pub.isbn) {
    tags.push(`  <meta name="citation_isbn" content="${escapar(pub.isbn)}">`)
  }

  // PDF
  if (pub.pdfUrl) {
    tags.push(`  <meta name="citation_pdf_url" content="${escapar(pub.pdfUrl)}">`)
  }

  // URL da página no site
  tags.push(`  <meta name="citation_abstract_html_url" content="${SITE_BASE}/artigos/${pub.id}">`)

  // Dublin Core (complementar)
  tags.push(`  <meta name="dc.title" content="${escapar(pub.titulo)}">`)
  for (const autor of pub.autores) {
    tags.push(`  <meta name="dc.creator" content="${escapar(autor)}">`)
  }
  if (pub.data) {
    tags.push(`  <meta name="dc.date" content="${escapar(pub.data)}">`)
  }
  if (pub.doi) {
    tags.push(`  <meta name="dc.identifier" content="doi:${escapar(pub.doi)}">`)
  }
  if (pub.resumo) {
    tags.push(`  <meta name="dc.description" content="${escapar(pub.resumo.slice(0, 200))}">`)
  }
  tags.push(`  <meta name="dc.publisher" content="Editora Nexus Científico">`)
  tags.push(`  <meta name="dc.language" content="pt-BR">`)

  return tags.join('\n')
}

function gerarNoscript(pub) {
  const autoresTexto = pub.autores.join('; ')
  return `
  <noscript>
    <article>
      <h1>${escapar(pub.titulo)}</h1>
      <p><strong>Autores:</strong> ${escapar(autoresTexto)}</p>
      <p><strong>Data:</strong> ${escapar(pub.data)}</p>
      <p><strong>DOI:</strong> <a href="https://doi.org/${escapar(pub.doi)}">${escapar(pub.doi)}</a></p>
      ${pub.resumo ? `<p><strong>Resumo:</strong> ${escapar(pub.resumo)}</p>` : ''}
      <p><a href="${escapar(pub.zenodoUrl)}">Ver no Zenodo</a></p>
    </article>
  </noscript>`
}

// ── Main ─────────────────────────────────────────────────────────────────────

function main() {
  // Lê publicações
  let publicacoes = []
  try {
    publicacoes = JSON.parse(readFileSync(DATA_PATH, 'utf8'))
  } catch (_) {
    console.log('ℹ  src/data/publicacoes.json vazio ou não encontrado — nenhuma página gerada.')
    return
  }

  if (publicacoes.length === 0) {
    console.log('ℹ  Nenhuma publicação ainda — páginas de artigos serão geradas na próxima sincronização.')
    return
  }

  // Lê o index.html gerado pelo Vite
  if (!existsSync(DIST_INDEX)) {
    console.error('❌ dist/index.html não encontrado. Execute vite build primeiro.')
    process.exit(1)
  }
  const baseHtml = readFileSync(DIST_INDEX, 'utf8')

  // Cria diretório de artigos
  mkdirSync(DIST_DIR, { recursive: true })

  let gerados = 0
  for (const pub of publicacoes) {
    const dir = resolve(DIST_DIR, pub.id)
    mkdirSync(dir, { recursive: true })

    // Injeta meta tags logo antes de </head>
    const metaTags  = gerarMetaTags(pub)
    const noscript  = gerarNoscript(pub)
    const titulo    = `${escapar(pub.titulo)} — Nexus Científico`
    const descricao = pub.resumo ? pub.resumo.slice(0, 160) : `Publicação científica: ${pub.titulo}`

    let html = baseHtml
      // Substitui título da aba
      .replace(
        /<title>[^<]*<\/title>/,
        `<title>${titulo}</title>`
      )
      // Atualiza canonical
      .replace(
        /<link rel="canonical"[^>]*>/,
        `<link rel="canonical" href="${SITE_BASE}/artigos/${pub.id}">`
      )
      // Atualiza description
      .replace(
        /<meta name="description"[^>]*>/,
        `<meta name="description" content="${escapar(descricao)}">`
      )
      // Injeta citation tags antes de </head>
      .replace(
        '</head>',
        `${metaTags}\n</head>`
      )
      // Injeta noscript no body
      .replace(
        '<div id="root"></div>',
        `<div id="root"></div>${noscript}`
      )

    writeFileSync(resolve(dir, 'index.html'), html, 'utf8')
    gerados++
  }

  console.log(`✅ ${gerados} página(s) de artigo gerada(s) em dist/artigos/`)
}

main()
