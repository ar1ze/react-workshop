import type { ComponentType } from 'react'

import { type NavigationNode } from '@/components/navigation'
import { assertKebabCase, generateLabelFromId } from '@/utils/formatting'
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
 * Factory function to create a `NavigationNode` for a single page.
 * * @param id - The unique ID (kebab-case). Used to auto-generate label if not provided.
 * @param component - The React component.
 * @param label - (Optional) Manual override for the display text.
 */
export const page = (
  id: string,
  component: ComponentType,
  label?: string
): NavigationNode => {
  // 1. Validate inputs
  assertKebabCase(id)

  // 2. Generate Label if not provided
  const finalLabel = label || generateLabelFromId(id)

  // 3. Construct path
  const basePath = joinPaths(id)

  return {
    id,
    label: finalLabel,
    to: basePath,
    component,
  }
}

/**
 * Factory function to create a `NavigationNode` section.
 * * @param id - The unique ID (kebab-case).
 * @param component - The layout component.
 * @param children - Array of child nodes.
 * @param label - (Optional) Manual override for the display text.
 */
export const section = (
  id: string,
  component: ComponentType,
  children: NavigationNode[],
  label?: string
): NavigationNode => {
  assertKebabCase(id)

  const finalLabel = label || generateLabelFromId(id)
  const basePath = joinPaths(id)

  return {
    id,
    label: finalLabel, // e.g. "Advanced Routing"
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
