import { flattenNavigationTree, page, section } from '@/utils/navigation'

import { AddingInteractivitySectionPage } from './00-section'
import { RespondingToEventsPage } from './01-responding-to-events'

export const ADDING_INTERACTIVITY_PREFIX = 'adding-interactivity'

export const AddingInteractivitySectionNavigationConfigUI = [
  section(ADDING_INTERACTIVITY_PREFIX, AddingInteractivitySectionPage, [
    page('responding-to-events', RespondingToEventsPage),
  ]),
]

export const AddingInteractivitySectionNavigationConfig = flattenNavigationTree(
  AddingInteractivitySectionNavigationConfigUI
).map((entry) => {
  return {
    ...entry,
    id: entry.to,
  }
})
