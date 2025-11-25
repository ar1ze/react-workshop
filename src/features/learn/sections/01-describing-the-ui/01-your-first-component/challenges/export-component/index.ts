import { type Challenge } from '@/features/learn/components'

import { Solution } from './solution'
import solutionCode from './solution.tsx?raw'

export const exportComponentChallenge: Challenge = {
  title: '1. Export the component',
  description:
    'This sandbox doesn’t work because the root component is not exported. In React, you must explicitly export components so they can be imported and used in other files.',
  SolutionComponent: Solution,
  solutionCode,
}
