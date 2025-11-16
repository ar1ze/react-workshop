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
      titleClassName={titleClassName}
      className={twMerge('px-[4%]', className)}
    >
      <section>{children}</section>
    </ContentLayout>
  )
}
