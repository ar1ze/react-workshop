import { Menu } from 'lucide-react'
import { NavLink } from 'react-router'

import { GithubIcon } from '@/components/icons'
import { NavigationLinkStyled } from '@/components/navigation'
import { ThemeButton } from '@/components/theme'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'

import { LearnNavigationLinks } from './config'

const BrandLink = () => (
  <NavLink to="/" className="text-muted-background text-xl font-bold">
    <span>React Workshop</span>
  </NavLink>
)

const HeaderNavLinks = () => {
  return (
    <nav className="flex gap-4">
      {LearnNavigationLinks.map(({ to, label }) => (
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

const HeaderActions = () => {
  const icon = <GithubIcon />

  return (
    <div className="flex">
      <Button asChild variant="ghost" size="icon">
        <a
          href="https://github.com/ar1ze/react-workshop"
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </a>
      </Button>

      <ThemeButton buttonProps={{ variant: 'ghost' }} />
    </div>
  )
}

const HeaderNavigation = () => {
  const isMobile = useIsMobile()

  return isMobile ? (
    <Button variant="ghost" size="icon-lg">
      <Menu />
    </Button>
  ) : (
    <div className="flex items-center gap-2 md:gap-4">
      <HeaderNavLinks />
      <HeaderActions />
    </div>
  )
}

export const AppHeader = () => (
  <header className="flex items-center justify-between p-4">
    <BrandLink />
    <HeaderNavigation />
  </header>
)
