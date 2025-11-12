import { type ReactNode } from 'react'

interface SidebarProps {
  children: ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <aside className="border-2 border-indigo-300 pt-4 pr-6">{children}</aside>
  )
}
