export interface NavigationLink {
  to: string
  label: string
}

export const navigationLinks: NavigationLink[] = [
  { to: '/page-one', label: 'Page One' },
  { to: '/page-two', label: 'Page Two' },
]

export interface NavigationSection {
  id: string
  label: string
  links: NavigationLink[]
}

export const navigationSections: NavigationSection[] = [
  {
    id: 'page-section-one',
    label: 'Page Section One',
    links: [
      { to: 'page-section-one/subpage-one', label: 'Sub Page One ' },
      { to: 'page-section-one/subpage-two', label: 'Sub Page Two ' },
    ],
  },
  {
    id: 'page-section-two',
    label: 'Page Section Two',
    links: [
      { to: 'page-section-two/subpage-one', label: 'Sub Page One ' },
      { to: 'page-section-two/subpage-two', label: 'Sub Page Two ' },
    ],
  },
]
