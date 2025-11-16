import { index, navigationToRoutes } from '@/utils/navigation'

import { HomePage } from './root-page'

export const HomeNavigationConfig = [index(HomePage)]

export const HomeNavigationRoutes = navigationToRoutes(HomeNavigationConfig)
