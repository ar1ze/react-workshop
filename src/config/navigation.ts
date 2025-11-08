export interface NavigationLink {
  to: string
  label: string
}

export const navigationLinks: NavigationLink[] = [
  { to: '/page-one', label: 'Page One' },
  { to: '/page-two', label: 'Page Two' },
]
