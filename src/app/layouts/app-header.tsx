import { type LucideProps } from 'lucide-react'
import { NavLink } from 'react-router'

import { IconButton } from '@/components/common'
import { GithubIcon } from '@/components/icons'
import { ThemeButton } from '@/components/theme'
import { type ButtonProps } from '@/components/ui/button'

const BrandLink = () => {
  return (
    <NavLink to="/" className="text-xl font-bold">
      React Workshop
    </NavLink>
  )
}

const HeaderNavLinks = () => {
  const navLinks = [
    { to: 'learn', label: 'Learn' },
    { to: 'blog', label: 'Blog' },
  ]

  return (
    <nav className="flex gap-4">
      {navLinks.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `hover:text-primary text-base font-medium transition-colors ${
              isActive ? 'text-primary' : 'text-muted-foreground'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

const HeaderActions = () => {
  const buttonProps: ButtonProps = {
    className: '[&_svg]:size-6',
  }
  const iconProps: LucideProps = {
    size: 48,
  }
  const githubIcon = <GithubIcon {...iconProps} />

  return (
    <div className="flex gap-2">
      <ThemeButton iconProps={iconProps} buttonProps={buttonProps} />
      <IconButton
        icon={githubIcon}
        href="https://github.com/ar1ze/react-workshop"
        {...buttonProps}
      />
    </div>
  )
}

const HeaderNavigation = () => {
  return (
    <div className="flex items-center gap-6">
      <HeaderNavLinks />
      <HeaderActions />
    </div>
  )
}

export const AppHeader = () => {
  return (
    <header className="flex justify-between p-4">
      <BrandLink />
      <HeaderNavigation />
    </header>
  )
}
