import { Outlet } from 'react-router'

import { HeaderLayout } from '@/components/layout'

import { AppHeader } from './app-header'

export const AppLayout = () => {
  const header = <AppHeader />
  const content = <Outlet />
  return <HeaderLayout header={header} content={content} />
}
