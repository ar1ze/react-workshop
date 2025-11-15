import { type NavigationNode } from '@/types/navigation'
import { joinPaths } from '@/utils/path'

export function page(id: string, label: string): NavigationNode {
  return {
    id,
    label,
    to: joinPaths(id),
  }
}

export function section(
  id: string,
  label: string,
  children: NavigationNode[]
): NavigationNode {
  const basePath = joinPaths(id)

  return {
    id,
    label,
    to: basePath,
    children: children.map((child) => buildChildPath(child, basePath)),
  }
}

function buildChildPath(
  node: NavigationNode,
  parentPath: string
): NavigationNode {
  const expectedPath = joinPaths(parentPath, node.id)
  const finalPath = node.to === expectedPath ? node.to : expectedPath

  if (node.children) {
    return {
      ...node,
      to: finalPath,
      children: node.children.map((child) => buildChildPath(child, finalPath)),
    }
  }

  return { ...node, to: finalPath }
}
