import { LearnPageHeaderBlock } from '@/features/learn/components'
import { LearnPageLayout } from '@/features/learn/layouts'
import { LearnContentLayout } from '@/features/learn/layouts'

export const DescribingTheUISectionPage = () => {
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
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
