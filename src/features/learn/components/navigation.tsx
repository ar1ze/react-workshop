import { Fragment } from 'react'
import { useLocation } from 'react-router'

import {
  NavigationAccordionLinks,
  NavigationAccordionTrigger,
  NavigationButton,
} from '@/components/navigation'
import { SectionHeader } from '@/components/shared/headings'
import { type BaseProps } from '@/components/shared/props'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { arePathsEqual } from '@/utils/path'

import { useLearnNavigation } from '../hooks/navigation'

interface NavigationProps extends BaseProps {
  onClick: () => void
}

export const LearnNavigationSidebarAccordion = () => {
  const groups = useLearnNavigation()
  const location = useLocation()

  const activeGroup = groups.find((group) => {
    const isSectionActive = group.sectionNode?.to === location.pathname
    const isChildActive = group.childrenNodes.some((node) =>
      arePathsEqual(node.to, location.pathname)
    )
    return isSectionActive || isChildActive
  })

  const defaultValue = activeGroup?.sectionNode?.id ?? groups[0].sectionNode?.id

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue={defaultValue}
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
              className="rounded-l-none pl-4 text-base"
            />
            <AccordionContent className="pb-0">
              <ul>
                <NavigationAccordionLinks
                  nodes={group.childrenNodes}
                  className="rounded-l-none pl-4 text-sm"
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
      <SectionHeader className="pt-4 pb-2 pl-4 text-sm">
        Learn React
      </SectionHeader>
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
              className={cn(defaultClass, 'text-lg font-bold', className)}
              onClick={onClick}
              activeClassName="bg-accent"
            />
            {childrenNodes.map((childNode) => {
              return (
                <NavigationButton
                  key={childNode.to}
                  to={childNode.to}
                  label={childNode.label}
                  className={cn(defaultClass, 'font px-5 text-sm', className)}
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
