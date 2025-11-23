import { cn } from '@/lib/utils'
import { type BaseProps } from '@/types/props'

export const Title = ({ className, children }: BaseProps) => {
  return <h1 className={cn('text-xl font-medium', className)}>{children}</h1>
}

export const SectionHeader = ({ className, children }: BaseProps) => {
  return (
    <h6 className={cn('text-muted-foreground font-bold uppercase', className)}>
      {children}
    </h6>
  )
}
