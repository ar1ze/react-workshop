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

export const StateAsSnapshotPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="State as a Snapshot"
          url="https://react.dev/learn/state-as-a-snapshot"
        >
          State variables might look like regular JavaScript variables that you
          read and write to, but they behave more like a snapshot. Setting state
          does not change the variable you are currently using; it triggers a
          re-render with a new value.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Core Concept">
          <TypographyP>
            “Rendering” means React calls your component function. The JSX,
            props, and variables inside that function are calculated using the
            state <strong>at the time of that specific render</strong>.
          </TypographyP>

          <TypographyList>
            <li>
              <strong>State lives outside:</strong> React stores state outside
              your function (like on a shelf).
            </li>
            <li>
              <strong>The Snapshot:</strong> When React calls your component, it
              gives you a snapshot of the state for <em>that</em> render.
            </li>
            <li>
              <strong>Immutable for the render:</strong> A state variable's
              value never changes within a single render, even inside
              asynchronous code like{' '}
              <TypographyInlineCode>setTimeout</TypographyInlineCode>.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="The Substitution Method">
          <TypographyP>
            To understand why state doesn't update immediately, mentally
            substitute the state variable with its numeric value for that
            render.
          </TypographyP>

          <TypographyCodeBlock
            code={`export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <button onClick={() => {
      // 1. In this render, 'number' is 0.
      // 2. You are effectively writing: setNumber(0 + 1)
      setNumber(number + 1);
      
      // 3. 'number' is STILL 0 here!
      setNumber(number + 1); 
      
      // 4. 'number' is STILL 0 here!
      setNumber(number + 1);
      
      alert(number); // Alerts "0"
    }}>+3</button>
  )
}`}
          />
          <TypographyP>
            React queues the updates, but in this specific render,{' '}
            <TypographyInlineCode>number</TypographyInlineCode> is always 0. The
            next render will see{' '}
            <TypographyInlineCode>number</TypographyInlineCode> as 1 (because
            you set it to <TypographyInlineCode>0 + 1</TypographyInlineCode>{' '}
            three times).
          </TypographyP>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Event Handlers are 'Fixed'">
          <TypographyCard>
            <CardHeader>
              <CardTitle>Time Travel Proof</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP className="mt-0">
                Even if an event handler runs later (e.g., via{' '}
                <TypographyInlineCode>setTimeout</TypographyInlineCode>), it
                uses the state from the render in which it was{' '}
                <strong>created</strong>.
              </TypographyP>
              <TypographyCodeBlock
                className="mt-4"
                code={`const [number, setNumber] = useState(0);

// User clicks button
<button onClick={() => {
  setNumber(number + 5);
  
  // Even 3 seconds later, this alert will show "0"
  // because it "captured" the state of THIS render.
  setTimeout(() => {
    alert(number);
  }, 3000);
}}>+5</button>`}
              />
            </CardContent>
          </TypographyCard>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
