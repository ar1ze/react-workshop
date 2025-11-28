import { navigationToRoutes, section } from '@/utils/navigation'

import { LearnSidebarLayout } from './layouts/sidebar'
import {
  AddingInteractivitySectionNavigationConfig,
  DescribingTheUISectionNavigationConfig,
  ManagingStateSectionNavigationConfig,
  OverviewSectionNavigationConfig,
} from './sections'

export const LEARN_PAGE_PREFIX = 'learn'

export const LearnNavigationConfig = [
  section(
    'learn',
    LearnSidebarLayout,
    [
      ...OverviewSectionNavigationConfig,
      ...DescribingTheUISectionNavigationConfig,
      ...AddingInteractivitySectionNavigationConfig,
      ...ManagingStateSectionNavigationConfig,
    ],
    'Overview'
  ),
]

export const LearnNavigationRoutes = navigationToRoutes(LearnNavigationConfig)
