import { AppContentLayout } from '@/app/layouts'
import { SectionTitle } from '@/components/common'
import { cn } from '@/lib/utils'
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
    <AppContentLayout className={cn('flex', className)}>
      <section className="w-full md:mx-8 lg:mx-auto lg:max-w-200 xl:max-w-260">
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </section>
    </AppContentLayout>
  )
}
