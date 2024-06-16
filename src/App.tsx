import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Main } from './pages/main'

function App() {
    const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        <Main />
      </ErrorBoundary>
    </QueryClientProvider>
  )
}

export default App
