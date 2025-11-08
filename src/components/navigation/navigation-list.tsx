import { twMerge } from 'tailwind-merge'

import { type NavigationLinks } from '@/config/navigation'

import { NavigationItem } from './navigation-item'

interface NavigationListProps {
  links: NavigationLinks
  classNames?: string
  navItemClassNames?: string
}

export const NavigationList = ({
  links,
  classNames,
  navItemClassNames,
}: NavigationListProps) => {
  const defaultClassName = 'flex list-none flex-col text-sm'

  return (
    <ul className={twMerge(defaultClassName, classNames)}>
      {links.map((link) => (
        <li key={link.to}>
          <NavigationItem
            to={link.to}
            label={link.label}
            className={navItemClassNames}
          />
        </li>
      ))}
    </ul>
  )
}
