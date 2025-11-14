import { type RouteObject } from 'react-router'

import { LearnPageLayout } from './layout'
import { LearnPageChildren } from './routes-pages'

export const LEARN_PAGE_PREFIX = 'learn'

export const learnPageRouteObject: RouteObject = {
  path: LEARN_PAGE_PREFIX,
  Component: LearnPageLayout,
  children: LearnPageChildren,
}
