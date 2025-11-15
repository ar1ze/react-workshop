import { index, page, section } from '@/utils/nav-builder'
import { navigationToRoutes } from '@/utils/nav-to-routes'

import { PageOne, PageTwo } from '../../patterns/pages/pages'
import { LearnPageLayout } from './layout'
import { LearnRootPage } from './root-page'

export const LEARN_PAGE_PREFIX = 'learn'

export const LearnNavigationConfig = [
  section('learn', 'Learn', LearnPageLayout, [
    index(LearnRootPage),
    page('page-one', 'Page One', PageOne),
    page('page-two', 'Page Two', PageTwo),
  ]),
]

export const LearnNavigationRoutes = navigationToRoutes(LearnNavigationConfig)
