import { NavLink, useLocation } from 'react-router'
import { twMerge } from 'tailwind-merge'

import { type NavigationLink } from '@/config/navigation'

interface NavigationItemProps extends NavigationLink {
  className?: string
}

export const NavigationItem = ({
  to,
  label,
  className,
}: NavigationItemProps) => {
  const location = useLocation()
  const isActiveClass =
    location.pathname === to ? 'bg-link-bg-hover text-link-active' : ''

  const defaultClassName = `
    hover:bg-link-bg-hover
    block
    rounded-sm
    text-xs
    font-bold
    px-2 py-1.5
    transition-colors duration-500 ease-out
    hover:text-indigo-400
    ${isActiveClass}
  `
  return (
    <NavLink className={twMerge(defaultClassName, className)} to={to}>
      {label}
    </NavLink>
  )
}
