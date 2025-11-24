import { LearnPageHeader } from '@/app/routes/learn/components'
import { LearnPageLayout } from '@/app/routes/learn/layouts'
import { LearnContentLayout } from '@/app/routes/learn/layouts'

export const DescribingTheUISection = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeader title="Describing the UI">
          React renders user interfaces by combining small units into reusable,
          nestable components. These building blocks compose everything on the
          screen, from websites to mobile apps. This section documents how to
          create, customize, and conditionally display these fundamental UI
          elements.
        </LearnPageHeader>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
