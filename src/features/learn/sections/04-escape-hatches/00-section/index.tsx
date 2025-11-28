import {
  LearnNavigationCard,
  LearnPageHeaderBlock,
} from '@/features/learn/components'
import { getLearnNodesByPrefix } from '@/features/learn/hooks'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

export const EscapeHatchesSectionPage = () => {
  const nodes = getLearnNodesByPrefix('escape-hatches')

  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Escape Hatches"
          url="https://react.dev/learn/escape-hatches"
        >
          Most of your logic should rely on props and state. However, sometimes
          you need to "step outside" React to connect to external systems,
          browser APIs, or non-React widgets. This chapter covers the tools for
          that synchronization: Refs and Effects.
        </LearnPageHeaderBlock>
        {nodes && (
          <LearnNavigationCard
            nodes={nodes}
            title="In this chapter"
            className="mt-0"
          />
        )}
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
