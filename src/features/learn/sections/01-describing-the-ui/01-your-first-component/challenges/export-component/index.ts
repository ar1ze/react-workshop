import { type Challenge } from '@/features/learn/components'

import { Solution } from './solution'
import solutionCode from './solution.tsx?raw'

export const exportComponentChallenge: Challenge = {
  title: '1. Export the component',
  description:
    'The Profile component is defined but not rendering. Add the default export to the component definition to make it visible.',
  SolutionComponent: Solution,
  solutionCode,
}
