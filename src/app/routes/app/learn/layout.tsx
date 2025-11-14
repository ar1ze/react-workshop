import { Outlet } from 'react-router'

import { SidebarLayout } from '@/components/layouts'
import { Sidebar } from '@/components/ui/sidebar'

const createSidebar = () => {
  return (
    <Sidebar className="border-r px-4">
      <p>Sidebar</p>
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
