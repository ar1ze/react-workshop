'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronRightIcon } from 'lucide-react'
import * as React from 'react'
import { Link, useLocation } from 'react-router'

import { cn } from '@/lib/utils'
import { type NavigationNode } from '@/types/navigation'
import { arePathsEqual } from '@/utils/path'

type NavigationAccordionTriggerProps = React.ComponentProps<
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
  const isActive = arePathsEqual(location.pathname, sectionNode.to)

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        asChild
        onClick={(e) => {
          if (isActive) {
            e.preventDefault()
          }
        }}
        {...props}
      >
        <Link
          to={sectionNode.to}
          className={cn(
            'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
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
            strokeWidth={3}
          />
        </Link>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}
