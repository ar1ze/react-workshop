import {
  type NavigationLinks,
  type NavigationSections,
} from '@/types/navigation'

import { NavigationList } from './nav-list'
import { NavigationItem } from './nav-list-item'

interface NavigationSectionItemProps {
  to: string
  label: string
  children: NavigationLinks
}
interface NavigationSectionProps {
  sections: NavigationSections
}

const NavigationSectionItem = ({
  label,
  to,
  children,
}: NavigationSectionItemProps) => {
  return (
    <div>
      <NavigationItem to={to} label={label} />
      <NavigationList links={children} />
    </div>
  )
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
            children={section.children}
          />
        )
      })}
    </>
  )
}
