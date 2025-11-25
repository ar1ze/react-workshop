import { SectionHeader } from '@/components/shared/headings'
import { Sidebar, SidebarContent, SidebarGroup } from '@/components/ui/sidebar'

import { LearnNavigationSidebarAccordion } from './navigation'

export const LearnSidebar = () => {
  return (
    <Sidebar className="absolute m-0 h-full border-none">
      <SidebarContent className="bg-background">
        <SidebarGroup className="bg-background flex flex-col gap-2 p-0">
          <SectionHeader className="pl-4 text-xs tracking-wide">
            Learn React
          </SectionHeader>
          <LearnNavigationSidebarAccordion />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
