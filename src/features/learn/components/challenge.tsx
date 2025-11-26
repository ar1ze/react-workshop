import { ArrowLeft, ArrowRight, Menu } from 'lucide-react'
import { type ComponentType, useState } from 'react'

import { CodeBlock } from '@/components/shared/code-block'
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { LearnSectionHeader } from './headers'

export interface Challenge {
  title: string
  description: string
  SolutionComponent: ComponentType
  solutionCode: string
}

interface LearnChallengeTabProps {
  challenges: Challenge[]
  url: string
}

interface ChallengesProps {
  challenges: Challenge[]
}

interface ChallengeProps {
  challenge: Challenge
}

interface URLProps {
  url: string
}

interface ChallengeListProps {
  challenges: Challenge[]
  values: string[]
  activeTab: string
  onSelect: (value: string) => void
  onPrevious: () => void
  onNext: () => void
}

interface ChallengeContentProps {
  challenges: Challenge[]
  values: string[]
}

const generateValues = (challenges: Challenge[]) => {
  return challenges.map((challenge) =>
    challenge.title.toLowerCase().split(' ').slice(1).join('-')
  )
}

const ChallengeHeader = ({ url }: URLProps) => (
  <div className="flex items-center">
    <LearnSectionHeader
      title="Try out some challenges"
      url={url}
    ></LearnSectionHeader>
  </div>
)

const SolutionCodeDialog = ({ challenge }: ChallengeProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">View Code</Button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[90vh] max-w-7xl flex-col">
        <DialogHeader>
          <DialogTitle>{challenge.title} - Solution</DialogTitle>
          <DialogDescription>
            Here is the complete source code for this solution.
          </DialogDescription>
        </DialogHeader>
        <CodeBlock code={challenge.solutionCode} />
      </DialogContent>
    </Dialog>
  )
}

const ChallengeList = ({
  challenges,
  values,
  activeTab,
  onSelect,
  onPrevious,
  onNext,
}: ChallengeListProps) => {
  const activeIndex = values.indexOf(activeTab)
  const activeLabel = challenges[activeIndex]?.title || 'Select Challenge'

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="flex w-full">
            <Button
              variant="outline"
              size="default"
              className="flex items-center justify-between"
            >
              <span className="text-base font-semibold">{activeLabel}</span>
              <Menu className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {challenges.map((challenge, index) => (
              <DropdownMenuItem
                key={values[index]}
                onClick={() => onSelect(values[index])}
                className={activeTab === values[index] ? 'bg-accent' : ''}
              >
                {challenge.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop View */}
      <div className="hidden items-center justify-between md:flex">
        <TabsList className="justify-start overflow-x-auto">
          {challenges.map((challenge, index) => (
            <TabsTrigger key={values[index]} value={values[index]}>
              {challenge.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <ButtonGroup>
          <Button
            variant="outline"
            size="icon"
            onClick={onPrevious}
            className="h-8"
          >
            <ArrowLeft />
          </Button>
          <ButtonGroupSeparator />
          <Button
            variant="outline"
            size="icon"
            onClick={onNext}
            className="h-8"
          >
            <ArrowRight />
          </Button>
        </ButtonGroup>
      </div>
    </>
  )
}

const ChallengeContent = ({ challenges, values }: ChallengeContentProps) => {
  return (
    <>
      {challenges.map((challenge, index) => (
        <TabsContent key={values[index]} value={values[index]}>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>The Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary leading-7">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>My Solution</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <challenge.SolutionComponent />
                <SolutionCodeDialog challenge={challenge} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      ))}
    </>
  )
}

const ChallengeTabs = ({ challenges }: ChallengesProps) => {
  const values = generateValues(challenges)
  const [activeTab, setActiveTab] = useState(values[0])

  const currentIndex = values.indexOf(activeTab)

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + values.length) % values.length
    setActiveTab(values[newIndex])
  }

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % values.length
    setActiveTab(values[newIndex])
  }

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full gap-4"
    >
      <ChallengeList
        challenges={challenges}
        values={values}
        activeTab={activeTab}
        onSelect={setActiveTab}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      <ChallengeContent challenges={challenges} values={values} />
    </Tabs>
  )
}

export const LearnChallengeTabs = ({
  challenges,
  url,
}: LearnChallengeTabProps) => {
  return (
    <>
      <ChallengeHeader url={url} />
      <ChallengeTabs challenges={challenges} />
    </>
  )
}
