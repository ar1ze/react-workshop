import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import MainLayout from '@/components/layout/main-layout'

import ErrorPage from './routes/error-page'
import { PageOne, PageTwo } from './routes/pages'
import RootPage from './routes/root-page'

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
