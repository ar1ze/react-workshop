import { Outlet } from 'react-router'

import { AppHeader } from './app-header'

export const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] content-center">
      <AppHeader />
      <Outlet />
    </div>
  )
}
