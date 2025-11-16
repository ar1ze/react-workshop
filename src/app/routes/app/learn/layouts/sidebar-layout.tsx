import { Outlet } from 'react-router'

import { SidebarLayout } from '@/components/layouts'
import { Sidebar } from '@/components/ui/sidebar'

import { LearnNavigationBar } from '../components/nav-bar' // Import the new component

const createSidebar = () => {
  return (
    <Sidebar className="border-r px-4">
      <LearnNavigationBar />
    </Sidebar>
  )
}

export const LearnSidebarLayout = () => {
  const sidebar = createSidebar()
  return (
    <SidebarLayout sidebar={sidebar} className="grid-cols-[20rem_1fr]">
      <Outlet />
    </SidebarLayout>
  )
}
