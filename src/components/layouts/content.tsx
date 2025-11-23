import { type BaseProps } from '@/types/props'

export const ContentLayout = ({ className, children }: BaseProps) => {
  return <main className={className}>{children}</main>
}
