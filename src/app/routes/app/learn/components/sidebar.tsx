import { Sidebar, SidebarContent, SidebarGroup } from '@/components/ui/sidebar'

export const LearnSidebar = () => {
  return (
    <Sidebar className="absolute h-full border-r-0 pl-4">
      <SidebarContent className="bg-background">
        <SidebarGroup className="bg-background">
          <p>Content</p>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
