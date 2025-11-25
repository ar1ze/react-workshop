import { index, navigationToRoutes } from '@/utils/navigation'

import { HomePage } from './page'

export const HomeNavigationConfig = [index(HomePage)]

export const HomeNavigationRoutes = navigationToRoutes(HomeNavigationConfig)
