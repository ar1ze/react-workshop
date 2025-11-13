import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { AppLayout } from '@/app/layouts'

import { blogPageRouteObject } from './routes/app/blog'
import { ErrorPage } from './routes/app/error'
import { HomePage } from './routes/app/home'
import { learnPageRouteObject } from './routes/app/learn'

const routerBaseName = import.meta.env.VITE_BASE_URL || '/'

const appChildren = [
  {
    index: true,
    Component: HomePage,
  },
  learnPageRouteObject,
  blogPageRouteObject,
]

const createAppRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        Component: AppLayout,
        children: appChildren,
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
