import {
  LearnNavigationCard,
  LearnPageHeaderBlock,
} from '@/features/learn/components'
import { getLearnNodesByPrefix } from '@/features/learn/hooks'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

export const AddingInteractivitySectionPage = () => {
  const nodes = getLearnNodesByPrefix('adding-interactivity')
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
