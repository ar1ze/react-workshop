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
