import { ThemeProvider } from './providers'
import { AppRouter } from './router'

export const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}
