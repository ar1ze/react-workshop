import type { NavigationNode } from '@/types/navigation'
import { flattenNavigationTree } from '@/utils/nav-utils'

import type { ButtonProps } from '../ui/button'
import { NavigationItem } from './nav-list-item'
import { SectionNodeItem } from './nav-section-item'

interface NavigationListProps {
  nodes: NavigationNode[]
  mode: 'pages' | 'sections'
  listClassName?: string
  linkClassName?: string
  linkActiveClassName?: string
  buttonProps?: ButtonProps
  buttonClassName?: string
  buttonActiveClassName?: string
}

export const NavigationList = ({
  nodes,
  mode,
  listClassName,
  linkClassName,
  linkActiveClassName,
  buttonProps,
  buttonClassName,
  buttonActiveClassName,
}: NavigationListProps) => {
  if (mode === 'pages') {
    const flat = flattenNavigationTree(nodes)

    return (
      <ul className={listClassName}>
        {flat.map((node) => (
          <li key={node.to}>
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

  // Sections mode
  return (
    <ul className={listClassName}>
      {nodes.map((node) => {
        return (
          <SectionNodeItem
            key={node.id}
            node={node}
            depth={0}
            linkClassName={linkClassName}
            linkActiveClassName={linkActiveClassName}
            buttonProps={buttonProps}
            buttonClassName={buttonClassName}
            buttonActiveClassName={buttonActiveClassName}
          />
        )
      })}
    </ul>
  )
}
