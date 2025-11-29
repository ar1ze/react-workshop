import {
  flattenNavigationTree,
  navigationToRoutes,
  section,
} from '@/utils/navigation'

import { LearnSidebarLayout } from './layouts/sidebar'
import {
  AddingInteractivitySectionNavigationConfig,
  DescribingTheUISectionNavigationConfig,
  EscapeHatchesSectionNavigationConfig,
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
      ...EscapeHatchesSectionNavigationConfig,
    ],
    'Overview'
  ),
]

export const LearnNavigationConfigFlat = flattenNavigationTree(
  LearnNavigationConfig
)

export const LearnNavigationRoutes = navigationToRoutes(LearnNavigationConfig)
