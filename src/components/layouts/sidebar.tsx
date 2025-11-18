import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { type BaseProps } from '@/types/props'

export interface SidebarLayoutProps extends BaseProps {
  sidebar: ReactNode
  children: ReactNode
}

export const SidebarLayout = ({
  sidebar,
  className,
  children,
}: SidebarLayoutProps) => {
  const defaultClass = 'grid h-full grid-cols-[auto_1fr]'
  return (
    <main className={twMerge(defaultClass, className)}>
      {sidebar}
      {children}
    </main>
  )
}
