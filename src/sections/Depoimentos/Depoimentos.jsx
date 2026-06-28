/**
 * Depoimentos — prova social com citações de autores publicados
 */

import SectionTitle from '@/components/ui/SectionTitle'
import { testimonials } from '@/data/testimonials'
import styles from './Depoimentos.module.css'

export default function Depoimentos() {
  return (
    <section id="depoimentos" className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow="Depoimentos"
          title="O que dizem nossos autores"
          subtitle="Pesquisadores e professores que publicaram com a Nexus Científico."
        />
        <div className={styles.grid}>
          {testimonials.map(t => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, author, role, photo }) {
  return (
    <blockquote className={styles.card}>
      <QuoteIcon />
      <p className={styles.quote}>{quote}</p>
      <footer className={styles.author}>
        {photo
          ? <img src={photo} alt={`Foto de ${author}`} className={styles.photo} />
          : <AvatarInitials name={author} />
        }
        <div>
          <cite className={styles.authorName}>{author}</cite>
          <span className={styles.authorRole}>{role}</span>
        </div>
      </footer>
    </blockquote>
  )
}

function AvatarInitials({ name }) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('')
  return (
    <div className={styles.avatarInitials}>
      <span>{initials}</span>
    </div>
  )
}

function QuoteIcon() {
  return (
    <svg className={styles.quoteIcon} width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <path d="M0 24V14.4C0 10.88 0.96 7.84 2.88 5.28C4.8 2.72 7.68 0.96 11.52 0L13.44 3.36C10.72 4.16 8.64 5.6 7.2 7.68C5.76 9.76 5.12 12 5.28 14.4H10.56V24H0ZM18.56 24V14.4C18.56 10.88 19.52 7.84 21.44 5.28C23.36 2.72 26.24 0.96 30.08 0L32 3.36C29.28 4.16 27.2 5.6 25.76 7.68C24.32 9.76 23.68 12 23.84 14.4H29.12V24H18.56Z" fill="currentColor"/>
    </svg>
  )
}
