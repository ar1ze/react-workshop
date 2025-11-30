import { type Challenge } from '@/features/learn/components'

import problemCode from './problem.txt?raw'
import { Solution } from './solution'
import solutionCode from './solution.tsx?raw'

export const SyncedInputsChallenge: Challenge = {
  title: '1. Synced inputs',
  description:
    'Lift the state up to the parent component to synchronize the two inputs. Ensure that editing one input updates the other with the same text.',
  SolutionComponent: Solution,
  problemCode,
  solutionCode,
}
