import { describe, expect, it } from 'vitest'

import { assertKebabCase, generateLabelFromId } from './formatting'

describe('formatting', () => {
  describe('assertKebabCase', () => {
    it('accepts valid kebab-case strings', () => {
      expect(() => assertKebabCase('simple')).not.toThrow()
      expect(() => assertKebabCase('two-words')).not.toThrow()
      expect(() => assertKebabCase('level-three-depth')).not.toThrow()
      expect(() => assertKebabCase('with-numbers-123')).not.toThrow()
    })

    it('throws on empty strings', () => {
      expect(() => assertKebabCase('')).toThrow(/Invalid ID/)
    })

    it('throws on uppercase letters', () => {
      expect(() => assertKebabCase('CamelCase')).toThrow(/Invalid ID/)
      expect(() => assertKebabCase('lower-Upper')).toThrow(/Invalid ID/)
    })

    it('throws on spaces', () => {
      expect(() => assertKebabCase('has spaces')).toThrow(/Invalid ID/)
    })

    it('throws on underscores', () => {
      expect(() => assertKebabCase('snake_case')).toThrow(/Invalid ID/)
    })

    it('throws on leading or trailing dashes', () => {
      expect(() => assertKebabCase('-leading')).toThrow(/Invalid ID/)
      expect(() => assertKebabCase('trailing-')).toThrow(/Invalid ID/)
    })
  })

  describe('generateLabelFromId', () => {
    it('capitalizes single words', () => {
      expect(generateLabelFromId('dashboard')).toBe('Dashboard')
    })

    it('capitalizes multiple words and replaces dashes with spaces', () => {
      expect(generateLabelFromId('user-profile')).toBe('User Profile')
    })

    it('keeps stop words lowercase in the middle of a sentence', () => {
      expect(generateLabelFromId('state-management-with-redux')).toBe(
        'State Management with Redux'
      )
      expect(generateLabelFromId('introduction-to-react')).toBe(
        'Introduction to React'
      )
      expect(generateLabelFromId('rendering-a-list')).toBe('Rendering a List')
    })

    it('always capitalizes the first word even if it is a stop word', () => {
      expect(generateLabelFromId('a-new-feature')).toBe('A New Feature')
    })
  })
})
