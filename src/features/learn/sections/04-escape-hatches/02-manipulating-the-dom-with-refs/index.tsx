import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TypographyCard,
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

export const ManipulatingDomPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Manipulating the DOM with Refs"
          url="https://react.dev/learn/manipulating-the-dom-with-refs"
        >
          React is declarative, but sometimes you need to access browser APIs
          that React doesn't expose (focus, scroll, measuring dimensions). You
          use <TypographyInlineCode>refs</TypographyInlineCode> to get a direct
          handle on the DOM node.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Basic Usage">
          <TypographyList>
            <li>
              <strong>1. Declare:</strong>{' '}
              <TypographyInlineCode>
                const myRef = useRef(null);
              </TypographyInlineCode>
            </li>
            <li>
              <strong>2. Attach:</strong> Pass it to the JSX tag:{' '}
              <TypographyInlineCode>
                &lt;div ref={'{myRef}'} /&gt;
              </TypographyInlineCode>
            </li>
            <li>
              <strong>3. Access:</strong> React puts the DOM node in{' '}
              <TypographyInlineCode>myRef.current</TypographyInlineCode>.
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="The Lifecycle of a Ref">
          <TypographyP>
            Understanding <em>when</em> React attaches the ref is crucial to
            avoiding null pointer errors.
          </TypographyP>

          <TypographyList>
            <li>
              <strong>During Render:</strong>{' '}
              <TypographyInlineCode>ref.current</TypographyInlineCode> is{' '}
              <TypographyInlineCode>null</TypographyInlineCode>. The DOM nodes
              haven't been created yet.
            </li>
            <li>
              <strong>During Commit:</strong> React applies changes to the DOM
              and immediately sets{' '}
              <TypographyInlineCode>ref.current</TypographyInlineCode> to the
              DOM node.
            </li>
          </TypographyList>
          <TypographyP className="text-muted-foreground text-sm">
            <em>
              implication: You should usually only access refs inside Event
              Handlers or Effects.
            </em>
          </TypographyP>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Accessing Child Components">
          <TypographyP>
            Custom components do not expose their DOM nodes by default. You must
            explicitly pass the ref down as a prop.
          </TypographyP>
          <TypographyCodeBlock
            code={`function MyInput({ ref }) {
  return <input ref={ref} />;
}

function Parent() {
  const inputRef = useRef(null);
  return <MyInput ref={inputRef} />;
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Best Practices">
          <div className="grid gap-4 md:grid-cols-2">
            <TypographyCard className="border-chart-2">
              <CardHeader>
                <CardTitle className="text-chart-2">Safe Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0 text-sm">
                  Non-destructive actions that read data or call browser APIs.
                </TypographyP>
                <TypographyList className="mt-2 text-sm">
                  <li>Focusing</li>
                  <li>
                    Scrolling (
                    <TypographyInlineCode>scrollIntoView</TypographyInlineCode>)
                  </li>
                  <li>
                    Measuring (
                    <TypographyInlineCode>
                      getBoundingClientRect
                    </TypographyInlineCode>
                    )
                  </li>
                </TypographyList>
              </CardContent>
            </TypographyCard>

            <TypographyCard className="border-destructive">
              <CardHeader>
                <CardTitle className="text-destructive">
                  Unsafe Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0 text-sm">
                  Modifying the DOM structure manually conflicts with React's
                  virtual DOM diffing.
                </TypographyP>
                <TypographyList className="mt-2 text-sm">
                  <li>
                    <TypographyInlineCode>remove()</TypographyInlineCode>
                  </li>
                  <li>
                    <TypographyInlineCode>appendChild()</TypographyInlineCode>
                  </li>
                  <li>
                    Manually changing{' '}
                    <TypographyInlineCode>innerText</TypographyInlineCode> if
                    React manages content.
                  </li>
                </TypographyList>
              </CardContent>
            </TypographyCard>
          </div>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
