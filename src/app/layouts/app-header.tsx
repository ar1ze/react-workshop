import { NavLink } from 'react-router'

import { IconButton } from '@/components/common'
import { GithubIcon } from '@/components/icons'
import { NavigationLinkStyled } from '@/components/navigation'
import { ThemeButton } from '@/components/theme'

import { BLOG_PAGE_PREFIX } from '../routes/app/blog'
import { LEARN_PAGE_PREFIX } from '../routes/app/learn'

const BrandLink = () => (
  <NavLink to="/" className="text-muted-background text-xl font-bold">
    <span>React Workshop</span>
  </NavLink>
)

const HeaderNavLinks = () => {
  const navLinks = [
    { to: LEARN_PAGE_PREFIX, label: 'Learn' },
    { to: BLOG_PAGE_PREFIX, label: 'Blog' },
  ]

  return (
    <nav className="flex gap-4">
      {navLinks.map(({ to, label }) => (
        <NavigationLinkStyled
          key={to}
          to={to}
          label={label}
          className="text-base font-medium"
        />
      ))}
    </nav>
  )
}

const HeaderActions = () => (
  <div className="flex">
    <IconButton
      icon={<GithubIcon />}
      href="https://github.com/ar1ze/react-workshop"
    />
    <ThemeButton />
  </div>
)

const HeaderNavigation = () => (
  <div className="flex items-center gap-2 md:gap-4">
    <HeaderNavLinks />
    <HeaderActions />
  </div>
)

export const AppHeader = () => (
  <header className="flex items-center justify-between p-4">
    <BrandLink />
    <HeaderNavigation />
  </header>
)
