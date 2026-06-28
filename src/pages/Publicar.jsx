/**
 * Publicar — formulário e instruções de submissão de trabalhos.
 * TODO: integrar com formulário real (Netlify Forms, Formspree, ou API própria).
 */

import styles from './Page.module.css'
import Button from '@/components/ui/Button'

const SUBMISSION_EMAIL = 'nexus.editora.cientifica@gmail.com'

export default function Publicar() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.content}`}>
        <span className={styles.eyebrow}>Submissão Aberta</span>
        <h1 className={styles.title}>Publicar com a Nexus</h1>
        <p className={styles.lead}>
          Envie seu trabalho para avaliação. Aceitamos artigos para a Revista Científica
          e capítulos de livros. O processo é gratuito na submissão e nossa equipe
          responde em até 48 horas úteis.
        </p>

        <div className={styles.infoBox}>
          <h2 className={styles.infoTitle}>Como submeter</h2>
          <ol className={styles.steps}>
            <li>Prepare seu arquivo no formato <strong>Word (.docx)</strong> com normas ABNT.</li>
            <li>Inclua título, resumo (200–300 palavras), palavras-chave e referências.</li>
            <li>
              Envie para{' '}
              <a href={`mailto:${SUBMISSION_EMAIL}`} className={styles.emailLink}>
                {SUBMISSION_EMAIL}
              </a>{' '}
              com assunto: <em>"Submissão — [Título do trabalho]"</em>.
            </li>
            <li>Aguarde a confirmação de recebimento em até 48 horas úteis.</li>
          </ol>
        </div>

        <div className={styles.cta}>
          <Button
            href={`mailto:${SUBMISSION_EMAIL}?subject=Submissão%20—%20[Título do trabalho]`}
            variant="primary"
            size="lg"
          >
            Enviar por E-mail
          </Button>
          <Button href="/" variant="outlined">
            Saber Mais
          </Button>
        </div>
      </div>
    </div>
  )
}
