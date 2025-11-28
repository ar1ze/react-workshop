import {
  LearnNavigationCard,
  LearnPageHeaderBlock,
} from '@/features/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'
import { LearnNavigationConfig } from '@/features/learn/routes'
import { MANAGING_STATE_PREFIX } from '@/features/learn/sections'
import { arePathsEqual, isSubpath } from '@/utils/path'

export const ManagingStateSectionPage = () => {
  const nodes = LearnNavigationConfig[0].children?.filter(
    (node) =>
      isSubpath(MANAGING_STATE_PREFIX, node.to) &&
      !arePathsEqual(MANAGING_STATE_PREFIX, node.id)
  )

  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Managing State"
          url="https://react.dev/learn/managing-state"
        >
          As your application grows, organizing state becomes critical to avoid
          bugs. This chapter moves beyond simple interactions to architectural
          patterns: how to structure state to avoid redundancy, share data
          between components, and scale logic using Reducers and Context.
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
