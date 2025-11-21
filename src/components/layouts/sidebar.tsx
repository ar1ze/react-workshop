import { type CSSProperties, type ReactNode } from 'react'

import { SidebarProvider } from '@/components/ui/sidebar'
import { type BaseProps } from '@/types/props'

export interface SidebarLayoutProps extends BaseProps {
  sidebar: ReactNode
  style?: CSSProperties
}

export const SidebarLayout = ({
  sidebar,
  children,
  className,
  style,
}: SidebarLayoutProps) => {
  return (
    <SidebarProvider className={className} style={style}>
      {sidebar}
      {children}
    </SidebarProvider>
  )
}
