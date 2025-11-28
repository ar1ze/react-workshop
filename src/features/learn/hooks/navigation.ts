import { useMemo } from 'react'

import { type NavigationNode } from '@/components/navigation'
import {
  LEARN_PAGE_PREFIX,
  LearnNavigationConfig,
} from '@/features/learn/routes'
import {
  ADDING_INTERACTIVITY_PREFIX,
  DESCRIBE_THE_UI_PREFIX,
  ESCAPE_HATCHES_PREFIX,
  MANAGING_STATE_PREFIX,
} from '@/features/learn/sections'
import { flattenNavigationTree, groupNodesBySection } from '@/utils/navigation'
import { arePathsEqual, isSubpath, joinPaths } from '@/utils/path'

export interface LearnNavigationGroup {
  sectionNode?: NavigationNode
  childrenNodes: NavigationNode[]
}

export type LearnSectionPrefix =
  | typeof DESCRIBE_THE_UI_PREFIX
  | typeof ADDING_INTERACTIVITY_PREFIX
  | typeof MANAGING_STATE_PREFIX
  | typeof ESCAPE_HATCHES_PREFIX

export const getLearnNodesByPrefix = (
  prefix: LearnSectionPrefix
): NavigationNode[] => {
  const root = LearnNavigationConfig[0]
  if (!root?.children) return []

  return root.children.filter(
    (node) => isSubpath(prefix, node.to) && !arePathsEqual(prefix, node.id)
  )
}

export const useLearnNavigation = (): LearnNavigationGroup[] => {
  const groups = useMemo(() => {
    const allNodesFlat = flattenNavigationTree(LearnNavigationConfig)
    const sectionLearn = joinPaths(LEARN_PAGE_PREFIX)

    const sectionLearnDescribePath = joinPaths(
      LEARN_PAGE_PREFIX,
      DESCRIBE_THE_UI_PREFIX
    )
    const sectionLearnInteractivityPath = joinPaths(
      LEARN_PAGE_PREFIX,
      ADDING_INTERACTIVITY_PREFIX
    )
    const sectionLearnManagingState = joinPaths(
      LEARN_PAGE_PREFIX,
      MANAGING_STATE_PREFIX
    )
    const sectionLearnEscapeHatches = joinPaths(
      LEARN_PAGE_PREFIX,
      ESCAPE_HATCHES_PREFIX
    )

    const sectionPaths = [
      sectionLearn,
      sectionLearnDescribePath,
      sectionLearnInteractivityPath,
      sectionLearnManagingState,
      sectionLearnEscapeHatches,
    ]

    const allChildNodes = allNodesFlat.filter(
      (node) =>
        !arePathsEqual(node.to, sectionLearn) &&
        !arePathsEqual(node.to, sectionLearnDescribePath) &&
        !arePathsEqual(node.to, sectionLearnInteractivityPath) &&
        !arePathsEqual(node.to, sectionLearnManagingState) &&
        !arePathsEqual(node.to, sectionLearnEscapeHatches)
    )

    const groupedChildren = groupNodesBySection(allChildNodes, sectionPaths)

    return sectionPaths.map((sectionPath) => {
      const sectionNode = allNodesFlat.find((node) =>
        arePathsEqual(node.to, sectionPath)
      )

      const childrenNodes = groupedChildren[sectionPath] || []

      return {
        sectionNode,
        childrenNodes,
      }
    })
  }, [])

  return groups
}
