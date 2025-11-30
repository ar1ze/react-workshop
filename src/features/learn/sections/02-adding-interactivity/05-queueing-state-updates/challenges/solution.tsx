import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TypographyH4 } from '@/components/ui/typography'

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export const Solution = () => {
  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)

  async function handleBuyClick() {
    setPending((p) => p + 1)
    await delay(3000)
    setPending((p) => p - 1)
    setCompleted((c) => c + 1)
  }

  return (
    <Card className="flex-1 justify-center">
      <CardContent className="grid grid-cols-2 justify-items-center">
        <div>
          <TypographyH4 className={pending > 0 ? 'text-chart-3' : ''}>
            Pending: {pending}
          </TypographyH4>
          <TypographyH4 className={completed > 0 ? 'text-chart-2' : ''}>
            Completed: {completed}
          </TypographyH4>
        </div>
        <div>
          <Button variant="outline" onClick={handleBuyClick}>
            <span>Buy</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
