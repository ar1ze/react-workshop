import { navigationSections } from '@/config/navigation'

import NavigationSectionList from './navigation-section'

const MainNavigation = () => {
  return (
    <>
      <NavigationSectionList sections={navigationSections} />
    </>
  )
}

export default MainNavigation
