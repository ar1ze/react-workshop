import type { MouseEventHandler } from 'react'
import { NavLink } from 'react-router'

import { type BaseProps } from '@/components/shared/props'
import { cn } from '@/lib/utils'

import { type NavigationLink } from './types'

interface NavigationLinkStyledProps extends NavigationLink, BaseProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const NavigationLinkStyled = ({
  to,
  label,
  className,
  ...props
}: NavigationLinkStyledProps) => {
  return (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) =>
        cn(
          'hover:text-primary transition-colors',
          isActive ? 'text-primary' : 'text-muted-foreground',
          className
        )
      }
      {...props}
    >
      {label}
    </NavLink>
  )
}
