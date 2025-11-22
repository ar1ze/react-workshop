import { pathStartsWith } from '@/utils/path'

import { BLOG_PAGE_PREFIX } from '../routes/blog'
import { LEARN_PAGE_PREFIX } from '../routes/learn'

export const isHomePage = (path: string) => {
  return path === '/'
}

export const isLearnPage = (path: string) => {
  return pathStartsWith(path, LEARN_PAGE_PREFIX)
}

export const isBlogPage = (path: string) => {
  return pathStartsWith(path, BLOG_PAGE_PREFIX)
}
