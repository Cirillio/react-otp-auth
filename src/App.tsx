import { Button } from './components/ui/Button'
import { Input } from './components/ui/Input'

function App() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center">
      <form
        action=""
        className="ring-line-light flex w-full max-w-sm flex-col items-start gap-6 rounded-lg px-10 py-8 ring"
      >
        <h2>Вход</h2>
        <p className="text-base leading-6">
          Введите проверочный код для входа в личный кабинет
        </p>
        <Input placeholder="Телефон" name="phone-number" />
        <Input placeholder="Проверочный код" name="otp-code" />
        <div className="grid w-full gap-6 py-4">
          <Button type="button" variant="contained" color="primary" className="w-full">
            Продолжить
          </Button>
          <Button type="button" variant="text" color="secondary" className="w-full">
            Запросить код ещё раз
          </Button>
        </div>
      </form>
    </div>
  )
}

export default App
