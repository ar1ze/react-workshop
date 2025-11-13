import { NavLink } from 'react-router'

import { ThemeButton } from '@/components/theme'

const AppHeaderLogo = () => {
  return (
    <NavLink to="/" className="text-xl font-bold">
      React Workshop
    </NavLink>
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
