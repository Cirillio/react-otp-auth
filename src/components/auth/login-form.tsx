import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { useOtpTimer } from '../../hooks/useOtpTimer'

function LoginForm() {
  const { secondsLeft, startTimer } = useOtpTimer(120)

  return (
    <form className="ring-line-light bg-surface flex w-full max-w-md flex-col items-start gap-6 rounded-lg px-12 py-9 ring">
      <h2>Вход</h2>
      <p className="text-base leading-6">
        Введите проверочный код для входа в личный кабинет
      </p>
      <Input placeholder="Телефон" name="phone-number" />
      <Input placeholder="Проверочный код" name="otp-code" />
      <div className="grid w-full gap-6 py-4">
        <Button onClick={() => startTimer()} type="button" className="w-full">
          Продолжить
        </Button>
        <Button type="button" variant="text" color="secondary" className="w-full">
          Запросить код ещё раз
        </Button>
        <span className="text-ink-muted">
          Запросить код повторно можно через {secondsLeft} секунд
        </span>
      </div>
    </form>
  )
}

export default LoginForm
