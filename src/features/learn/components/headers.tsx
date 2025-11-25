import { ExternalLink, type LucideProps } from 'lucide-react'

import type { BaseProps } from '@/components/shared'
import { SectionTitle } from '@/components/shared'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface BasePageHeaderProps extends BaseProps {
  title: string
  url?: string
}

interface ExternalButtonProps {
  url: string
  type: 'header' | 'section'
}

const BasePageHeader = ({ className, children }: BaseProps) => {
  return <div className={cn('flex flex-col gap-4', className)}>{children}</div>
}

const ExternalButton = ({ url, type }: ExternalButtonProps) => {
  const isHeader = type === 'header'
  const iconProps: LucideProps = {
    className: `mt-0.5 ${isHeader ? 'size-6 md:size-7' : 'size-4 md:size-5'}`,
    strokeWidth: 3,
  }
  const buttonSize = isHeader ? 'icon' : 'icon-sm'

  return (
    <Button
      variant="ghost"
      asChild
      size={buttonSize}
      className="hover:bg-background dark:hover:bg-background"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <ExternalLink {...iconProps} />
      </a>
    </Button>
  )
}

export const LearnPageHeader = ({
  title,
  url,
  className,
  children,
}: BasePageHeaderProps) => {
  return (
    <BasePageHeader>
      <div className="flex items-center gap-0.5 md:gap-1">
        <SectionTitle
          className={cn(
            'text-2xl font-bold tracking-tight md:text-3xl',
            className
          )}
        >
          {title}
        </SectionTitle>
        {url && <ExternalButton url={url} type="header" />}
      </div>
      {children && (
        <p className="dark:primary text-lg text-pretty">{children}</p>
      )}
    </BasePageHeader>
  )
}

export const LearnSectionHeader = ({
  title,
  url,
  className,
  children,
}: BasePageHeaderProps) => {
  return (
    <BasePageHeader>
      <div className="flex items-center">
        <SectionTitle
          className={cn(
            'text-lg font-semibold tracking-tight md:text-xl',
            className
          )}
        >
          {title}
        </SectionTitle>
        {url && <ExternalButton url={url} type="section" />}
      </div>
      {children && (
        <p className="dark:text-primary text-base/7 text-pretty">{children}</p>
      )}
    </BasePageHeader>
  )
}
