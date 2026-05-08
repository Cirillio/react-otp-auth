import { $http, authToken } from '../lib'
import type {
  OtpRequest,
  OtpResponse,
  SessionResponse,
  SignInRequest,
  SignInResponse,
} from '../types/auth'

export const auth = {
  requestOtp: (body: OtpRequest) => $http.post<OtpResponse>('/auth/otp', body),
  signIn: (body: SignInRequest) => $http.post<SignInResponse>('/users/signin', body),
  getSession: () => $http.get<SessionResponse>('/users/session'),
  logout: () => authToken.remove(),
}
