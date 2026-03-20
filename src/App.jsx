import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MyRoutes } from './routes/router';
import { useThemeStore } from './store/ThemeStore';
function App() {
  
  const queryClient = new QueryClient();
  const {theme} = useThemeStore()
  document.documentElement.classList.toggle("dark", theme === 'dark')
  return (
    <QueryClientProvider client={queryClient}>
      <MyRoutes/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
