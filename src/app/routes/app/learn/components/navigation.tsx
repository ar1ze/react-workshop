import { LearnNavigationLinks } from '@/app/layouts/config'
import { NavigationLinkStyled } from '@/components/navigation'
import { NavigationButton } from '@/components/navigation'
import {
  NavigationAccordionLinks,
  NavigationAccordionTrigger,
} from '@/components/navigation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'

import { useLearnNavigation } from '../hooks/navigation'

interface LearNavigationClickProps {
  onClick?: () => void
}

export const LearnNavigationHeaderLinks = ({
  onClick,
}: LearNavigationClickProps) => {
  return LearnNavigationLinks.map(({ to, label }) => (
    <NavigationLinkStyled
      key={to}
      to={to}
      label={label}
      className="font-medium"
      onClick={onClick}
    />
  ))
}

export const LearnNavigationHeaderButtons = ({
  onClick,
}: LearNavigationClickProps) => {
  return (
    <>
      {LearnNavigationLinks.map(({ to, label }) => (
        <NavigationButton
          key={to}
          to={to}
          label={label}
          className="rounded-4xl px-16 py-5 text-lg font-medium"
          activeClassName="bg-accent"
          onClick={onClick}
        />
      ))}
    </>
  )
}

export const LearnNavigationAccordion = () => {
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
                  activeClassName=""
                />
              </ul>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
