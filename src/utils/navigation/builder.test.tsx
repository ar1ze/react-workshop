import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/utils/path', () => ({
  joinPaths: vi.fn(),
}))

vi.mock('@/utils/formatting/formatting', () => ({
  assertKebabCase: vi.fn((id: string) => {
    if (id === 'INVALID') throw new Error('Invalid ID')
  }),
  generateLabelFromId: vi.fn((id: string) => {
    return id
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  }),
}))

import {
  assertKebabCase,
  generateLabelFromId,
} from '@/utils/formatting/formatting'
import { joinPaths } from '@/utils/path'

import { index, page, section } from './builder'

const mockedJoinPaths = vi.mocked(joinPaths)
const mockedAssertKebab = vi.mocked(assertKebabCase)
const mockedGenerateLabel = vi.mocked(generateLabelFromId)

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
    vi.clearAllMocks()
    mockedJoinPaths.mockImplementation(mockJoinPathsImplementation)
  })

  describe('page', () => {
    it('creates a page with manual label', () => {
      const node = page('page-one', MockComponent, 'Custom Label')

      expect(mockedAssertKebab).toHaveBeenCalledWith('page-one')
      expect(node).toEqual({
        id: 'page-one',
        label: 'Custom Label',
        to: '/page-one',
        component: MockComponent,
        children: undefined,
      })
    })

    it('auto-generates label when omitted', () => {
      const node = page('page-two', MockComponent)

      expect(mockedGenerateLabel).toHaveBeenCalledWith('page-two')
      expect(node.label).toBe('Page Two')
    })

    it('throws validation error for invalid ids', () => {
      expect(() => page('INVALID', MockComponent)).toThrow('Invalid ID')
    })

    it('handles multi-segment ids', () => {
      const node = page('foo-bar', MockComponent)
      expect(node.to).toBe('/foo-bar')
    })
  })

  describe('section', () => {
    it('creates a section with auto-generated label', () => {
      const child = page('child', MockChildComponent)
      const node = section('my-section', MockComponent, [child])

      expect(mockedAssertKebab).toHaveBeenCalledWith('my-section')
      expect(mockedGenerateLabel).toHaveBeenCalledWith('my-section')

      expect(node).toMatchObject({
        id: 'my-section',
        label: 'My Section',
        to: '/my-section',
      })

      expect(node.children).toHaveLength(1)
    })

    it('creates a section with manual label', () => {
      const child = page('child', MockChildComponent)
      const node = section('my-section', MockComponent, [child], 'Manual Label')

      expect(node.label).toBe('Manual Label')
    })

    it('recursively builds nested paths', () => {
      const grandChild = page('grand-child', MockGrandChildComponent)
      const childSection = section('child', MockChildComponent, [grandChild])
      const root = section('root', MockComponent, [childSection])

      expect(root.children?.[0].to).toBe('/root/child')
      expect(root.children?.[0].children?.[0].to).toBe(
        '/root/child/grand-child'
      )
    })

    it('supports mixed pages and nested sections', () => {
      const pageOne = page('page-one', MockChildComponent)
      const nestedSection = section('nested', MockComponent, [
        page('inside', MockGrandChildComponent),
      ])
      const pageTwo = page('page-two', MockChildComponent)

      const node = section('root', MockComponent, [
        pageOne,
        nestedSection,
        pageTwo,
      ])

      expect(node.children?.[0].to).toBe('/root/page-one')
      expect(node.children?.[1].to).toBe('/root/nested')
      expect(node.children?.[1].children?.[0].to).toBe('/root/nested/inside')
      expect(node.children?.[2].to).toBe('/root/page-two')
    })
  })

  describe('index', () => {
    it('creates an index route', () => {
      const node = index(MockIndexComponent)

      expect(node).toEqual({
        id: '__index__',
        label: '',
        to: '',
        index: true,
        component: MockIndexComponent,
      })
    })
  })
})
