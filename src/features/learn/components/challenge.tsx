import { type ComponentType } from 'react'

import { CodeBlock } from '@/components/shared/code-block'
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

const generateValues = (challenges: Challenge[]) => {
  return challenges.map((challenge) =>
    challenge.title.toLowerCase().split(' ').slice(1).join('-')
  )
}

const ChallengeHeader = ({ url }: URLProps) => (
  <div className="flex items-center">
    <LearnSectionHeader
      title="Try out  some challenges"
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

const ChallengeTabs = ({ challenges }: ChallengesProps) => {
  const values = generateValues(challenges)
  return (
    <Tabs defaultValue={values[0]} className="w-full gap-4">
      <TabsList className="justify-start overflow-x-auto">
        {challenges.map((challenge, index) => (
          <TabsTrigger key={values[index]} value={values[index]}>
            {challenge.title}
          </TabsTrigger>
        ))}
      </TabsList>

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
