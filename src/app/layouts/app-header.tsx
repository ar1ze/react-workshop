import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

import { GithubIcon } from '@/components/icons'
import { NavigationLinkStyled } from '@/components/navigation'
import { ThemeButton } from '@/components/theme'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'
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

const HeaderNavLinks = ({ className, onClose }: LinkProps) => {
  return (
    <>
      {LearnNavigationLinks.map(({ to, label }) => (
        <NavigationLinkStyled
          key={to}
          to={to}
          label={label}
          className={className}
          onClick={onClose}
        />
      ))}
    </>
  )
}

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
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="bg-background animate-in slide-in-from-top-5 fade-in absolute top-full left-0 z-50 h-[calc(100vh-100%)] w-full border-t duration-200">
      <div className="flex h-full flex-col overflow-y-auto p-6">
        <nav className="flex flex-col gap-4">
          <HeaderNavLinks className="text-lg font-medium" onClose={onClose} />
        </nav>
        <HeaderActions className="mt-auto flex items-center gap-4 pt-6 pb-8" />
      </div>
    </div>
  )
}

const HeaderNavigation = ({
  isMobile,
  isOpen,
  onToggle,
}: {
  isMobile: boolean
  isOpen: boolean
  onToggle: () => void
}) => {
  if (isMobile) {
    return (
      <Button onClick={onToggle} variant="ghost" size="icon-lg">
        <div
          className={`transition-all duration-300 ${
            isOpen ? 'scale-110 rotate-90' : 'scale-100 rotate-0'
          }`}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </div>
        <span className="sr-only">Toggle Menu</span>
      </Button>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <nav className="flex gap-4">
        <HeaderNavLinks className="font-medium" />
      </nav>
      <HeaderActions className="flex items-center" />
    </div>
  )
}

export const AppHeader = () => {
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative flex items-center justify-between p-4">
      <BrandLink onClose={() => setMenuOpen(false)} />

      <HeaderNavigation
        isMobile={!!isMobile}
        isOpen={menuOpen}
        onToggle={() => setMenuOpen(!menuOpen)}
      />

      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
