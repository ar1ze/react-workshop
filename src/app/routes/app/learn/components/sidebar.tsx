import { Sidebar, SidebarContent, SidebarGroup } from '@/components/ui/sidebar'

import { LearnNavAccordion } from './nav-accordion'

export const LearnSidebar = () => {
  return (
    <Sidebar className="absolute h-full border-none pl-2">
      <SidebarContent className="bg-background">
        <SidebarGroup className="bg-background">
          <LearnNavAccordion />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
