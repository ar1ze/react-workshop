import { type Challenge } from '@/app/routes/learn/components'

import { Solution } from './solution'
import solutionCode from './solution.tsx?raw'

export const fixReturnStatementChallenge: Challenge = {
  title: '2. Fix the return statement',
  description:
    'This sandbox doesn’t work because the root component is not exported',
  SolutionComponent: Solution,
  solutionCode,
}
