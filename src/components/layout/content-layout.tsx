import { twMerge } from 'tailwind-merge'

import { type BaseProps } from '@/types'

export interface ContentLayoutProps extends BaseProps {
  title?: string
  titleClassName?: string
}

export interface LayoutTitleProps {
  title?: string
  titleClassName?: string
}

const LayoutTitle = ({ title, titleClassName }: LayoutTitleProps) => {
  const defaultTitleClasses = 'text-xl font-medium'

  if (!title) return null
  return (
    <h1 className={twMerge(defaultTitleClasses, titleClassName)}>{title}</h1>
  )
}

export const ContentLayout = ({
  title,
  titleClassName,
  className,
  children,
}: ContentLayoutProps) => {
  const defaultMainClasses = 'grid grid-rows-[auto_1fr] gap-y-2 px-4'

  return (
    <main className={twMerge(defaultMainClasses, className)}>
      <LayoutTitle title={title} titleClassName={titleClassName} />
      {children}
    </main>
  )
}
