import type { ComponentType } from 'react'

/**
 * Basic properties for a navigation link.
 */
export interface NavigationLinkProps {
  /**
   * URL path the link points to (e.g., "/dashboard").
   */
  to: string
  /**
   * Display text for the link.
   */
  label: string
}

/**
 * A node in the navigation tree, used for generating routes and menus.
 * Extends `NavigationLinkProps` with properties for routing and nesting.
 */
export interface NavigationNode extends NavigationLinkProps {
  /**
   * Unique identifier, also used for path segments and React keys.
   */
  id: string
  /**
   * React component to render for this route.
   */
  component: ComponentType
  /**
   * If true, marks this as a default "index" route for a parent path.
   * @see https://reactrouter.com/en/main/route/route#index
   */
  index?: boolean
  /**
   * Optional array of child nodes for creating nested navigation.
   */
  children?: NavigationNode[]
}
