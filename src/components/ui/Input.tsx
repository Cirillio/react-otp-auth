import type { InputHTMLAttributes } from 'react'
import { forwardRef, useId } from 'react'
import { cn } from '../../lib/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, id: idProp, className, ...attrs }, ref) => {
    const genId = useId()
    const id = idProp ?? genId
    const errorId = `${id}-error`
    const hintId = `${id}-hint`

    const inputStyles = cn(
      'w-full bg-surface ring-line-light focus:ring-brand-focus text-ink-primary placeholder:text-ink-tertiary hover:ring-line-medium disabled:ring-line-light disabled:text-ink-tertiary disabled:bg-surface-disabled mt-1.5 mb-1 gap-2 rounded-lg py-3 pr-2 pl-3 text-base leading-6 font-normal ring transition duration-150 focus-within:outline-0 focus:ring-2',
      error && 'ring-ink-error ring-2',
      className,
    )

    return (
      <div className="flex w-full flex-col items-start">
        {label && (
          <label className="text-ink-primary text-sm leading-5 font-normal" htmlFor={id}>
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          {...attrs}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className={inputStyles}
        />
        {error ? (
          <span className="text-ink-error text-sm leading-5 font-normal" id={errorId}>
            {error}
          </span>
        ) : (
          hint && (
            <span className="text-ink-tertiary text-sm leading-5 font-normal" id={hintId}>
              {hint}
            </span>
          )
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
