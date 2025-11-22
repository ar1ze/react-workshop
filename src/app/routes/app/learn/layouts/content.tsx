import { ContentLayout, type ContentLayoutProps } from '@/components/layouts'
import { cn } from '@/lib/utils'

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
      className={cn('px-[clamp(1rem,2%,12rem)]', className)}
    >
      <section>{children}</section>
    </ContentLayout>
  )
}
