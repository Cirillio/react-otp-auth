import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { auth } from '../api/auth'

export const useSession = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const query = useQuery({
    queryKey: ['session'],
    queryFn: () => auth.getSession(),
    retry: false,
  })

  const logout = () => {
    // Логаут простой, т.к. бэк не предоставляет апи для выхода.
    auth.logout()
    // убираю сессию из кеша без рефетча
    queryClient.removeQueries({ queryKey: ['session'] })
    navigate('/')
  }

  return { ...query, logout }
}
