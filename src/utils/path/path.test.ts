import { describe, expect, it } from 'vitest'

import { arePathsEqual, joinPaths, normalizePath } from './path'

describe('join', () => {
  it('should join path segments with single leading slash', () => {
    expect(joinPaths('path', 'to', 'file')).toBe('/path/to/file')
    expect(joinPaths('base', 'subpath')).toBe('/base/subpath')
  })

  it('should handle segments with slashes', () => {
    expect(joinPaths('/path/', '/to/', '/file/')).toBe('/path/to/file')
    expect(joinPaths('//path//', 'to')).toBe('/path/to')
  })

  it('should handle edge cases', () => {
    expect(joinPaths('path')).toBe('/path')
    expect(joinPaths('')).toBe('/')
    expect(joinPaths('/', '/')).toBe('/')
  })

  it('should work with navigation paths', () => {
    const base = '/page-section-one'
    expect(joinPaths(base, 'subpage-one')).toBe('/page-section-one/subpage-one')
  })
})

describe('normalize', () => {
  it('should remove leading slashes', () => {
    expect(normalizePath('/path')).toBe('path')
  })

  it('should remove leading and trailing slashes', () => {
    expect(normalizePath('/path/to/file/')).toBe('path/to/file')
    expect(normalizePath('///path///')).toBe('path')
  })

  it('should collapse multiple slashes', () => {
    expect(normalizePath('path///to//file')).toBe('path/to/file')
  })

  it('should handle edge cases', () => {
    expect(normalizePath('path/to/file')).toBe('path/to/file')
    expect(normalizePath('/')).toBe('')
    expect(normalizePath('')).toBe('')
  })
})

describe('arePathsEqual', () => {
  it('should return true for equivalent paths', () => {
    expect(arePathsEqual('/path/to/file', 'path/to/file')).toBe(true)
    expect(arePathsEqual('/path/', 'path')).toBe(true)
    expect(arePathsEqual('///path///', '/path')).toBe(true)
  })

  it('should return false for different paths', () => {
    expect(arePathsEqual('/path/one', '/path/two')).toBe(false)
    expect(arePathsEqual('page-section-one', 'page-section-two')).toBe(false)
  })

  it('should handle navigation path comparisons', () => {
    expect(arePathsEqual('/page-section-one/', 'page-section-one')).toBe(true)
    expect(arePathsEqual('/page-one', '/page-two')).toBe(false)
  })

  it('should treat empty and root as equal', () => {
    expect(arePathsEqual('', '/')).toBe(true)
    expect(arePathsEqual('/', '')).toBe(true)
  })
})
