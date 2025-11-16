import { type NavigationNode } from '@/types/navigation'
import { normalizePath } from '@/utils/path'

/**
 * Recursively flattens a navigation tree into a single-level array.
 *
 * @param nodes - The array of navigation nodes to flatten.
 * @returns A new array containing all nodes (and their descendants) in a flat structure, excluding index routes.
 */
export const flattenNavigationTree = (
  nodes: NavigationNode[]
): NavigationNode[] => {
  const flattened: NavigationNode[] = []

  for (const node of nodes) {
    // Explicitly skip nodes marked as index routes (e.g., parent-level pages).

    if (node.index === true) {
      continue
    }

    // Add the current node, omitting its children for a flat structure.
    flattened.push({
      id: node.id,
      label: node.label,
      to: node.to,
      component: node.component,
      index: node.index,
    })

    // If the node has children, recursively flatten them and add to the list.
    if (node.children && node.children.length > 0) {
      flattened.push(...flattenNavigationTree(node.children))
    }
  }

  return flattened
}

/**
 * Groups navigation nodes by section path with max depth of 1 segment.
 * Each node appears in only the first matching section.
 *
 * @example
 * const sections = ["learn", "learn/describing-the-ui"]
 * groupNodesBySection(nodes, sections)
 * // Returns:
 * // {
 * //   "learn": [nodes at /learn and /learn/*],
 * //   "learn/describing-the-ui": [nodes at /learn/describing-the-ui and /learn/describing-the-ui/*]
 * // }
 *
 * @param nodes - Flattened array of navigation nodes
 * @param sections - Array of section paths to group by
 * @returns Object mapping section paths to their immediate children (max depth 1)
 */
export const groupNodesBySection = (
  nodes: NavigationNode[],
  sections: string[]
): Record<string, NavigationNode[]> => {
  const result: Record<string, NavigationNode[]> = {}

  // Initialize each section with empty array
  for (const section of sections) {
    result[section] = []
  }

  for (const node of nodes) {
    const nodePath = normalizePath(node.to)

    // Find first matching section
    for (const section of sections) {
      const sectionPath = normalizePath(section)

      // Check if node is section itself or direct child (max depth 1)
      if (nodePath === sectionPath) {
        result[section].push(node)
        break
      }

      // Check if direct child
      if (nodePath.startsWith(sectionPath + '/')) {
        const remaining = nodePath.slice(sectionPath.length + 1)

        // Only include if no additional slashes (max depth 1)
        if (!remaining.includes('/')) {
          result[section].push(node)
          break
        }
      }
    }
  }

  return result
}
