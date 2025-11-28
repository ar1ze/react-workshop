import {
  LearnNavigationCard,
  LearnPageHeaderBlock,
} from '@/features/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'
import { LearnNavigationConfig } from '@/features/learn/routes'
import { ESCAPE_HATCHES_PREFIX } from '@/features/learn/sections'
import { arePathsEqual, isSubpath } from '@/utils/path'

export const EscapeHatchesSectionPage = () => {
  const nodes = LearnNavigationConfig[0].children?.filter(
    (node) =>
      isSubpath(ESCAPE_HATCHES_PREFIX, node.to) &&
      !arePathsEqual(ESCAPE_HATCHES_PREFIX, node.id)
  )

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
