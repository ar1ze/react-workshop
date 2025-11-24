import { LearnPageHeader } from '@/app/routes/learn/components'
import { LearnContentLayout } from '@/app/routes/learn/layouts'
import { LearnPageLayout } from '@/app/routes/learn/layouts'

export const OverviewSection = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeader title="Overview">
          I created this project to document my progress as I learn React. It
          serves as my personal knowledge base: a mix of study notes and
          interactive challenges to make sure I really understand the concepts.
        </LearnPageHeader>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
