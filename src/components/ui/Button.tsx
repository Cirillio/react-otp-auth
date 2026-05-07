import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'contained' | 'text' | 'link' | 'outline'
  color: 'primary' | 'secondary'
  loading?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-2xl py-4 px-8 text-base leading-6 font-semibold transition duration-150 ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-light disabled:cursor-not-allowed cursor-pointer'

const variants: Record<
  ButtonProps['variant'],
  Partial<Record<ButtonProps['color'], string>>
> = {
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

export const Button = ({
  variant,
  color,
  loading = false,
  disabled,
  className,
  children,
  ...attrs
}: ButtonProps) => {
  const buttonStyles = cn(base, variants[variant][color], className)

  return (
    <button
      {...attrs}
      disabled={disabled || loading}
      aria-busy={loading}
      className={buttonStyles}
    >
      {loading ? <span className="animate-spin">⟳</span> : null}
      {children}
    </button>
  )
}
