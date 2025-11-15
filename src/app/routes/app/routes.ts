import { BlogNavigationRoutes } from './blog'
import { HomeNavigationRoutes } from './home'
import { LearnNavigationRoutes } from './learn'

export const AppChildrenRoutes = [
  ...HomeNavigationRoutes,
  ...LearnNavigationRoutes,
  ...BlogNavigationRoutes,
]
