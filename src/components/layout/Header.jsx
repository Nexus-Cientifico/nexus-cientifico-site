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
          <img
            src="/images/logo.png"
            alt="Editora Nexus Científico"
            className={styles.logoImg}
          />
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

