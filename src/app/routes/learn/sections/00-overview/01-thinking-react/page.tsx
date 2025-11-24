import { LearnPageHeader } from '@/app/routes/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/app/routes/learn/layouts'

export const ThinkingReactPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeader
          title="Thinking in React"
          url="https://react.dev/learn/thinking-in-react"
        >
          React shifts the approach to application design by focusing on
          component modularity. The process involves breaking a user interface
          into individual pieces and defining their distinct visual states.
          These components are then connected to ensure data flows efficiently
          through the hierarchy. This section demonstrates this methodology by
          walking through the construction of a searchable product data table.
        </LearnPageHeader>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
