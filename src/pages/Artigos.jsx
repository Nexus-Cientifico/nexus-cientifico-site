/**
 * Artigos — lista de artigos publicados na Revista Nexus Científico.
 * Os dados vêm de src/data/publicacoes.json, sincronizado automaticamente
 * pelo workflow sync-zenodo.yml via GitHub Actions.
 */

import { Link } from 'react-router-dom'
import publicacoes from '@/data/publicacoes.json'
import styles from './Artigos.module.css'

/* ── Helpers ─────────────────────────────────────────────────────── */

function formatarData(data = '') {
  if (!data) return ''
  const [ano, mes] = data.split('-')
  const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  return mes ? `${meses[parseInt(mes, 10) - 1]} ${ano}` : ano
}

function tipoLabel(tipo = '') {
  const mapa = {
    'article': 'Artigo',
    'publication-article': 'Artigo',
    'book': 'Livro',
    'book-chapter': 'Capítulo',
    'thesis': 'Dissertação',
    'preprint': 'Preprint',
    'publication': 'Publicação',
  }
  return mapa[tipo] || 'Publicação'
}

/* ── Ícones ──────────────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <polyline points="12 5 19 12 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function JournalIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="7" y1="8" x2="17" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="7" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

/* ── Card de artigo ──────────────────────────────────────────────── */

function ArtigoCard({ pub }) {
  const autoresStr = pub.autores.slice(0, 3).join('; ') + (pub.autores.length > 3 ? ' et al.' : '')

  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.tipoBadge}>{tipoLabel(pub.tipo)}</span>
        {pub.data && <span className={styles.cardData}>{formatarData(pub.data)}</span>}
      </div>

      <h2 className={styles.cardTitle}>
        <Link to={`/artigos/${pub.id}`} className={styles.cardTitleLink}>
          {pub.titulo}
        </Link>
      </h2>

      {autoresStr && <p className={styles.cardAutores}>{autoresStr}</p>}

      {pub.resumo && (
        <p className={styles.cardResumo}>
          {pub.resumo.slice(0, 200)}{pub.resumo.length > 200 ? '…' : ''}
        </p>
      )}

      <div className={styles.cardFooter}>
        {pub.doi && (
          <span className={styles.doiTag}>
            DOI: {pub.doi}
          </span>
        )}
        <Link to={`/artigos/${pub.id}`} className={styles.lerMais} aria-label={`Ler: ${pub.titulo}`}>
          Ver publicação <ArrowRight />
        </Link>
      </div>
    </article>
  )
}

/* ── Estado vazio ────────────────────────────────────────────────── */

function EmptyState() {
  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyIcon}>
        <JournalIcon />
      </div>
      <h2 className={styles.emptyTitle}>Em breve — primeiros artigos</h2>
      <p className={styles.emptyText}>
        A Revista Nexus Científico está em sua fase de lançamento. Os artigos
        publicados na nossa comunidade Zenodo aparecerão aqui automaticamente,
        com DOI próprio e acesso aberto.
      </p>
      <a
        href="https://zenodo.org/communities/nexus-cientifico"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.zenodoLink}
      >
        Ver comunidade no Zenodo
      </a>
    </div>
  )
}

/* ── Página ──────────────────────────────────────────────────────── */

export default function Artigos() {
  const artigos = publicacoes.filter(
    p => p.tipo === 'article' || p.tipo === 'publication-article' || p.tipo === 'publication'
  )

  return (
    <div className={styles.page}>

      {/* Hero */}
      <header className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Periódico Científico</span>
          <h1 className={styles.heroTitle}>Artigos — Revista Nexus Científico</h1>
          <p className={styles.heroLead}>
            Todos os artigos com revisão por pares, DOI individual e acesso aberto,
            indexados no Zenodo e disponíveis para citação no Google Scholar.
          </p>
        </div>
      </header>

      {/* Conteúdo */}
      <section className={styles.content}>
        <div className="container">

          {artigos.length > 0 && (
            <p className={styles.contagem}>
              {artigos.length} {artigos.length === 1 ? 'publicação' : 'publicações'}
            </p>
          )}

          {artigos.length === 0
            ? <EmptyState />
            : (
              <div className={styles.lista}>
                {artigos.map(pub => <ArtigoCard key={pub.id} pub={pub} />)}
              </div>
            )
          }
        </div>
      </section>

    </div>
  )
}
