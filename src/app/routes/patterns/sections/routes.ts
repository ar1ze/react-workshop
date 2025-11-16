import { navigationToRoutes } from '@/utils/navigation'

import { PageSectionOneNavigationConfig } from './page-section-one'
import { PageSectionTwoNavigationConfig } from './page-section-two'

export const PageSectionsNavigationConfig = [
  ...PageSectionOneNavigationConfig,
  ...PageSectionTwoNavigationConfig,
]

export const PageSectionsNavigationRoutes = navigationToRoutes(
  PageSectionsNavigationConfig
)
