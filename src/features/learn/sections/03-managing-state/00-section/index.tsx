import {
  LearnNavigationCard,
  LearnPageHeaderBlock,
} from '@/features/learn/components'
import { getLearnNodesByPrefix } from '@/features/learn/hooks'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

export const ManagingStateSectionPage = () => {
  const nodes = getLearnNodesByPrefix('managing-state')

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
