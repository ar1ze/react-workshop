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
          React applications are built from isolated pieces of UI called
          components. A React component is a JavaScript function that you can
          sprinkle with markup.
        </LearnPageHeader>
        <LearnChallengeTabs
          challenges={yourFirstComponentChallenges}
          url="https://react.dev/learn/your-first-component#challenges"
        />
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
