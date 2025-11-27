import { flattenNavigationTree, page, section } from '@/utils/navigation'

import { DescribingTheUISectionPage } from './00-section'
import { YourFirstComponentPage } from './01-your-first-component'
import { ImportingAndExportingComponentsPage } from './02-importing-and-exporting-components'
import { WritingMarkupWithJSXPage } from './03-writing-markup-with-jsx'
import { JavascriptInJsxPage } from './04-js-in-jsx-with-curly-braces'
import { PassingPropsPage } from './05-passing-props-to-a-component'
import { ConditionalRenderingPage } from './06-conditional-rendering'
import { RenderingListsPage } from './07-rendering-lists'
import { KeepingComponentsPurePage } from './08-keeping-components-pure'
import { UIAsTreePage } from './09-your-ui-as-a-tree'

export const DESCRIBE_THE_UI_PREFIX = 'describing-the-ui'

export const DescribingTheUISectionNavigationConfigUI = [
  section(
    DESCRIBE_THE_UI_PREFIX,
    DescribingTheUISectionPage,
    [
      page('your-first-component', YourFirstComponentPage),
      page(
        'importing-and-exporting-components',
        ImportingAndExportingComponentsPage
      ),
      page(
        'writing-markup-with-jsx',
        WritingMarkupWithJSXPage,
        'Writing Markup with JSX'
      ),
      page(
        'javascript-in-jsx-with-curly-braces',
        JavascriptInJsxPage,
        'Javascript in JSX with Curly Braces'
      ),
      page('passing-props-to-a-component', PassingPropsPage),
      page('conditional-rendering', ConditionalRenderingPage),
      page('rendering-lists', RenderingListsPage),
      page('keeping-components-pure', KeepingComponentsPurePage),
      page('your-ui-as-a-tree', UIAsTreePage, 'Your UI as a Tree'),
    ],
    'Describing the UI'
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
