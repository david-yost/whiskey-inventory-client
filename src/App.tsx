import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ErrorBoundary } from 'react-error-boundary'
import { Inventory } from './components/inventory'

function App() {
    const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>

        <Inventory />

    </QueryClientProvider>
  )
}

export default App
