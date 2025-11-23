import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { type BaseProps } from '@/types/props'

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
    <main className={cn('grid h-screen grid-rows-[auto_1fr]', className)}>
      {header}
      {content}
    </main>
  )
}
