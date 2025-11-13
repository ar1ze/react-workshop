import { type RouteObject } from 'react-router'

import { PageOne, PageTwo } from '../../patterns/pages/pages'
import { LearnPageLayout } from './layout'
import { LearnRootPage } from './root-page'

const LEARN_PAGE_PREFIX = 'learn'

const LearnPageChildren: RouteObject[] = [
  { index: true, Component: LearnRootPage },
  { path: 'learn/page-one', Component: PageOne },
  { path: 'learn/page-two', Component: PageTwo },
]

export const learnPageRouteObject: RouteObject = {
  path: LEARN_PAGE_PREFIX,
  Component: LearnPageLayout,
  children: LearnPageChildren,
}
