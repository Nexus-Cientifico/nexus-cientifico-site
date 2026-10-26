/**
 * CTAFinal — seção de call-to-action final com fundo navy
 */

import Button from '@/components/ui/Button'
import styles from './CTAFinal.module.css'

export default function CTAFinal() {
  return (
    <section className={styles.section} aria-label="Chamada para publicação">
      <div className={styles.background} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>

      <div className={`container ${styles.content}`}>
        <span className={styles.eyebrow}>Impulsione sua carreira acadêmica</span>
        <h2 className={styles.headline}>
          Sua pesquisa merece<br />ser publicada.
        </h2>
        <p className={styles.body}>
          Estamos com chamada aberta para submissão de artigos para a Revista Nexus Científico.
        </p>
        <div className={styles.ctas}>
          <Button href="/publicar" variant="accent" size="lg">
            Submeter Trabalho
          </Button>
          <Button href="mailto:nexus.editora.cientifica@gmail.com" variant="outlinedLight" size="lg">
            Falar com a Equipe
          </Button>
        </div>
        <p className={styles.note}>
          Respondemos em até 48 horas úteis · Sem taxa de submissão
        </p>
      </div>
    </section>
  )
}
