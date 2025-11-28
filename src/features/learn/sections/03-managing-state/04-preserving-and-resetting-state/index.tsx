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

export const PreservingStatePage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Preserving and Resetting State"
          url="https://react.dev/learn/preserving-and-resetting-state"
        >
          State is not held inside the component function; it is held inside
          React and associated with the component's{' '}
          <strong>position in the Render Tree</strong>. Understanding how React
          matches these positions determines whether state persists or resets.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Position Rule">
          <TypographyP>
            React preserves state as long as you render the{' '}
            <strong>same component</strong> at the{' '}
            <strong>same position</strong>.
          </TypographyP>

          <TypographyP>
            In the example below, toggling{' '}
            <TypographyInlineCode>isFancy</TypographyInlineCode> does{' '}
            <strong>not</strong> reset the counter state. React sees that the
            first child of the div is still a{' '}
            <TypographyInlineCode>&lt;Counter /&gt;</TypographyInlineCode>, so
            it preserves the existing state.
          </TypographyP>

          <TypographyCodeBlock
            code={`export default function App() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div>
      {isFancy ? (
        <Counter style="fancy" />
      ) : (
        <Counter style="plain" />
      )}
    </div>
  );
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="When State Resets">
          <TypographyP>
            State is destroyed when a component is removed from the UI tree or
            replaced by a different component type.
          </TypographyP>
          <TypographyList>
            <li>
              <strong>Different Component Type:</strong> Switching from{' '}
              <TypographyInlineCode>&lt;Counter /&gt;</TypographyInlineCode> to{' '}
              <TypographyInlineCode>&lt;p&gt;</TypographyInlineCode> (or even{' '}
              <TypographyInlineCode>&lt;div&gt;</TypographyInlineCode> to{' '}
              <TypographyInlineCode>&lt;section&gt;</TypographyInlineCode>)
              destroys the old subtree.
            </li>
            <li>
              <strong>Removal:</strong> If a component is conditionally rendered{' '}
              <TypographyInlineCode>false</TypographyInlineCode>, its state is
              destroyed.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Forcing a Reset with Keys">
          <TypographyP>
            Sometimes you <em>want</em> to reset state even if the component
            stays in the same spot (e.g., switching between two different user
            profiles).
          </TypographyP>
          <TypographyP>
            You can use the <TypographyInlineCode>key</TypographyInlineCode>{' '}
            prop to give a component an explicit identity. If the key changes,
            React treats it as a completely different component, destroying the
            old state and initializing new state.
          </TypographyP>

          <TypographyCodeBlock
            code={`export default function Scoreboard() {
  const [player, setPlayer] = useState('Taylor');

  return (
    <div>
      <Counter key={player} person={player} />
      <button onClick={() => setPlayer('Sarah')}>
        Next Player
      </button>
    </div>
  );
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Critical Anti-Pattern">
          <TypographyCard className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">
                Never Nest Component Definitions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP className="mt-0">
                Defining a component <em>inside</em> another component creates a
                new function reference on every render. To React, this looks
                like a <strong>different component type</strong> every single
                time.
              </TypographyP>
              <TypographyP>
                <strong>Result:</strong> State resets on every render, focus is
                lost, and performance suffers.
              </TypographyP>
              <TypographyCodeBlock
                className="mt-4"
                code={`export default function Parent() {
  // ❌ BAD: Re-created on every render
  function Child() { 
    return <input />; 
  }

  return <Child />;
}`}
              />
            </CardContent>
          </TypographyCard>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
