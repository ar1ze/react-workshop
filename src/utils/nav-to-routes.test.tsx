import { describe, expect, it } from 'vitest'

import type { NavigationNode } from '@/types/navigation'

import { navigationToRoutes } from './nav-to-routes'

// Mock components
const ParentComponent = () => <div>Parent</div>
const ChildComponent = () => <div>Child</div>
const GrandChildComponent = () => <div>GrandChild</div>
const SiblingComponent = () => <div>Sibling</div>
const IndexComponent = () => <div>Index</div>

describe('navigationToRoutes', () => {
  it('converts a single node into a route', () => {
    const nodes: NavigationNode[] = [
      { id: 'page', label: 'Page', to: '/page', component: ParentComponent },
    ]

    const routes = navigationToRoutes(nodes)

    expect(routes).toHaveLength(1)
    expect(routes[0].path).toBe('page')
    expect(routes[0].element).toBeDefined()
  })

  it('converts sibling nodes', () => {
    const nodes: NavigationNode[] = [
      { id: 'first', label: 'First', to: '/first', component: ParentComponent },
      {
        id: 'second',
        label: 'Second',
        to: '/second',
        component: SiblingComponent,
      },
    ]

    const routes = navigationToRoutes(nodes)

    expect(routes).toHaveLength(2)
    expect(routes[0].path).toBe('first')
    expect(routes[1].path).toBe('second')
  })

  it('converts parent with children', () => {
    const nodes: NavigationNode[] = [
      {
        id: 'parent',
        label: 'Parent',
        to: '/parent',
        component: ParentComponent,
        children: [
          {
            id: 'child1',
            label: 'Child 1',
            to: '/parent/child1',
            component: ChildComponent,
          },
          {
            id: 'child2',
            label: 'Child 2',
            to: '/parent/child2',
            component: SiblingComponent,
          },
        ],
      },
    ]

    const routes = navigationToRoutes(nodes)

    expect(routes[0].children).toHaveLength(2)
    expect(routes[0].children?.[0].path).toBe('child1')
    expect(routes[0].children?.[1].path).toBe('child2')
  })

  it('handles nested hierarchy (3 levels)', () => {
    const nodes: NavigationNode[] = [
      {
        id: 'parent',
        label: 'Parent',
        to: '/parent',
        component: ParentComponent,
        children: [
          {
            id: 'child',
            label: 'Child',
            to: '/parent/child',
            component: ChildComponent,
            children: [
              {
                id: 'grandchild',
                label: 'GrandChild',
                to: '/parent/child/grandchild',
                component: GrandChildComponent,
              },
            ],
          },
        ],
      },
    ]

    const routes = navigationToRoutes(nodes)

    expect(routes[0].children?.[0].children?.[0].path).toBe('grandchild')
  })

  it('treats empty children as no children', () => {
    const nodes: NavigationNode[] = [
      {
        id: 'parent',
        label: 'Parent',
        to: '/parent',
        component: ParentComponent,
        children: [],
      },
    ]

    const routes = navigationToRoutes(nodes)

    expect(routes[0].children).toBeUndefined()
  })

  it('handles index routes', () => {
    const nodes: NavigationNode[] = [
      {
        id: 'parent',
        label: 'Parent',
        to: '/parent',
        component: ParentComponent,
        children: [
          {
            id: '__index__',
            label: '',
            to: '',
            index: true,
            component: IndexComponent,
          },
        ],
      },
    ]

    const routes = navigationToRoutes(nodes)

    expect(routes[0].children?.[0].index).toBe(true)
    expect(routes[0].children?.[0].path).toBeUndefined()
  })

  it('returns an empty array for no nodes', () => {
    expect(navigationToRoutes([])).toEqual([])
  })
})
