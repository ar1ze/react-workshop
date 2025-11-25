import { Outlet } from 'react-router'

import { SidebarLayout } from '@/components/layouts/sidebar'
import { SidebarInset } from '@/components/ui/sidebar'

import { LearnSidebar } from '../components/sidebar'

export const LearnSidebarLayout = () => {
  const sidebar = <LearnSidebar />
  return (
    <div className="relative h-full w-full">
      <SidebarLayout
        sidebar={sidebar}
        className="h-full min-h-0 md:[--sidebar-width:16rem]! lg:[--sidebar-width:18rem]!"
      >
        <SidebarInset>
          <Outlet />
        </SidebarInset>
      </SidebarLayout>
    </div>
  )
}
