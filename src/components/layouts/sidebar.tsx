import { type ReactNode } from 'react'

import { SidebarProvider } from '@/components/ui/sidebar'
import { type BaseProps } from '@/types/props'

export interface SidebarLayoutProps extends BaseProps {
  sidebar: ReactNode
}

export const SidebarLayout = ({
  sidebar,
  children,
  className,
}: SidebarLayoutProps) => {
  return (
    <SidebarProvider className={className}>
      {sidebar}
      {children}
    </SidebarProvider>
  )
}
