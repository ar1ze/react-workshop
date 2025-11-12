import { type ReactNode } from 'react'

interface SidebarProps {
  children: ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
  return <aside className="border-t border-r pt-4 pr-6">{children}</aside>
}
