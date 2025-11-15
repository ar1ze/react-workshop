import { type ReactNode } from 'react'

/**
 * Defines common base properties for components.
 * Intended to be extended by other prop interfaces.
 */
export interface BaseProps {
  /**
   * Optional CSS class for custom styling.
   */
  className?: string
  /**
   * Child elements to be rendered within the component.
   */
  children?: ReactNode
}
