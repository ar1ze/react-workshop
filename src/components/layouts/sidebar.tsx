import { type CSSProperties, type ReactNode } from 'react'

import { type BaseProps } from '@/components/shared/props'
import { SidebarProvider } from '@/components/ui/sidebar'

interface SidebarLayoutProps extends BaseProps {
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
