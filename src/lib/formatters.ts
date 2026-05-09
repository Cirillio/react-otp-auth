// Форматирование кода. Например для формы на шаге 2.
// 79131234567 → +7 913 123 45 67
export const formatPhone = (phone: string): string => {
  const d = phone.replace(/\D/g, '')
  return (
    '+' +
    d[0] +
    ' ' +
    d.slice(1, 4) +
    ' ' +
    d.slice(4, 7) +
    ' ' +
    d.slice(7, 9) +
    ' ' +
    d.slice(9, 11)
  )
}

export const onOnlyDigitsInput = (event) => {
  event.target.value = event.target.value.replace(/\D/g, '')
}
