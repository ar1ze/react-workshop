import { CodeBlock, type CodeBlockProps } from '@/components/shared/code-block'
import { type BaseProps } from '@/components/shared/props'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface TypographyImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  caption?: string
}

// Heading Components (H1 → H4)
export function TypographyH1({ className, children }: BaseProps) {
  return (
    <h1
      className={cn(
        'scroll-m-20 font-extrabold tracking-tight text-balance',
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
        'scroll-m-20 font-semibold tracking-tight first:mt-0',
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

// Body Text Components
export function TypographyP({ className, children }: BaseProps) {
  return <p className={cn('leading-7 not-first:mt-4', className)}>{children}</p>
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

// Content Components
export function TypographyBlockquote({ className, children }: BaseProps) {
  return (
    <blockquote className={cn('mt-4 border-l-2 pl-6 italic', className)}>
      {children}
    </blockquote>
  )
}

export function TypographyList({ className, children }: BaseProps) {
  return (
    <ul
      className={cn(
        'mt-4 mb-2 ml-6 list-disc [&>li:not(:first-child)]:mt-2',
        className
      )}
    >
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

export function TypographyCard({ className, children }: BaseProps) {
  return <Card className={cn('mt-4 gap-4', className)}>{children}</Card>
}

export function TypographyCodeBlock({
  code,
  language = 'typescript',
  className,
}: CodeBlockProps) {
  return (
    <CodeBlock
      code={code}
      language={language}
      className={cn('mt-4', className)}
    />
  )
}

export function TypographyImage({
  className,
  alt,
  caption,
  ...props
}: TypographyImageProps) {
  return (
    <figure className={cn('group mt-6 grid place-content-center', className)}>
      <img
        className="bg-muted rounded-lg border transition-colors"
        alt={alt}
        {...props}
      />
      {caption && (
        <figcaption className="mt-4 text-center">
          <TypographyMuted>{caption}</TypographyMuted>
        </figcaption>
      )}
    </figure>
  )
}
