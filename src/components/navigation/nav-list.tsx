import { twMerge } from 'tailwind-merge'

import { type NavigationLinks } from '@/config/nav-types'

import { NavigationItem } from './nav-list-item'

interface NavigationListProps {
  links: NavigationLinks
  listClassName?: string
  itemClassName?: string
}

export const NavigationList = ({
  links,
  listClassName,
  itemClassName,
}: NavigationListProps) => {
  const defaultClassName = 'flex list-none flex-col text-sm'

  return (
    <ul className={twMerge(defaultClassName, listClassName)}>
      {links.map((link) => (
        <li key={link.to}>
          <NavigationItem
            to={link.to}
            label={link.label}
            className={itemClassName}
          />
        </li>
      ))}
    </ul>
  )
}
