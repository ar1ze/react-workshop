import { Outlet } from 'react-router'

import { SidebarLayout } from '@/components/layouts'
import { NavigationList } from '@/components/navigation'
import { Sidebar } from '@/components/ui/sidebar'

import { LearnPageNavigationLinks } from './routes'

const createSidebar = () => {
  return (
    <Sidebar className="border-r px-4">
      <NavigationList links={LearnPageNavigationLinks} />
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
