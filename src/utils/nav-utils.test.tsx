import type { ComponentType } from 'react'
import { describe, expect, it } from 'vitest'

import type { NavigationNode } from '@/types/navigation'

import { flattenNavigationTree } from './nav-utils'

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
