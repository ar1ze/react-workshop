import type { ChangeEvent, InputHTMLAttributes } from 'react'
import { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

interface Food {
  id: number
  name: string
  description: string
}

interface IDLabelProps {
  id: string
  label: string
}

interface InputGroupProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'onChange'>,
    IDLabelProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

interface FoodListTableProps {
  foodItems: Food[]
}

const foodItems: Food[] = [
  {
    id: 0,
    name: 'Fish and Chips',
    description: 'Battered fish with fried potatoes.',
  },
  {
    id: 1,
    name: 'Shepherd’s Pie',
    description: 'Meat pie topped with mashed potatoes.',
  },
  {
    id: 2,
    name: 'Bangers and Mash',
    description: 'Sausages served with mashed potatoes.',
  },
  {
    id: 3,
    name: 'Full English Breakfast',
    description: 'Eggs, bacon, sausage, beans, and toast.',
  },
  {
    id: 4,
    name: 'Yorkshire Pudding',
    description: 'Baked batter served with roast meat.',
  },
]

const filterItems = (items: Food[], query: string) => {
  query = query.toLowerCase()
  return items.filter((item) =>
    item.name.split(' ').some((word) => word.toLowerCase().startsWith(query))
  )
}

const InputGroup = ({ id, label, value, onChange }: InputGroupProps) => {
  return (
    <div className="grid grid-cols-[4rem_1fr] gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type="text"
        id={id}
        className="h-7"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

const FoodTable = ({ foodItems }: FoodListTableProps) => {
  return (
    <div className="max-h-50 w-full overflow-auto">
      <table className="w-full text-sm">
        <tbody>
          {foodItems.map((foodItem) => (
            <tr key={foodItem.id} className="border-b last:border-0">
              <td className="py-2 pr-4 font-medium">{foodItem.name}</td>
              <td className="py-2">{foodItem.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const Solution = () => {
  const [filter, setFilter] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value)
  }

  return (
    <Card className="flex-1 justify-center">
      <CardContent className="flex items-center justify-center">
        <div className="grid w-full justify-items-start gap-y-2">
          <InputGroup id="search" label="Search: " onChange={handleChange} />
          <Separator className="mt-2" />
          <FoodTable foodItems={filterItems(foodItems, filter)} />
        </div>
      </CardContent>
    </Card>
  )
}
