import { navigationSections } from '@/config/navigation'

import { NavigationSectionList } from './navigation-list'

export const MainNavigation = () => {
  return (
    <>
      <NavigationSectionList sections={navigationSections} />
    </>
  )
}
