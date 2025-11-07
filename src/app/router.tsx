import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import ErrorPage from './routes/error-page'
import HomePage from './routes/home-page'

const createAppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: HomePage,
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
