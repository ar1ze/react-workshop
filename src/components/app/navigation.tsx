import { useLocation } from 'react-router'

import { AppNavigationLinks } from '@/app/routes'
import { NavigationButton, NavigationLinkStyled } from '@/components/navigation'
import { pathStartsWith } from '@/utils/path'

import { type BaseProps } from '../shared/props'

interface AppNavigationProps extends BaseProps {
  activeClassName?: string
  onClick?: () => void
}

export const AppNavigationDesktopLinks = ({
  className,
  activeClassName,
  onClick,
}: AppNavigationProps) => {
  return AppNavigationLinks.map(({ to, label }) => (
    <NavigationLinkStyled
      key={to}
      to={to}
      label={label}
      className={className}
      activeClassName={activeClassName}
      onClick={onClick}
    />
  ))
}

export const AppNavigationMobileButtons = ({
  className,
  activeClassName,
  onClick,
}: AppNavigationProps) => {
  const location = useLocation()
  return (
    <>
      {AppNavigationLinks.map(({ to, label }) => {
        const isActive = pathStartsWith(location.pathname, to)
        return (
          <NavigationButton
            key={to}
            to={to}
            label={label}
            className={className}
            activeClassName={activeClassName}
            isActive={isActive}
            onClick={onClick}
          />
        )
      })}
    </>
  )
}
