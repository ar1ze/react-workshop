import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { useLocation } from 'react-router'

import { GithubIcon } from '@/components/shared/icons'
import { type BaseProps } from '@/components/shared/props'
import { ThemeButton } from '@/components/shared/theme-button'
import { Button } from '@/components/ui/button'
import { LearnNavigationMobileSections } from '@/features/learn/components'
import { isHomePage, isLearnPage } from '@/features/utils'
import { cn } from '@/lib/utils'

import {
  AppNavigationDesktopLinks,
  AppNavigationMobileButtons,
} from './navigation'

interface NavigationProps {
  onClick: () => void
}

const BrandLink = ({ onClick: onClose }: NavigationProps) => (
  <NavLink to="/" className="text-xl font-bold" onClick={onClose}>
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

  return (
    <div
      className={`bg-background absolute top-full left-0 z-50 h-[calc(100vh-100%)] w-full md:hidden ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="flex h-full flex-col">
        <nav className="border-border/70 flex justify-evenly border-t py-3">
          <AppNavigationMobileButtons
            onClick={onClick}
            className="rounded-4xl px-14 text-lg font-bold"
            activeClassname="bg-accent"
          />
        </nav>
        <div className="mx-4 border-t" />
        <main className="flex flex-col overflow-y-auto pb-4">
          {(isHomePage(location.pathname) ||
            isLearnPage(location.pathname)) && (
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
          <AppNavigationDesktopLinks
            className="font-medium"
            onClick={onClick}
          />
        </nav>
        <HeaderActions className="flex items-center" />
      </div>
    </>
  )
}

export const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement
      setIsScrolled(target.scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll, { capture: true })
    return () => {
      window.removeEventListener('scroll', handleScroll, { capture: true })
    }
  }, [])

  return (
    <header
      className={cn(
        'relative z-50 flex items-center justify-between border-b border-transparent px-4 py-2 transition-all duration-100',
        isScrolled &&
          'bg-background/80 supports-backdrop-filter:bg-background/60 border-border shadow-sm backdrop-blur-md'
      )}
    >
      <BrandLink onClick={() => setMenuOpen(false)} />
      <HeaderNavigation
        isOpen={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <MobileNav isOpen={menuOpen} onClick={() => setMenuOpen(false)} />
    </header>
  )
}
