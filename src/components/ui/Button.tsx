import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type Variant = 'contained' | 'text' | 'link' | 'outline'
type Color = 'primary' | 'secondary'

interface CommonProps {
  variant?: Variant
  color?: Color
  className?: string
  children?: ReactNode
}

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    to?: never
    loading?: boolean
  }

type AsLink = CommonProps & {
  to: string
  loading?: never
  disabled?: never
}

type ButtonProps = AsButton | AsLink

const base =
  'inline-flex items-center justify-center gap-2 rounded-2xl py-4 px-8 text-base leading-6 font-semibold transition duration-150 ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-light disabled:cursor-not-allowed cursor-pointer'

const variants: Record<Variant, Partial<Record<Color, string>>> = {
  contained: {
    primary:
      'bg-brand text-surface hover:bg-brand-hover disabled:bg-brand-light disabled:text-surface',
  },
  text: {
    primary:
      'bg-transparent text-brand hover:bg-surface-primary disabled:ring-2 disabled:ring-brand-light disabled:text-brand-light',
    secondary:
      'bg-transparent text-ink-primary hover:bg-surface-subtle disabled:text-ink-tertiary',
  },
  link: {
    primary:
      'rounded-none py-0 px-0 font-medium underline text-brand hover:text-brand-hover disabled:text-brand-light focus-visible:ring-0',
  },
  outline: {
    secondary:
      'bg-transparent ring-1 ring-line-light hover:bg-surface-subtle disabled:ring-line-subtle disabled:text-line-subtle',
  },
}

// ! НАПИСАЛ НЕ ВСЕ СОЧЕТАНИЯ variant+color т.к. в UI-Ките их не было. Фантазировать и тратить время не стал.

export const Button = (props: ButtonProps) => {
  const { variant = 'contained', color = 'primary', className, children } = props
  const buttonStyles = cn(base, variants[variant][color], className)

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={buttonStyles}>
        {children}
      </Link>
    )
  }

  const { loading = false, disabled, ...attrs } = props as AsButton

  return (
    <button
      {...attrs}
      disabled={disabled || loading}
      aria-busy={loading}
      className={buttonStyles}
      title={loading ? 'Загрузка...' : undefined}
    >
      {children}
    </button>
  )
}
