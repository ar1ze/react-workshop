import { ContentLayout } from '@/components/layouts'
import { type BaseProps } from '@/components/shared/props'
import { cn } from '@/lib/utils'

export const AppContentLayout = ({ className, children }: BaseProps) => {
  return (
    <ContentLayout className={cn('px-4', className)}>{children}</ContentLayout>
  )
}
