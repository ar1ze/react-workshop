import { page, section } from '@/utils/nav-builder'
import { navigationToRoutes } from '@/utils/nav-to-routes'

import { PageSectionOneRootPage } from './root-page'
import { PageSectionOneSubPageOne } from './sub-page-one'
import { PageSectionOneSubPageTwo } from './sub-page-two'

export const PAGE_SECTION_ONE_PREFIX = 'page-section-one'

export const PageSectionOneNavigationConfig = [
  section('page-section-one', 'Page Section One', PageSectionOneRootPage, [
    page('subpage-one', 'Sub Page One', PageSectionOneSubPageOne),
    page('subpage-two', 'Sub Page Two', PageSectionOneSubPageTwo),
  ]),
]

export const PageSectionOneNavigationRoutes = navigationToRoutes(
  PageSectionOneNavigationConfig
)
