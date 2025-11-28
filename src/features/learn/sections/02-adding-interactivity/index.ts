import { flattenNavigationTree, page, section } from '@/utils/navigation'

import { AddingInteractivitySectionPage } from './00-section'
import { RespondingToEventsPage } from './01-responding-to-events'
import { StateMemoryPage } from './02-state-a-components-memory/challenges'
import { RenderAndCommitPage } from './03-render-and-commit'
import { StateAsSnapshotPage } from './04-state-as-a-snapshot'
import { StateUpdatesQueuePage } from './05-queueing-state-updates'
import { UpdatingObjectsPage } from './06-updating-objects-in-state'
import { UpdatingArraysPage } from './07-updating-arrays-in-state'

export const ADDING_INTERACTIVITY_PREFIX = 'adding-interactivity'

const AddingInteractivitySectionNavigationConfigUI = [
  section(ADDING_INTERACTIVITY_PREFIX, AddingInteractivitySectionPage, [
    page('responding-to-events', RespondingToEventsPage),
    page(
      'state-a-components-memory',
      StateMemoryPage,
      `State: A  Component's Memory`
    ),
    page('render-and-commit', RenderAndCommitPage),
    page('state-as-a-snapshot', StateAsSnapshotPage),
    page('queueing-a-series-of-state-updates', StateUpdatesQueuePage),
    page('updating-objects-in-state', UpdatingObjectsPage),
    page('updating-arrays-in-state', UpdatingArraysPage),
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
