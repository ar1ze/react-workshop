import { NavLink } from 'react-router'

import { ThemeButton } from '../theme/theme-button'
import { Button } from '../ui/button'

const AppHeaderLogo = () => {
  return (
    <Button variant="ghost" asChild>
      <NavLink to="/" className="text-xl font-bold">
        React Workshop
      </NavLink>
    </Button>
  )
}

const AppHeaderNav = () => {
  return (
    <div className="flex gap-2">
      <ThemeButton
        buttonProps={{
          className: '[&_svg]:size-6',
        }}
        iconProps={{
          size: 48,
        }}
      />
    </div>
  )
}

export const AppHeader = () => {
  return (
    <header className="flex justify-between p-4">
      <AppHeaderLogo />
      <AppHeaderNav />
    </header>
  )
}
