import { page, section } from '@/utils/nav-builder'
import { navigationToRoutes } from '@/utils/nav-to-routes'

import { PageSectionTwoRootPage } from './root-page'
import { PageSectionTwoSubPageOne } from './sub-page-one'
import { PageSectionTwoSubPageTwo } from './sub-page-two'

export const PAGE_SECTION_TWO_PREFIX = 'page-section-two'

export const PageSectionTwoNavigationConfig = [
  section('page-section-two', 'Page Section Two', PageSectionTwoRootPage, [
    page('subpage-one', 'Sub Page One', PageSectionTwoSubPageOne),
    page('subpage-two', 'Sub Page Two', PageSectionTwoSubPageTwo),
  ]),
]

export const PageSectionTwoNavigationRoutes = navigationToRoutes(
  PageSectionTwoNavigationConfig
)
