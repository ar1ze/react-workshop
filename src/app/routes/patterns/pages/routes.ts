import { page } from '@/utils/nav-builder'
import { navigationToRoutes } from '@/utils/nav-to-routes'

import { PageOne, PageTwo } from './pages'

export const PAGES_PAGE_PREFIX = 'pages'

export const PagesNavigationConfig = [
  page('page-one', 'Page One', PageOne),
  page('page-two', 'Page Two', PageTwo),
]

export const PagesNavigationRoutes = navigationToRoutes(PagesNavigationConfig)
