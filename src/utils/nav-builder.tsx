import type { ComponentType } from 'react'

import { type NavigationNode } from '@/types/navigation'
import { joinPaths } from '@/utils/path'

export const buildChildPath = (
  node: NavigationNode,
  parentPath: string
): NavigationNode => {
  if (node.index) {
    return node
  }

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

export const page = (
  id: string,
  label: string,
  component: ComponentType,
  children?: NavigationNode[]
): NavigationNode => {
  const basePath = joinPaths(id)

  return {
    id,
    label,
    to: basePath,
    component,
    children: children?.map((child) => buildChildPath(child, basePath)),
  }
}

export const section = (
  id: string,
  label: string,
  component: ComponentType,
  children: NavigationNode[]
): NavigationNode => {
  const basePath = joinPaths(id)

  return {
    id,
    label,
    to: basePath,
    component,
    children: children.map((child) => buildChildPath(child, basePath)),
  }
}

export const index = (component: ComponentType): NavigationNode => {
  return {
    id: '__index__',
    label: '',
    to: '',
    index: true,
    component,
  }
}
