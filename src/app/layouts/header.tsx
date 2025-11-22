import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { useLocation } from 'react-router'

import { GithubIcon } from '@/components/icons'
import { ThemeButton } from '@/components/theme'
import { Button } from '@/components/ui/button'
import type { BaseProps } from '@/types/props'
import { normalizePath } from '@/utils/path'

import {
  AppNavigationDesktopLinks,
  AppNavigationMobileButtons,
} from '../components'
import { LearnNavigationMobileSections } from '../routes/learn/components'

interface NavigationProps {
  onClick: () => void
}

const BrandLink = ({ onClick: onClose }: NavigationProps) => (
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

interface MobileNavProps extends NavigationProps {
  isOpen: boolean
}

const MobileNav = ({ isOpen, onClick }: MobileNavProps) => {
  const location = useLocation()
  const currentPath = location.pathname
  const isHomePage = currentPath === '/'
  const isLearnPage = normalizePath(currentPath).startsWith('learn')

  return (
    <div
      className={`bg-background absolute top-full left-0 z-50 h-[calc(100vh-100%)] w-full md:hidden ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="flex h-full flex-col gap-2">
        <nav className="border-border/70 flex justify-evenly border-y py-3">
          <AppNavigationMobileButtons onClick={onClick} />
        </nav>
        <main className="flex flex-col overflow-y-auto">
          {(isHomePage || isLearnPage) && (
            <LearnNavigationMobileSections onClick={onClick} />
          )}
        </main>
        <footer className="mt-auto border-t px-4 pt-4 pb-6">
          <HeaderActions className="flex items-center gap-4" />
        </footer>
      </div>
    </div>
  )
}

interface HeaderNavigationProps extends NavigationProps {
  isOpen: boolean
}

export const HeaderNavigation = ({
  isOpen,
  onClick,
}: HeaderNavigationProps) => {
  return (
    <>
      <div className="md:hidden">
        <Button onClick={onClick} variant="ghost" size="icon-lg">
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>
      <div className="hidden items-center gap-4 md:flex">
        <nav className="flex gap-4">
          <AppNavigationDesktopLinks onClick={onClick} />
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
      <BrandLink onClick={() => setMenuOpen(false)} />
      <HeaderNavigation
        isOpen={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <MobileNav isOpen={menuOpen} onClick={() => setMenuOpen(false)} />
    </header>
  )
}
