import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
