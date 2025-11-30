import { type Challenge } from '@/features/learn/components'

import problemCode from './problem.txt?raw'
import { Solution } from './solution'
import solutionCode from './solution.tsx?raw'

export const FilteringAListChallenge: Challenge = {
  title: '2. Filtering a list',
  description:
    'Lift the state up to the parent component so both inputs share the same source of truth. Pass the shared state and the change handler down to both inputs to keep them synchronized.',
  SolutionComponent: Solution,
  problemCode,
  solutionCode,
}
