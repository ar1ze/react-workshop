import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/utils/path', () => ({
  joinPaths: vi.fn(),
}))

import { joinPaths } from '@/utils/path'

import { index, page, section } from './builder'

const mockedJoinPaths = vi.mocked(joinPaths)

const mockJoinPathsImplementation = (...segments: string[]): string => {
  const joined = '/' + segments.join('/')
  const path = joined.replace(/\/+/g, '/')
  return path === '/' ? '/' : path.replace(/\/+$/, '')
}

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
    it('creates a leaf page with a generated path and component', () => {
      const node = page('page-one', 'Page One', MockComponent)

      expect(node).toEqual({
        id: 'page-one',
        label: 'Page One',
        to: '/page-one',
        component: MockComponent,
        children: undefined,
      })

      expect(mockedJoinPaths).toHaveBeenCalledWith('page-one')
    })

    it('handles multi-segment ids', () => {
      const node = page('foo-bar', 'Foo Bar', MockComponent)

      expect(node.to).toBe('/foo-bar')
      expect(mockedJoinPaths).toHaveBeenCalledWith('foo-bar')
    })

    it('never includes children for pages', () => {
      const node = page('no-children', 'No Children', MockComponent)
      expect(node.children).toBeUndefined()
    })
  })

  describe('section', () => {
    it('creates a section with processed child paths', () => {
      const child = page('child-one', 'Child One', MockChildComponent)
      const node = section('parent', 'Parent', MockComponent, [child])

      expect(node.to).toBe('/parent')
      expect(node.children?.[0]).toMatchObject({
        id: 'child-one',
        label: 'Child One',
        component: MockChildComponent,
        to: '/parent/child-one',
      })

      expect(mockedJoinPaths).toHaveBeenCalledWith('parent')
      expect(mockedJoinPaths).toHaveBeenCalledWith('child-one')
      expect(mockedJoinPaths).toHaveBeenCalledWith('/parent', 'child-one')
    })

    it('handles multiple children', () => {
      const childOne = page('child-one', 'Child One', MockChildComponent)
      const childTwo = page('child-two', 'Child Two', MockChildComponent)

      const node = section('parent', 'Parent', MockComponent, [
        childOne,
        childTwo,
      ])

      const paths = node.children?.map((n) => n.to)
      expect(paths).toEqual(['/parent/child-one', '/parent/child-two'])
    })

    it('recursively builds nested paths', () => {
      const grandChild = page(
        'grand-child',
        'Grand Child',
        MockGrandChildComponent
      )
      const childSection = section('child', 'Child', MockChildComponent, [
        grandChild,
      ])
      const root = section('root', 'Root', MockComponent, [childSection])

      expect(root.children?.[0].to).toBe('/root/child')
      expect(root.children?.[0].children?.[0].to).toBe(
        '/root/child/grand-child'
      )
    })

    it('supports mixed pages and nested sections', () => {
      const pageOne = page('page-one', 'Page One', MockChildComponent)
      const nestedSection = section('nested', 'Nested', MockComponent, [
        page('inside', 'Inside', MockGrandChildComponent),
      ])
      const pageTwo = page('page-two', 'Page Two', MockChildComponent)

      const node = section('root', 'Root', MockComponent, [
        pageOne,
        nestedSection,
        pageTwo,
      ])

      expect(node.children?.[0].to).toBe('/root/page-one')
      expect(node.children?.[1].to).toBe('/root/nested')
      expect(node.children?.[1].children?.[0].to).toBe('/root/nested/inside')
      expect(node.children?.[2].to).toBe('/root/page-two')
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

  describe('section with index', () => {
    it('keeps index routes untouched and processes normal children', () => {
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

    it('does not use joinPaths for index children', () => {
      const indexRoute = index(MockIndexComponent)
      section('parent', 'Parent', MockComponent, [indexRoute])

      expect(mockedJoinPaths).toHaveBeenCalledWith('parent')
      expect(mockedJoinPaths).not.toHaveBeenCalledWith('', '__index__')
    })
  })
})
