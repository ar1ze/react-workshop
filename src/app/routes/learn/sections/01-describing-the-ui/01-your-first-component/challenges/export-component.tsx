import { type Challenge } from '@/app/routes/learn/components'

import japanSceneImage from './images/japan-scene.jpg'

export const Solution = () => {
  return <img src={japanSceneImage} alt="Japan scene" />
}

// eslint-disable-next-line react-refresh/only-export-components
export const exportComponentChallenge: Challenge = {
  title: '1. Export the component',
  description:
    'This sandbox doesn’t work because the root component is not exported. In React, you must explicitly export components so they can be imported and used in other files.',
  SolutionComponent: Solution,
}
