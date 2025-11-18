import { useEffect, useState } from 'react'

import { ThemeProviderContext } from './context'

/** Defines the possible theme values. */
type Theme = 'dark' | 'light'

/** Media query string for detecting system dark mode preference. */
const MEDIA_PREFERS_DARK = '(prefers-color-scheme: dark)'

/**
 * Type guard to validate if a value is a valid `Theme`.
 * @param value - The value to check.
 * @returns `true` if the value is 'light' or 'dark'.
 */
const isValidTheme = (value: string | null): value is Theme => {
  return value === 'light' || value === 'dark'
}

/**
 * Gets the initial theme by checking localStorage, then system preference,
 * and finally falling back to the default.
 *
 * Priority:
 * 1. `localStorage` (if value is valid)
 * 2. System preference (`prefers-color-scheme`)
 * 3. `defaultTheme`
 *
 * @param storageKey - The localStorage key for the theme.
 * @param defaultTheme - The fallback theme.
 * @returns The resolved initial `Theme`.
 */
const getInitialTheme = (storageKey: string, defaultTheme: Theme): Theme => {
  // Return default theme during SSR to avoid hydration mismatch.
  if (typeof window === 'undefined') {
    return defaultTheme
  }

  // 1. Check local storage
  const stored = localStorage.getItem(storageKey)
  if (isValidTheme(stored)) {
    return stored
  }

  // 2. Check system preference
  const prefersDarkScheme = window.matchMedia(MEDIA_PREFERS_DARK).matches
  return prefersDarkScheme ? 'dark' : defaultTheme
}

/**
 * Applies the given theme to the `<html>` element by adding/removing 'dark'/'light' classes.
 * @param theme - The theme to apply.
 */
const applyTheme = (theme: Theme) => {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
}

/**
 * Saves the user's theme preference to localStorage.
 * @param storageKey - The key to use.
 * @param theme - The theme value to save.
 */
const saveTheme = (storageKey: string, theme: Theme) => {
  localStorage.setItem(storageKey, theme)
}

/** Props for the ThemeProvider. */
type ThemeProviderProps = {
  /** The components to render inside the provider. */
  children: React.ReactNode
  /**
   * The default theme to use if no preference is found.
   * @default 'light'
   */
  defaultTheme?: Theme
  /**
   * The key used to store the theme in localStorage.
   * @default 'vite-ui-theme'
   */
  storageKey?: string
}

/**
 * Provides theme context to its children and manages theme synchronization
 * with localStorage and system preferences. It also applies the
 * 'dark' or 'light' class to the `<html>` element.
 */
export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'vite-ui-theme',
}: ThemeProviderProps) {
  // Initialize state by getting the saved or preferred theme.
  const [theme, setTheme] = useState<Theme>(() =>
    getInitialTheme(storageKey, defaultTheme)
  )

  // This effect runs whenever the `theme` state changes.
  // It applies the theme class to the <html> tag and saves to localStorage.
  useEffect(() => {
    applyTheme(theme)
    saveTheme(storageKey, theme)
  }, [theme, storageKey])

  // This effect runs once on mount to listen for system theme changes.
  // (e.g., if the user changes their OS theme from light to dark).
  useEffect(() => {
    const mediaQuery = window.matchMedia(MEDIA_PREFERS_DARK)

    // Handler to update the theme state when the system preference changes.
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    // Cleanup listener on component unmount.
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, []) // Empty array ensures this effect runs only once.

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
