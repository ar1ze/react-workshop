import { LearnPageHeaderBlock } from '@/features/learn/components'
import { LearnContentLayout } from '@/features/learn/layouts'
import { LearnPageLayout } from '@/features/learn/layouts'

export const OverviewSection = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock title="Overview">
          I created this project to document my progress as I learn React. It
          serves as my personal knowledge base: a mix of study notes and
          interactive challenges to make sure I really understand the concepts.
        </LearnPageHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
