import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { AppLayout } from '@/app/layouts/app-layout'

import { ErrorPage, RootPage } from './routes/base'
import { pagesChildren } from './routes/pages/routes'

const thisChildren = [
  {
    index: true,
    Component: RootPage,
  },
  ...pagesChildren,
]

const routerBaseName = import.meta.env.VITE_BASE_URL || '/'

const createAppRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        Component: AppLayout,
        children: thisChildren,
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
