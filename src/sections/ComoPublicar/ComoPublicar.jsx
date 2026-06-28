/**
 * ComoPublicar — processo de publicação em 4 etapas
 */

import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'
import styles from './ComoPublicar.module.css'

const STEPS = [
  {
    number: '01',
    title: 'Submissão',
    description: 'Envie seu artigo ou capítulo por e-mail ou pelo formulário de submissão. Nossa equipe acusará o recebimento em até 48 horas.',
    icon: <SubmitIcon />,
  },
  {
    number: '02',
    title: 'Avaliação',
    description: 'Seu trabalho passa por avaliação editorial. Para a Revista, aplicamos revisão por pares duplo-cega com especialistas da área.',
    icon: <ReviewIcon />,
  },
  {
    number: '03',
    title: 'Edição',
    description: 'Após aprovado, nossa equipe realiza a edição, diagramação e normalização conforme padrões ABNT e normas internacionais.',
    icon: <EditIcon />,
  },
  {
    number: '04',
    title: 'Publicação',
    description: 'Sua obra é publicada com ISBN/ISSN, DOI e disponibilizada em plataformas acadêmicas. Atualiza automaticamente o Currículo Lattes.',
    icon: <PublishIcon />,
  },
]

export default function ComoPublicar() {
  return (
    <section id="como-publicar" className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow="Processo Editorial"
          title="Do envio à publicação em 4 etapas"
          subtitle="Um processo claro, transparente e ágil. Nossa equipe te acompanha em cada etapa."
        />

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <Step key={step.number} {...step} isLast={i === STEPS.length - 1} />
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>Pronto para publicar sua pesquisa?</p>
          <Button href="/publicar" variant="primary" size="lg">
            Iniciar Submissão
          </Button>
        </div>
      </div>
    </section>
  )
}

function Step({ number, title, description, icon, isLast }) {
  return (
    <div className={styles.step}>
      <div className={styles.stepLeft}>
        <div className={styles.iconWrapper}>{icon}</div>
        {!isLast && <div className={styles.connector} aria-hidden="true" />}
      </div>
      <div className={styles.stepContent}>
        <span className={styles.stepNumber}>{number}</span>
        <h3 className={styles.stepTitle}>{title}</h3>
        <p className={styles.stepDesc}>{description}</p>
      </div>
    </div>
  )
}

function SubmitIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function ReviewIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="9,15 11,17 15,13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function EditIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function PublishIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
}
