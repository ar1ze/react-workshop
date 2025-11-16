/**
 * Joins multiple path segments into a single, normalized URL-style path.
 *
 * This function ensures the path always starts with a single `/`,
 * collapses multiple concurrent slashes, and removes any trailing slash.
 *
 * @example
 * // Returns "/users/123/profile"
 * joinPaths('users', '//123', 'profile/')
 *
 * @param segments - The path segments to join.
 * @returns A single normalized path string.
 */
export const joinPaths = (...segments: string[]): string => {
  const joined = '/' + segments.join('/')

  // Replace multiple slashes (e.g., /a///b) with a single slash
  const path = joined.replace(/\/+/g, '/')

  if (path === '/') {
    return '/'
  }

  // Remove trailing slashes (e.g., /a/b/ -> /a/b)
  return path.replace(/\/+$/, '')
}

/**
 * Normalizes a path by removing leading/trailing slashes and collapsing slashes.
 *
 * This is ideal for creating a canonical representation for comparisons.
 *
 * @example
 * // Returns "a/b/c"
 * normalizePath('/a//b/c/')
 *
 * @param path - The path string to normalize.
 * @returns The normalized path without leading or trailing slashes.
 */
export const normalizePath = (path: string): string => {
  return path.split('/').filter(Boolean).join('/')
}

/**
 * Compares two path strings for equality, ignoring formatting differences.
 *
 * It uses `normalizePath` to strip leading/trailing slashes and collapse
 * multiple slashes before comparing.
 *
 * @example
 * // Returns true
 * arePathsEqual('/users//123', 'users/123/')
 *
 * @param path1 - The first path.
 * @param path2 - The second path.
 * @returns True if the paths are semantically equal.
 */
export const arePathsEqual = (path1: string, path2: string): boolean => {
  return normalizePath(path1) === normalizePath(path2)
}

/**
 * Removes the leading slash from a path string.
 * react-router nested routes require relative paths (e.g., "profile" instead of "/profile").
 *
 * @param path - The path string.
 * @returns The path string without a leading slash.
 */
export const stripLeadingSlash = (path: string) => {
  return path.startsWith('/') ? path.slice(1) : path
}

/**
 * Converts a child's absolute path to a relative path based on its parent.
 *
 * @example
 * // Returns "profile"
 * stripPrefix("/settings/profile", "/settings")
 *
 * @param child - The child's absolute path (e.g., "/settings/profile").
 * @param parent - The parent's absolute path (e.g., "/settings").
 * @returns The child's path relative to the parent (e.g., "profile").
 */
export const stripPrefix = (child: string, parent: string) => {
  // Ensure parent path ends with '/' for correct replacement.
  const base = parent.endsWith('/') ? parent : parent + '/'
  // Remove the parent's base path from the child's path.
  return stripLeadingSlash(child.replace(base, ''))
}
