import { type NavigationLink } from '@/components/navigation'
import { BLOG_PAGE_PREFIX, BlogNavigationRoutes } from '@/features/blog'
import { HomeNavigationRoutes } from '@/features/home'
import { LEARN_PAGE_PREFIX, LearnNavigationRoutes } from '@/features/learn'

import { NotFoundPage } from './not-found'

const AppNavigationLinks: NavigationLink[] = [
  { to: LEARN_PAGE_PREFIX, label: 'Learn' },
  { to: BLOG_PAGE_PREFIX, label: 'Blog' },
]

const AppChildrenRoutes = [
  ...HomeNavigationRoutes,
  ...LearnNavigationRoutes,
  ...BlogNavigationRoutes,
]

export { AppChildrenRoutes, AppNavigationLinks, NotFoundPage }
