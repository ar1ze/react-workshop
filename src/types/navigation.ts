export interface NavigationLink {
  to: string
  label: string
}

export type NavigationLinks = NavigationLink[]

export interface NavigationSection extends NavigationLink {
  id: string
  children: NavigationLink[]
}

export type NavigationSections = NavigationSection[]
