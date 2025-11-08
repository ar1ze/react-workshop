import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { MainLayout } from '@/components/layout/main-layout'

import { ErrorPage, RootPage } from './routes/base'
import {
  PageSectionOneRootPage,
  PageSectionOneSubPageOne,
  PageSectionOneSubPageTwo,
} from './routes/sections/page-section-one'
import {
  PageSectionTwoRootPage,
  PageSectionTwoSubPageOne,
  PageSectionTwoSubPageTwo,
} from './routes/sections/page-section-two'

const pageSectionOneChildren = [
  {
    index: true,
    Component: PageSectionOneRootPage,
  },
  {
    path: 'subpage-one',
    Component: PageSectionOneSubPageOne,
  },
  {
    path: 'subpage-two',
    Component: PageSectionOneSubPageTwo,
  },
]

const pageSectionTwoChildren = [
  {
    index: true,
    Component: PageSectionTwoRootPage,
  },
  {
    path: 'subpage-one',
    Component: PageSectionTwoSubPageOne,
  },
  {
    path: 'subpage-two',
    Component: PageSectionTwoSubPageTwo,
  },
]

const pageSectionChildren = [
  {
    index: true,
    Component: RootPage,
  },
  {
    path: 'page-section-one',
    children: pageSectionOneChildren,
  },
  {
    path: 'page-section-two',
    children: pageSectionTwoChildren,
  },
]

const createAppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      children: pageSectionChildren,
    },
    {
      path: '*',
      Component: ErrorPage,
    },
  ])
  return router
}

export const AppRouter = () => {
  const router = createAppRouter()
  return <RouterProvider router={router} />
}
