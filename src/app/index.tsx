import { ThemeProvider } from 'next-themes'

import { AppRouter } from './router'

export const App = () => {
  return (
    <ThemeProvider attribute="class">
      <AppRouter />
    </ThemeProvider>
  )
}
