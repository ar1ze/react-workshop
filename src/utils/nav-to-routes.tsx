import { Suspense } from 'react'
import type { RouteObject } from 'react-router'

import { LoadingPage } from '@/components/common'
import type { NavigationNode } from '@/types/navigation'

export const navigationToRoutes = (nodes: NavigationNode[]): RouteObject[] => {
  return nodes.map((node) => nodeToRoute(node))
}

export const nodeToRoute = (node: NavigationNode): RouteObject => {
  const Component = node.component

  const indexChild = node.children?.find((c) => c.index)
  const normalChildren = node.children?.filter((c) => !c.index)

  const route: RouteObject = {
    path: node.index ? undefined : stripLeadingSlash(node.to),
    index: node.index ? true : undefined,
    element: wrap(Component),
  }

  if (indexChild || normalChildren?.length) {
    route.children = []

    if (indexChild) {
      route.children.push({
        index: true,
        element: wrap(indexChild.component),
      })
    }

    if (normalChildren) {
      route.children.push(
        ...normalChildren.map((child) => ({
          ...nodeToRoute(child),
          path: stripPrefix(child.to, node.to),
        }))
      )
    }
  }

  return route
}

const wrap = (Component: React.ComponentType) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Component />
    </Suspense>
  )
}

const stripLeadingSlash = (path: string) => {
  return path.startsWith('/') ? path.slice(1) : path
}

const stripPrefix = (child: string, parent: string) => {
  const base = parent.endsWith('/') ? parent : parent + '/'
  return stripLeadingSlash(child.replace(base, ''))
}
