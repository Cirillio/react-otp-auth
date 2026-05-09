import * as z from 'zod'

const phoneField = z
  .string()
  .nonempty('Телефон обязателен')
  .regex(/^\d+$/, 'Только цифры')
  .length(11, 'Неверно указан номер')

const otpCodeField = z.string().nonempty('Код обязателен').length(6, 'Неверно указан код')

export const otpPhoneSchema = z.object({
  phone: phoneField,
})

export const otpCodeSchema = z.object({
  otpCode: otpCodeField,
})

export type OtpPhoneType = z.infer<typeof otpPhoneSchema>
export type OtpCodeType = z.infer<typeof otpCodeSchema>
