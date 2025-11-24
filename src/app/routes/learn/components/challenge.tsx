import { ExternalLink } from 'lucide-react'
import { type ComponentType } from 'react'

import { SectionTitle } from '@/components/common'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export interface Challenge {
  title: string
  description: string
  SolutionComponent: ComponentType
}

interface LearnChallengeTabProps {
  challenges: Challenge[]
  url: string
}

const generateValues = (challenges: Challenge[]) => {
  return challenges.map((challenge) =>
    challenge.title.toLowerCase().split(' ').slice(1).join('-')
  )
}

const renderHeader = (url: string) => (
  <div className="flex items-center">
    <SectionTitle className="flex text-lg font-semibold tracking-tight md:text-xl">
      Try out some challenges
    </SectionTitle>

    <Button
      variant="ghost"
      asChild
      size="icon-sm"
      className="hover:bg-background dark:hover:bg-background"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xd"
      >
        <ExternalLink />
      </a>
    </Button>
  </div>
)

const renderChallengeTabs = (challenges: Challenge[], values: string[]) => {
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
              <CardContent>
                <challenge.SolutionComponent />
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
  const values = generateValues(challenges)

  return (
    <>
      {renderHeader(url)}
      {renderChallengeTabs(challenges, values)}
    </>
  )
}
