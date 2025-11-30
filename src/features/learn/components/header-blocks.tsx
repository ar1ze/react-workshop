import { ExternalLink, type LucideProps } from 'lucide-react'

import type { BaseProps } from '@/components/shared/props'
import { Button, type ButtonProps } from '@/components/ui/button'
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
  buttonProps?: ButtonProps
  iconProps?: LucideProps
}

const BasePageHeader = ({ className, children }: BaseProps) => {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

const ExternalButton = ({
  url,
  buttonProps,
  iconProps,
}: ExternalButtonProps) => {
  return (
    <Button
      variant="ghost"
      asChild
      className="hover:bg-background dark:hover:bg-background"
      {...buttonProps}
    >
      <a
        href={url}
        title="Open React Docs"
        target="_blank"
        rel="noopener noreferrer"
      >
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
      <div className="flex items-center md:gap-1">
        <TypographyH1>{title}</TypographyH1>
        {url && (
          <ExternalButton
            url={url}
            buttonProps={{ size: 'icon' }}
            iconProps={{
              className:
                'mt-[1px] size-[var(--text-xl)] md:size-[var(--text-2xl)] ',
              strokeWidth: 4,
            }}
          />
        )}
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
        <TypographyH2>{title}</TypographyH2>
        {url && (
          <ExternalButton
            url={url}
            buttonProps={{ size: 'icon' }}
            iconProps={{
              className:
                'mt-[1px] -ml-1 md:mt-0.5 size-[var(--text-base)] md:size-[var(--text-lg)]',
              strokeWidth: 3,
            }}
          />
        )}
      </div>
      {children}
    </BasePageHeader>
  )
}
