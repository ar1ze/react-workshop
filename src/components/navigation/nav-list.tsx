import type { NavigationNode } from '@/types/navigation'

import type { ButtonProps } from '../ui/button'
import { NavigationItem } from './nav-list-item'

interface NavigationListProps {
  nodes: NavigationNode[]
  sectionNode?: NavigationNode
  listClassName?: string
  linkClassName?: string
  linkActiveClassName?: string
  buttonProps?: ButtonProps
  buttonClassName?: string
  buttonActiveClassName?: string
}

export const NavigationList = ({
  nodes,
  sectionNode,
  listClassName,
  linkClassName,
  linkActiveClassName,
  buttonProps,
  buttonClassName,
  buttonActiveClassName,
}: NavigationListProps) => {
  if (!sectionNode) {
    return (
      <ul className={listClassName}>
        {nodes.map((node) => (
          <li key={node.id}>
            <NavigationItem
              to={node.to}
              label={node.label}
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

  return (
    <ul className={listClassName}>
      <li key={sectionNode.id}>
        <NavigationItem
          to={sectionNode.to}
          label={sectionNode.label}
          linkClassName={linkClassName}
          linkActiveClassName={linkActiveClassName}
          buttonProps={buttonProps}
          buttonClassName={buttonClassName}
          buttonActiveClassName={buttonActiveClassName}
        />
      </li>

      {nodes.map((node) => (
        <li key={node.id} className="pl-4">
          <NavigationItem
            to={node.to}
            label={node.label}
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
