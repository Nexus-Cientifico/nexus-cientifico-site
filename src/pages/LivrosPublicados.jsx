/**
 * LivrosPublicados — catálogo de livros e e-books publicados pela Nexus Científico.
 * TODO: substituir placeholder pelo catálogo real com capa, título, autor, ISBN, DOI.
 */

import styles from './Page.module.css'
import Button from '@/components/ui/Button'

export default function LivrosPublicados() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.content}`}>
        <span className={styles.eyebrow}>Publicações</span>
        <h1 className={styles.title}>Livros Publicados</h1>
        <p className={styles.lead}>
          Conheça as obras publicadas pela Nexus Científico — livros e e-books
          com ISBN, DOI e indexação em plataformas acadêmicas.
        </p>
        <div className={styles.comingSoon}>
          <p>Catálogo em construção. Em breve aqui você encontrará todas as nossas publicações.</p>
          <Button href="/" variant="primary">Voltar ao Início</Button>
        </div>
      </div>
    </div>
  )
}
