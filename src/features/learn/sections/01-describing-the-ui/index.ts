import { flattenNavigationTree, page, section } from '@/utils/navigation'

import { DescribingTheUISectionPage } from './00-section'
import { YourFirstComponentPage } from './01-your-first-component'
import { ImportingAndExportingComponentsPage } from './02-importing-and-exporting-components'
import { WritingMarkupWithJSXPage } from './03-writing-markup-with-jsx'
import { JavascriptInJsxPage } from './04-js-in-jsx-with-curly-braces'
import { PassingPropsPage } from './05-passing-props-to-a-component'

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
      page(
        'writing-markup-with-jsx',
        'Writing Markup with JSX',
        WritingMarkupWithJSXPage
      ),
      page(
        'js-in-jsx-with-curly-braces',
        'JavaScript in  JSX with Curly Braces',
        JavascriptInJsxPage
      ),
      page(
        'passing-props-to-a-component',
        'Passing Props to a Component',
        PassingPropsPage
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
