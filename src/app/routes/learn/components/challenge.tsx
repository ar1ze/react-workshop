import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export interface Challenge {
  title: string
}

interface LearnChallengeTabProps {
  challenges: Challenge[]
}

const generateValues = (challenges: Challenge[]) => {
  return challenges.map((challenge) =>
    challenge.title.toLowerCase().split(' ').slice(1).join('-')
  )
}

export const LearnChallengeTabs = ({ challenges }: LearnChallengeTabProps) => {
  const values = generateValues(challenges)
  return (
    <Tabs defaultValue={values[0]}>
      <TabsList>
        {challenges.map((challenge, index) => (
          <TabsTrigger key={values[index]} value={values[index]}>
            {challenge.title}
          </TabsTrigger>
        ))}
      </TabsList>

      <Card>
        {challenges.map((challenge, index) => (
          <TabsContent key={values[index]} value={values[index]}>
            Content for: {challenge.title}
          </TabsContent>
        ))}
      </Card>
    </Tabs>
  )
}
