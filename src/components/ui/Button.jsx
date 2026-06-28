/**
 * Button — componente UI reutilizável
 *
 * Variantes:
 *   primary   → fundo azul naval (ação principal)
 *   secondary → fundo verde-azulado
 *   outlined  → borda azul, fundo transparente
 *   ghost     → sem borda, texto apenas
 *   accent    → fundo âmbar dourado (CTA de destaque)
 *
 * Tamanhos: sm | md (padrão) | lg
 */

import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  className = '',
  ...props
}) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
