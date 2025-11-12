import {
  PAGE_SECTION_ONE_SUB_PAGES,
  PAGE_SECTION_TWO_SUB_PAGES,
} from '@/app/routes/sections/structure'

import {
  PageSectionOneRootPage,
  PageSectionOneSubPageOne,
  PageSectionOneSubPageTwo,
} from './page-section-one'
import {
  PageSectionTwoRootPage,
  PageSectionTwoSubPageOne,
  PageSectionTwoSubPageTwo,
} from './page-section-two'
import { PAGE_SECTIONS } from './structure'

export const pageSectionOneChildren = [
  {
    index: true,
    Component: PageSectionOneRootPage,
  },
  {
    path: PAGE_SECTION_ONE_SUB_PAGES.ONE.URL,
    Component: PageSectionOneSubPageOne,
  },
  {
    path: PAGE_SECTION_ONE_SUB_PAGES.TWO.URL,
    Component: PageSectionOneSubPageTwo,
  },
]

export const pageSectionTwoChildren = [
  {
    index: true,
    Component: PageSectionTwoRootPage,
  },
  {
    path: PAGE_SECTION_TWO_SUB_PAGES.ONE.URL,
    Component: PageSectionTwoSubPageOne,
  },
  {
    path: PAGE_SECTION_TWO_SUB_PAGES.TWO.URL,
    Component: PageSectionTwoSubPageTwo,
  },
]

export const pageSectionChildren = [
  {
    path: PAGE_SECTIONS.ONE.URL,
    children: pageSectionOneChildren,
  },
  {
    path: PAGE_SECTIONS.TWO.URL,
    children: pageSectionTwoChildren,
  },
]
