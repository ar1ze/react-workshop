import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { AppLayout } from '@/app/layouts'

import { NotFoundPage } from '../components/common'
import { blogPageRouteObject } from './routes/app/blog'
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
        Component: NotFoundPage,
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
