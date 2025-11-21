import { Sidebar, SidebarContent, SidebarGroup } from '@/components/ui/sidebar'

import { LearnNavAccordion } from './nav-accordion'

export const LearnSidebar = () => {
  return (
    <Sidebar className="absolute m-0 h-full border-none">
      <SidebarContent className="bg-background">
        <SidebarGroup className="bg-background flex flex-col gap-2 p-0">
          <h6 className="text-muted-foreground pl-4 text-xs font-bold tracking-wider uppercase">
            Learn React
          </h6>
          <LearnNavAccordion />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
