import { Outlet } from 'react-router'

import { SidebarLayout } from '@/components/layouts'
import { NavigationList } from '@/components/navigation'
import { Sidebar } from '@/components/ui/sidebar'
import { flattenNavigationTree } from '@/utils/navigation'

import { LearnNavigationConfig } from '../routes'

const PageNavigationBar = () => {
  const nodes = flattenNavigationTree(LearnNavigationConfig)
  const [sectionNode, ...childrenNodes] = nodes

  return (
    <NavigationList
      sectionNode={sectionNode}
      nodes={childrenNodes}
      listClassName="flex flex-col gap-y-1"
      buttonProps={{ size: 'sm' }}
      buttonClassName="font-normal"
      buttonActiveClassName="font-bold"
    />
  )
}

const createSidebar = () => {
  return (
    <Sidebar className="border-r px-4">
      <PageNavigationBar />
    </Sidebar>
  )
}

export const LearnSidebarLayout = () => {
  const sidebar = createSidebar()
  return (
    <SidebarLayout sidebar={sidebar} className="grid-cols-[16rem_1fr]">
      <Outlet />
    </SidebarLayout>
  )
}
