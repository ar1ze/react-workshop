import { navigationToRoutes, section } from '@/utils/navigation'

import { LearnPageLayout } from './layout'
import { OverviewSectionNavigationConfig } from './sections/00-overview'

export const LEARN_PAGE_PREFIX = 'learn'

export const LearnNavigationConfig = [
  section('learn', 'Overview', LearnPageLayout, [
    ...OverviewSectionNavigationConfig,
  ]),
]

export const LearnNavigationRoutes = navigationToRoutes(LearnNavigationConfig)
