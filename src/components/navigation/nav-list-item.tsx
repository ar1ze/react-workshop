import { NavLink, useLocation } from 'react-router'
import { twMerge } from 'tailwind-merge'

import { type NavigationLink } from '@/types/navigation'
import { arePathsEqual } from '@/utils/path'

import { Button } from '../ui/button'
import { type ButtonProps } from '../ui/button'

export interface NavigationItemProps extends NavigationLink {
  linkClassName?: string
  linkActiveClassName?: string
  buttonProps?: ButtonProps
  buttonClassName?: string
  buttonActiveClassName?: string
}

export const NavigationItem = ({
  to,
  label,
  linkClassName,
  linkActiveClassName,
  buttonProps,
  buttonClassName,
  buttonActiveClassName,
}: NavigationItemProps) => {
  const location = useLocation()
  const isActive = arePathsEqual(location.pathname, to)

  const navLinkClassActive = twMerge('bg-accent', linkActiveClassName)
  const navLinkClass = isActive ? navLinkClassActive : ''

  const buttonClassActive = isActive ? buttonActiveClassName : ''

  const defaultButtonProps: ButtonProps = {
    asChild: true,
    variant: 'ghost',
  }

  const mergedButtonProps = {
    ...defaultButtonProps,
    ...buttonProps,
  }

  return (
    <Button
      {...mergedButtonProps}
      className={twMerge(buttonClassName, buttonClassActive)}
    >
      <NavLink className={twMerge(navLinkClass, linkClassName)} to={to}>
        {label}
      </NavLink>
    </Button>
  )
}
