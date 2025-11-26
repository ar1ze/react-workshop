import {
  LearnChallengeTabs,
  LearnPageHeaderBlock,
} from '@/features/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

import { yourFirstComponentChallenges } from './challenges'

export const YourFirstComponentPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Your First Component"
          url="https://react.dev/learn/your-first-component"
        >
          Components are one of the core concepts of React and the foundation
          upon which you build user interfaces. A component is a JavaScript
          function that you can sprinkle with markup to create isolated,
          reusable elements.
        </LearnPageHeaderBlock>
        <LearnChallengeTabs
          challenges={yourFirstComponentChallenges}
          url="https://react.dev/learn/your-first-component#challenges"
        />
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
