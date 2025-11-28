import { flattenNavigationTree, page, section } from '@/utils/navigation'

import { EscapeHatchesSectionPage } from './00-section'
import { ReferencingValuesWithRefsPage } from './01-referencing-values-with-refs'
import { ManipulatingDomPage } from './02-manipulating-the-dom-with-refs'
import { SynchronizingWithEffectsPage } from './03-synchronizing-with-effects'
import { YouMightNotNeedEffectPage } from './04-you-might-not-need-an-effect'
import { LifecycleOfEffectsPage } from './05-lifecycle-of-reactive-effects'
import { SeparatingEventsFromEffectsPage } from './06-separating-events-from-effects'
import { RemovingEffectDependenciesPage } from './07-removing-effect-dependencies'
import { ReusingLogicPage } from './08-reusing-logic-with-custom-hooks'

export const ESCAPE_HATCHES_PREFIX = 'escape-hatches'

const EscapeHatchesSectionNavigationConfigUI = [
  section(ESCAPE_HATCHES_PREFIX, EscapeHatchesSectionPage, [
    page('referencing-values-with-refs', ReferencingValuesWithRefsPage),
    page('manipulating-the-dom-with-refs', ManipulatingDomPage),
    page('synchronizing-with-effects', SynchronizingWithEffectsPage),
    page('you-might-not-need-effect-page', YouMightNotNeedEffectPage),
    page('lifecycle-of-reactive-effects', LifecycleOfEffectsPage),
    page('separating-events-from-effects', SeparatingEventsFromEffectsPage),
    page('removing-effect-dependencies', RemovingEffectDependenciesPage),
    page('reusing-logic-page', ReusingLogicPage),
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
