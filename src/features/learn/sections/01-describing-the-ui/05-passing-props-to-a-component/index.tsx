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

export const PassingPropsPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock title="Passing Props to a Component">
          Props are the communication channel between parent and child
          components. They function like arguments to a function and allow you
          to make components dynamic and reusable.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Core Mechanics">
          <TypographyP>
            Working with props involves three standard actions: passing,
            reading, and setting defaults.
          </TypographyP>
          <TypographyList>
            <li>
              <strong>1. Pass Props:</strong> Add them to the JSX tag (like HTML
              attributes). You can pass strings, objects, functions, or any JS
              value.
            </li>
            <li>
              <strong>2. Read Props:</strong> Use <strong>destructuring</strong>{' '}
              inside the function signature{' '}
              <TypographyInlineCode>
                {'({ prop1, prop2 })'}
              </TypographyInlineCode>{' '}
              to unpack them into variables.
            </li>
            <li>
              <strong>3. Default Values:</strong> Assign a value in the
              destructuring assignment{' '}
              <TypographyInlineCode>{'prop = value'}</TypographyInlineCode>.
              This value is used <em>only</em> if the prop is missing or{' '}
              <TypographyInlineCode>undefined</TypographyInlineCode>.
            </li>
          </TypographyList>
          <TypographyCodeBlock
            code={`function Button({ label, size = 'md', onClick }) {
  return (
    <button className={size} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  return (
    <>
      <Button label="Submit" onClick={() => {}} />
      <Button label="Cancel" size="lg" />
    </>
  );
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Special Prop Patterns">
          <TypographyList>
            <li>
              <strong>Spread Syntax:</strong> Use{' '}
              <TypographyInlineCode>{'{...props}'}</TypographyInlineCode> to
              forward all props from a parent to a child without listing them
              individually. Use this with restraint.
            </li>
            <li>
              <strong>Children Prop:</strong> When you nest content inside a JSX
              tag, the parent receives that content in a prop called{' '}
              <TypographyInlineCode>children</TypographyInlineCode>. This
              creates a "slot" for arbitrary content.
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`function Card({ children, ...props }) {
  return <div className="card-wrapper" {...props}>{children}</div>;
}

export default function App() {
  return (
    <Card id="profile-card">
      <Button label="Edit Profile" />
    </Card>
  );
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Immutability Rule">
          <TypographyP>
            Props are <strong>read-only snapshots</strong> in time. You cannot
            change props directly.
          </TypographyP>
          <TypographyP>
            If a component needs to change its output in response to user
            interaction, the parent must pass a <em>new</em> object of props
            (usually triggered by State).
          </TypographyP>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
