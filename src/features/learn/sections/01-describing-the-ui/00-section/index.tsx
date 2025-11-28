import {
  LearnNavigationCard,
  LearnPageHeaderBlock,
} from '@/features/learn/components'
import { getLearnNodesByPrefix } from '@/features/learn/hooks'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

export const DescribingTheUISectionPage = () => {
  const nodes = getLearnNodesByPrefix('describing-the-ui')

  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Describing the UI"
          url="https://react.dev/learn/describing-the-ui"
        >
          React renders user interfaces by combining small units into reusable,
          nestable components. These building blocks compose everything on the
          screen, from websites to mobile apps. This section documents how to
          create, customize, and conditionally display these fundamental UI
          elements.
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
