import { forwardRef, type HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const Sidebar = ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
  <aside className={cn('flex h-full w-full flex-col', className)} {...props} />
)

const SidebarHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-4', className)} {...props} />
)

const SidebarContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('grow px-2', className)} {...props} />
))
SidebarContent.displayName = 'SidebarContent'

const SidebarFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('border-t p-4', className)} {...props} />
)

export { Sidebar, SidebarContent, SidebarFooter, SidebarHeader }
