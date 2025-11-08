import { type ReactNode } from 'react'

interface PageLayoutProps {
  title: string
  children: ReactNode
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="grid grid-rows-[auto_1fr] gap-y-2">
      <h1 className="text-xl font-medium">{title}</h1>
      <div className="text-sm">{children}</div>
    </div>
  )
}

export default PageLayout
