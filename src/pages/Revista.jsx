/**
 * Revista — página da Revista Científica Nexus.
 * TODO: substituir placeholder com edições, chamadas abertas, ISSN, DOI.
 */

import styles from './Page.module.css'
import Button from '@/components/ui/Button'

export default function Revista() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.content}`}>
        <span className={styles.eyebrow}>Periódico Científico</span>
        <h1 className={styles.title}>Revista Científica Nexus</h1>
        <p className={styles.lead}>
          Publicação periódica com revisão por pares duplo-cega, ISSN, DOI e acesso
          aberto. Submissões abertas para pesquisadores de todas as áreas do conhecimento.
        </p>
        <div className={styles.comingSoon}>
          <p>Edições e chamadas abertas em breve. Envie seu artigo agora pelo formulário de submissão.</p>
          <Button href="/publicar" variant="primary">Submeter Artigo</Button>
        </div>
      </div>
    </div>
  )
}
