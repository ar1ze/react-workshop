import { navigationToRoutes, page } from '@/utils/navigation'

import { BlogPage } from './page'

export const BLOG_PAGE_PREFIX = 'blog'

export const BlogNavigationConfig = [page('blog', 'Blog', BlogPage)]

export const BlogNavigationRoutes = navigationToRoutes(BlogNavigationConfig)
