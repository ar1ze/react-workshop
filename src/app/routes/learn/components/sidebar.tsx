import { SectionHeader } from '@/components/common'
import { Sidebar, SidebarContent, SidebarGroup } from '@/components/ui/sidebar'

import { LearnNavigationSidebarAccordion } from './navigation'

export const LearnSidebar = () => {
  return (
    <Sidebar className="absolute m-0 h-full border-none">
      <SidebarContent className="bg-background">
        <SidebarGroup className="bg-background flex flex-col gap-2 p-0">
          <SectionHeader>Learn React</SectionHeader>
          <LearnNavigationSidebarAccordion />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
