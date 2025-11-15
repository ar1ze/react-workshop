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
      const node = page('home', 'Home')

      expect(node).toEqual({ id: 'home', label: 'Home', to: '/home' })
      expect(mockedJoinPaths).toHaveBeenCalledWith('home')
      expect(mockedJoinPaths).toHaveBeenCalledTimes(1)
    })

    it('should handle multi-segment IDs', () => {
      const node = page('getting-started', 'Getting Started')

      expect(node.to).toBe('/getting-started')
      expect(mockedJoinPaths).toHaveBeenCalledWith('getting-started')
      expect(mockedJoinPaths).toHaveBeenCalledTimes(1)
    })

    it('should not include children property', () => {
      const node = page('contact', 'Contact')

      expect(node.children).toBeUndefined()
      expect(Object.keys(node)).toEqual(['id', 'label', 'to'])
    })
  })

  describe('section', () => {
    it('should create a section with auto-generated path and children', () => {
      const child = page('basics', 'Basics')
      const node = section('learn', 'Learn', [child])

      expect(node.id).toBe('learn')
      expect(node.to).toBe('/learn')
      expect(node.children).toBeDefined()
      expect(node.children).toHaveLength(1)
      expect(node.children?.[0].to).toBe('/learn/basics')

      expect(mockedJoinPaths).toHaveBeenCalledWith('learn')
      expect(mockedJoinPaths).toHaveBeenCalledWith('basics')
      expect(mockedJoinPaths).toHaveBeenCalledWith('/learn', 'basics')
      expect(mockedJoinPaths).toHaveBeenCalledTimes(3)
    })

    it('should handle multiple children at the same level', () => {
      const child1 = page('basics', 'Basics')
      const child2 = page('advanced', 'Advanced')
      const node = section('learn', 'Learn', [child1, child2])

      expect(node.children).toHaveLength(2)
      expect(node.children?.[0].to).toBe('/learn/basics')
      expect(node.children?.[1].to).toBe('/learn/advanced')

      expect(mockedJoinPaths).toHaveBeenCalledWith('learn')
      expect(mockedJoinPaths).toHaveBeenCalledWith('basics')
      expect(mockedJoinPaths).toHaveBeenCalledWith('/learn', 'basics')
      expect(mockedJoinPaths).toHaveBeenCalledWith('advanced')
      expect(mockedJoinPaths).toHaveBeenCalledWith('/learn', 'advanced')
    })

    it('should recursively build paths for nested sections', () => {
      const grandChild = page('hooks', 'Hooks')
      const child = section('react', 'React', [grandChild])
      const node = section('learn', 'Learn', [child])

      expect(node.to).toBe('/learn')
      expect(node.children?.[0].to).toBe('/learn/react')
      expect(node.children?.[0].children?.[0].to).toBe('/learn/react/hooks')

      expect(mockedJoinPaths).toHaveBeenCalledWith('learn')
      expect(mockedJoinPaths).toHaveBeenCalledWith('react')
      expect(mockedJoinPaths).toHaveBeenCalledWith('/learn', 'react')
      expect(mockedJoinPaths).toHaveBeenCalledWith('hooks')
      expect(mockedJoinPaths).toHaveBeenCalledWith('/learn/react', 'hooks')
    })

    it('should handle deeply nested sections (3+ levels)', () => {
      const greatGrandChild = page('use-effect', 'useEffect')
      const grandChild = section('hooks', 'Hooks', [greatGrandChild])
      const child = section('react', 'React', [grandChild])
      const node = section('learn', 'Learn', [child])

      expect(node.to).toBe('/learn')
      expect(node.children?.[0].to).toBe('/learn/react')
      expect(node.children?.[0].children?.[0].to).toBe('/learn/react/hooks')
      expect(node.children?.[0].children?.[0].children?.[0].to).toBe(
        '/learn/react/hooks/use-effect'
      )
    })

    it('should handle sections with mixed pages and nested sections', () => {
      const page1 = page('intro', 'Introduction')
      const nestedSection = section('advanced', 'Advanced', [
        page('performance', 'Performance'),
      ])
      const page2 = page('summary', 'Summary')

      const node = section('learn', 'Learn', [page1, nestedSection, page2])

      expect(node.children).toHaveLength(3)
      expect(node.children?.[0].to).toBe('/learn/intro')
      expect(node.children?.[1].to).toBe('/learn/advanced')
      expect(node.children?.[1].children?.[0].to).toBe(
        '/learn/advanced/performance'
      )
      expect(node.children?.[2].to).toBe('/learn/summary')
    })

    it('should always include children array even if empty', () => {
      const node = section('learn', 'Learn', [])

      expect(node.children).toBeDefined()
      expect(node.children).toHaveLength(0)
      expect(Array.isArray(node.children)).toBe(true)
    })
  })
})
