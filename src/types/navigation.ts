import type { ComponentType } from 'react'

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

export type NavigationNode = {
  id: string
  label: string
  to: string
  component: ComponentType
  index?: boolean
  children?: NavigationNode[]
}
