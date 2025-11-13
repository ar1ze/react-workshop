import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { AppLayout } from '@/app/layouts'

import { ErrorPage } from './routes/base'
import { HomePage as HomePage } from './routes/home'
import { pagesChildren } from './routes/patterns/pages'

const thisChildren = [
  {
    index: true,
    Component: HomePage,
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
