import { NavLink, useLocation } from 'react-router'

import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { arePathsEqual } from '@/utils/path'

import { type NavigationLink } from './types'

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
