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

export const KeepingComponentsPurePage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Keeping Components Pure"
          url="https://react.dev/learn/keeping-components-pure"
        >
          React treats components as pure functions. Like a math formula{' '}
          <TypographyInlineCode>y = 2x</TypographyInlineCode>, given the same
          inputs (props), a component must always return the same output (JSX).
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Golden Rule of Purity">
          <TypographyList>
            <li>
              <strong>Minds its own business:</strong> It must not change
              (mutate) variables or objects that existed <em>before</em> the
              render (e.g., global variables).
            </li>
            <li>
              <strong>Same inputs, same output:</strong> Deterministic behavior.
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`let guestCount = 0; // ❌ BAD: Global variable

function Cup() {
  // This is impure because it changes a pre-existing variable
  guestCount = guestCount + 1;
  return <h2>Guest #{guestCount}</h2>;
}

// -------------------------------------

function Cup({ guest }) {
  // ✅ GOOD: Pure. Output depends ONLY on props.
  return <h2>Guest #{guest}</h2>;
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Local Mutation is Allowed">
          <TypographyP>
            You <em>can</em> mutate variables and objects if they were created{' '}
            <strong>inside the same render</strong>. This is "Local
            Mutation"—your component's little secret.
          </TypographyP>

          <TypographyCodeBlock
            code={`function TeaGathering() {
  const cups = []; // Created during this render
  
  // ✅ GOOD: Local mutation is safe because 'cups' didn't exist before this function ran
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  
  return cups;
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Where to Cause Side Effects?">
          <TypographyP>
            Side effects (API calls, timers, DOM changes) belong in:
          </TypographyP>
          <TypographyList>
            <li>
              <strong>Event Handlers:</strong> Functions that run on user
              interaction (click, submit). These do <em>not</em> need to be
              pure.
            </li>
            <li>
              <strong>useEffect:</strong> (Last resort) For effects triggered by
              rendering itself.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Strict Mode">
          <TypographyP>
            <TypographyInlineCode>
              &lt;React.StrictMode&gt;
            </TypographyInlineCode>{' '}
            calls your components <strong>twice</strong> in development. If your
            component is impure (e.g., increments a global variable), the visual
            output will be wrong (e.g., counting 2, 4, 6 instead of 1, 2, 3),
            helping you spot the bug.
          </TypographyP>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
