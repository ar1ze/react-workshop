import { Moon, Sun } from 'lucide-react'

import { Button } from '../ui/button'
import { useTheme } from './theme-context'

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}
