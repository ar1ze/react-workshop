import { type ReactNode } from 'react'
interface SidebarLayoutProps {
  sidebar: ReactNode
  children: ReactNode
}

export const SidebarLayout = ({ sidebar, children }: SidebarLayoutProps) => {
  return (
    <div className="flex h-screen w-full">
      <aside className="border-r">{sidebar}</aside>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
