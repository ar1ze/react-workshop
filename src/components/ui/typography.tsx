import { type BaseProps } from '@/components/shared/props'
import { cn } from '@/lib/utils'

export function TypographyH1({ className, children }: BaseProps) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-center font-extrabold tracking-tight text-balance',
        'text-2xl md:text-3xl',
        className
      )}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({ className, children }: BaseProps) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 font-semibold tracking-tight first:mt-0',
        'text-xl md:text-2xl',
        className
      )}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({ className, children }: BaseProps) {
  return (
    <h3
      className={cn(
        'scroll-m-20 font-semibold tracking-tight',
        'text-lg md:text-xl',
        className
      )}
    >
      {children}
    </h3>
  )
}

export function TypographyH4({ className, children }: BaseProps) {
  return (
    <h4
      className={cn(
        'scroll-m-20 font-semibold tracking-tight',
        'text-base md:text-lg',
        className
      )}
    >
      {children}
    </h4>
  )
}

export function TypographyP({ className, children }: BaseProps) {
  return <p className={cn('leading-7', className)}>{children}</p>
}

export function TypographyBlockquote({ className, children }: BaseProps) {
  return (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>
      {children}
    </blockquote>
  )
}

export function TypographyList({ className, children }: BaseProps) {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}>
      {children}
    </ul>
  )
}

export function TypographyInlineCode({ className, children }: BaseProps) {
  return (
    <code
      className={cn(
        'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className
      )}
    >
      {children}
    </code>
  )
}

export function TypographyLead({ className, children }: BaseProps) {
  return <p className={cn('text-lg md:text-xl', className)}>{children}</p>
}

export function TypographyLarge({ className, children }: BaseProps) {
  return (
    <div className={cn('text-lg font-semibold', className)}>{children}</div>
  )
}

export function TypographySmall({ className, children }: BaseProps) {
  return (
    <small className={cn('text-sm leading-none font-medium', className)}>
      {children}
    </small>
  )
}

export function TypographyMuted({ className, children }: BaseProps) {
  return (
    <p className={cn('text-muted-foreground text-sm', className)}>{children}</p>
  )
}

export function TypographyOverline({ className, children }: BaseProps) {
  return (
    <p
      className={cn(
        'text-muted-foreground text-xs font-bold tracking-wider uppercase',
        className
      )}
    >
      {children}
    </p>
  )
}
