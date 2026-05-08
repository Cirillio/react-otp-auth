import { useCallback, useEffect, useState } from 'react'

export const useOtpTimer = (initialSeconds = 60) => {
  const [secondsLeft, setSecondsLeft] = useState(0)

  useEffect(() => {
    if (secondsLeft <= 0) return

    const id = setInterval(() => {
      setSecondsLeft((s) => s - 1)
    }, 1000)

    return () => clearInterval(id)
  }, [secondsLeft])

  const startTimer = useCallback(
    (seconds = initialSeconds) => setSecondsLeft(seconds),
    [initialSeconds],
  )

  const resetTimer = useCallback(() => setSecondsLeft(0), [])

  return {
    secondsLeft,
    canResend: secondsLeft === 0,
    startTimer,
    resetTimer,
  }
}
