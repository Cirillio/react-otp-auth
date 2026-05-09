import { isRouteErrorResponse, Link, Navigate, useRouteError } from 'react-router-dom'
import { UnauthorizedError } from '../../lib/http'

export const RouterErrorPage = () => {
  const error = useRouteError()

  if (error instanceof UnauthorizedError) {
    return <Navigate to="/auth/login" replace />
  }

  const is404 = isRouteErrorResponse(error) && error.status === 404

  return (
    <div className="text-ink-primary flex h-screen flex-col items-center justify-center gap-6">
      <p className="text-center text-base font-semibold">
        {is404 ? (
          <>
            <span className="text-ink-error text-lg font-semibold">404</span>
            <br /> страница не найдена
          </>
        ) : (
          'Что-то пошло не так'
        )}
      </p>
      <Link to="/auth/login" className="text-brand text-sm underline">
        На главную
      </Link>
    </div>
  )
}
