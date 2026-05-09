import { Navigate } from 'react-router-dom'
import LoginForm from '../../components/auth/login-form'
import { Button } from '../../components/ui/Button'
import { useSession } from '../../hooks/useSession'

function LoginPage() {
  const { data, isPending } = useSession()
  if (isPending) {
    return <span>Загрузка...</span>
  }

  if (data?.user) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <LoginForm />
      <Button variant="link" to="/">
        На главную
      </Button>
    </div>
  )
}

export default LoginPage
