import { flattenNavigationTree, page, section } from '@/utils/navigation'

import { ManagingStateSectionPage } from './00-section'
import { ReactingToInputPage } from './01-reacting-to-input-with-state'

export const MANAGING_STATE_PREFIX = 'managing-state'

export const ManagingStateSectionNavigationConfigUI = [
  section(MANAGING_STATE_PREFIX, ManagingStateSectionPage, [
    page('reacting-to-input-with-state', ReactingToInputPage),
  ]),
]

export const ManagingStateSectionNavigationConfig = flattenNavigationTree(
  ManagingStateSectionNavigationConfigUI
).map((entry) => {
  return {
    ...entry,
    id: entry.to,
  }
})
