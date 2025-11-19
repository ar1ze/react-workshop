import { type NavigationLink } from '@/types/navigation'

import { BLOG_PAGE_PREFIX } from '../routes/app/blog'
import { LEARN_PAGE_PREFIX } from '../routes/app/learn'

export const LearnNavigationLinks: NavigationLink[] = [
  { to: LEARN_PAGE_PREFIX, label: 'Learn' },
  { to: BLOG_PAGE_PREFIX, label: 'Blog' },
]
