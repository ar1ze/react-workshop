import { type BaseProps } from '@/components/shared/props'
import { cn } from '@/lib/utils'

export const AppFooter = ({ className }: BaseProps) => {
  return (
    <footer
      className={cn(
        'text-muted-foreground py-6 text-center text-sm',
        className
      )}
    >
      <div className="mx-auto">
        <p>
          © {new Date().getFullYear()} React Workshop. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
