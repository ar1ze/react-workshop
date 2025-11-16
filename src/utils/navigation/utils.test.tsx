import type { ComponentType } from 'react'
import { describe, expect, it } from 'vitest'

import type { NavigationNode } from '@/types/navigation'

import { flattenNavigationTree } from './utils'
import { groupNodesBySection } from './utils'

// Mock components
const MockComponent: ComponentType = () => null
const MockChildComponent: ComponentType = () => null
const MockGrandChildComponent: ComponentType = () => null
const MockIndexComponent: ComponentType = () => null

const page = (
  id: string,
  label: string,
  component: ComponentType
): NavigationNode => ({
  id,
  label,
  to: `/${id}`, // Mock path
  component,
})

const section = (
  id: string,
  label: string,
  component: ComponentType,
  children: NavigationNode[]
): NavigationNode => ({
  id,
  label,
  to: `/${id}`,
  component,
  children,
})

const index = (component: ComponentType): NavigationNode => ({
  id: '__index__',
  label: '',
  to: '',
  index: true,
  component,
})

describe('flattenNavigationTree', () => {
  const getIds = (nodes: NavigationNode[]) => nodes.map((n) => n.id)

  it('returns an empty array for an empty input', () => {
    expect(flattenNavigationTree([])).toEqual([])
  })

  it('flattens a simple list of pages', () => {
    const pageOne = page('page-one', 'Page One', MockComponent)
    const pageTwo = page('page-two', 'Page Two', MockComponent)
    const nodes = [pageOne, pageTwo]
    const result = flattenNavigationTree(nodes)

    expect(getIds(result)).toEqual(['page-one', 'page-two'])
    expect(result[0]).not.toHaveProperty('children')
  })

  it('filters out index routes at the top level', () => {
    const indexRoute = index(MockIndexComponent)
    const pageOne = page('page-one', 'Page One', MockComponent)
    const nodes = [indexRoute, pageOne]
    const result = flattenNavigationTree(nodes)

    expect(getIds(result)).toEqual(['page-one'])
  })

  it('flattens a nested section, including the section itself', () => {
    const pageOne = page('page-one', 'Page One', MockChildComponent)
    const pageTwo = page('page-two', 'Page Two', MockChildComponent)
    const parent = section('parent', 'Parent', MockComponent, [
      pageOne,
      pageTwo,
    ])

    const result = flattenNavigationTree([parent])
    expect(getIds(result)).toEqual(['parent', 'page-one', 'page-two'])

    // Check that the flattened parent doesn't have children
    const flattenedParent = result.find((n) => n.id === 'parent')
    expect(flattenedParent).toBeDefined()
    expect(flattenedParent).not.toHaveProperty('children')
  })

  it('flattens deeply nested structures', () => {
    const grandChild = page(
      'grand-child',
      'Grand Child',
      MockGrandChildComponent
    )
    const child = section('child', 'Child', MockChildComponent, [grandChild])
    const root = section('root', 'Root', MockComponent, [child])

    const result = flattenNavigationTree([root])
    expect(getIds(result)).toEqual(['root', 'child', 'grand-child'])
  })

  it('filters out index routes at any level', () => {
    const indexRoute = index(MockIndexComponent)
    const pageOne = page('page-one', 'Page One', MockChildComponent)
    const grandChild = page('grand-child', 'GC', MockGrandChildComponent)
    const childIndex = index(MockIndexComponent)
    const child = section('child', 'Child', MockChildComponent, [
      childIndex,
      grandChild,
    ])
    const root = section('root', 'Root', MockComponent, [
      indexRoute,
      pageOne,
      child,
    ])

    const result = flattenNavigationTree([root])
    expect(getIds(result)).toEqual(['root', 'page-one', 'child', 'grand-child'])
  })
})

describe('groupNodesBySection', () => {
  it('groups nodes by section with max depth 1', () => {
    const nodes: NavigationNode[] = [
      {
        id: 'learn',
        label: 'Overview',
        to: '/learn',
        component: MockComponent,
      },
      {
        id: 'thinking',
        label: 'Thinking',
        to: '/learn/thinking-in-react',
        component: MockComponent,
      },
      {
        id: 'describing',
        label: 'Describing',
        to: '/learn/describing-the-ui',
        component: MockComponent,
      },
      {
        id: 'first',
        label: 'First',
        to: '/learn/describing-the-ui/your-first-component',
        component: MockComponent,
      },
      {
        id: 'import',
        label: 'Import',
        to: '/learn/describing-the-ui/importing-and-exporting-components',
        component: MockComponent,
      },
    ]

    const sections = ['learn', 'learn/describing-the-ui']
    const result = groupNodesBySection(nodes, sections)

    expect(result['learn']).toHaveLength(3)
    expect(result['learn'].map((n) => n.id)).toEqual([
      'learn',
      'thinking',
      'describing',
    ])

    expect(result['learn/describing-the-ui']).toHaveLength(2)
    expect(result['learn/describing-the-ui'].map((n) => n.id)).toEqual([
      'first',
      'import',
    ])
  })

  it('excludes nodes deeper than max depth 1', () => {
    const nodes: NavigationNode[] = [
      { id: 'learn', label: 'Learn', to: '/learn', component: MockComponent },
      { id: 'ui', label: 'UI', to: '/learn/ui', component: MockComponent },
      {
        id: 'deep',
        label: 'Deep',
        to: '/learn/ui/components',
        component: MockComponent,
      },
    ]

    const sections = ['learn']
    const result = groupNodesBySection(nodes, sections)

    expect(result['learn']).toHaveLength(2)
    expect(result['learn'].map((n) => n.id)).toEqual(['learn', 'ui'])
  })

  it('assigns node to first matching section only', () => {
    const nodes: NavigationNode[] = [
      {
        id: 'describing',
        label: 'Describing',
        to: '/learn/describing-the-ui',
        component: MockComponent,
      },
    ]

    const sections = ['learn', 'learn/describing-the-ui']
    const result = groupNodesBySection(nodes, sections)

    expect(result['learn']).toHaveLength(1)
    expect(result['learn/describing-the-ui']).toHaveLength(0)
  })

  it('handles empty sections', () => {
    const nodes: NavigationNode[] = [
      { id: 'home', label: 'Home', to: '/home', component: MockComponent },
    ]

    const sections = ['learn', 'docs']
    const result = groupNodesBySection(nodes, sections)

    expect(result['learn']).toEqual([])
    expect(result['docs']).toEqual([])
  })

  it('normalizes paths correctly', () => {
    const nodes: NavigationNode[] = [
      { id: 'learn', label: 'Learn', to: '/learn/', component: MockComponent },
      {
        id: 'basics',
        label: 'Basics',
        to: '//learn//basics//',
        component: MockComponent,
      },
    ]

    const sections = ['/learn/']
    const result = groupNodesBySection(nodes, sections)

    expect(result['/learn/']).toHaveLength(2)
  })
})
