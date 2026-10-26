/**
 * ArtigoDetalhe — página individual de uma publicação.
 *
 * URL: /artigos/:id
 *
 * As meta tags do Google Scholar são injetadas estaticamente no HTML
 * pelo script scripts/generate-scholar-pages.mjs após o build.
 * Esta página cuida da experiência visual para o usuário.
 */

import { useParams, Link, Navigate } from 'react-router-dom'
import publicacoes from '@/data/publicacoes.json'
import styles from './ArtigoDetalhe.module.css'

/* ── Helpers ─────────────────────────────────────────────────────── */

function formatarData(data = '') {
  if (!data) return ''
  const [ano, mes, dia] = data.split('-')
  const meses = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
  ]
  if (mes && dia) return `${parseInt(dia, 10)} de ${meses[parseInt(mes, 10) - 1]} de ${ano}`
  if (mes) return `${meses[parseInt(mes, 10) - 1]} de ${ano}`
  return ano
}

function tipoLabel(tipo = '') {
  const mapa = {
    'article': 'Artigo Científico',
    'publication-article': 'Artigo Científico',
    'book': 'Livro',
    'book-chapter': 'Capítulo de Livro',
    'thesis': 'Dissertação / Tese',
    'preprint': 'Preprint',
    'publication': 'Publicação',
  }
  return mapa[tipo] || 'Publicação'
}

/* ── Ícones ──────────────────────────────────────────────────────── */

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function PdfIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="9" y1="17" x2="13" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function BackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <polyline points="12 19 5 12 12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

/* ── Página ──────────────────────────────────────────────────────── */

export default function ArtigoDetalhe() {
  const { id } = useParams()
  const pub = publicacoes.find(p => p.id === id)

  if (!pub) return <Navigate to="/artigos" replace />

  const autoresStr = pub.autores.join('; ')

  return (
    <div className={styles.page}>
      <div className="container">

        {/* Navegação */}
        <nav className={styles.breadcrumb} aria-label="Navegação">
          <Link to="/artigos" className={styles.backLink}>
            <BackIcon /> Todos os artigos
          </Link>
        </nav>

        <article className={styles.article}>

          {/* Cabeçalho */}
          <header className={styles.header}>
            <div className={styles.metaRow}>
              <span className={styles.tipoBadge}>{tipoLabel(pub.tipo)}</span>
              {pub.data && (
                <time className={styles.data} dateTime={pub.data}>
                  {formatarData(pub.data)}
                </time>
              )}
            </div>

            <h1 className={styles.titulo}>{pub.titulo}</h1>

            {autoresStr && (
              <p className={styles.autores}>
                <span className={styles.autoresLabel}>Autores: </span>
                {autoresStr}
              </p>
            )}

            {pub.periódico && (
              <p className={styles.periodico}>
                {pub.periódico}
                {pub.issn && <span className={styles.issn}> · ISSN {pub.issn}</span>}
              </p>
            )}
          </header>

          {/* Separador */}
          <hr className={styles.divider} />

          {/* Resumo */}
          {pub.resumo && (
            <section className={styles.resumoSection} aria-labelledby="resumo-heading">
              <h2 id="resumo-heading" className={styles.sectionTitle}>Resumo</h2>
              <p className={styles.resumoTexto}>{pub.resumo}</p>
            </section>
          )}

          {/* Palavras-chave */}
          {pub.palavrasChave && (
            <section className={styles.palavrasSection}>
              <h2 className={styles.sectionTitle}>Palavras-chave</h2>
              <div className={styles.tagsGrid}>
                {pub.palavrasChave.split(',').map(p => p.trim()).filter(Boolean).map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </section>
          )}

          {/* Identificadores */}
          <section className={styles.identificadores} aria-labelledby="ids-heading">
            <h2 id="ids-heading" className={styles.sectionTitle}>Identificadores</h2>
            <dl className={styles.idGrid}>
              {pub.doi && (
                <>
                  <dt className={styles.idLabel}>DOI</dt>
                  <dd className={styles.idValue}>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.idLink}
                    >
                      {pub.doi}
                    </a>
                  </dd>
                </>
              )}
              {pub.issn && (
                <>
                  <dt className={styles.idLabel}>ISSN</dt>
                  <dd className={styles.idValue}>{pub.issn}</dd>
                </>
              )}
              {pub.isbn && (
                <>
                  <dt className={styles.idLabel}>ISBN</dt>
                  <dd className={styles.idValue}>{pub.isbn}</dd>
                </>
              )}
              <dt className={styles.idLabel}>Repositório</dt>
              <dd className={styles.idValue}>
                <a
                  href={pub.zenodoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.idLink}
                >
                  Zenodo
                </a>
              </dd>
            </dl>
          </section>

          {/* Ações */}
          <footer className={styles.actions}>
            <a
              href={pub.zenodoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Acessar no Zenodo <ExternalIcon />
            </a>

            {pub.pdfUrl && (
              <a
                href={pub.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                <PdfIcon /> Baixar PDF
              </a>
            )}
          </footer>

        </article>

        {/* CTA submissão */}
        <aside className={styles.ctaSidebar}>
          <div className={styles.ctaBox}>
            <p className={styles.ctaText}>Deseja publicar na Revista Nexus Científico?</p>
            <a
              href="mailto:revista@nexuscientifico.com.br"
              className={styles.ctaLink}
            >
              Enviar proposta
            </a>
          </div>
        </aside>

      </div>
    </div>
  )
}
