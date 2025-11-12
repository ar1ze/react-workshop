import { NavLink, useLocation } from 'react-router'
import { twMerge } from 'tailwind-merge'

import { type NavigationLink } from '@/config/nav-types'
import { arePathsEqual } from '@/utils/path'

import { Button } from '../ui/button'
interface NavigationItemProps extends NavigationLink {
  className?: string
}

export const NavigationItem = ({
  to,
  label,
  className,
}: NavigationItemProps) => {
  const location = useLocation()
  const isActive = arePathsEqual(location.pathname, to)

  const navLinkClass = twMerge(
    'text-sm',
    isActive
      ? 'text-link-active bg-link-active-bg hover:bg-link-active-bg hover:text-link-active'
      : ''
  )

  const buttonClass = 'flex w-full justify-start rounded-none rounded-r-md py-5'

  return (
    <Button asChild={true} variant="ghost" className={buttonClass}>
      <NavLink className={twMerge(navLinkClass, className)} to={to}>
        {label}
      </NavLink>
    </Button>
  )
}
