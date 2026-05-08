import LoginForm from '../../components/auth/login-form'
import { Button } from '../../components/ui/Button'

function LoginPage() {
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
