import { ThemeProvider } from '@/components/theme/theme-provider'

import { AppRouter } from './router'

export const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}
