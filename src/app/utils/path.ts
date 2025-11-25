import { BLOG_PAGE_PREFIX } from '@/features/blog'
import { LEARN_PAGE_PREFIX } from '@/features/learn'
import { pathStartsWith } from '@/utils/path'

export const isHomePage = (path: string) => {
  return path === '/'
}

export const isLearnPage = (path: string) => {
  return pathStartsWith(path, LEARN_PAGE_PREFIX)
}

export const isBlogPage = (path: string) => {
  return pathStartsWith(path, BLOG_PAGE_PREFIX)
}
