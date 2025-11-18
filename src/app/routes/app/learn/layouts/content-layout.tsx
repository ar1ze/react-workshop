import { twMerge } from 'tailwind-merge'

import { ContentLayout, type ContentLayoutProps } from '@/components/layouts'

export const LearnContentLayout = ({
  title,
  titleClassName,
  children,
  className,
}: ContentLayoutProps) => {
  return (
    <ContentLayout
      title={title}
      titleClassName={twMerge('', titleClassName)}
      className={twMerge('px-[clamp(1rem,2%,12rem)]', className)}
    >
      <section>{children}</section>
    </ContentLayout>
  )
}
