import { type ReactNode } from 'react'

interface SidebarProps {
  children: ReactNode
}

const Sidebar = ({ children }: SidebarProps) => {
  return <aside className="border-2 border-indigo-300 p-4">{children}</aside>
}

export default Sidebar
