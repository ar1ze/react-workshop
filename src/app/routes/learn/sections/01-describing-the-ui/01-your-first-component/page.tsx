import { LearnPageHeader } from '@/app/routes/learn/components'
import { LearnPageLayout } from '@/app/routes/learn/layouts'
import { LearnContentLayout } from '@/app/routes/learn/layouts'

export const YourFirstComponentPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeader title="Your First Component"></LearnPageHeader>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
