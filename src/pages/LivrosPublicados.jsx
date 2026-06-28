/**
 * LivrosPublicados — catálogo de livros publicados pela Nexus Científico Editora.
 */

import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import styles from './LivrosPublicados.module.css'

/* ── DADOS DO CATÁLOGO ──────────────────────────────────────────── */
const BOOKS = [
  {
    id: 'horizontes-da-educacao',
    title: 'Horizontes da Educação',
    subtitle: 'Disrupções Epistemológicas e Práticas Transformadoras',
    area: 'Educação',
    publisher: 'Nexus Científico Editora',
    year: 2025,
    doi: 'https://doi.org/10.5281/zenodo.20932060',
    doiShort: '10.5281/zenodo.20932060',
    description:
      'Uma obra coletiva que reúne pesquisadores e educadores para discutir as transformações epistemológicas contemporâneas, propondo práticas pedagógicas inovadoras que desafiam paradigmas tradicionais e abrem novos horizontes para a educação brasileira.',
    tags: ['Epistemologia', 'Pedagogia', 'Inovação Educacional', 'Pesquisa em Educação'],
    coverAccent: '#B8860B',
  },
]

/* ── ÍCONES ─────────────────────────────────────────────────────── */
function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function DoiIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

/* ── CAPA SVG ───────────────────────────────────────────────────── */
function BookCover({ title, subtitle, accent }) {
  return (
    <svg
      viewBox="0 0 160 220"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.coverSvg}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`grad-${title}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#1A2F6E" />
        </linearGradient>
        <linearGradient id={`shimmer-${title}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.01" />
        </linearGradient>
      </defs>

      {/* Fundo */}
      <rect width="160" height="220" fill={`url(#grad-${title})`} rx="3" />

      {/* Textura diagonal sutil */}
      <rect width="160" height="220" fill={`url(#shimmer-${title})`} rx="3" />

      {/* Barra dourada superior */}
      <rect x="0" y="0" width="160" height="5" fill={accent} rx="2" />

      {/* Borda lateral esquerda — detalhe livro */}
      <rect x="0" y="0" width="6" height="220" fill={accent} opacity="0.3" />

      {/* Marca "N" estilizada */}
      <text
        x="14"
        y="46"
        fontFamily="Georgia, serif"
        fontSize="28"
        fontWeight="bold"
        fill={accent}
        opacity="0.9"
      >N</text>

      {/* Linha separadora */}
      <line x1="14" y1="54" x2="146" y2="54" stroke={accent} strokeWidth="1" opacity="0.4" />

      {/* Título principal */}
      <text
        x="14"
        y="78"
        fontFamily="Georgia, serif"
        fontSize="11.5"
        fontWeight="bold"
        fill="#ffffff"
        opacity="0.95"
        style={{ letterSpacing: '0.3px' }}
      >
        {title.split(' ').map((word, i) => (
          <tspan key={i} x="14" dy={i === 0 ? 0 : 14}>{word}</tspan>
        ))}
      </text>

      {/* Linha antes do subtítulo */}
      <line x1="14" y1="148" x2="60" y2="148" stroke={accent} strokeWidth="1.5" opacity="0.6" />

      {/* Subtítulo */}
      <text
        x="14"
        y="164"
        fontFamily="Georgia, serif"
        fontSize="7.5"
        fill="#c8d8ff"
        opacity="0.8"
      >
        {subtitle.split(' ').reduce((lines, word) => {
          const last = lines[lines.length - 1]
          if (last && (last + ' ' + word).length <= 26) {
            lines[lines.length - 1] = last + ' ' + word
          } else {
            lines.push(word)
          }
          return lines
        }, []).map((line, i) => (
          <tspan key={i} x="14" dy={i === 0 ? 0 : 10}>{line}</tspan>
        ))}
      </text>

      {/* Rodapé da capa */}
      <rect x="0" y="200" width="160" height="20" fill={accent} opacity="0.15" />
      <text
        x="14"
        y="214"
        fontFamily="Georgia, serif"
        fontSize="7"
        fill={accent}
        opacity="0.9"
        fontWeight="bold"
        letterSpacing="0.5"
      >
        NEXUS CIENTÍFICO EDITORA
      </text>
    </svg>
  )
}

/* ── CARD DO LIVRO ──────────────────────────────────────────────── */
function BookCard({ book }) {
  return (
    <article className={styles.bookCard}>
      {/* Capa */}
      <div className={styles.coverWrapper}>
        <BookCover
          title={book.title}
          subtitle={book.subtitle}
          accent={book.coverAccent}
        />
        {/* Sombra de livro */}
        <div className={styles.coverShadow} />
      </div>

      {/* Metadados */}
      <div className={styles.bookMeta}>
        {/* Área + Ano */}
        <div className={styles.topRow}>
          <span className={styles.areaBadge}>{book.area}</span>
          <span className={styles.year}>{book.year}</span>
        </div>

        {/* Títulos */}
        <h2 className={styles.bookTitle}>{book.title}</h2>
        <p className={styles.bookSubtitle}>{book.subtitle}</p>

        {/* Editora */}
        <p className={styles.bookPublisher}>{book.publisher}</p>

        {/* Descrição */}
        <p className={styles.bookDescription}>{book.description}</p>

        {/* Tags */}
        <div className={styles.tagList}>
          {book.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        {/* DOI */}
        <a
          href={book.doi}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.doiBadge}
          aria-label={`DOI: ${book.doiShort}`}
        >
          <DoiIcon />
          <span>DOI: {book.doiShort}</span>
        </a>

        {/* Ações */}
        <div className={styles.actions}>
          <a
            href={book.doi}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryAction}
          >
            Acessar no Zenodo
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </article>
  )
}

/* ── PÁGINA PRINCIPAL ───────────────────────────────────────────── */
export default function LivrosPublicados() {
  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <header className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Publicações</span>
          <h1 className={styles.heroTitle}>Catálogo de Livros</h1>
          <p className={styles.heroLead}>
            Obras publicadas pela Nexus Científico Editora — com ISBN, DOI e
            indexação em repositórios acadêmicos internacionais.
          </p>
        </div>
      </header>

      {/* ── CONTADOR ── */}
      <div className={styles.catalogInfo}>
        <div className="container">
          <span className={styles.catalogCount}>
            {BOOKS.length} {BOOKS.length === 1 ? 'publicação' : 'publicações'}
          </span>
        </div>
      </div>

      {/* ── LIVROS ── */}
      <section className={styles.catalog} aria-label="Catálogo de livros">
        <div className="container">
          <div className={styles.bookList}>
            {BOOKS.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Publique com a Nexus Científico</h2>
              <p className={styles.ctaLead}>
                Sua pesquisa merece visibilidade acadêmica. Publicamos livros e
                e-books com ISBN, DOI, ficha catalográfica e distribuição em
                plataformas científicas.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Button href="/publicar" variant="primary">
                Como Publicar
              </Button>
              <a href="mailto:nexus.editora.cientifica@gmail.com" className={styles.ctaLink}>
                Falar com a equipe
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
