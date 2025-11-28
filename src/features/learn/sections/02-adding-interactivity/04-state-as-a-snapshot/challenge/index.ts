import { type Challenge } from '@/features/learn/components'

import problemCode from './problem.txt?raw'
import { Solution } from './solution'
import solutionCode from './solution.tsx?raw'

const TrafficLightChallenge: Challenge = {
  title: '1. Implement a traffic light',
  description: `Add an alert to the click handler that announces the upcoming state. If the light is green, it should alert 'Stop is next', and if red, it should alert 'Walk is next'.`,
  SolutionComponent: Solution,
  problemCode,
  solutionCode,
}

export const StateAsASnapshotChallenges = [TrafficLightChallenge]
