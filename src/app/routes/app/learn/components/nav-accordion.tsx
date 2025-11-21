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

export function LearnNavAccordion() {
  const groups = useLearnNavigation()

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
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
              className="rounded-l-none px-2"
            />
            <AccordionContent className="pb-0">
              <ul>
                <NavigationAccordionLinks
                  nodes={group.childrenNodes}
                  className="rounded-l-none"
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
