import { ThemeProvider } from '@/components/theme'

import { AppRouter } from './router'

export const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}
