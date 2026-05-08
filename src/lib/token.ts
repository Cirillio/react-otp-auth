const KEY = 'auth-token'

export const authToken = {
  get: (): string | null => localStorage.getItem(KEY),
  set: (value: string) => localStorage.setItem(KEY, value),
  remove: () => localStorage.removeItem(KEY),
}
