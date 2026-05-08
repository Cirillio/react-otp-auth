import type { components } from './api'

export type User = components['schemas']['User']
export type OtpRequest = components['schemas']['CreateOtpDto']
export type OtpResponse = components['schemas']['OtpResponse']
export type SignInRequest = components['schemas']['SignInDto']
export type SignInResponse = components['schemas']['SignInResponse']
export type SessionResponse = components['schemas']['SessionResponse']
