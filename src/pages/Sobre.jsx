/**
 * Sobre — missão, valores e história da Nexus Científico.
 * TODO: expandir com conteúdo editorial completo, fotos da equipe, linha do tempo.
 */

import styles from './Page.module.css'
import Button from '@/components/ui/Button'

export default function Sobre() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.content}`}>
        <span className={styles.eyebrow}>Quem somos</span>
        <h1 className={styles.title}>Sobre a Nexus Científico</h1>
        <p className={styles.lead}>
          A Nexus Científico é uma editora acadêmica dedicada a conectar pesquisa
          e conhecimento. Publicamos livros científicos e uma revista com revisão
          por pares, oferecendo a pesquisadores e professores um canal de publicação
          ágil, rigoroso e acessível.
        </p>
        <div className={styles.comingSoon}>
          <p>Página institucional completa em breve. Conheça nossos serviços e comece a publicar.</p>
          <Button href="/publicar" variant="primary">Publicar com a Nexus</Button>
        </div>
      </div>
    </div>
  )
}
