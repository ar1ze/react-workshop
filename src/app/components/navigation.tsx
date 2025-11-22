import { AppNavigationLinks } from '@/app/config'
import { NavigationLinkStyled } from '@/components/navigation'
import { NavigationButton } from '@/components/navigation'

interface LearNavigationClickProps {
  onClick?: () => void
}

export const AppNavigationHeaderLinks = ({
  onClick,
}: LearNavigationClickProps) => {
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

export const AppNavigationHeaderButtons = ({
  onClick,
}: LearNavigationClickProps) => {
  return (
    <>
      {AppNavigationLinks.map(({ to, label }) => (
        <NavigationButton
          key={to}
          to={to}
          label={label}
          className="rounded-4xl px-16 py-5 text-lg font-medium"
          activeClassName="bg-accent"
          onClick={onClick}
        />
      ))}
    </>
  )
}
