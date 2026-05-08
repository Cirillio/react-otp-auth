import { createBrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '../pages/boundary/error-boundary'
import MainPage from '../pages'
import LoginPage from '../pages/auth/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ErrorBoundary><MainPage /></ErrorBoundary>,
  },
  {
    path: '/auth/login',
    element: <ErrorBoundary><LoginPage /></ErrorBoundary>,
  },
])

export default router
