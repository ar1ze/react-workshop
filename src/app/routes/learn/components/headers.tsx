import { SectionTitle } from '@/components/common'
import { cn } from '@/lib/utils'
import type { BaseProps } from '@/types/props'

interface BasePageHeaderProps extends BaseProps {
  title: string
}

const BasePageHeader = ({ className, children }: BaseProps) => {
  return <div className={cn('flex flex-col gap-3', className)}>{children}</div>
}

export const LearnPageHeader = ({
  title,
  className,
  children,
}: BasePageHeaderProps) => {
  return (
    <BasePageHeader>
      <SectionTitle className={cn('text-2xl font-bold', className)}>
        {title}
      </SectionTitle>
      <p className="text-base">{children}</p>
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
      <SectionTitle className={className}>{title}</SectionTitle>
      <p className="text-sm">{children}</p>
    </BasePageHeader>
  )
}
