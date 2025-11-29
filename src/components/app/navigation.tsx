import { useLocation } from 'react-router'

import { AppNavigationLinks } from '@/app/routes'
import { NavigationButton, NavigationLink } from '@/components/navigation'
import { type BaseProps } from '@/components/shared/props'
import { pathStartsWith } from '@/utils/path'

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
    <NavigationLink
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
