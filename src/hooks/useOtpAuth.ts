import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { auth } from '../api/auth'
import { authToken } from '../lib/token'
import {
  otpCodeSchema,
  otpPhoneSchema,
  type OtpCodeType,
  type OtpPhoneType,
} from '../types/auth.schemas'
import { useOtpTimer } from './useOtpTimer'

type OtpAuthStep = 'phone' | 'code'

export const useOtpAuth = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState<OtpAuthStep>('phone')
  const { secondsLeft, startTimer } = useOtpTimer()

  const phoneForm = useForm<OtpPhoneType>({
    resolver: zodResolver(otpPhoneSchema),
    mode: 'onBlur',
  })

  const codeForm = useForm<OtpCodeType>({
    resolver: zodResolver(otpCodeSchema),
    mode: 'onBlur',
  })

  const requestOtpMutation = useMutation({
    mutationFn: (data: OtpPhoneType) => auth.requestOtp(data),
    onSuccess: (response) => {
      startTimer(Math.ceil(response.retryDelay / 1000))
      setStep('code')
    },
    onError: (error) => {
      phoneForm.setError('phone', { message: error.message })
    },
  })

  const signInMutation = useMutation({
    mutationFn: (data: OtpCodeType) =>
      auth.signIn({
        phone: phoneForm.getValues('phone'),
        code: Number(data.otpCode),
      }),
    onSuccess: (response) => {
      authToken.set(response.token)
      navigate('/welcome')
    },
    onError: (error) => {
      codeForm.setError('otpCode', { message: error.message })
    },
  })

  return {
    step,
    phoneForm,
    codeForm,
    onPhoneSubmit: (data: OtpPhoneType) => requestOtpMutation.mutate(data),
    onCodeSubmit: (data: OtpCodeType) => signInMutation.mutate(data),
    secondsLeft,
  }
}
