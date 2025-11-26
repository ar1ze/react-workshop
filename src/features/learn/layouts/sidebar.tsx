import { Outlet } from 'react-router'

import { SidebarLayout } from '@/components/layouts/sidebar'
import { SidebarInset } from '@/components/ui/sidebar'

import { LearnSidebar } from '../components/sidebar'

export const LearnSidebarLayout = () => {
  const sidebar = <LearnSidebar />
  return (
    <div className="relative min-h-0">
      <SidebarLayout
        sidebar={sidebar}
        className="h-full md:[--sidebar-width:16rem]! lg:[--sidebar-width:18rem]!"
      >
        <SidebarInset className="overflow-y-auto">
          <Outlet />
        </SidebarInset>
      </SidebarLayout>
    </div>
  )
}
