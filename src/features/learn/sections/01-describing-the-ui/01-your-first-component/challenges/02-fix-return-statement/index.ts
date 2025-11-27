import { type Challenge } from '@/features/learn/components'

import problemCode from './problem.txt?raw'
import { Solution } from './solution'
import solutionCode from './solution.tsx?raw'

export const fixReturnStatementChallenge: Challenge = {
  title: '2. Fix the return statement',
  description:
    'The return statement is failing because the JSX starts on a new line. Fix the return statement to ensure the image renders.',
  SolutionComponent: Solution,
  problemCode,
  solutionCode,
}
