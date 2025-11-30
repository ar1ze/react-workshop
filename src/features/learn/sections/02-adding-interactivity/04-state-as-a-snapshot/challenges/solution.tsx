import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export const Solution = () => {
  const [walk, setWalk] = useState(true)

  function handleClick() {
    alert(`${walk ? 'stop' : 'walk'} is next`)
    setWalk(!walk)
  }

  return (
    <Card className="flex-1 justify-center">
      <CardContent className="flex items-center justify-center gap-x-4">
        <Button variant="outline" onClick={handleClick}>
          <span>{walk ? 'Change to stop' : 'Change to walk'}</span>
        </Button>
        <p
          className={cn(
            'text-lg font-semibold',
            walk ? 'text-chart-2' : 'text-destructive'
          )}
        >
          {walk ? 'Walk' : 'Stop'}
        </p>
      </CardContent>
    </Card>
  )
}
