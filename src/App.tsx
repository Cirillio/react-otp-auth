import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import router from './router'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh w-full flex-col items-center justify-center">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  )
}

export default App
