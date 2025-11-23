import { LearnPageHeader } from '@/app/routes/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/app/routes/learn/layouts'

export const ThinkingReactPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeader title="Thinking in React">
          React is fundamentally about components. It’s about breaking the UI
          into pieces and connecting them so data flows through the hierarchy.
        </LearnPageHeader>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
