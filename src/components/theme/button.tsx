import { type LucideProps, Moon, Sun } from 'lucide-react'

import { Button, type ButtonProps } from '../ui/button'
import { useTheme } from './context'

interface ThemeButtonProps {
  iconProps?: LucideProps
  buttonProps?: ButtonProps
}

export const ThemeButton = ({ buttonProps, iconProps }: ThemeButtonProps) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const icon =
    theme === 'dark' ? <Sun {...iconProps} /> : <Moon {...iconProps} />

  return (
    <Button {...buttonProps} onClick={toggleTheme}>
      {icon}
    </Button>
  )
}
