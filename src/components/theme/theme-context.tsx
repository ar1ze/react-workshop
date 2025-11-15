import { createContext, useContext } from 'react'

/** Defines the possible theme values. */
type Theme = 'dark' | 'light'

/**
 * Defines the shape of the Theme Context.
 * This is the value that will be provided and consumed.
 */
type ThemeProviderState = {
  /** The current active theme ('dark' or 'light'). */
  theme: Theme
  /** Function to update the current theme. */
  setTheme: (theme: Theme) => void
}

/**
 * The initial state for the theme context.
 * This is used as a default fallback value when `createContext` is called,
 * and also as a safety check in the `useTheme` hook.
 */
const initialState: ThemeProviderState = {
  theme: 'light',
  // A no-op function as a placeholder. This will be replaced by the
  // provider's `setTheme` function.
  setTheme: () => null,
}

/**
 * The React Context object for the theme.
 * Components will consume this context to get the current theme and the
 * function to change it.
 */
export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState)

/**
 * A custom hook to access the theme context (`ThemeProviderState`).
 *
 * This hook provides an easy way to get the current `theme` and the
 * `setTheme` function from the nearest `ThemeProvider`.
 *
 * @returns {ThemeProviderState} The current theme state and setter function.
 * @throws {Error} If `useTheme` is used outside of a `ThemeProvider`.
 */
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  // Ensure the hook is used within the context provider's tree.
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
