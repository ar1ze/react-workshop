import { ContentLayout } from '@/components/layouts'
import { cn } from '@/lib/utils'
import { type BaseProps } from '@/types/props'

export const AppContentLayout = ({ className, children }: BaseProps) => {
  return (
    <ContentLayout className={cn('px-4', className)}>{children}</ContentLayout>
  )
}
