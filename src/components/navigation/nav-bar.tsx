import { navigationLinks } from '@/app/routes/pages/structure'

import { NavigationList } from './nav-list'

export const NavigationBar = () => {
  return (
    <>
      <NavigationList links={navigationLinks} />
    </>
  )
}
