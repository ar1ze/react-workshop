import { Sidebar, SidebarContent } from '@/components/ui/sidebar'

import { LearnNavigationSidebarAccordion } from './navigation'

export const LearnSidebar = () => {
  return (
    <Sidebar className="absolute m-0 h-full border-none pt-4">
      <SidebarContent className="bg-background">
        <LearnNavigationSidebarAccordion />
      </SidebarContent>
    </Sidebar>
  )
}
