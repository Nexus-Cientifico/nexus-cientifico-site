/**
 * Servicos — dois cards de serviço: Livros e Revista
 */

import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'
import styles from './Servicos.module.css'

const SERVICES = [
  {
    id: 'livros',
    icon: <BookIcon />,
    eyebrow: 'Coletâneas Científicas',
    title: 'Livros Publicados',
    description:
      'Publique capítulos em coletâneas de artigos científicos e anais de eventos. Obra coletiva com ISBN, revisão editorial e disponibilização em plataformas acadêmicas.',
    features: ['ISBN garantido', 'Revisão editorial', 'DOI por capítulo', 'Currículo Lattes'],
    cta: { label: 'Submeter Capítulo', href: '/livros' },
    accent: 'primary',
  },
  {
    id: 'revista',
    icon: <JournalIcon />,
    eyebrow: 'Periódico Científico',
    title: 'Revista Nexus Científico',
    description:
      'Revista científica com revisão por pares, publicação contínua e indexação em bases acadêmicas. Aberta a pesquisadores de todas as áreas do conhecimento.',
    features: ['Revisão por pares', 'Publicação contínua', 'Indexação acadêmica', 'Acesso aberto'],
    cta: { label: 'Submeter Artigo', href: '/revista' },
    accent: 'secondary',
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow="O Que Publicamos"
          title="Duas formas de ampliar sua visibilidade científica"
          subtitle="Escolha o formato que melhor se encaixa na sua produção acadêmica e submeta seu trabalho."
        />

        <div className={styles.grid}>
          {SERVICES.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, eyebrow, title, description, features, cta, accent }) {
  return (
    <article className={[styles.card, styles[accent]].join(' ')}>
      <div className={styles.cardIcon}>{icon}</div>
      <span className={styles.cardEyebrow}>{eyebrow}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
      <ul className={styles.features}>
        {features.map(f => (
          <li key={f} className={styles.featureItem}>
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>
      <Button href={cta.href} variant={accent === 'primary' ? 'primary' : 'secondary'} size="md">
        {cta.label}
      </Button>
    </article>
  )
}

function BookIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2"/>
      <line x1="9" y1="7" x2="15" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="9" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function JournalIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="8" y1="17" x2="12" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="19" cy="5" r="3" fill="var(--color-tertiary)" stroke="var(--color-background)" strokeWidth="1.5"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.12"/>
      <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
