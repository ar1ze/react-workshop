import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar'

export const LearnSidebar = () => {
  return (
    <Sidebar className="absolute h-full border-r-0 pl-4">
      <SidebarHeader className="bg-background">
        <p>Header</p>
      </SidebarHeader>
      <SidebarContent className="bg-background">
        <SidebarGroup className="bg-background">
          <p>Content</p>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-background">
        <p>Footer</p>
      </SidebarFooter>
    </Sidebar>
  )
}
