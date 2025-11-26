import { index, page } from '@/utils/navigation'

import { OverviewSection } from './00-section'
import { ThinkingReactPage } from './01-thinking-react'

export const OverviewSectionNavigationConfig = [
  index(OverviewSection),
  page('thinking-in-react', 'Thinking in React', ThinkingReactPage),
]
