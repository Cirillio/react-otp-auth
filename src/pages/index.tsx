import { Button } from '../components/ui/Button'

function MainPage() {
  return (
    <div className="grid">
      С возвращением, Человек!
      <Button to="/auth/login">Войти</Button>
    </div>
  )
}

export default MainPage
