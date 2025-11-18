import { Outlet } from 'react-router'

import { SidebarLayout } from '@/components/layouts/sidebar'
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { useIsMobile } from '@/hooks/use-mobile'

import { LearnSidebar } from '../components/sidebar'

export const LearnSidebarLayout = () => {
  const sidebar = <LearnSidebar />
  const isMobile = useIsMobile()

  return (
    <div className="relative h-full w-full">
      <SidebarLayout sidebar={sidebar} className="h-full min-h-0">
        <div className="pl-4">{isMobile && <SidebarTrigger />}</div>
        <SidebarInset>
          <Outlet />
        </SidebarInset>
      </SidebarLayout>
    </div>
  )
}
