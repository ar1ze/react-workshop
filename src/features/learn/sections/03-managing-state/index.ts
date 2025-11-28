import { flattenNavigationTree, page, section } from '@/utils/navigation'

import { ManagingStateSectionPage } from './00-section'
import { ReactingToInputPage } from './01-reacting-to-input-with-state'
import { ChoosingStateStructurePage } from './02-choosing-the-state-structure'
import { SharingStatePage } from './03-sharing-state-between-components'
import { PreservingStatePage } from './04-preserving-and-resetting-state'
import { ExtractingStateLogicPage } from './05-extracting-state-logic-into-a-reducer'
import { PassingDataDeeplyPage } from './06-passing-data-deeply-with-context'
import { ScalingUpPage } from './07-scaling-up-with-reducer-and-context'

export const MANAGING_STATE_PREFIX = 'managing-state'

export const ManagingStateSectionNavigationConfigUI = [
  section(MANAGING_STATE_PREFIX, ManagingStateSectionPage, [
    page('reacting-to-input-with-state', ReactingToInputPage),
    page('choosing-the-state-structure', ChoosingStateStructurePage),
    page('sharing-state-between-components', SharingStatePage),
    page('preserving-and-resetting-state', PreservingStatePage),
    page('extracting-state-logic-page', ExtractingStateLogicPage),
    page('passing-data-deeply-with-context', PassingDataDeeplyPage),
    page('scaling-up-with-reducer-and-context', ScalingUpPage),
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
