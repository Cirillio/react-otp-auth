import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useSession } from '../../hooks/useSession'

const ProtectedRoute = ({
  children,
  fallback,
}: {
  children: ReactNode
  fallback: ReactNode
}) => {
  const { isPending, isError } = useSession()

  //   Подразумевается передача какого-нибудь Скелетона чтоб он показывался пока идет загрузка
  if (isPending) return fallback

  if (isError) return <Navigate to="/auth/unauthorized" replace />

  return children
}

export default ProtectedRoute
