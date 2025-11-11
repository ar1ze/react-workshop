import { useEffect, useState } from 'react'

import { ThemeProviderContext } from './theme-context'

type Theme = 'dark' | 'light'

const MEDIA_PREFERS_DARK = '(prefers-color-scheme: dark)'

const isValidTheme = (value: string | null): value is Theme => {
  return value === 'light' || value === 'dark'
}

const getInitialTheme = (storageKey: string, defaultTheme: Theme): Theme => {
  if (typeof window === 'undefined') {
    return defaultTheme
  }

  const stored = localStorage.getItem(storageKey)
  if (isValidTheme(stored)) {
    return stored
  }

  const prefersDarkScheme = window.matchMedia(MEDIA_PREFERS_DARK).matches
  return prefersDarkScheme ? 'dark' : defaultTheme
}

const applyTheme = (theme: Theme) => {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
}

const saveTheme = (storageKey: string, theme: Theme) => {
  localStorage.setItem(storageKey, theme)
}

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'vite-ui-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() =>
    getInitialTheme(storageKey, defaultTheme)
  )

  // Apply/save theme when `theme` state changes
  useEffect(() => {
    applyTheme(theme)
    saveTheme(storageKey, theme)
  }, [theme, storageKey])

  // Listen for system changes
  useEffect(() => {
    const mediaQuery = window.matchMedia(MEDIA_PREFERS_DARK)
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light')
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const value = {
    theme,
    setTheme,
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
