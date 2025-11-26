import { ExternalLink, type LucideProps } from 'lucide-react'

import type { BaseProps } from '@/components/shared/props'
import { Button } from '@/components/ui/button'
import {
  TypographyH1,
  TypographyH2,
  TypographyLarge,
  TypographyP,
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
  return <div className={cn('flex flex-col gap-4', className)}>{children}</div>
}

const ExternalButton = ({ url, type }: ExternalButtonProps) => {
  const isHeader = type === 'header'
  const iconProps: LucideProps = {
    className: `${isHeader ? 'mt-0.5 size-5 md:size-6' : '-mt-1.5 size-4 md:size-5 md:-mt-1'}`,
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

export const LearnPageHeader = ({
  title,
  url,
  className,
  children,
}: BasePageHeaderProps) => {
  return (
    <BasePageHeader>
      <div className="flex items-center gap-0.5 md:gap-1">
        <TypographyH1 className={className}>{title}</TypographyH1>
        {url && <ExternalButton url={url} type="header" />}
      </div>
      {children && <TypographyLarge>{children}</TypographyLarge>}
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
        <TypographyH2 className={cn('border-none', className)}>
          {title}
        </TypographyH2>
        {url && <ExternalButton url={url} type="section" />}
      </div>
      {children && <TypographyP>{children}</TypographyP>}
    </BasePageHeader>
  )
}
