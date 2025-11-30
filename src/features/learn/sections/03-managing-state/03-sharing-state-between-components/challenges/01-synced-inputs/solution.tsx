import { type ChangeEvent, type InputHTMLAttributes, useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface IDLabelProps {
  id: string
  label: string
}

interface InputGroupProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'value' | 'id' | 'onChange'
    >,
    IDLabelProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputGroup = ({ id, label, value, onChange }: InputGroupProps) => {
  return (
    <div className="grid grid-cols-[6rem_1fr] gap-2">
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

export const Solution = () => {
  const [text, setText] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  const groups: IDLabelProps[] = [
    {
      id: 'firstInput',
      label: 'First Input:',
    },
    {
      id: 'secondInput',
      label: 'Second Input:',
    },
  ]

  return (
    <Card className="flex-1 justify-center">
      <CardContent className="flex items-center justify-center">
        <div className="flex flex-col gap-4">
          {groups.map((group) => (
            <InputGroup
              key={group.id}
              value={text}
              id={group.id}
              label={group.label}
              onChange={handleChange}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
