import type { ReactNode } from 'react'

import { type BaseProps } from '@/components/shared/props'
import { cn } from '@/lib/utils'

interface HeaderLayoutProps extends BaseProps {
  header: ReactNode
  content: ReactNode
}

export const HeaderLayout = ({
  header,
  content,
  className,
}: HeaderLayoutProps) => {
  return (
    <main
      className={cn(
        'grid h-screen grid-rows-[auto_1fr] overflow-hidden',
        className
      )}
    >
      {header}
      {content}
    </main>
  )
}
