export interface NavigationLink {
  to: string
  label: string
}

export type NavigationLinks = NavigationLink[]

export const navigationLinks: NavigationLinks = [
  { to: '/page-one', label: 'Page One' },
  { to: '/page-two', label: 'Page Two' },
]

export interface NavigationSection {
  id: string
  label: string
  to: string
  links: NavigationLink[]
}

export type NavigationSections = NavigationSection[]

export const navigationSections: NavigationSection[] = [
  {
    id: 'page-section-one',
    label: 'Page Section One',
    to: '/page-section-one',
    links: [
      { to: '/page-section-one/subpage-one', label: 'Sub Page One' },
      { to: '/page-section-one/subpage-two', label: 'Sub Page Two' },
    ],
  },
  {
    id: 'page-section-two',
    label: 'Page Section Two',
    to: '/page-section-two',
    links: [
      { to: '/page-section-two/subpage-one', label: 'Sub Page One' },
      { to: '/page-section-two/subpage-two', label: 'Sub Page Two' },
    ],
  },
]
