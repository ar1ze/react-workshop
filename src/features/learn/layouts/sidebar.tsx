import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'

import { SidebarLayout } from '@/components/layouts/sidebar'
import { SidebarInset } from '@/components/ui/sidebar'
import { LearnSidebar } from '@/features/learn/components'

export const LearnSidebarLayout = () => {
  const sidebar = <LearnSidebar />
  const { pathname } = useLocation()

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <div className="relative min-h-0">
      <SidebarLayout
        sidebar={sidebar}
        className="h-full min-h-0 md:[--sidebar-width:16rem]! lg:[--sidebar-width:18rem]!"
      >
        <SidebarInset className="overflow-hidden">
          <div ref={scrollRef} className="flex h-full w-full overflow-y-auto">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarLayout>
    </div>
  )
}
