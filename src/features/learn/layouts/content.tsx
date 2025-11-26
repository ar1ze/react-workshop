import { AppContentLayout, AppFooter } from '@/components/app'
import { type BaseProps } from '@/components/shared/props'
import { cn } from '@/lib/utils'

export const LearnContentLayout = ({ className, children }: BaseProps) => {
  return (
    <AppContentLayout className={cn('flex flex-1', className)}>
      <section className="flex w-full flex-col pb-16 md:mx-8 lg:mx-auto lg:max-w-200 xl:max-w-240">
        <div className="flex-1 pb-12">{children}</div>
        <AppFooter className="border-t" />
      </section>
    </AppContentLayout>
  )
}
