import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/utils/path', () => ({
  joinPaths: vi.fn(),
}))

import { joinPaths } from '@/utils/path'

import { index, page, section } from './nav-builder'

const mockedJoinPaths = vi.mocked(joinPaths)

// Mock implementation
const mockJoinPathsImplementation = (...segments: string[]): string => {
  const joined = '/' + segments.join('/')
  const path = joined.replace(/\/+/g, '/')
  return path === '/' ? '/' : path.replace(/\/+$/, '')
}

// Mock components
const MockComponent = () => <div>Mock</div>
const MockChildComponent = () => <div>Child</div>
const MockGrandChildComponent = () => <div>GrandChild</div>
const MockIndexComponent = () => <div>Index</div>

describe('navigation-builder', () => {
  beforeEach(() => {
    mockedJoinPaths.mockClear()
    mockedJoinPaths.mockImplementation(mockJoinPathsImplementation)
  })

  describe('page', () => {
    it('creates a page with a generated path and component', () => {
      const node = page('page1', 'Page 1', MockComponent)

      expect(node).toEqual({
        id: 'page1',
        label: 'Page 1',
        to: '/page1',
        component: MockComponent,
        children: undefined,
      })

      expect(mockedJoinPaths).toHaveBeenCalledWith('page1')
    })

    it('handles multi-segment ids', () => {
      const node = page('multi-segment', 'Multi Segment', MockComponent)

      expect(node.to).toBe('/multi-segment')
      expect(node.component).toBe(MockComponent)
      expect(mockedJoinPaths).toHaveBeenCalledWith('multi-segment')
    })

    it('does not include children when not provided', () => {
      const node = page('no-children', 'No Children', MockComponent)

      expect(node.children).toBeUndefined()
      expect(Object.keys(node)).toEqual([
        'id',
        'label',
        'to',
        'component',
        'children',
      ])
    })

    it('includes processed children when provided', () => {
      const child = page('child', 'Child', MockChildComponent)
      const node = page('parent', 'Parent', MockComponent, [child])

      expect(node.children).toHaveLength(1)
      expect(node.children?.[0]).toMatchObject({
        id: 'child',
        label: 'Child',
        component: MockChildComponent,
        to: '/parent/child',
      })
    })
  })

  describe('section', () => {
    it('creates a section with rebuilt child paths', () => {
      const child = page('child1', 'Child 1', MockChildComponent)
      const node = section('parent', 'Parent', MockComponent, [child])

      expect(node.to).toBe('/parent')
      expect(node.children?.[0].to).toBe('/parent/child1')

      expect(mockedJoinPaths).toHaveBeenCalledWith('parent')
      expect(mockedJoinPaths).toHaveBeenCalledWith('child1')
      expect(mockedJoinPaths).toHaveBeenCalledWith('/parent', 'child1')
    })

    it('handles multiple children', () => {
      const child1 = page('c1', 'C1', MockChildComponent)
      const child2 = page('c2', 'C2', MockChildComponent)

      const node = section('parent', 'Parent', MockComponent, [child1, child2])

      expect(node.children?.map((n) => n.to)).toEqual([
        '/parent/c1',
        '/parent/c2',
      ])
    })

    it('recursively builds nested paths', () => {
      const grandChild = page('g', 'G', MockGrandChildComponent)
      const child = section('c', 'C', MockChildComponent, [grandChild])
      const node = section('p', 'P', MockComponent, [child])

      expect(node.children?.[0].to).toBe('/p/c')
      expect(node.children?.[0].children?.[0].to).toBe('/p/c/g')
    })

    it('handles mixed pages and nested sections', () => {
      const page1 = page('p1', 'P1', MockChildComponent)
      const nested = section('nested', 'Nested', MockComponent, [
        page('inside', 'Inside', MockGrandChildComponent),
      ])
      const page2 = page('p2', 'P2', MockChildComponent)

      const node = section('root', 'Root', MockComponent, [
        page1,
        nested,
        page2,
      ])

      expect(node.children?.[0].to).toBe('/root/p1')
      expect(node.children?.[1].to).toBe('/root/nested')
      expect(node.children?.[1].children?.[0].to).toBe('/root/nested/inside')
      expect(node.children?.[2].to).toBe('/root/p2')
    })

    it('supports empty children array', () => {
      const node = section('parent', 'Parent', MockComponent, [])
      expect(node.children).toEqual([])
    })
  })

  describe('index', () => {
    it('creates an index route with index: true', () => {
      const node = index(MockIndexComponent)

      expect(node).toEqual({
        id: '__index__',
        label: '',
        to: '',
        index: true,
        component: MockIndexComponent,
      })
    })

    it('does not call joinPaths', () => {
      index(MockIndexComponent)
      expect(mockedJoinPaths).not.toHaveBeenCalled()
    })
  })

  describe('section with index route', () => {
    it('handles index and normal children together', () => {
      const indexRoute = index(MockIndexComponent)
      const child = page('child', 'Child', MockChildComponent)

      const node = section('parent', 'Parent', MockComponent, [
        indexRoute,
        child,
      ])

      expect(node.children?.[0]).toMatchObject({
        id: '__index__',
        index: true,
        to: '',
        component: MockIndexComponent,
      })

      expect(node.children?.[1].to).toBe('/parent/child')
    })

    it('skips index when building child paths', () => {
      const node = section('parent', 'Parent', MockComponent, [
        index(MockIndexComponent),
      ])

      expect(node.children?.[0].to).toBe('')
      expect(mockedJoinPaths).toHaveBeenCalledWith('parent')
    })
  })
})
