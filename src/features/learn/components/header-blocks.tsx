import { ExternalLink, type LucideProps } from 'lucide-react'

import type { BaseProps } from '@/components/shared/props'
import { Button } from '@/components/ui/button'
import {
  TypographyH1,
  TypographyH2,
  TypographyLarge,
} from '@/components/ui/typography'
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
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

const ExternalButton = ({ url, type }: ExternalButtonProps) => {
  const isHeader = type === 'header'
  const iconProps: LucideProps = {
    className: `${isHeader ? 'mt-0.5 size-5 md:size-6' : 'mt-0.5 size-4 md:size-5 md:mt-1'}`,
    strokeWidth: isHeader ? 4 : 3,
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

export const LearnPageHeaderBlock = ({
  title,
  url,
  className,
  children,
}: BasePageHeaderProps) => {
  return (
    <BasePageHeader className={cn('gap-3 md:gap-4', className)}>
      <div className="flex items-center gap-0.5 md:gap-1">
        <TypographyH1>{title}</TypographyH1>
        {url && <ExternalButton url={url} type="header" />}
      </div>
      {children && <TypographyLarge>{children}</TypographyLarge>}
    </BasePageHeader>
  )
}

export const LearnSectionHeaderBlock = ({
  title,
  url,
  className,
  children,
}: BasePageHeaderProps) => {
  return (
    <BasePageHeader className={className}>
      <div className="flex items-center">
        <TypographyH2 className="border-none">{title}</TypographyH2>
        {url && <ExternalButton url={url} type="section" />}
      </div>
      {children}
    </BasePageHeader>
  )
}
