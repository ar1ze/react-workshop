import { Pen, Save } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const Solution = () => {
  const [firstName, setFirstName] = useState('Miyu')
  const [lastName, setLastName] = useState('Aozora')
  const [editProfile, setEditProfile] = useState(false)

  function handleEditProfileClick() {
    setEditProfile(!editProfile)
  }

  return (
    <Card className="w-full">
      <CardContent className="grid gap-y-2">
        <div className="flex items-center justify-between">
          <p className="font-semibold">My profile</p>
          <Button variant="ghost" size="icon" onClick={handleEditProfileClick}>
            {!editProfile ? (
              <Pen className="size-4" />
            ) : (
              <Save className="size-4" />
            )}
          </Button>
        </div>

        <div className="grid grid-cols-[5rem_1fr] items-center gap-x-2">
          <Label htmlFor="firstName" className="text-muted-foreground">
            First name:
          </Label>
          {editProfile ? (
            <Input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="h-8"
            />
          ) : (
            <p className="flex h-8 items-center font-medium">{firstName}</p>
          )}
        </div>

        <div className="grid grid-cols-[5rem_1fr] items-center gap-x-2">
          <Label htmlFor="lastName" className="text-muted-foreground">
            Last name:
          </Label>
          {editProfile ? (
            <Input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="h-8"
            />
          ) : (
            <p className="flex h-8 items-center font-medium">{lastName}</p>
          )}
        </div>

        <div className="flex pt-2">
          <div className="bg-accent grid flex-1 place-content-center rounded-md px-1 py-2">
            <p className="truncate text-sm font-semibold">
              Hello {firstName} {lastName}!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
