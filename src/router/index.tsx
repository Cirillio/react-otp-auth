import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages'
import LoginPage from '../pages/auth/login'
import { RouterErrorPage } from '../pages/boundary/router-error-page'
import { WelcomePage } from '../pages/welcome'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <RouterErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'auth/login',
        element: <LoginPage />,
      },
      {
        path: 'welcome',
        element: <WelcomePage />,
      },
    ],
  },
])

export default router
