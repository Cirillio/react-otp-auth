import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  otpCodeSchema,
  otpPhoneSchema,
  type OtpCodeType,
  type OtpPhoneType,
} from '../types/auth.schemas'
import { useOtpTimer } from './useOtpTimer'
import { useState } from 'react'

type OtpAuthStep = 'phone' | 'code'

export const useOtpAuth = () => {
  const [step, setStep] = useState<OtpAuthStep>('phone')

  const phoneForm = useForm<OtpPhoneType>({
    resolver: zodResolver(otpPhoneSchema),
  })

  const codeForm = useForm<OtpCodeType>({
    resolver: zodResolver(otpCodeSchema),
  })

  const onPhoneSubmit = (data: OtpPhoneType) => {
    console.log(data)
  }

  const onCodeSubmit = (data: OtpCodeType) => {
    console.log(data)
  }

  const { secondsLeft, startTimer } = useOtpTimer(120)

  return {
    step,
    phoneForm,
    codeForm,
    onCodeSubmit,
    onPhoneSubmit,
    secondsLeft,
    startTimer,
  }
}
