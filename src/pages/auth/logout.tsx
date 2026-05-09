import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { useSession } from '../../hooks/useSession'

const LogoutPage = () => {
  const { logout } = useSession()
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid gap-2 text-center">
        <h1 className="text-2xl font-bold">Выход</h1>
        <p>Вы уверены, что хотите выйти из аккаунта?</p>
      </div>
      <div className="flex gap-6">
        <Button variant="outline" color="secondary" onClick={logout}>
          Да
        </Button>
        <Button onClick={() => navigate(-1)}>Нет</Button>
      </div>
    </div>
  )
}

export default LogoutPage
