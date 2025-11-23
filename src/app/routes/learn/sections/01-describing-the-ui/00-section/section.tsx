import { LearnPageHeader } from '@/app/routes/learn/components'
import { LearnPageLayout } from '@/app/routes/learn/layouts'
import { LearnContentLayout } from '@/app/routes/learn/layouts'

export const DescribingTheUISection = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeader title="Describing the UI"></LearnPageHeader>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
