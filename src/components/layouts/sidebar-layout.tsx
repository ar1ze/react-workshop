import { type ReactNode } from 'react'
interface SidebarLayoutProps {
  sidebar: ReactNode
  children: ReactNode
}

export const SidebarLayout = ({ sidebar, children }: SidebarLayoutProps) => {
  return (
    <main className="grid h-full grid-cols-[auto_1fr]">
      {sidebar}
      {children}
    </main>
  )
}
