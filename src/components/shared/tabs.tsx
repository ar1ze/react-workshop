import { ArrowLeft, ArrowRight, Menu } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

export interface TabItem {
  title: string
  value: string
}

interface TabsWithArrowsProps {
  items: TabItem[]
  children: React.ReactNode
  defaultValue?: string
  className?: string
  value?: string
  onValueChange?: (value: string) => void
}

interface MobileNavProps {
  items: TabItem[]
  activeValue: string
  onChange: (value: string) => void
}

interface DesktopNavProps {
  items: TabItem[]
  onPrevious: () => void
  onNext: () => void
}

const MobileTabsNav = ({ items, activeValue, onChange }: MobileNavProps) => {
  const activeTitle =
    items.find((item) => item.value === activeValue)?.title || 'Select Tab'

  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="flex w-full">
          <Button
            variant="outline"
            className="grid grid-cols-[auto_1fr]"
            role="combobox"
          >
            <span className="truncate font-semibold">{activeTitle}</span>
            <Menu className="ml-2 size-4 shrink-0 place-self-end" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-(--radix-dropdown-menu-trigger-width) p-2 sm:w-auto"
        >
          {items.map((item) => (
            <DropdownMenuItem
              key={item.value}
              onSelect={() => onChange(item.value)}
              className={activeValue === item.value ? 'bg-accent' : ''}
            >
              {item.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const DesktopTabsNav = ({ items, onPrevious, onNext }: DesktopNavProps) => {
  return (
    <div className="hidden items-center justify-between gap-4 md:flex">
      <TabsList className="h-10 justify-start overflow-x-auto">
        {items.map((item) => (
          <TabsTrigger key={item.value} value={item.value}>
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>

      <ButtonGroup>
        <Button
          variant="outline"
          size="icon"
          onClick={onPrevious}
          className="h-9 rounded-r-none border-r-0"
          title="Previous Tab"
        >
          <ArrowLeft className="size-4" />
        </Button>
        <ButtonGroupSeparator />
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          className="h-9 rounded-l-none"
          title="Next Tab"
        >
          <ArrowRight className="size-4" />
        </Button>
      </ButtonGroup>
    </div>
  )
}

export function TabsWithArrows({
  items,
  children,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
}: TabsWithArrowsProps) {
  const [internalValue, setInternalValue] = useState(
    defaultValue || items[0]?.value
  )

  const activeValue = controlledValue ?? internalValue

  const handleValueChange = (newValue: string) => {
    if (onValueChange) {
      onValueChange(newValue)
    } else {
      setInternalValue(newValue)
    }
  }

  const currentIndex = items.findIndex((item) => item.value === activeValue)

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length
    handleValueChange(items[newIndex].value)
  }

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % items.length
    handleValueChange(items[newIndex].value)
  }

  return (
    <Tabs
      value={activeValue}
      onValueChange={handleValueChange}
      className={cn('w-full gap-6', className)}
    >
      <MobileTabsNav
        items={items}
        activeValue={activeValue}
        onChange={handleValueChange}
      />

      <DesktopTabsNav
        items={items}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      <div>{children}</div>
    </Tabs>
  )
}
