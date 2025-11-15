import { type NavigationNode } from '@/types/navigation'

import { type ButtonProps } from '../ui/button'
import { NavigationItem } from './nav-list-item'

interface SectionNodeProps {
  node: NavigationNode
  depth: number
  linkClassName?: string
  linkActiveClassName?: string
  buttonProps?: ButtonProps
  buttonClassName?: string
  buttonActiveClassName?: string
}

export const SectionNodeItem = ({
  node,
  depth,
  linkClassName,
  linkActiveClassName,
  buttonProps,
  buttonClassName,
  buttonActiveClassName,
}: SectionNodeProps) => {
  const indent = `pl-${depth * 4}`

  const isIndex = node.index === true

  return (
    <li className={indent}>
      {!isIndex && (
        <NavigationItem
          to={node.to}
          label={node.label}
          linkClassName={linkClassName}
          linkActiveClassName={linkActiveClassName}
          buttonProps={buttonProps}
          buttonClassName={buttonClassName}
          buttonActiveClassName={buttonActiveClassName}
        />
      )}

      {isIndex && <span className="italic opacity-70">(index)</span>}

      {node.children && node.children.length > 0 && (
        <ul>
          {node.children.map((child) => (
            <SectionNodeItem
              key={child.id}
              node={child}
              depth={depth + 1}
              linkClassName={linkClassName}
              linkActiveClassName={linkActiveClassName}
              buttonProps={buttonProps}
              buttonClassName={buttonClassName}
              buttonActiveClassName={buttonActiveClassName}
            />
          ))}
        </ul>
      )}
    </li>
  )
}
