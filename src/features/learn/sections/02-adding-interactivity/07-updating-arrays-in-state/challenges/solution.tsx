import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Product {
  id: number
  name: string
  count: number
}

const initialProducts: Product[] = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
]

export const Solution = () => {
  const [products, setProducts] = useState(initialProducts)

  function handleIncreaseClick(productId: number) {
    setProducts(
      products.map((product) => {
        return product.id === productId
          ? { ...product, count: product.count + 1 }
          : product
      })
    )
  }

  function handleDecreaseClick(productId: number) {
    const nextProducts = products.map((product) => {
      return product.id === productId
        ? { ...product, count: product.count - 1 }
        : product
    })
    setProducts(nextProducts.filter((product) => product.count > 0))
  }

  return (
    <Card className="flex-1 justify-center">
      <CardContent className="grid">
        <ul className="">
          {products.map((product) => (
            <li key={product.id} className="flex items-center justify-between">
              <p>
                {product.name} <strong>({product.count})</strong>
              </p>
              <div className="flex">
                <Button
                  variant="ghost"
                  className="size-7"
                  onClick={() => handleIncreaseClick(product.id)}
                >
                  <Plus className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="size-7"
                  onClick={() => handleDecreaseClick(product.id)}
                >
                  <Minus className="size-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
