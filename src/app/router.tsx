import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import MainLayout from '@/components/layout/main-layout'

import ErrorPage from './routes/base/error-page'
import RootPage from './routes/base/root-page'
import { PageOne, PageTwo } from './routes/pages'

const pageChildren = [
  {
    index: true,
    Component: RootPage,
  },
  {
    path: 'page-one',
    Component: PageOne,
  },
  {
    path: 'page-two',
    Component: PageTwo,
  },
]

const createAppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      children: pageChildren,
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
