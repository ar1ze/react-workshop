import { Code2, RotateCcw } from 'lucide-react'
import { type ComponentType, useState } from 'react'

import { CodeBlock } from '@/components/shared/code-block'
import { TabsWithArrows } from '@/components/shared/tabs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { TabsContent } from '@/components/ui/tabs'

import { LearnSectionHeaderBlock } from './header-blocks'

export interface Challenge {
  title: string
  description: string
  SolutionComponent: ComponentType
  problemCode: string
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

const SolutionCodeDialog = ({ challenge }: ChallengeProps) => {
  const tabItems = [
    { title: 'My Solution', value: 'solution' },
    { title: 'Starter Code', value: 'starter' },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" title="View Code" size="icon">
          <Code2 className="shrink-0" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[90vh] w-full max-w-[90vw] flex-col md:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Source Code</DialogTitle>
          <DialogDescription>
            Review the starter code and the final solution below.
          </DialogDescription>
        </DialogHeader>
        <TabsWithArrows
          items={tabItems}
          defaultValue="solution"
          className="flex flex-1 flex-col overflow-hidden"
        >
          <TabsContent value="solution" className="flex-1 overflow-auto">
            <CodeBlock code={challenge.solutionCode} />
          </TabsContent>
          <TabsContent value="starter" className="flex-1 overflow-auto">
            <CodeBlock code={challenge.problemCode} />
          </TabsContent>
        </TabsWithArrows>
      </DialogContent>
    </Dialog>
  )
}

const ProblemCard = ({ challenge }: ChallengeProps) => {
  return (
    <Card className="gap-4">
      <CardHeader>
        <CardTitle>The Problem</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-primary leading-7">{challenge.description}</p>
      </CardContent>
    </Card>
  )
}

const SolutionCard = ({ challenge }: ChallengeProps) => {
  const [resetKey, setResetKey] = useState(0)

  const handleReset = () => {
    setResetKey((prev) => prev + 1)
  }

  return (
    <Card className="gap-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>My Solution</CardTitle>
        <div className="flex items-center">
          <SolutionCodeDialog challenge={challenge} />
          <Button
            variant="ghost"
            size="icon"
            onClick={handleReset}
            title="Rerender Solution"
          >
            <RotateCcw className="size-4 shrink-0" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-cols flex items-center justify-center pb-3">
        <challenge.SolutionComponent key={resetKey} />
      </CardContent>
    </Card>
  )
}

const ChallengeTabs = ({ challenges }: ChallengesProps) => {
  const tabItems = challenges.map((challenge) => {
    const value = challenge.title.toLowerCase().split(' ').slice(1).join('-')
    return {
      title: challenge.title,
      value: value,
    }
  })

  return (
    <TabsWithArrows items={tabItems}>
      {challenges.map((challenge, index) => {
        const value = tabItems[index].value
        return (
          <TabsContent key={value} value={value}>
            <div className="grid gap-4 lg:grid-cols-2">
              <ProblemCard challenge={challenge} />
              <SolutionCard challenge={challenge} />
            </div>
          </TabsContent>
        )
      })}
    </TabsWithArrows>
  )
}

export const LearnChallengeTabsBlock = ({
  challenges,
  url,
}: LearnChallengeTabProps) => {
  return (
    <LearnSectionHeaderBlock
      title="Try out some challenges"
      url={url}
      className="gap-5 md:gap-6"
    >
      <ChallengeTabs challenges={challenges} />
    </LearnSectionHeaderBlock>
  )
}
