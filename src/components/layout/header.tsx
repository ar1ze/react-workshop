import { NavLink } from 'react-router'

import { ThemeButton } from '../theme/theme-button'
import { Button } from '../ui/button'

const Logo = () => {
  return (
    <Button variant="ghost" asChild>
      <NavLink to="/" className="text-xl font-bold">
        React Workshop
      </NavLink>
    </Button>
  )
}

const Nav = () => {
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

export const Header = () => {
  return (
    <header className="flex justify-between border-2 border-purple-300 p-4">
      <Logo />
      <Nav />
    </header>
  )
}
