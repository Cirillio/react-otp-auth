import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ErrorBoundary } from '../pages/boundary/error-boundary'
import { RouterErrorPage } from '../pages/boundary/router-error-page'
import MainPage from '../pages'
import LoginPage from '../pages/auth/login'

const router = createBrowserRouter([
  {
    errorElement: <RouterErrorPage />,
    children: [
      {
        path: '/',
        element: <ErrorBoundary><MainPage /></ErrorBoundary>,
      },
      {
        path: '/auth/login',
        element: <ErrorBoundary><LoginPage /></ErrorBoundary>,
      },
      {
        path: '*',
        element: <Navigate to="/auth/login" replace />,
      },
    ],
  },
])

export default router
