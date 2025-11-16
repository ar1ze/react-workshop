import { NavigationList } from '@/components/navigation'

import { useLearnNavigation } from '../hooks/navigation'

export const LearnNavigationBar = () => {
  const navigationGroups = useLearnNavigation()

  return (
    <div className="flex flex-col gap-y-2">
      {navigationGroups.map(({ sectionNode, childrenNodes }) => {
        if (!sectionNode) return null

        return (
          <NavigationList
            key={sectionNode.id}
            sectionNode={sectionNode}
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
