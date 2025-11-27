import {
  TypographyCodeBlock,
  TypographyInlineCode,
  TypographyList,
  TypographyP,
} from '@/components/ui/typography'
import {
  LearnPageHeaderBlock,
  LearnSectionHeaderBlock,
} from '@/features/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

export const UiAsTreePage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock title="Your UI as a Tree">
          React models your UI as a tree structure. Understanding this helps you
          debug performance, data flow, and app size. There are two distinct
          types of trees you should know.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="1. The Render Tree">
          <TypographyP>
            This tree represents the <strong>runtime</strong> relationship
            between components during a <strong>single render pass</strong>.
          </TypographyP>

          <TypographyList>
            <li>
              <strong>Nodes:</strong> Individual Components (e.g.,{' '}
              <TypographyInlineCode>App</TypographyInlineCode>,{' '}
              <TypographyInlineCode>Button</TypographyInlineCode>).
            </li>
            <li>
              <strong>Structure:</strong> Defined by parent-child composition.
              If
              <TypographyInlineCode>App</TypographyInlineCode> renders{' '}
              <TypographyInlineCode>FancyText</TypographyInlineCode>,{' '}
              <TypographyInlineCode>App</TypographyInlineCode> is the parent.
            </li>
            <li>
              <strong>Dynamic:</strong> The tree structure can change between
              renders due to conditional rendering.
            </li>
            <li>
              <strong>Use Case:</strong> Debugging data flow and rendering
              performance (identifying heavy top-level components vs. frequent
              leaf updates).
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="2. The Module Dependency Tree">
          <TypographyP>
            This tree represents the <strong>static</strong> relationship
            between your JavaScript files (modules).
          </TypographyP>

          <TypographyList>
            <li>
              <strong>Nodes:</strong> Files/Modules (e.g.,{' '}
              <TypographyInlineCode>App.js</TypographyInlineCode>,{' '}
              <TypographyInlineCode>utils.js</TypographyInlineCode>).
            </li>
            <li>
              <strong>Structure:</strong> Defined by{' '}
              <TypographyInlineCode>import</TypographyInlineCode> statements.
            </li>
            <li>
              <strong>Static:</strong> Does not change based on props or state.
            </li>
            <li>
              <strong>Use Case:</strong> Optimization. Build tools (bundlers)
              use this to determine what code to include. Helpful for debugging
              large bundle sizes.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Key Difference">
          <TypographyP>
            A component might be imported by{' '}
            <TypographyInlineCode>App.js</TypographyInlineCode> (Dependency Tree
            parent), but rendered inside a child prop of another component
            (Render Tree location).
          </TypographyP>
          <TypographyCodeBlock
            code={`import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';

// DEPENDENCY TREE: App.js depends on Copyright.js directly (via import)
export default function App() {
  return (
    <>
      <FancyText text="App" />
      {/* RENDER TREE: Copyright is a child of InspirationGenerator, not App */}
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}`}
          />
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
