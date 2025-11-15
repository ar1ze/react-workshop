import { Outlet } from 'react-router'

import { SidebarLayout } from '@/components/layouts'
import { NavigationList } from '@/components/navigation'
import { Sidebar } from '@/components/ui/sidebar'

import { LearnNavigationConfig } from './routes'

const PageNavigationBar = () => {
  return (
    <NavigationList
      mode="pages"
      nodes={LearnNavigationConfig}
      listClassName="flex flex-col gap-y-1"
      buttonProps={{ size: 'sm' }}
      buttonClassName="font-normal"
      buttonActiveClassName="font-bold"
    />
  )
}

const createSidebar = () => {
  return (
    <Sidebar className="border-r px-4">
      <PageNavigationBar />
    </Sidebar>
  )
}

export const LearnPageLayout = () => {
  const sidebar = createSidebar()
  return (
    <SidebarLayout sidebar={sidebar} className="grid-cols-[16rem_1fr]">
      <Outlet />
    </SidebarLayout>
  )
}
