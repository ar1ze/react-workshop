import {
  LearnNavigationCard,
  LearnPageHeaderBlock,
} from '@/features/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'
import { LearnNavigationConfig } from '@/features/learn/routes'
import { DESCRIBE_THE_UI_PREFIX } from '@/features/learn/sections'
import { arePathsEqual, isSubpath } from '@/utils/path'

export const DescribingTheUISectionPage = () => {
  const nodes = LearnNavigationConfig[0].children?.filter(
    (node) =>
      isSubpath(DESCRIBE_THE_UI_PREFIX, node.to) &&
      !arePathsEqual(DESCRIBE_THE_UI_PREFIX, node.id)
  )

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
