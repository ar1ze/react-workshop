import { type MouseEventHandler } from 'react'
import { NavLink } from 'react-router'

import { type BaseProps } from '@/components/shared/props'
import { cn } from '@/lib/utils'

import { type NavigationLink } from './types'

interface NavigationLinkStyledProps extends NavigationLink, BaseProps {
  activeStyle?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const NavigationLinkStyled = ({
  to,
  label,
  className,
  activeStyle = true,
}: NavigationLinkStyledProps) => {
  return (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) =>
        cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 hover:text-primary rounded-md px-2 py-1 transition-colors outline-none focus-visible:ring-[3px]',
          isActive && activeStyle ? 'text-primary' : 'text-muted-foreground',
          className
        )
      }
    >
      {label}
    </NavLink>
  )
}
