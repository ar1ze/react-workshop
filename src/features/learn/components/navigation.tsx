import { Fragment } from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router'

import {
  NavigationAccordionLinks,
  NavigationAccordionTrigger,
  NavigationButton,
  type NavigationNode,
} from '@/components/navigation'
import { type BaseProps } from '@/components/shared/props'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { TypographyH2, TypographyList } from '@/components/ui/typography'
import { TypographyOverline } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { arePathsEqual } from '@/utils/path'

import { useLearnNavigation } from '../hooks/navigation'

interface NavigationProps extends BaseProps {
  onClick: () => void
}

interface NavigationCardProps {
  nodes: NavigationNode[]
  title?: string
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
              className="rounded-l-none pl-4 text-base font-bold"
            />
            <AccordionContent className="pb-0">
              <ul>
                <NavigationAccordionLinks
                  nodes={group.childrenNodes}
                  className="rounded-l-none pl-5 text-sm font-medium tracking-tight"
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
      <TypographyOverline className="pt-4 pb-2 pl-4">
        Learn React
      </TypographyOverline>
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
                  className={cn(
                    defaultClass,
                    'px-5 text-sm font-medium tracking-tight',
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

export const LearnNavigationCard = ({ nodes, title }: NavigationCardProps) => {
  return (
    <Card className="mt-2 gap-4">
      <CardHeader>
        <TypographyH2>{title ?? 'In this chapter'}</TypographyH2>
      </CardHeader>
      <CardContent>
        <TypographyList className="mt-0">
          {nodes &&
            nodes.map((node) => (
              <li key={node.id}>
                <NavLink
                  to={node.to}
                  className="transition-all duration-200 hover:underline"
                >
                  {node.label}{' '}
                </NavLink>
              </li>
            ))}
        </TypographyList>
      </CardContent>
    </Card>
  )
}
