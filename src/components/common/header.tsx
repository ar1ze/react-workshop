import { type BaseProps } from '@/types/props'

export const SectionHeader = ({ children, className }: BaseProps) => {
  return (
    <h6
      className={`text-muted-foreground pl-4 text-xs font-bold tracking-wider uppercase ${className}`}
    >
      {children}
    </h6>
  )
}
