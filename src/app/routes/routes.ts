import { type NavigationLink } from '@/types/navigation'

import { BLOG_PAGE_PREFIX, BlogNavigationRoutes } from './blog'
import { HomeNavigationRoutes } from './home'
import { LEARN_PAGE_PREFIX, LearnNavigationRoutes } from './learn'

export const AppNavigationLinks: NavigationLink[] = [
  { to: LEARN_PAGE_PREFIX, label: 'Learn' },
  { to: BLOG_PAGE_PREFIX, label: 'Blog' },
]

export const AppChildrenRoutes = [
  ...HomeNavigationRoutes,
  ...LearnNavigationRoutes,
  ...BlogNavigationRoutes,
]
