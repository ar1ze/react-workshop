import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/utils/path', () => ({
  joinPaths: vi.fn(),
}))

import { joinPaths } from '@/utils/path'

import { page, section } from './nav-builder'

const mockedJoinPaths = vi.mocked(joinPaths)

const mockJoinPathsImplementation = (...segments: string[]): string => {
  const joined = '/' + segments.join('/')
  const path = joined.replace(/\/+/g, '/')
  if (path === '/') {
    return '/'
  }
  return path.replace(/\/+$/, '')
}

describe('navigation-builder', () => {
  beforeEach(() => {
    mockedJoinPaths.mockClear()
    mockedJoinPaths.mockImplementation(mockJoinPathsImplementation)
  })

  describe('page', () => {
    it('should create a page with an auto-generated path', () => {
      const node = page('page1', 'Page 1')

      expect(node).toEqual({ id: 'page1', label: 'Page 1', to: '/page1' })
      expect(mockedJoinPaths).toHaveBeenCalledWith('page1')
      expect(mockedJoinPaths).toHaveBeenCalledTimes(1)
    })

    it('should handle multi-segment IDs', () => {
      const node = page('multi-segment-page', 'Multi Segment Page')

      expect(node.to).toBe('/multi-segment-page')
      expect(mockedJoinPaths).toHaveBeenCalledWith('multi-segment-page')
      expect(mockedJoinPaths).toHaveBeenCalledTimes(1)
    })

    it('should not include children property', () => {
      const node = page('page2', 'Page 2')

      expect(node.children).toBeUndefined()
      expect(Object.keys(node)).toEqual(['id', 'label', 'to'])
    })
  })

  describe('section', () => {
    it('should create a section with auto-generated path and children', () => {
      const child = page('child1', 'Child 1')
      const node = section('parent', 'Parent', [child])

      expect(node.id).toBe('parent')
      expect(node.to).toBe('/parent')
      expect(node.children).toBeDefined()
      expect(node.children).toHaveLength(1)
      expect(node.children?.[0].to).toBe('/parent/child1')

      expect(mockedJoinPaths).toHaveBeenCalledWith('parent')
      expect(mockedJoinPaths).toHaveBeenCalledWith('child1')
      expect(mockedJoinPaths).toHaveBeenCalledWith('/parent', 'child1')
      expect(mockedJoinPaths).toHaveBeenCalledTimes(3)
    })

    it('should handle multiple children at the same level', () => {
      const child1 = page('child1', 'Child 1')
      const child2 = page('child2', 'Child 2')
      const node = section('parent', 'Parent', [child1, child2])

      expect(node.children).toHaveLength(2)
      expect(node.children?.[0].to).toBe('/parent/child1')
      expect(node.children?.[1].to).toBe('/parent/child2')

      expect(mockedJoinPaths).toHaveBeenCalledWith('parent')
      expect(mockedJoinPaths).toHaveBeenCalledWith('child1')
      expect(mockedJoinPaths).toHaveBeenCalledWith('/parent', 'child1')
      expect(mockedJoinPaths).toHaveBeenCalledWith('child2')
      expect(mockedJoinPaths).toHaveBeenCalledWith('/parent', 'child2')
    })

    it('should recursively build paths for nested sections', () => {
      const grandChild = page('grandchild-page', 'Grandchild Page')
      const child = section('child-section', 'Child Section', [grandChild])
      const node = section('parent', 'Parent', [child])

      expect(node.to).toBe('/parent')
      expect(node.children?.[0].to).toBe('/parent/child-section')
      expect(node.children?.[0].children?.[0].to).toBe(
        '/parent/child-section/grandchild-page'
      )

      expect(mockedJoinPaths).toHaveBeenCalledWith('parent')
      expect(mockedJoinPaths).toHaveBeenCalledWith('child-section')
      expect(mockedJoinPaths).toHaveBeenCalledWith('/parent', 'child-section')
      expect(mockedJoinPaths).toHaveBeenCalledWith('grandchild-page')
      expect(mockedJoinPaths).toHaveBeenCalledWith(
        '/parent/child-section',
        'grandchild-page'
      )
    })

    it('should handle deeply nested sections (3+ levels)', () => {
      const greatGrandChild = page('great-grandchild', 'Great Grandchild')
      const grandChild = section('grandchild-section', 'Grandchild Section', [
        greatGrandChild,
      ])
      const child = section('child-section', 'Child Section', [grandChild])
      const node = section('parent', 'Parent', [child])

      expect(node.to).toBe('/parent')
      expect(node.children?.[0].to).toBe('/parent/child-section')
      expect(node.children?.[0].children?.[0].to).toBe(
        '/parent/child-section/grandchild-section'
      )
      expect(node.children?.[0].children?.[0].children?.[0].to).toBe(
        '/parent/child-section/grandchild-section/great-grandchild'
      )
    })

    it('should handle sections with mixed pages and nested sections', () => {
      const page1 = page('child-page1', 'Child Page 1')
      const nestedSection = section('child-section2', 'Child Section 2', [
        page('grandchild-page', 'Grandchild Page'),
      ])
      const page2 = page('child-page2', 'Child Page 2')

      const node = section('parent', 'Parent', [page1, nestedSection, page2])

      expect(node.children).toHaveLength(3)
      expect(node.children?.[0].to).toBe('/parent/child-page1')
      expect(node.children?.[1].to).toBe('/parent/child-section2')
      expect(node.children?.[1].children?.[0].to).toBe(
        '/parent/child-section2/grandchild-page'
      )
      expect(node.children?.[2].to).toBe('/parent/child-page2')
    })

    it('should always include children array even if empty', () => {
      const node = section('parent', 'Parent', [])

      expect(node.children).toBeDefined()
      expect(node.children).toHaveLength(0)
      expect(Array.isArray(node.children)).toBe(true)
    })
  })
})
