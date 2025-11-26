import { AppFooter } from '@/components/app'
import { ContentLayout } from '@/components/layouts'
import { type BaseProps } from '@/components/shared/props'
import { TypographyH1 } from '@/components/ui/typography'
import { cn } from '@/lib/utils'

interface LearnContentLayoutProps extends BaseProps {
  title?: string
}

export const LearnContentLayout = ({
  title,
  className,
  children,
}: LearnContentLayoutProps) => {
  return (
    <ContentLayout className={cn('flex min-h-full flex-col', className)}>
      <section className="w-full flex-1 pb-16 md:mx-8 lg:mx-auto lg:max-w-200 xl:max-w-260">
        {title && <TypographyH1>{title}</TypographyH1>}
        {children}
      </section>
      <AppFooter />
    </ContentLayout>
  )
}
