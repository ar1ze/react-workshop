import {
  type NavigationLinks,
  type NavigationSections,
} from '@/config/nav-types'

import { NavigationList } from './nav-list'
import { NavigationItem } from './nav-list-item'

interface NavigationSectionItemProps {
  to: string
  label: string
  links: NavigationLinks
}

const NavigationSectionItem = ({
  label,
  to,
  links,
}: NavigationSectionItemProps) => {
  const className = 'text-sm'
  return (
    <div>
      <NavigationItem to={to} label={label} className={className} />
      <NavigationList links={links} listItemClassName="font-normal" />
    </div>
  )
}

interface NavigationSectionProps {
  sections: NavigationSections
}

export const NavigationSectionList = ({ sections }: NavigationSectionProps) => {
  return (
    <>
      {sections.map((section) => {
        return (
          <NavigationSectionItem
            key={section.id}
            label={section.label}
            to={section.to}
            links={section.links}
          />
        )
      })}
    </>
  )
}
