import { Outlet } from 'react-router'

import { SidebarLayout } from '@/components/layouts'
import { NavigationList } from '@/components/navigation'
import { Sidebar } from '@/components/ui/sidebar'

import { LearnPageNavigationLinks } from './routes'

const createSidebar = () => {
  return (
    <Sidebar className="border-r px-4 pr-42">
      <NavigationList
        links={LearnPageNavigationLinks}
        listClassName="flex flex-col gap-y-1"
        buttonProps={{ size: 'sm' }}
        buttonClassName="font-normal"
        buttonActiveClassName="font-bold"
      />
    </Sidebar>
  )
}

export const LearnPageLayout = () => {
  const sidebar = createSidebar()
  return (
    <SidebarLayout sidebar={sidebar}>
      <Outlet />
    </SidebarLayout>
  )
}
