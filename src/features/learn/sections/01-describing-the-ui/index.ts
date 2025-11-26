import { flattenNavigationTree, page, section } from '@/utils/navigation'

import { DescribingTheUISectionPage } from './00-section'
import { YourFirstComponentPage } from './01-your-first-component'
import { ImportingAndExportingComponentsPage } from './02-importing-and-exporting-components'

export const DescribingTheUISectionNavigationConfigUI = [
  section(
    'describing-the-ui',
    'Describing The UI',
    DescribingTheUISectionPage,
    [
      page(
        'your-first-component',
        'Your First Component',
        YourFirstComponentPage
      ),
      page(
        'importing-and-exporting-components',
        'Importing and Exporting Components',
        ImportingAndExportingComponentsPage
      ),
    ]
  ),
]

export const DescribingTheUISectionNavigationConfig = flattenNavigationTree(
  DescribingTheUISectionNavigationConfigUI
).map((entry) => {
  return {
    ...entry,
    id: entry.to,
  }
})
