import { Suspense } from 'react'
import type { RouteObject } from 'react-router'

import { LoadingPage } from '@/components/common'
import type { NavigationNode } from '@/types/navigation'

import { stripLeadingSlash, stripPrefix } from '../path'

/**
 * Converts an array of `NavigationNode`s into `RouteObject`s for react-router.
 * This is the main function for building the application's routes.
 *
 * @param nodes - An array of `NavigationNode`s from the navigation config.
 * @returns An array of `RouteObject`s.
 */
export const navigationToRoutes = (nodes: NavigationNode[]): RouteObject[] => {
  return nodes.map((node) => nodeToRoute(node))
}

/**
 * Recursively converts a single `NavigationNode` into a `RouteObject`.
 *
 * This function correctly handles `index` routes and converts the node's
 * absolute path into a relative path required by react-router.
 *
 * @param node - The `NavigationNode` to convert.
 * @returns A corresponding `RouteObject`.
 */
export const nodeToRoute = (node: NavigationNode): RouteObject => {
  const Component = node.component

  // Separate children into a dedicated index route and all other child routes.
  const indexChild = node.children?.find((c) => c.index)
  const normalChildren = node.children?.filter((c) => !c.index)

  const route: RouteObject = {
    // Index routes have an undefined path.
    // All other paths must be relative (no leading slash).
    path: node.index ? undefined : stripLeadingSlash(node.to),
    index: node.index ? true : undefined,
    // Wrap all route components in a Suspense boundary for lazy loading.
    element: wrap(Component),
  }

  // If the node has children, recursively convert them.
  if (indexChild || normalChildren?.length) {
    route.children = []

    // Add the dedicated index route if it exists.
    if (indexChild) {
      route.children.push({
        index: true,
        element: wrap(indexChild.component),
      })
    }

    // Add all other normal child routes.
    if (normalChildren) {
      route.children.push(
        ...normalChildren.map((child) => ({
          ...nodeToRoute(child),
          // CRITICAL: `NavigationNode` uses absolute paths (e.g., "/settings/profile").
          // `RouteObject` needs relative paths (e.g., "profile").
          // `stripPrefix` performs this conversion.
          path: stripPrefix(child.to, node.to),
        }))
      )
    }
  }

  return route
}

/**
 * Wraps a component in a `Suspense` boundary to show a loading fallback.
 *
 * @param Component - The React component to wrap (e.g., a lazy-loaded page).
 * @returns A JSX element with the component inside `Suspense`.
 */
const wrap = (Component: React.ComponentType) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Component />
    </Suspense>
  )
}
