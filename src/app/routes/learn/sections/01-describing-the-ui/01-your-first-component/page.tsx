import {
  LearnChallengeTabs,
  LearnPageHeader,
} from '@/app/routes/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/app/routes/learn/layouts'

import { yourFirstComponentChallenges } from './challenges'

export const YourFirstComponentPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeader title="Your First Component">
          Components are one of the core concepts of React and the foundation
          upon which you build user interfaces. A component is a JavaScript
          function that you can sprinkle with markup to create isolated,
          reusable elements.
        </LearnPageHeader>
        <LearnChallengeTabs
          challenges={yourFirstComponentChallenges}
          url="https://react.dev/learn/your-first-component#challenges"
        />
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
