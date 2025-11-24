import { type Challenge } from '@/app/routes/learn/components'

import midnightImage from './images/midnight-focus.jpg'

export const Solution = () => {
  return <img src={midnightImage} alt="Midnight focus" />
}

// eslint-disable-next-line react-refresh/only-export-components
export const fixReturnStatementChallenge: Challenge = {
  title: '2. Fix the return statement',
  description:
    'This sandbox doesn’t work because the root component is not exported',
  SolutionComponent: Solution,
}
