import { navigationPageLinks } from '@/app/routes/patterns/pages'

import { NavigationList } from './nav-list'

export const NavigationBar = () => {
  return (
    <>
      <NavigationList links={navigationPageLinks} />
    </>
  )
}
