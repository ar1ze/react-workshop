import { Outlet } from 'react-router'

import { SidebarLayout } from '@/components/layouts'
import { NavigationList } from '@/components/navigation'
import { Sidebar } from '@/components/ui/sidebar'
import { flattenNavigationTree, groupNodesBySection } from '@/utils/navigation'
import { arePathsEqual, joinPaths } from '@/utils/path'

import { LearnNavigationConfig } from '../routes'

const PageNavigationBar = () => {
  const allNodesFlat = flattenNavigationTree(LearnNavigationConfig)
  const sectionLearn = joinPaths('learn')
  const sectionLearnDescribePath = joinPaths('learn', 'describing-the-ui')

  const sectionPaths = [sectionLearn, sectionLearnDescribePath]

  const allChildNodes = allNodesFlat.filter(
    (node) =>
      !arePathsEqual(node.to, sectionLearn) &&
      !arePathsEqual(node.to, sectionLearnDescribePath)
  )
  const groups = groupNodesBySection(allChildNodes, sectionPaths)

  return (
    <div className="flex flex-col gap-y-2">
      {sectionPaths.map((sectionPath) => {
        const sectionNode = allNodesFlat.filter((node) =>
          arePathsEqual(node.to, sectionPath)
        )

        const childrenNodes = groups[sectionPath]

        return (
          <NavigationList
            key={sectionPath}
            sectionNode={sectionNode[0]}
            nodes={childrenNodes}
            listClassName="flex flex-col gap-y-1"
            buttonProps={{ size: 'sm' }}
            buttonClassName="font-normal"
            buttonActiveClassName="font-bold"
          />
        )
      })}
    </div>
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
    <SidebarLayout sidebar={sidebar} className="grid-cols-[20rem_1fr]">
      <Outlet />
    </SidebarLayout>
  )
}
