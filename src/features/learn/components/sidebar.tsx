import { Sidebar, SidebarContent, SidebarGroup } from '@/components/ui/sidebar'
import { TypographyOverline } from '@/components/ui/typography'

import { LearnNavigationSidebarAccordion } from './navigation'

export const LearnSidebar = () => {
  return (
    <Sidebar className="absolute m-0 h-full border-none">
      <SidebarContent className="bg-background">
        <SidebarGroup className="bg-background flex flex-col gap-2 p-0">
          <TypographyOverline className="pl-4">Learn React</TypographyOverline>
          <LearnNavigationSidebarAccordion />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
