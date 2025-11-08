import {
  type NavigationLinks,
  type NavigationSections,
} from '@/config/navigation'

import NavigationItem from './navigation-item'
import NavigationList from './navigation-list'

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
      <NavigationList links={links} navItemClassNames="font-normal" />
    </div>
  )
}

interface NavigationSectionProps {
  sections: NavigationSections
}

const NavigationSectionList = ({ sections }: NavigationSectionProps) => {
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

export default NavigationSectionList
