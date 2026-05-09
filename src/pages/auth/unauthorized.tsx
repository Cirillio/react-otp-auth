import { Button } from '../../components/ui/Button'

export const UnauthorizedPage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Доступ запрещен</h1>
      <p>У вас нет прав для просмотра этой страницы.</p>
      <div className="flex gap-4">
        <Button variant="outline" color="secondary" to="/">
          На главную
        </Button>
        <Button to="/auth/login">Войти</Button>
      </div>
    </div>
  )
}
