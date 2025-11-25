import { type BaseProps } from '@/components/shared/props'

export const ContentLayout = ({ className, children }: BaseProps) => {
  return <main className={className}>{children}</main>
}
