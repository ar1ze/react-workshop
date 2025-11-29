import { type MouseEventHandler } from 'react'
import { NavLink } from 'react-router'

import { type BaseProps } from '@/components/shared/props'
import { cn } from '@/lib/utils'

import { type NavigationLinkProps } from './types'

interface NavigationLinkComponentProps extends NavigationLinkProps, BaseProps {
  activeClassName?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const NavigationLink = ({
  to,
  label,
  className,
  activeClassName,
}: NavigationLinkComponentProps) => {
  return (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) =>
        cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 text-foreground rounded-md px-2 py-1 transition-colors outline-none focus-visible:ring-[3px]',
          className,
          isActive && activeClassName ? activeClassName : ''
        )
      }
    >
      {label}
    </NavLink>
  )
}
