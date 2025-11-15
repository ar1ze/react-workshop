import { index } from '@/utils/nav-builder'
import { navigationToRoutes } from '@/utils/nav-to-routes'

import { HomePage } from './root-page'

export const HomeNavigationConfig = [index(HomePage)]

export const HomeNavigationRoutes = navigationToRoutes(HomeNavigationConfig)
