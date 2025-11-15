import { describe, expect, it } from 'vitest'

import type { NavigationNode, RouteComponentMap } from '@/types/navigation'

import { navigationToRoutes } from './nav-to-routes'

const ParentComponent = () => <div>Parent</div>
const ChildComponent = () => <div>Child</div>
const GrandChildComponent = () => <div>GrandChild</div>
const SiblingComponent = () => <div>Sibling</div>

describe('navigationToRoutes', () => {
  it('should convert single node to route', () => {
    const nodes: NavigationNode[] = [{ id: 'page', label: 'Page', to: '/page' }]

    const componentMap: RouteComponentMap = {
      '/page': ParentComponent,
    }

    const routes = navigationToRoutes(nodes, componentMap)

    expect(routes).toHaveLength(1)
    expect(routes[0].path).toBe('/page')
    expect(routes[0].element).toBeDefined()
  })

  it('should convert multiple sibling nodes', () => {
    const nodes: NavigationNode[] = [
      { id: 'first', label: 'First', to: '/first' },
      { id: 'second', label: 'Second', to: '/second' },
    ]

    const componentMap: RouteComponentMap = {
      '/first': ParentComponent,
      '/second': SiblingComponent,
    }

    const routes = navigationToRoutes(nodes, componentMap)

    expect(routes).toHaveLength(2)
    expect(routes[0].path).toBe('/first')
    expect(routes[1].path).toBe('/second')
  })

  it('should convert parent with children', () => {
    const nodes: NavigationNode[] = [
      {
        id: 'parent',
        label: 'Parent',
        to: '/parent',
        children: [
          { id: 'child1', label: 'Child 1', to: '/parent/child1' },
          { id: 'child2', label: 'Child 2', to: '/parent/child2' },
        ],
      },
    ]

    const componentMap: RouteComponentMap = {
      '/parent': ParentComponent,
      '/parent/child1': ChildComponent,
      '/parent/child2': SiblingComponent,
    }

    const routes = navigationToRoutes(nodes, componentMap)

    expect(routes[0].path).toBe('/parent')
    expect(routes[0].children).toHaveLength(2)
    expect(routes[0].children?.[0].path).toBe('/parent/child1')
    expect(routes[0].children?.[1].path).toBe('/parent/child2')
  })

  it('should handle nested hierarchy (3 levels)', () => {
    const nodes: NavigationNode[] = [
      {
        id: 'parent',
        label: 'Parent',
        to: '/parent',
        children: [
          {
            id: 'child',
            label: 'Child',
            to: '/parent/child',
            children: [
              {
                id: 'grandchild',
                label: 'GrandChild',
                to: '/parent/child/grandchild',
              },
            ],
          },
        ],
      },
    ]

    const componentMap: RouteComponentMap = {
      '/parent': ParentComponent,
      '/parent/child': ChildComponent,
      '/parent/child/grandchild': GrandChildComponent,
    }

    const routes = navigationToRoutes(nodes, componentMap)

    expect(routes[0].children?.[0].children?.[0].path).toBe(
      '/parent/child/grandchild'
    )
  })

  it('should handle empty children array as no children', () => {
    const nodes: NavigationNode[] = [
      {
        id: 'parent',
        label: 'Parent',
        to: '/parent',
        children: [],
      },
    ]

    const componentMap: RouteComponentMap = {
      '/parent': ParentComponent,
    }

    const routes = navigationToRoutes(nodes, componentMap)

    expect(routes[0].children).toBeUndefined()
  })

  it('should throw error when component is missing', () => {
    const nodes: NavigationNode[] = [{ id: 'page', label: 'Page', to: '/page' }]

    const componentMap: RouteComponentMap = {}

    expect(() => navigationToRoutes(nodes, componentMap)).toThrow(
      'No component mapped for route: /page'
    )
  })

  it('should throw error for missing nested component', () => {
    const nodes: NavigationNode[] = [
      {
        id: 'parent',
        label: 'Parent',
        to: '/parent',
        children: [{ id: 'child', label: 'Child', to: '/parent/child' }],
      },
    ]

    const componentMap: RouteComponentMap = {
      '/parent': ParentComponent,
    }

    expect(() => navigationToRoutes(nodes, componentMap)).toThrow(
      'No component mapped for route: /parent/child'
    )
  })

  it('should handle empty array', () => {
    const nodes: NavigationNode[] = []
    const componentMap: RouteComponentMap = {}

    const routes = navigationToRoutes(nodes, componentMap)

    expect(routes).toEqual([])
  })
})
