import { useLocation } from 'react-router'

import { AppNavigationLinks } from '@/app/routes'
import { NavigationLinkStyled } from '@/components/navigation'
import { NavigationButton } from '@/components/navigation'
import { arePathsEqual } from '@/utils/path'
interface AppNavigationClickProps {
  onClick?: () => void
}

export const AppNavigationDesktopLinks = ({
  onClick,
}: AppNavigationClickProps) => {
  return AppNavigationLinks.map(({ to, label }) => (
    <NavigationLinkStyled
      key={to}
      to={to}
      label={label}
      className="font-medium"
      onClick={onClick}
    />
  ))
}

export const AppNavigationMobileButtons = ({
  onClick,
}: AppNavigationClickProps) => {
  const location = useLocation()
  return (
    <>
      {AppNavigationLinks.map(({ to, label }) => {
        const isActive = arePathsEqual(location.pathname, to)
        return (
          <NavigationButton
            key={to}
            to={to}
            label={label}
            className="rounded-4xl px-16 py-5 text-lg font-medium"
            activeClassName="bg-accent"
            isActive={isActive}
            onClick={onClick}
          />
        )
      })}
    </>
  )
}
