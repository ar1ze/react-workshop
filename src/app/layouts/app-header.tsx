import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

import { GithubIcon } from '@/components/icons'
import { NavigationButton } from '@/components/navigation'
import { NavigationLinkStyled } from '@/components/navigation'
import { ThemeButton } from '@/components/theme'
import { Button } from '@/components/ui/button'
import type { BaseProps } from '@/types/props'

import { LearnNavigationLinks } from './config'

type LinkProps = BaseProps & { onClose?: () => void }

const BrandLink = ({ onClose }: LinkProps) => (
  <NavLink
    to="/"
    className="text-muted-background text-xl font-bold"
    onClick={onClose}
  >
    <span>React Workshop</span>
  </NavLink>
)

const HeaderActions = ({ className }: BaseProps) => {
  return (
    <div className={className}>
      <Button asChild variant="ghost" size="icon-lg">
        <a
          href="https://github.com/ar1ze/react-workshop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="size-5" />
        </a>
      </Button>
      <ThemeButton
        buttonProps={{ variant: 'ghost', size: 'icon-lg' }}
        iconProps={{ className: 'size-6' }}
      />
    </div>
  )
}

type MobileNavProps = {
  isOpen: boolean
  onClose: () => void
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <div
      className={`bg-background absolute top-full left-0 z-50 h-[calc(100vh-100%)] w-full md:hidden ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="flex h-full flex-col overflow-y-auto">
        <nav className="border-border/70 flex justify-evenly border-y py-3">
          {LearnNavigationLinks.map(({ to, label }) => (
            <NavigationButton
              key={to}
              to={to}
              label={label}
              className="rounded-4xl px-16 text-lg font-medium"
              activeClassName="bg-accent"
              onClick={onClose}
            />
          ))}
        </nav>
        <HeaderActions className="mt-auto flex items-center gap-4 pt-6 pb-8" />
      </div>
    </div>
  )
}

type HeaderNavigationProps = {
  isOpen: boolean
  onToggle: () => void
}

export const HeaderNavigation = ({
  isOpen,
  onToggle,
}: HeaderNavigationProps) => {
  return (
    <>
      <div className="md:hidden">
        <Button onClick={onToggle} variant="ghost" size="icon-lg">
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>
      <div className="hidden items-center gap-4 md:flex">
        <nav className="flex gap-4">
          {LearnNavigationLinks.map(({ to, label }) => (
            <NavigationLinkStyled
              key={to}
              to={to}
              label={label}
              className="font-medium"
              onClick={onToggle}
            />
          ))}
        </nav>
        <HeaderActions className="flex items-center" />
      </div>
    </>
  )
}

export const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let timer: number
    const handleResize = () => {
      clearTimeout(timer)
      timer = setTimeout(() => setMenuOpen(false), 150)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="relative flex items-center justify-between p-4">
      <BrandLink onClose={() => setMenuOpen(false)} />
      <HeaderNavigation
        isOpen={menuOpen}
        onToggle={() => setMenuOpen(!menuOpen)}
      />
      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
