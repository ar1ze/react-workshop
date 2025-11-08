import { navigationSections } from '@/config/navigation'

import { NavigationSectionList } from './navigation-section'

export const MainNavigation = () => {
  return (
    <>
      <NavigationSectionList sections={navigationSections} />
    </>
  )
}
