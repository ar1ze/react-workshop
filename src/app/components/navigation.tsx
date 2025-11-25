import { useLocation } from 'react-router'

import { AppNavigationLinks } from '@/app/routes'
import { NavigationLinkStyled } from '@/components/navigation'
import { NavigationButton } from '@/components/navigation'
import type { BaseProps } from '@/components/shared'
import { pathStartsWith } from '@/utils/path'

interface AppNavigationProps extends BaseProps {
  activeClassname?: string
  onClick?: () => void
}

export const AppNavigationDesktopLinks = ({
  className,
  onClick,
}: AppNavigationProps) => {
  return AppNavigationLinks.map(({ to, label }) => (
    <NavigationLinkStyled
      key={to}
      to={to}
      label={label}
      className={className}
      onClick={onClick}
    />
  ))
}

export const AppNavigationMobileButtons = ({
  className,
  activeClassname,
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
            activeClassName={activeClassname}
            isActive={isActive}
            onClick={onClick}
          />
        )
      })}
    </>
  )
}
