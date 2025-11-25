import { type BaseProps } from '@/components/shared'

export const ContentLayout = ({ className, children }: BaseProps) => {
  return <main className={className}>{children}</main>
}
