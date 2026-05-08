import { isRouteErrorResponse, useRouteError, Link } from 'react-router-dom'

export const RouterErrorPage = () => {
  const error = useRouteError()

  const is404 = isRouteErrorResponse(error) && error.status === 404

  return (
    <div className="text-ink-primary flex h-screen flex-col items-center justify-center gap-2">
      <p className="text-base font-semibold">
        {is404 ? '404 — страница не найдена' : 'Что-то пошло не так'}
      </p>
      <Link to="/auth/login" className="text-brand text-sm underline">
        На главную
      </Link>
    </div>
  )
}
