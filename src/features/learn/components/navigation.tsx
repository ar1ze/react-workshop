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
import { CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  TypographyCard,
  TypographyH3,
  TypographyList,
  TypographyOverline,
} from '@/components/ui/typography'
import {
  type LearnNavigationGroup,
  useLearnNavigation,
} from '@/features/learn/hooks'
import { LEARN_PAGE_PREFIX } from '@/features/learn/routes'
import { cn } from '@/lib/utils'
import { arePathsEqual } from '@/utils/path'

interface NavigationProps extends BaseProps {
  onClick: () => void
}

interface NavigationCardProps extends BaseProps {
  nodes: NavigationNode[]
  title?: string
}

export const LearnNavigationSidebarAccordion = () => {
  const groups = useLearnNavigation()
  const location = useLocation()

  // Find which group contains the current page
  const activeGroup = groups.find((group) => {
    const isSectionActive = arePathsEqual(
      group.sectionNode?.to ?? '',
      location.pathname
    )
    const isChildActive = group.childrenNodes.some((node) =>
      arePathsEqual(node.to, location.pathname)
    )
    return isSectionActive || isChildActive
  })

  const activeId = activeGroup?.sectionNode?.id ?? groups[0].sectionNode?.id

  // Split into Background and Learn React sections
  const backgroundGroups = groups.filter((g) =>
    arePathsEqual(g.sectionNode?.id ?? '', LEARN_PAGE_PREFIX)
  )
  const learnGroups = groups.filter(
    (g) => !arePathsEqual(g.sectionNode?.id ?? '', LEARN_PAGE_PREFIX)
  )

  const labelGroups: [LearnNavigationGroup[], string][] = [
    [backgroundGroups, 'Background'],
    [learnGroups, 'Learn React'],
  ]

  return (
    <Accordion type="single" collapsible className="w-full" value={activeId}>
      <div className="flex flex-col gap-2">
        {labelGroups.map(([groupList, label], index) => (
          <div key={label} className="flex flex-col gap-2">
            <TypographyOverline className="text-muted-foreground/70 pl-4">
              {label}
            </TypographyOverline>
            {groupList.map((group) => {
              if (!group.sectionNode) return null
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
            {index < labelGroups.length - 1 && (
              <div className="pl-4">
                <Separator className="my-2" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Accordion>
  )
}

export const LearnNavigationMobileSections = ({
  className,
  onClick,
}: NavigationProps) => {
  const groups = useLearnNavigation()

  // Split into Background and Learn React sections
  const backgroundGroups = groups.filter((g) =>
    arePathsEqual(g.sectionNode?.id ?? '', LEARN_PAGE_PREFIX)
  )
  const learnGroups = groups.filter(
    (g) => !arePathsEqual(g.sectionNode?.id ?? '', LEARN_PAGE_PREFIX)
  )

  const labelGroups: [LearnNavigationGroup[], string][] = [
    [backgroundGroups, 'Background'],
    [learnGroups, 'Learn React'],
  ]

  const defaultClass =
    'h-11 justify-start font-normal rounded-none px-4 text-base'

  return (
    <div className="flex flex-col pb-4">
      {labelGroups.map(([groupList, label], index) => (
        <div key={label} className="flex flex-col">
          <TypographyOverline className="text-muted-foreground/70 pt-4 pb-2 pl-4">
            {label}
          </TypographyOverline>

          {groupList.map((group) => {
            const { sectionNode, childrenNodes } = group

            if (!sectionNode) return null

            return (
              <Fragment key={sectionNode.to}>
                <NavigationButton
                  to={sectionNode.to}
                  label={sectionNode.label}
                  className={cn(defaultClass, 'text-lg font-bold', className)}
                  onClick={onClick}
                  activeClassName="bg-accent"
                />

                {childrenNodes.map((childNode) => (
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
                ))}
                {index < labelGroups.length - 1 && (
                  <div className="pl-4">
                    <Separator className="my-2" />
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export const LearnNavigationCard = ({
  nodes,
  title,
  className,
}: NavigationCardProps) => {
  return (
    <TypographyCard className={className}>
      {title && (
        <CardHeader>
          <TypographyH3>{title}</TypographyH3>
        </CardHeader>
      )}
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
    </TypographyCard>
  )
}
