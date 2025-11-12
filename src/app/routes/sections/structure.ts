import { joinPaths } from '@/utils/path'

import { type NavigationSection } from '../../../config/nav-types'

export const PAGE_SECTIONS = {
  ONE: { URL: 'page-section-one', LABEL: 'Page Section One' },
  TWO: { URL: 'page-section-two', LABEL: 'Page Section Two' },
} as const

export const PAGE_SECTION_ONE_SUB_PAGES = {
  ONE: { URL: 'subpage-one', LABEL: 'Sub Page One' },
  TWO: { URL: 'subpage-two', LABEL: 'Sub Page Two' },
} as const

export const PAGE_SECTION_TWO_SUB_PAGES = {
  ONE: { URL: 'subpage-one', LABEL: 'Sub Page One' },
  TWO: { URL: 'subpage-two', LABEL: 'Sub Page Two' },
} as const

const SUB_PAGES_MAP = {
  [PAGE_SECTIONS.ONE.URL]: PAGE_SECTION_ONE_SUB_PAGES,
  [PAGE_SECTIONS.TWO.URL]: PAGE_SECTION_TWO_SUB_PAGES,
} as const

export const navigationSections: NavigationSection[] = Object.values(
  PAGE_SECTIONS
).map((section) => {
  const subPages = SUB_PAGES_MAP[section.URL]

  const links = Object.values(subPages).map((subPage) => ({
    to: joinPaths(section.URL, subPage.URL),
    label: subPage.LABEL,
  }))

  return {
    id: section.URL,
    label: section.LABEL,
    to: section.URL,
    links,
  }
})
