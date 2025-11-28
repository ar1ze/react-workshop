import {
  LearnNavigationCard,
  LearnPageHeaderBlock,
} from '@/features/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'
import { LearnNavigationConfig } from '@/features/learn/routes'
import { ADDING_INTERACTIVITY_PREFIX } from '@/features/learn/sections'
import { arePathsEqual, isSubpath } from '@/utils/path'

export const AddingInteractivitySectionPage = () => {
  const nodes = LearnNavigationConfig[0].children?.filter(
    (node) =>
      isSubpath(ADDING_INTERACTIVITY_PREFIX, node.to) &&
      !arePathsEqual(ADDING_INTERACTIVITY_PREFIX, node.id)
  )

  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Adding Interactivity"
          url="https://react.dev/learn/adding-interactivity"
        >
          Static screens are boring. To make things update in response to user
          input (like clicking a gallery or typing in a form), we need data that
          changes over time. In React, this is called <strong>State</strong>.
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
