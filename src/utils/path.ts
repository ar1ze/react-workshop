export const joinPaths = (...segments: string[]): string => {
  const joined = '/' + segments.join('/')

  const path = joined.replace(/\/+/g, '/')

  if (path === '/') {
    return '/'
  }

  return path.replace(/\/+$/, '')
}

export const normalizePath = (path: string): string => {
  return path.split('/').filter(Boolean).join('/')
}

export const arePathsEqual = (path1: string, path2: string): boolean => {
  return normalizePath(path1) === normalizePath(path2)
}
