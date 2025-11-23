import { AppContentLayout } from '@/app/layouts'
import { SectionTitle } from '@/components/common'
import { type BaseProps } from '@/types/props'

interface LearnContentLayoutProps extends BaseProps {
  title?: string
}

export const LearnContentLayout = ({
  title,
  className,
  children,
}: LearnContentLayoutProps) => {
  return (
    <AppContentLayout className={className}>
      <section>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </section>
    </AppContentLayout>
  )
}
