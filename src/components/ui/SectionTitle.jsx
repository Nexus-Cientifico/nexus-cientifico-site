/**
 * SectionTitle — cabeçalho padronizado de seção
 *
 * Props:
 *   eyebrow  → texto pequeno acima do título (opcional)
 *   title    → título principal (h2)
 *   subtitle → texto de apoio abaixo (opcional)
 *   align    → 'left' | 'center' (padrão: 'center')
 *   light    → true para texto claro (em fundos escuros)
 */

import styles from './SectionTitle.module.css'

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  return (
    <header className={[
      styles.root,
      styles[align],
      light ? styles.light : '',
    ].filter(Boolean).join(' ')}>
      {eyebrow && (
        <span className={styles.eyebrow}>{eyebrow}</span>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && (
        <p className={styles.subtitle}>{subtitle}</p>
      )}
    </header>
  )
}
