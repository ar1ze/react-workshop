import { type NavigationNode } from '@/types/navigation'

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
