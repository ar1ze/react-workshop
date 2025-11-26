import { LearnPageHeaderBlock } from '@/features/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

export const ThinkingReactPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Thinking in React"
          url="https://react.dev/learn/thinking-in-react"
        >
          React shifts the approach to application design by focusing on
          component modularity. The process involves breaking a user interface
          into individual pieces and defining their distinct visual states.
          These components are then connected to ensure data flows efficiently
          through the hierarchy. This section demonstrates this methodology by
          walking through the construction of a searchable product data table.
        </LearnPageHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
