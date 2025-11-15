import type { ComponentType } from 'react'

import { type NavigationNode } from '@/types/navigation'
import { joinPaths } from '@/utils/path'

/**
 * Recursively builds absolute paths for a navigation node and its descendants
 * based on a parent's path.
 *
 * @param node - The `NavigationNode` to process.
 * @param parentPath - The absolute path of the parent node.
 * @returns A new `NavigationNode` with fully resolved paths.
 */
export const buildChildPath = (
  node: NavigationNode,
  parentPath: string
): NavigationNode => {
  // Index nodes have no path segment, return as-is.
  if (node.index) {
    return node
  }

  // Calculate the node's absolute path by joining parent path and node ID.
  const expectedPath = joinPaths(parentPath, node.id)

  // Ensure `to` is the fully-qualified path, overwriting the original.
  const finalPath = node.to === expectedPath ? node.to : expectedPath

  // If the node has children, recursively build their paths.
  if (node.children) {
    return {
      ...node,
      to: finalPath,
      children: node.children.map((child) => buildChildPath(child, finalPath)),
    }
  }

  // Return node with its updated `to` path.
  return { ...node, to: finalPath }
}

/**
 * Factory function to create a `NavigationNode` for a single page (no children).
 *
 * @param id - The unique ID, also used as the path segment.
 * @param label - The human-readable text for display.
 * @param component - The React component to render.
 * @returns A `NavigationNode` configured as a standalone page.
 */
export const page = (
  id: string,
  label: string,
  component: ComponentType
): NavigationNode => {
  // The `to` path is just its ID. It will be prefixed by a parent `section` if nested.
  const basePath = joinPaths(id)

  return {
    id,
    label,
    to: basePath,
    component,
  }
}

/**
 * Factory function to create a `NavigationNode` section (a node with children).
 * This function automatically resolves all child paths.
 *
 * @param id - The unique ID, also used as the path segment.
 *Details
 * @param label - The human-readable text for display.
 * @param component - The layout component for this section.
 * @param children - An array of child `NavigationNode`s (from `page` or `index`).
 * @returns A `NavigationNode` configured as a parent section.
 */
export const section = (
  id: string,
  label: string,
  component: ComponentType,
  children: NavigationNode[]
): NavigationNode => {
  // This section's base path (e.g., "/settings").
  const basePath = joinPaths(id)

  return {
    id,
    label,
    to: basePath,
    component,
    // Build absolute paths for all children relative to this section.
    children: children.map((child) => buildChildPath(child, basePath)),
  }
}

/**
 * Factory function to create an "index" `NavigationNode`.
 * Renders at the parent's exact path.
 *
 * @param component - The React component to render as the index page.
 * @returns A `NavigationNode` configured as an index route.
 */
export const index = (component: ComponentType): NavigationNode => {
  return {
    // Placeholder ID, not used in path.
    id: '__index__',
    // Index routes have no label or path.
    label: '',
    to: '',
    // Flag for router and `buildChildPath`.
    index: true,
    component,
  }
}
