import { LearnPageHeaderBlock } from '@/features/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

export const WhyLearnReactPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock title="Why Learn React">
          React is a JavaScript library for building user interfaces. It lets
          you define the UI based on your data and handles updates when that
          data changes. Its component model helps break the interface into
          clear, reusable parts. React fits a wide range of projects and
          environments without requiring a fixed structure, which makes it a
          practical choice for many development workflows.
        </LearnPageHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
