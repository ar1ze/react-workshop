import { navigationSections } from '@/config/navigation'

import { NavigationSectionList } from './nav-section-list'

export const NavigationBar = () => {
  return (
    <>
      <NavigationSectionList sections={navigationSections} />
    </>
  )
}
