import { AppContentLayout } from '@/components/app'
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
    <AppContentLayout className={cn('flex', className)}>
      <section className="w-full md:mx-8 lg:mx-auto lg:max-w-200 xl:max-w-260">
        {title && <TypographyH1>{title}</TypographyH1>}
        {children}
      </section>
    </AppContentLayout>
  )
}
