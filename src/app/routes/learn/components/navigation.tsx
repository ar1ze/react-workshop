import { Fragment } from 'react'

import {
  NavigationAccordionLinks,
  NavigationAccordionTrigger,
} from '@/components/navigation'
import { NavigationButton } from '@/components/navigation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { type BaseProps } from '@/types/props'

import { useLearnNavigation } from '../hooks/navigation'

interface NavigationProps extends BaseProps {
  onClick: () => void
}

export const LearnNavigationSidebarAccordion = () => {
  const groups = useLearnNavigation()

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue={groups[0].sectionNode?.id}
    >
      {groups.map((group) => {
        if (!group.sectionNode) {
          return null
        }
        return (
          <AccordionItem
            key={group.sectionNode.id}
            value={group.sectionNode.id}
            className="border-none"
          >
            <NavigationAccordionTrigger
              sectionNode={group.sectionNode}
              className="rounded-l-none pl-4"
            />
            <AccordionContent className="pb-0">
              <ul>
                <NavigationAccordionLinks
                  nodes={group.childrenNodes}
                  className="rounded-l-none pl-4"
                />
              </ul>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export const LearnNavigationMobileSections = ({
  className,
  onClick,
}: NavigationProps) => {
  const groups = useLearnNavigation()
  const defaultClass =
    'h-11 justify-start font-normal rounded-none px-4 text-base'
  return (
    <>
      {groups.map((group) => {
        const { sectionNode, childrenNodes } = group
        if (!sectionNode) {
          return null
        }
        return (
          <Fragment key={sectionNode.to}>
            <NavigationButton
              to={sectionNode.to}
              label={sectionNode.label}
              className={cn(defaultClass, 'text-lg font-medium', className)}
              onClick={onClick}
              activeClassName="bg-accent"
            />
            {childrenNodes.map((childNode) => {
              return (
                <NavigationButton
                  key={childNode.to}
                  to={childNode.to}
                  label={childNode.label}
                  className={cn(
                    defaultClass,
                    'px-5 text-sm tracking-tighter',
                    className
                  )}
                  activeClassName="bg-accent"
                  onClick={onClick}
                />
              )
            })}
          </Fragment>
        )
      })}
    </>
  )
}
