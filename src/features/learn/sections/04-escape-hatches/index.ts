import { flattenNavigationTree, page, section } from '@/utils/navigation'

import { EscapeHatchesSectionPage } from './00-section'
import { ReferencingValuesWithRefsPage } from './01-referencing-values-with-refs'

export const ESCAPE_HATCHES_PREFIX = 'escape-hatches'

const EscapeHatchesSectionNavigationConfigUI = [
  section(ESCAPE_HATCHES_PREFIX, EscapeHatchesSectionPage, [
    page('referencing-values-with-refs', ReferencingValuesWithRefsPage),
  ]),
]

export const EscapeHatchesSectionNavigationConfig = flattenNavigationTree(
  EscapeHatchesSectionNavigationConfigUI
).map((entry) => {
  return {
    ...entry,
    id: entry.to,
  }
})
