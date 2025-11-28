import { type Challenge } from '@/features/learn/components'

import problemCode from './problem.tsx?raw'
import { Solution } from './solution'
import solutionCode from './solution.tsx?raw'

const RemoveItemShoppingChartChallenge: Challenge = {
  title: '2. Remove an item from the shopping cart',
  description:
    'Add an event handler to the "-" button to decrease the product count. If the count is currently 1, remove the item from the cart entirely to ensure quantities never drop to 0.',
  SolutionComponent: Solution,
  problemCode,
  solutionCode,
}

export const UpdatingArraysInStateChallenges = [
  RemoveItemShoppingChartChallenge,
]
