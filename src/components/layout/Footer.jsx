/**
 * Footer — rodapé completo com logo, navegação, contato e redes sociais
 */

import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const NAV_LINKS = [
  { label: 'Início',         to: '/' },
  { label: 'Livros',         to: '/livros' },
  { label: 'Revista',        to: '/revista' },
  { label: 'Sobre Nós',      to: '/sobre' },
  { label: 'Como Publicar',  to: '/publicar' },
]

const CONTACT = {
  email: 'nexus.editora.cientifica@gmail.com',
  instagram: 'https://www.instagram.com/nexus.cientifico.editora',
  instagramHandle: '@nexus.cientifico.editora',
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        {/* Coluna 1 — Marca */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logoLink}>
            <img
              src="/images/logo.png"
              alt="Editora Nexus Científico"
              className={styles.logoImg}
            />
          </Link>
          <p className={styles.tagline}>
            Conectamos pesquisa e conhecimento à comunidade científica brasileira.
          </p>
          {/* Instagram */}
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram da Editora Nexus Científico"
          >
            <InstagramIcon />
            <span>{CONTACT.instagramHandle}</span>
          </a>
        </div>

        {/* Coluna 2 — Navegação */}
        <nav className={styles.navColumn} aria-label="Links do rodapé">
          <h3 className={styles.columnTitle}>Navegação</h3>
          <ul className={styles.navList}>
            {NAV_LINKS.map(link => (
              <li key={link.to}>
                <Link to={link.to} className={styles.navLink}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Coluna 3 — Publicar */}
        <div className={styles.navColumn}>
          <h3 className={styles.columnTitle}>Publicar</h3>
          <ul className={styles.navList}>
            <li><Link to="/publicar" className={styles.navLink}>Como Publicar</Link></li>
            <li><Link to="/livros" className={styles.navLink}>Livros Científicos</Link></li>
            <li><Link to="/revista" className={styles.navLink}>Revista Nexus</Link></li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className={styles.navLink}
              >
                Enviar Artigo
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4 — Contato */}
        <div className={styles.navColumn}>
          <h3 className={styles.columnTitle}>Contato</h3>
          <ul className={styles.navList}>
            <li>
              <a href={`mailto:${CONTACT.email}`} className={styles.navLink}>
                <EnvelopeIcon />
                {CONTACT.email}
              </a>
            </li>
          </ul>
          <p className={styles.hoursNote}>
            Respondemos em até 48 horas úteis.
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p className={styles.copyright}>
            © {year} Editora Nexus Científico. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}


function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  )
}

function EnvelopeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
