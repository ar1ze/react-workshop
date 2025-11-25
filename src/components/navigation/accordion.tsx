'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronRightIcon } from 'lucide-react'
import { type ComponentProps } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'

import { type BaseProps } from '@/components/shared/props'
import { cn } from '@/lib/utils'
import { type NavigationNode } from '@/types/navigation'
import { arePathsEqual } from '@/utils/path'

type NavigationAccordionTriggerProps = ComponentProps<
  typeof AccordionPrimitive.Trigger
> & {
  sectionNode: NavigationNode
}

export const NavigationAccordionTrigger = ({
  sectionNode,
  className,
  ...props
}: NavigationAccordionTriggerProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const isActive = arePathsEqual(location.pathname, sectionNode.to)

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        asChild
        onClick={(e) => {
          if (e.currentTarget.getAttribute('data-state') === 'open') {
            e.preventDefault()
            if (location.pathname !== sectionNode.to) {
              navigate(sectionNode.to)
            }
          }
        }}
        {...props}
      >
        <Link
          to={sectionNode.to}
          className={cn(
            'focus-visible:border-ring focus-visible:ring-ring/50 hover:bg-accent flex flex-1 items-center justify-between gap-4 rounded-md px-3 py-3 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
            '[&[data-state=open]>svg]:rotate-90',
            isActive ? 'bg-accent text-accent-foreground' : 'text-foreground',
            className
          )}
        >
          {sectionNode.label}
          <ChevronRightIcon
            className={cn(
              'text-muted-foreground pointer-events-none size-5 shrink-0 transition-transform duration-200',
              isActive && 'text-accent-foreground'
            )}
            strokeWidth={2}
          />
        </Link>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

interface NavigationAccordionLinkProps extends BaseProps {
  nodes: NavigationNode[]
  activeClassName?: string
}

export function NavigationAccordionLinks({
  nodes,
  className,
  activeClassName,
}: NavigationAccordionLinkProps) {
  const location = useLocation()

  return nodes.map((node) => {
    const isActive = arePathsEqual(location.pathname, node.to)

    return (
      <li key={node.to}>
        <Link
          to={node.to}
          className={cn(
            'focus-visible:border-ring focus-visible:ring-ring/50 hover:bg-accent flex items-center rounded-md px-3 py-3 text-xs transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
            className,
            isActive ? 'bg-accent' : 'text-accent-foreground',
            isActive && activeClassName
          )}
        >
          {node.label}
        </Link>
      </li>
    )
  })
}
