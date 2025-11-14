import { type NavigationLinks } from '@/types/navigation'

import { type ButtonProps } from '../ui/button'
import { NavigationItem } from './nav-list-item'

interface NavigationListProps {
  links: NavigationLinks
  listClassName?: string
  linkClassName?: string
  linkActiveClassName?: string
  buttonProps?: ButtonProps
  buttonClassName?: string
  buttonActiveClassName?: string
}

export const NavigationList = ({
  links,
  listClassName,
  linkClassName,
  linkActiveClassName,
  buttonProps,
  buttonClassName,
  buttonActiveClassName,
}: NavigationListProps) => {
  return (
    <ul className={listClassName}>
      {links.map((link) => (
        <li key={link.to}>
          <NavigationItem
            to={link.to}
            label={link.label}
            linkClassName={linkClassName}
            linkActiveClassName={linkActiveClassName}
            buttonProps={buttonProps}
            buttonClassName={buttonClassName}
            buttonActiveClassName={buttonActiveClassName}
          />
        </li>
      ))}
    </ul>
  )
}
