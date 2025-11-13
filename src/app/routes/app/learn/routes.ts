import { type RouteObject } from 'react-router'

import { joinPaths } from '@/utils/path'

import { PageOne, PageTwo } from '../../patterns/pages/pages'
import { LearnPageLayout } from './layout'
import { LearnRootPage } from './root-page'

export const LEARN_PAGE_PREFIX = 'learn'

const PATH_PAGE_ONE = joinPaths(LEARN_PAGE_PREFIX, 'page-one')
const PATH_PAGE_TWO = joinPaths(LEARN_PAGE_PREFIX, 'page-two')

const LearnPageChildren: RouteObject[] = [
  { index: true, Component: LearnRootPage },
  { path: PATH_PAGE_ONE, Component: PageOne },
  { path: PATH_PAGE_TWO, Component: PageTwo },
]

export const learnPageRouteObject: RouteObject = {
  path: LEARN_PAGE_PREFIX,
  Component: LearnPageLayout,
  children: LearnPageChildren,
}
