/**
 * Equipe — grid da equipe editorial
 * Dados importados de src/data/team.js
 */

import SectionTitle from '@/components/ui/SectionTitle'
import { team } from '@/data/team'
import styles from './Equipe.module.css'

export default function Equipe() {
  return (
    <section id="equipe" className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow="Quem Somos"
          title="Nossa Equipe Editorial"
          subtitle="Profissionais dedicados a conectar autores e pesquisadores à comunidade científica brasileira."
        />
        <div className={styles.grid}>
          {team.map(member => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MemberCard({ name, role, bio, photo, isDirector, specialties, photoRotate }) {
  return (
    <article className={[styles.card, isDirector ? styles.director : ''].join(' ')}>
      <div className={styles.photoWrapper}>
        {photo
          ? (
            <img
              src={photo}
              alt={`Foto de ${name}`}
              className={styles.photo}
              style={photoRotate ? { transform: `rotate(${photoRotate}deg) scale(1.15)` } : undefined}
            />
          )
          : <AvatarPlaceholder name={name} />
        }
        {isDirector && <span className={styles.badge}>Diretora Editorial</span>}
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.role}>{role}</span>
        {bio && <p className={styles.bio}>{bio}</p>}
        {specialties && specialties.length > 0 && (
          <ul className={styles.specialties} aria-label="Especialidades">
            {specialties.map(s => (
              <li key={s} className={styles.specialty}>{s}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

function AvatarPlaceholder({ name }) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('')
  return (
    <div className={styles.avatarPlaceholder} aria-hidden="true">
      <span>{initials}</span>
    </div>
  )
}
