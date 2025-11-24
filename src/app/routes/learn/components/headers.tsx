import { SectionTitle } from '@/components/common'
import { cn } from '@/lib/utils'
import type { BaseProps } from '@/types/props'

interface BasePageHeaderProps extends BaseProps {
  title: string
}

const BasePageHeader = ({ className, children }: BaseProps) => {
  return <div className={cn('flex flex-col gap-4', className)}>{children}</div>
}

export const LearnPageHeader = ({
  title,
  className,
  children,
}: BasePageHeaderProps) => {
  return (
    <BasePageHeader>
      <SectionTitle
        className={cn(
          'text-foreground text-3xl font-bold tracking-tight md:text-4xl',
          className
        )}
      >
        {title}
      </SectionTitle>
      <p className="text-muted-foreground text-lg text-pretty">{children}</p>
    </BasePageHeader>
  )
}

export const LearnSectionHeader = ({
  title,
  className,
  children,
}: BasePageHeaderProps) => {
  return (
    <BasePageHeader>
      <SectionTitle
        className={cn(
          'text-foreground text-xl font-semibold tracking-tight md:text-2xl',
          className
        )}
      >
        {title}
      </SectionTitle>
      <p className="text-muted-foreground text-base/7 text-pretty">
        {children}
      </p>
    </BasePageHeader>
  )
}
