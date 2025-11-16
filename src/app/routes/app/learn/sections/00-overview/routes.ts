import { index, page } from '@/utils/navigation'

import { OverviewSectionPage } from '.'
import { ThinkingReactPage } from './01-thinking-react'

export const OverviewSectionNavigationConfig = [
  index(OverviewSectionPage),
  page('thinking-in-react', 'Thinking in React', ThinkingReactPage),
]
