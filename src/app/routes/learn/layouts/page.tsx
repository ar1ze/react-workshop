import { cn } from '@/lib/utils'
import { type BaseProps } from '@/types/props'

export const LearnPageLayout = ({ className, children }: BaseProps) => {
  return <div className={cn('flex flex-col gap-6', className)}>{children}</div>
}
