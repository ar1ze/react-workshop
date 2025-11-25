import { type BaseProps } from '@/components/shared'
import { cn } from '@/lib/utils'

export const LearnPageLayout = ({ className, children }: BaseProps) => {
  return <div className={cn('flex flex-col gap-8', className)}>{children}</div>
}
