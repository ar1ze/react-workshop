import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { MainLayout } from '@/components/layout/main-layout'
import {
  PAGE_SECTION_ONE_SUB_PAGES,
  PAGE_SECTION_TWO_SUB_PAGES,
  PAGE_SECTIONS,
} from '@/config/navigation'

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
    path: PAGE_SECTION_ONE_SUB_PAGES.ONE.URL,
    Component: PageSectionOneSubPageOne,
  },
  {
    path: PAGE_SECTION_ONE_SUB_PAGES.TWO.URL,
    Component: PageSectionOneSubPageTwo,
  },
]

const pageSectionTwoChildren = [
  {
    index: true,
    Component: PageSectionTwoRootPage,
  },
  {
    path: PAGE_SECTION_TWO_SUB_PAGES.ONE.URL,
    Component: PageSectionTwoSubPageOne,
  },
  {
    path: PAGE_SECTION_TWO_SUB_PAGES.TWO.URL,
    Component: PageSectionTwoSubPageTwo,
  },
]

const pageSectionChildren = [
  {
    index: true,
    Component: RootPage,
  },
  {
    path: PAGE_SECTIONS.ONE.URL,
    children: pageSectionOneChildren,
  },
  {
    path: PAGE_SECTIONS.TWO.URL,
    children: pageSectionTwoChildren,
  },
]

const routerBaseName = import.meta.env.VITE_BASE_URL || '/'

const createAppRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        Component: MainLayout,
        children: pageSectionChildren,
      },
      {
        path: '*',
        Component: ErrorPage,
      },
    ],
    {
      basename: routerBaseName,
    }
  )
  return router
}

export const AppRouter = () => {
  const router = createAppRouter()
  return <RouterProvider router={router} />
}
