import { Outlet } from 'react-router'

import { HeaderLayout } from '@/components/layouts'

import { AppHeader } from './header'

export const AppLayout = () => {
  const header = <AppHeader />
  const content = <Outlet />
  return <HeaderLayout header={header} content={content} />
}
