export interface NavigationLink {
  to: string
  label: string
}

export type NavigationLinks = NavigationLink[]

export interface NavigationSection {
  id: string
  label: string
  to: string
  links: NavigationLink[]
}

export type NavigationSections = NavigationSection[]
