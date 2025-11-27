import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TypographyCard,
  TypographyCodeBlock,
  TypographyH4,
  TypographyInlineCode,
  TypographyList,
  TypographyP,
} from '@/components/ui/typography'
import {
  LearnPageHeaderBlock,
  LearnSectionHeaderBlock,
} from '@/features/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

export const StateMemoryPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="State: A Component's Memory"
          url="https://react.dev/learn/state-a-components-memory"
        >
          Components need to "remember" things (input values, current tabs,
          shopping carts). In React, this memory is called{' '}
          <strong>State</strong>. Unlike regular variables, updating state
          triggers a re-render, ensuring the UI stays in sync with the data.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Why Regular Variables Fail">
          <TypographyP>
            If you try to use a <TypographyInlineCode>let</TypographyInlineCode>{' '}
            variable to track data, the UI will not update.
          </TypographyP>
          <TypographyList>
            <li>
              <strong>No Persistence:</strong> Local variables are
              re-initialized to their default value every time the component
              renders.
            </li>
            <li>
              <strong>No Trigger:</strong> Changing a local variable does not
              tell React to run the render function again.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="The useState Hook">
          <TypographyP>
            <TypographyInlineCode>useState</TypographyInlineCode> solves both
            problems. It retains data between renders and triggers a re-render
            when updated.
          </TypographyP>

          <TypographyCodeBlock
            code={`import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <p>Index is: {index}</p>
    </>
  );
}`}
          />
          <TypographyP>
            <strong>The Syntax:</strong> We use{' '}
            <strong>Array Destructuring</strong>{' '}
            <TypographyInlineCode>[index, setIndex]</TypographyInlineCode> to
            capture the two values returned by the hook:
          </TypographyP>
          <TypographyList>
            <li>
              <strong>State Variable:</strong> The current value (retained
              across renders).
            </li>
            <li>
              <strong>Setter Function:</strong> Updates the variable and
              triggers React to re-render.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Rules of Hooks">
          <TypographyP>
            Hooks (functions starting with{' '}
            <TypographyInlineCode>use</TypographyInlineCode>) are more
            restrictive than regular functions.
          </TypographyP>
          <TypographyList>
            <li>
              <strong>Top Level Only:</strong> Never call Hooks inside loops,
              conditions, or nested functions.
            </li>
            <li>
              <strong>Unconditional:</strong> React relies on the call order of
              Hooks to know which state belongs to which variable. This order
              must be the same on every render.
            </li>
          </TypographyList>
          <TypographyCard>
            <CardHeader>
              <CardTitle>
                <TypographyH4>State is Isolated and Private</TypographyH4>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP className="mt-0">
                State is local to the specific <strong>instance</strong> of the
                component on the screen. If you render the same component twice,
                each copy has its own completely independent state.
              </TypographyP>
              <TypographyCodeBlock
                className="mt-4"
                code={`export default function Page() {
  return (
    <div className="Page">
      {/* These two act independently */}
      <Gallery />
      <Gallery />
    </div>
  );
}`}
              />
            </CardContent>
          </TypographyCard>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
