import { useState } from 'react'
import { Button } from '../ui/Button'

interface ErrorWidgetProps {
  onRetry: () => void
  error: Error
}

export default function ErrorWidget({ onRetry, error }: ErrorWidgetProps) {
  const [isShowStack, setIsShowStack] = useState<boolean>(false)

  return (
    <div className="text-ink-primary flex h-screen flex-col items-center justify-center gap-8">
      <span className="text-ink-error ring-ink-error bg-ink-error/5 animate-pulse rounded-lg px-3 py-2 text-lg font-semibold ring-2">
        {error.name}
      </span>

      <p className="text-3xl font-semibold">Что-то пошло не так</p>

      <Button variant={'contained'} color="primary" onClick={onRetry}>
        Попробовать снова
      </Button>

      <Button
        variant="text"
        color="secondary"
        onClick={() => setIsShowStack(!isShowStack)}
      >
        {isShowStack ? 'Скрыть' : 'Подробнее'}
      </Button>

      {isShowStack && (
        <span className="text-ink-error/75 bg-ink-error/5 ring-ink-error max-w-xl rounded-lg p-4 text-center text-sm font-light ring">
          {error.stack}
        </span>
      )}
    </div>
  )
}
