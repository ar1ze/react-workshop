/**
 * Stop words that should remain lowercase when generating labels,
 * unless they appear as the first word.
 */
const STOP_WORDS = new Set([
  'a',
  'an',
  'the',
  'and',
  'but',
  'or',
  'into',
  'for',
  'nor',
  'on',
  'at',
  'to',
  'from',
  'by',
  'with',
  'in',
  'of',
])

/**
 * Capitalizes the first letter of a word (e.g. "example" → "Example").
 */
const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1)

/**
 * Validates that an ID is strictly lower-kebab-case.
 * Throws an error if invalid.
 */
export const assertKebabCase = (id: string): void => {
  const kebabRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/
  if (!kebabRegex.test(id)) {
    throw new Error(
      `Invalid ID "${id}". IDs must be in kebab-case (e.g., 'conditional-rendering').`
    )
  }
}

/**
 * Converts kebab-case to Title Case, keeping stop words lowercase
 * (unless they are the first word).
 */
export const generateLabelFromId = (id: string): string => {
  const words = id.split('-')

  return words
    .map((word, index) => {
      // Always capitalize the first word
      if (index === 0) {
        return capitalize(word)
      }
      // Keep stop words lowercase
      if (STOP_WORDS.has(word)) {
        return word
      }
      // Capitalize other words
      return capitalize(word)
    })
    .join(' ')
}
