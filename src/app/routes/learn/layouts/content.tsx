import { AppContentLayout } from '@/app/layouts'
import { Title } from '@/components/common/headings'
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
        {title && <Title>{title}</Title>}
        {children}
      </section>
    </AppContentLayout>
  )
}
