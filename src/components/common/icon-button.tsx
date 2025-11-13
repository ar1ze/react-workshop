import { type LucideProps } from 'lucide-react'
import * as React from 'react'

import { Button, type ButtonProps } from '../ui/button'

interface IconButtonProps extends ButtonProps {
  icon: React.ReactElement<LucideProps>
  href?: string
}

function LinkIconButton({
  icon,
  href,
  className,
  ...props
}: IconButtonProps & { href: string }) {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      {...props}
      className={`flex items-center justify-center ${className ?? ''}`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </Button>
  )
}

function RegularIconButton({
  icon,
  className,
  ...props
}: Omit<IconButtonProps, 'href'>) {
  return (
    <Button
      variant="ghost"
      size="icon"
      {...props}
      className={`flex items-center justify-center ${className ?? ''}`}
    >
      {icon}
    </Button>
  )
}

export function IconButton({ icon, href, ...props }: IconButtonProps) {
  return href ? (
    <LinkIconButton icon={icon} href={href} {...props} />
  ) : (
    <RegularIconButton icon={icon} {...props} />
  )
}
