/**
 * Hero — seção principal acima da dobra
 * Visual: gradiente navy profundo + headline forte + 2 CTAs
 */

import Button from '@/components/ui/Button'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Apresentação da Editora Nexus Científico">
      <div className={styles.background} aria-hidden="true">
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <GridPattern />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Publicações Científicas Abertas
        </div>

        <h1 className={styles.headline}>
          Conectamos Pessoas,{' '}
          <span className={styles.highlight}>Pesquisas</span>
          {' '}e Conhecimentos
        </h1>

        <p className={styles.subheadline}>
          A Editora Nexus Científico publica artigos, capítulos de livros e
          revistas científicas com rigor editorial e alcance acadêmico.
          Fortaleça seu currículo Lattes e amplie sua visibilidade científica.
        </p>

        <div className={styles.ctas}>
          <Button href="/publicar" variant="accent" size="lg">
            Publicar Artigo
          </Button>
          <Button href="/livros" variant="outlinedLight" size="lg">
            Ver Publicações
          </Button>
        </div>

      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

function GridPattern() {
  return (
    <svg
      className={styles.gridPattern}
      aria-hidden="true"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
}
