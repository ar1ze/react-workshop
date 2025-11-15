import { index, section } from '@/utils/nav-builder'
import { navigationToRoutes } from '@/utils/nav-to-routes'

import { PagesNavigationConfig } from '../../patterns/pages'
import { LearnPageLayout } from './layout'
import { LearnRootPage } from './root-page'

export const LEARN_PAGE_PREFIX = 'learn'

export const LearnNavigationConfig = [
  section('learn', 'Learn', LearnPageLayout, [
    index(LearnRootPage),
    ...PagesNavigationConfig,
  ]),
]

export const LearnNavigationRoutes = navigationToRoutes(LearnNavigationConfig)
