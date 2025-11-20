import type { MouseEventHandler } from 'react'
import { NavLink } from 'react-router'
import { twMerge } from 'tailwind-merge'

import { type NavigationLink } from '@/types/navigation'
import { type BaseProps } from '@/types/props'

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
        twMerge(
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
