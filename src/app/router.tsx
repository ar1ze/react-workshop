import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { AppLayout } from '@/app/layouts'

import { NotFoundPage } from '../components/common'
import { AppChildrenRoutes } from './routes/app'

const routerBaseName = import.meta.env.VITE_BASE_URL || '/'

const createAppRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        Component: AppLayout,
        children: AppChildrenRoutes,
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
