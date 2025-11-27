import { index, page } from '@/utils/navigation'

import { OverviewSection } from './00-section'
import { WhyLearnReactPage } from './01-why-learn-react'

export const OverviewSectionNavigationConfig = [
  index(OverviewSection),
  page('why-learn-react', WhyLearnReactPage),
]
