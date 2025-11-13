import { type LucideProps } from 'lucide-react'

import { Button, type ButtonProps } from '../ui/button'

interface IconButtonProps extends ButtonProps {
  icon: React.ReactElement<LucideProps>
}

export const IconButton = ({ icon, ...props }: IconButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      {...props}
      className={`flex items-center justify-center ${props.className ?? ''}`}
    >
      {icon}
    </Button>
  )
}
