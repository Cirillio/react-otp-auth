import { authToken } from './token'

// Кастомные ошибки от апи и авторизации
export class ApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ApiError'
  }
}

export class UnauthorizedError extends Error {
  constructor() {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
  }
}

// Базовый ответ апи
interface BaseResponse {
  success: boolean
  reason?: string
}

class HttpClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private async $fetch<T extends BaseResponse>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    // Получение токена из локал стореджа
    const token = authToken.get()

    const response = await fetch(this.baseUrl + endpoint, {
      ...options,
      headers: {
        // Тип ответа по умолчанию
        'Content-Type': 'application/json',
        // Токен авторизации
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    })

    // Если не авторизован то проброс соотв. ошибки
    if (response.status === 401) throw new UnauthorizedError()
    if (!response.ok) throw new ApiError(`HTTP ${response.status}`)

    const data = (await response.json()) as T

    if (!data.success) throw new ApiError(data.reason ?? 'Unknown API Error')

    return data
  }

  get<T extends BaseResponse>(route: string, options?: RequestInit) {
    return this.$fetch<T>(route, { ...options, method: 'GET' })
  }

  post<T extends BaseResponse>(route: string, body?: unknown, options?: RequestInit) {
    return this.$fetch<T>(route, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  // остальные методы (нету т.к. в данном проекте и не нужны.)
}

// синглтон клиента
export const $http = new HttpClient(import.meta.env.VITE_API_URL)
