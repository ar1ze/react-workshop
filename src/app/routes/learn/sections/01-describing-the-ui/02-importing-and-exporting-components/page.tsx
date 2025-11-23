import { LearnPageHeader } from '@/app/routes/learn/components'
import { LearnPageLayout } from '@/app/routes/learn/layouts'
import { LearnContentLayout } from '@/app/routes/learn/layouts'

export const ImportingAndExportingComponentsPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeader title="Importing And Exporting Components"></LearnPageHeader>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
