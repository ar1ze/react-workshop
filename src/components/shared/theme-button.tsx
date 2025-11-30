import { type LucideProps, Moon, Sun } from 'lucide-react'

import { useTheme } from '@/app/providers'
import { Button, type ButtonProps } from '@/components/ui/button'

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
    <Button {...buttonProps} onClick={toggleTheme} title="Toggle theme">
      {icon}
    </Button>
  )
}
