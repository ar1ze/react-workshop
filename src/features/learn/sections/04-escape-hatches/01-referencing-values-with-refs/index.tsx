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

export const ReferencingValuesWithRefsPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Referencing Values with Refs"
          url="https://react.dev/learn/referencing-values-with-refs"
        >
          When you want a component to "remember" information without triggering
          new renders, use a <strong>Ref</strong>. It is like a secret pocket in
          your component that React doesn't track.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Syntax & Behavior">
          <TypographyP>
            <TypographyInlineCode>useRef</TypographyInlineCode> returns a plain
            JavaScript object with a single mutable property:{' '}
            <TypographyInlineCode>current</TypographyInlineCode>.
          </TypographyP>

          <TypographyCodeBlock
            code={`import { useRef } from 'react';

export default function Counter() {
  const ref = useRef(0); // { current: 0 }

  function handleClick() {
    // 1. Mutating this DOES NOT trigger a re-render
    // 2. The value persists between renders
    ref.current = ref.current + 1;
    
    alert('You clicked ' + ref.current + ' times!');
  }

  return <button onClick={handleClick}>Click me</button>;
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Refs vs. State">
          <TypographyP>
            The decision comes down to one question:{' '}
            <strong>Does this change need to update the screen?</strong>
          </TypographyP>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <TypographyCard>
              <CardHeader>
                <CardTitle>State (useState)</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyList className="mt-0 text-sm">
                  <li>
                    <strong>Triggers Re-render:</strong> Yes.
                  </li>
                  <li>
                    <strong>Mutable?</strong> No. Must use setter.
                  </li>
                  <li>
                    <strong>Read during render?</strong> Yes (Snapshot).
                  </li>
                  <li>
                    <strong>Use Case:</strong> UI data (inputs, toggles).
                  </li>
                </TypographyList>
              </CardContent>
            </TypographyCard>

            <TypographyCard>
              <CardHeader>
                <CardTitle>Ref (useRef)</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyList className="mt-0 text-sm">
                  <li>
                    <strong>Triggers Re-render:</strong> No.
                  </li>
                  <li>
                    <strong>Mutable?</strong> Yes (
                    <TypographyInlineCode>ref.current = 5</TypographyInlineCode>
                    ).
                  </li>
                  <li>
                    <strong>Read during render?</strong> NO.
                  </li>
                  <li>
                    <strong>Use Case:</strong> Interval IDs, DOM nodes.
                  </li>
                </TypographyList>
              </CardContent>
            </TypographyCard>
          </div>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Common Use Case: Infrastructure Data">
          <TypographyP>
            Refs are perfect for storing data that the code needs but the user
            doesn't see, such as Interval IDs.
          </TypographyP>
          <TypographyCodeBlock
            code={`function Stopwatch() {
  const [now, setNow] = useState(null); // Visual: Needs re-render
  const intervalRef = useRef(null);     // Infrastructure: No re-render needed

  function handleStart() {
    setNow(Date.now());
    
    // Store ID in ref so we can clear it later.
    // Changing this doesn't need to update the screen immediately.
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="The Golden Rule">
          <TypographyCard className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">
                Do Not Read/Write Refs During Rendering
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP className="mt-0">
                React expects the rendering process to be <strong>pure</strong>.
                Because changing a ref is a side effect, and reading it is
                unpredictable (since it doesn't snapshot), you should only
                access refs inside <strong>Event Handlers</strong> or{' '}
                <strong>Effects</strong>.
              </TypographyP>
              <TypographyCodeBlock
                className="mt-4"
                code={`// ❌ BAD: Reading/Writing during render
function BadComponent() {
  const count = useRef(0);
  
  // This is a side effect during render!
  count.current = count.current + 1; 
  
  // Predictability is lost
  return <h1>{count.current}</h1>; 
}`}
              />
            </CardContent>
          </TypographyCard>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
