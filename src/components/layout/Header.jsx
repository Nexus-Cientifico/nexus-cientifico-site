/**
 * Header — navbar principal com logo e navegação
 * Comportamento: fixo no topo, fundo sólido após scroll
 */

import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'Início',         to: '/' },
  { label: 'Livros',         to: '/livros' },
  { label: 'Revista',        to: '/revista' },
  { label: 'Sobre Nós',      to: '/sobre' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fechar menu ao navegar
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')}>
      <div className={`container ${styles.inner}`}>

        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={handleNavClick}>
          <LogoMark />
          <span className={styles.logoText}>
            <span className={styles.logoNexus}>Nexus</span>
            <span className={styles.logoCientifico}>Científico</span>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className={styles.nav} aria-label="Navegação principal">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [styles.navLink, isActive ? styles.active : ''].join(' ')
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA desktop */}
        <Button href="/publicar" variant="primary" size="sm">
          Publicar Artigo
        </Button>

        {/* Hamburger mobile */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={[styles.bar, menuOpen ? styles.bar1Open : ''].join(' ')} />
          <span className={[styles.bar, menuOpen ? styles.bar2Open : ''].join(' ')} />
          <span className={[styles.bar, menuOpen ? styles.bar3Open : ''].join(' ')} />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={[styles.mobileMenu, menuOpen ? styles.mobileMenuOpen : ''].join(' ')}
        aria-hidden={!menuOpen}
      >
        <nav>
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [styles.mobileNavLink, isActive ? styles.active : ''].join(' ')
              }
              onClick={handleNavClick}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <Button href="/publicar" variant="primary" className={styles.mobileCTA}>
            Publicar Artigo
          </Button>
        </nav>
      </div>
    </header>
  )
}

function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="8" fill="var(--color-primary)" />
      <path
        d="M9 27V9l7 11 7-11v18"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="27" cy="18" r="3.5" fill="var(--color-tertiary)" />
    </svg>
  )
}
