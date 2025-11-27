import { useMemo } from 'react'

import { type NavigationNode } from '@/components/navigation'
import { flattenNavigationTree, groupNodesBySection } from '@/utils/navigation'
import { arePathsEqual, joinPaths } from '@/utils/path'

import { LearnNavigationConfig } from '../routes'

export interface LearnNavigationGroup {
  sectionNode?: NavigationNode
  childrenNodes: NavigationNode[]
}

export const useLearnNavigation = (): LearnNavigationGroup[] => {
  const groups = useMemo(() => {
    const allNodesFlat = flattenNavigationTree(LearnNavigationConfig)
    const sectionLearn = joinPaths('learn')
    const sectionLearnDescribePath = joinPaths('learn', 'describing-the-ui')
    const sectionLearnInteractivityPath = joinPaths(
      'learn',
      'adding-interactivity'
    )

    const sectionPaths = [
      sectionLearn,
      sectionLearnDescribePath,
      sectionLearnInteractivityPath,
    ]

    const allChildNodes = allNodesFlat.filter(
      (node) =>
        !arePathsEqual(node.to, sectionLearn) &&
        !arePathsEqual(node.to, sectionLearnDescribePath) &&
        !arePathsEqual(node.to, sectionLearnInteractivityPath)
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
