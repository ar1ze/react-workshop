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

export const ImportingAndExportingComponentsPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock title="Importing And Exporting Components">
          The magic of components lies in reusability. As your application
          grows, splitting components into separate files keeps your project
          modular and scannable.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Process">
          <TypographyP>
            Moving a component out of the root file involves three core steps:
          </TypographyP>

          <TypographyList>
            <li>
              <strong>1. Create a new file:</strong> Make a new JS file to put
              the component in (e.g.,{' '}
              <TypographyInlineCode>Button.js</TypographyInlineCode>).
            </li>
            <li>
              <strong>2. Export the component:</strong> Use either{' '}
              <TypographyInlineCode>default</TypographyInlineCode> or{' '}
              <TypographyInlineCode>named</TypographyInlineCode> exports in that
              new file.
            </li>
            <li>
              <strong>3. Import the component:</strong> Import it in the
              destination file (e.g.,{' '}
              <TypographyInlineCode>App.js</TypographyInlineCode>) using the
              corresponding technique.
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`// 1. Create file: Button.js
// 2. Export function (Default or Named)
export default function Button() {
  return <button>Click me</button>;
}

// -------------------------------------

// 3. Import in App.js
import Button from './Button.js';

export default function App() {
  return <Button />;
}`}
          />
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
