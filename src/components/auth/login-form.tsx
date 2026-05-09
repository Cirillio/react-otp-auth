import { useOtpAuth } from '../../hooks/useOtpAuth'
import { formatPhone, onOnlyDigitsInput } from '../../lib/formatters'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

function LoginForm() {
  const { step, phoneForm, codeForm, onPhoneSubmit, onCodeSubmit, secondsLeft } =
    useOtpAuth()

  return (
    <div className="ring-line-light bg-surface flex w-full max-w-md flex-col items-start gap-6 rounded-lg px-6 py-8 ring">
      <h2>Вход</h2>
      <p className="text-base">Введите проверочный код для входа в личный кабинет</p>

      {/*  Шаг 1: Ввод телефона и запрос кода */}

      {step === 'phone' ? (
        <form
          className="flex w-full flex-col gap-4"
          onSubmit={phoneForm.handleSubmit(onPhoneSubmit)}
        >
          <Input
            {...phoneForm.register('phone', {
              // Может ввести только цифры
              onChange: onOnlyDigitsInput,
            })}
            error={phoneForm.formState.errors.phone?.message}
            placeholder="Телефон"
          />
          <Button type="submit" className="w-full">
            Продолжить
          </Button>
        </form>
      ) : (
        /* Шаг 2: Ввод OTP кода */

        <form
          className="flex w-full flex-col gap-4"
          onSubmit={codeForm.handleSubmit(onCodeSubmit)}
        >
          <Input value={formatPhone(phoneForm.getValues('phone'))} disabled />
          <Input
            {...codeForm.register('otpCode', {
              // Может ввести только цифры
              onChange: onOnlyDigitsInput,
            })}
            error={codeForm.formState.errors.otpCode?.message}
            placeholder="Проверочный код"
          />
          <Button type="submit" className="w-full">
            Войти
          </Button>
          <div className="flex flex-col gap-2">
            {secondsLeft > 0 ? (
              <span className="text-ink-muted text-sm">
                Запросить код повторно можно через {secondsLeft} секунд
              </span>
            ) : (
              <Button
                type="button"
                variant="text"
                color="secondary"
                className="w-full"
                onClick={() => onPhoneSubmit({ phone: phoneForm.getValues('phone') })}
              >
                Запросить код ещё раз
              </Button>
            )}
          </div>
        </form>
      )}
    </div>
  )
}

export default LoginForm
