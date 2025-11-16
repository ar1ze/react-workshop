import type { ReactNode } from 'react'

export interface HeaderLayoutProps {
  header: ReactNode
  content: ReactNode
}

export const HeaderLayout = ({ header, content }: HeaderLayoutProps) => {
  return (
    <main className="grid h-screen grid-rows-[auto_1fr] content-center">
      {header}
      {content}
    </main>
  )
}
