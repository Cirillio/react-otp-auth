import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from '../components/auth/protected-route'
import MainPage from '../pages'
import LoginPage from '../pages/auth/login'
import LogoutPage from '../pages/auth/logout'
import { UnauthorizedPage } from '../pages/auth/unauthorized'
import { RouterErrorPage } from '../pages/boundary/router-error-page'
import { ProfilePage } from '../pages/profile'

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
        path: 'auth',
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'logout',
            element: (
              // на фоллбеке простой текст, в идеале скелетон докрутить
              <ProtectedRoute fallback={<span>Загрузка...</span>}>
                <LogoutPage />
              </ProtectedRoute>
            ),
          },
          {
            path: 'unauthorized',
            element: <UnauthorizedPage />,
          },
        ],
      },
      {
        path: 'profile',
        element: (
          // на фоллбеке простой текст, в идеале скелетон докрутить
          <ProtectedRoute fallback={<span>Загрузка...</span>}>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

export default router
