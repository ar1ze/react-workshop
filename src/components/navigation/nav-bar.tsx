import { navigationSections } from '@/config/nav-data'

import { NavigationSectionList } from './nav-section-list'

export const NavigationBar = () => {
  return (
    <>
      <NavigationSectionList sections={navigationSections} />
    </>
  )
}
