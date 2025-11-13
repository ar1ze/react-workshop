import { type RouteObject } from 'react-router'

import { BlogPage } from './root'

export const BLOG_PAGE_PREFIX = 'blog'

export const blogPageRouteObject: RouteObject = {
  index: true,
  path: BLOG_PAGE_PREFIX,
  Component: BlogPage,
}
