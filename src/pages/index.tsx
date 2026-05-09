import { Button } from '../components/ui/Button'
import { useSession } from '../hooks/useSession'

function MainPage() {
  const { data, isPending } = useSession()

  const isAuthed = !!data?.user

  return (
    <div className="grid">
      OTP Авторизация по телефону на React + TanStack Query
      {isPending ? (
        <div className="flex animate-pulse flex-col items-start gap-4">
          <div className="flex gap-1">
            <div className="bg-brand-light h-8 w-52 rounded" />
            <div className="bg-brand-light h-8 w-84 rounded" />
          </div>
          <div className="bg-brand-light h-14 w-28 rounded" />
        </div>
      ) : isAuthed ? (
        <div className="flex flex-col items-start gap-4">
          <h2>
            С возвращением,{' '}
            <span className="text-brand">
              {data.user.firstname ? data.user.firstname : 'Безымянный'}
            </span>
            !
          </h2>
          <Button to="/profile">В профиль</Button>
        </div>
      ) : (
        <div className="flex flex-col items-start gap-4">
          <h2>Вы не авторизованы.</h2>
          <Button to="/auth/login">Войти</Button>
        </div>
      )}
    </div>
  )
}

export default MainPage
