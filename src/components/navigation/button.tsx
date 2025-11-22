import { NavLink, useLocation } from 'react-router'

import { cn } from '@/lib/utils'
import { type NavigationLink } from '@/types/navigation'
import { arePathsEqual } from '@/utils/path'

import { Button, type ButtonProps } from '../ui/button'

export interface NavigationButtonProps
  extends NavigationLink,
    Omit<ButtonProps, 'asChild'> {
  activeClassName?: string
  isActive?: boolean
}

export const NavigationButton = ({
  to,
  label,
  className,
  activeClassName,
  variant = 'ghost',
  isActive: isActiveProp,
  ...props
}: NavigationButtonProps) => {
  const location = useLocation()

  const isActive =
    typeof isActiveProp === 'boolean'
      ? isActiveProp
      : arePathsEqual(location.pathname, to)

  return (
    <Button
      asChild
      variant={variant}
      className={cn(className, isActive && activeClassName)}
      {...props}
    >
      <NavLink to={to}>{label}</NavLink>
    </Button>
  )
}
