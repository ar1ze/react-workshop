import { Loader2 } from 'lucide-react'

export function LoadingPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loader2 className="text-muted-foreground animate-spin" />
    </div>
  )
}
