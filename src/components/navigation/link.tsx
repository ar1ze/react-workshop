import { NavLink } from 'react-router'
import { twMerge } from 'tailwind-merge'

import { type NavigationLink } from '@/types/navigation'
import { type BaseProps } from '@/types/props'

interface NavigationLinkStyledProps extends NavigationLink, BaseProps {}

export const NavigationLinkStyled = ({
  to,
  label,
  className,
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
    >
      {label}
    </NavLink>
  )
}
