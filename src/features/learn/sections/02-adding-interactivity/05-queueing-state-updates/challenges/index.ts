import { type Challenge } from '@/features/learn/components'

import problemCode from './problem.tsx?raw'
import { Solution } from './solution'
import solutionCode from './solution.tsx?raw'

const FixARequestCounterChallenge: Challenge = {
  title: '1. Fix a request counter',
  description:
    'The Pending counter malfunctions because the timeout uses the state value captured at the moment of the click. Fix both counters by using updater functions to ensure the increment and decrement operations rely on the most recent state.',
  SolutionComponent: Solution,
  problemCode,
  solutionCode,
}

export const QueueingStatesChallenges = [FixARequestCounterChallenge]
