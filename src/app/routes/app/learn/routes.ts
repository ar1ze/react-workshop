import { navigationToRoutes, section } from '@/utils/navigation'

import { LearnSidebarLayout } from './layouts/sidebar-layout'
import { OverviewSectionNavigationConfig } from './sections/00-overview'

export const LEARN_PAGE_PREFIX = 'learn'

export const LearnNavigationConfig = [
  section('learn', 'Overview', LearnSidebarLayout, [
    ...OverviewSectionNavigationConfig,
  ]),
]

export const LearnNavigationRoutes = navigationToRoutes(LearnNavigationConfig)
