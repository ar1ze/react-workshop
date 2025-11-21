import { NavLink, useLocation } from 'react-router'
import { twMerge } from 'tailwind-merge'

import { type NavigationLink } from '@/types/navigation'
import { arePathsEqual } from '@/utils/path'

import { Button, type ButtonProps } from '../ui/button'

export interface NavigationButtonProps
  extends NavigationLink,
    Omit<ButtonProps, 'asChild'> {
  activeClassName?: string
}

export const NavigationButton = ({
  to,
  label,
  className,
  activeClassName,
  variant = 'ghost',
  ...props
}: NavigationButtonProps) => {
  const location = useLocation()
  const isActive = arePathsEqual(location.pathname, to)

  return (
    <Button
      asChild
      variant={variant}
      className={twMerge(className, isActive && activeClassName)}
      {...props}
    >
      <NavLink to={to}>{label}</NavLink>
    </Button>
  )
}
