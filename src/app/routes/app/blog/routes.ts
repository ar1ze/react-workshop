import { page } from '@/utils/nav-builder'
import { navigationToRoutes } from '@/utils/nav-to-routes'

import { BlogPage } from './root-page'

export const BLOG_PAGE_PREFIX = 'blog'

export const BlogNavigationConfig = [page('blog', 'Blog', BlogPage)]

export const BlogNavigationRoutes = navigationToRoutes(BlogNavigationConfig)
