import { type BaseProps } from '@/components/shared'
import { cn } from '@/lib/utils'

export const SectionTitle = ({ className, children }: BaseProps) => {
  return <h1 className={cn('text-xl font-medium', className)}>{children}</h1>
}

export const SectionHeader = ({ className, children }: BaseProps) => {
  return (
    <h2 className={cn('text-muted-foreground font-bold uppercase', className)}>
      {children}
    </h2>
  )
}
