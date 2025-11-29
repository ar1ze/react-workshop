import { type BaseProps } from '@/components/shared/props'
import { LearnNavigationPreviousNext } from '@/features/learn/components'
import { cn } from '@/lib/utils'

export const LearnPageLayout = ({ className, children }: BaseProps) => {
  return (
    <div className={cn('flex flex-col gap-6 pb-8', className)}>
      {children}
      <LearnNavigationPreviousNext />
    </div>
  )
}
