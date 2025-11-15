import { Suspense } from 'react'
import { type RouteObject } from 'react-router'

import { LoadingPage } from '@/components/common'
import type { NavigationNode, RouteComponentMap } from '@/types/navigation'

export function navigationToRoutes(
  nodes: NavigationNode[],
  componentMap: RouteComponentMap
): RouteObject[] {
  return nodes.map((node) => nodeToRoute(node, componentMap))
}

function nodeToRoute(
  node: NavigationNode,
  componentMap: RouteComponentMap
): RouteObject {
  const Component = componentMap[node.to]

  if (!Component) {
    throw new Error(`No component mapped for route: ${node.to}. `)
  }

  const route: RouteObject = {
    path: node.to,
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Component />
      </Suspense>
    ),
  }

  // Build nested routes if present
  if (node.children?.length) {
    route.children = node.children.map((child) =>
      nodeToRoute(child, componentMap)
    )
  }

  return route
}
