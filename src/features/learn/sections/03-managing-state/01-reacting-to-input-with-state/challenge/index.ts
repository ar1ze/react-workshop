import { type Challenge } from '@/features/learn/components'

import problemCode from './problem.txt?raw'
import { Solution } from './solution'
import solutionCode from './solution.tsx?raw'

const ProfileEditorChallenge: Challenge = {
  title: '1. Profile editor',
  description: `Reimplement the form logic in React. Use state to toggle between 'Edit' and 'View' modes to conditionally display inputs, and ensure the welcome message updates in real time.`,
  SolutionComponent: Solution,
  problemCode,
  solutionCode,
}

export const ReactingToInputWithStateChallenges = [ProfileEditorChallenge]
