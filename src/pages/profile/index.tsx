import { Button } from '../../components/ui/Button'
import { useSession } from '../../hooks/useSession'

export const ProfilePage = () => {
  const { data } = useSession()

  const user = data?.user

  if (!user) return null

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-2xl font-bold">Профиль пользователя</h1>
      <div className="flex flex-col gap-2">
        <p>
          <span className="font-semibold">ID:</span> {user?._id}
        </p>
        <p>
          <span className="font-semibold">Имя:</span> {user?.firstname || 'Не указано'}
        </p>
        <p>
          <span className="font-semibold">Фамилия:</span> {user?.lastname || 'Не указано'}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user?.email || 'Не указано'}
        </p>
        <p>
          <span className="font-semibold">Телефон:</span> {user?.phone}
        </p>
      </div>
      <div className="flex gap-4">
        <Button to="/">На главную</Button>
        <Button variant="outline" color="secondary" to="/auth/logout">
          Выход
        </Button>
      </div>
    </div>
  )
}
