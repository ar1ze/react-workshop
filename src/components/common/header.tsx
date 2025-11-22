import { cn } from '@/lib/utils'
import { type BaseProps } from '@/types/props'

export const SectionHeader = ({ children, className }: BaseProps) => {
  return (
    <h6 className={cn('text-muted-foreground font-bold uppercase', className)}>
      {children}
    </h6>
  )
}
