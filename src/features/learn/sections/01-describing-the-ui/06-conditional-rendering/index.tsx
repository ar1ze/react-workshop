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

export const ConditionalRenderingPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Conditional Rendering"
          url="https://react.dev/learn/conditional-rendering"
        >
          React relies on standard JavaScript logic for control flow. There is
          no special syntax. You use{' '}
          <TypographyInlineCode>if</TypographyInlineCode>,{' '}
          <TypographyInlineCode>&&</TypographyInlineCode>, and{' '}
          <TypographyInlineCode>? :</TypographyInlineCode> to conditionally
          render JSX.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Control Flow Techniques">
          <TypographyList>
            <li>
              <strong>Standard If / Early Return:</strong> Use standard JS
              conditions to return different JSX trees or{' '}
              <TypographyInlineCode>null</TypographyInlineCode> (to render
              nothing) before the main return.
            </li>
            <li>
              <strong>
                Ternary Operator (
                <TypographyInlineCode>? :</TypographyInlineCode>):
              </strong>{' '}
              Use inside JSX for concise "if-else" logic.
            </li>
            <li>
              <strong>
                Logical AND (<TypographyInlineCode>&&</TypographyInlineCode>):
              </strong>{' '}
              Use inside JSX for concise "if-true-then-render" logic.
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`function Item({ name, isPacked }) {
  // 1. Early Return
  if (name === 'Suitcase') return null;

  return (
    <li className="item">
      {/* 2. Ternary: If-Else */}
      {isPacked ? (
        <del>{name + ' ✅'}</del>
      ) : (
        name
      )}

      {/* 3. Logical AND: If-True */}
      {isPacked && <span className="icon">✅</span>}
    </li>
  );
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="The Zero Pitfall">
          <TypographyP>
            JavaScript automatically converts the left side of{' '}
            <TypographyInlineCode>&&</TypographyInlineCode> to a boolean.
            However, if the left side is the number{' '}
            <TypographyInlineCode>0</TypographyInlineCode>, React renders the
            number <TypographyInlineCode>0</TypographyInlineCode> instead of
            nothing.
          </TypographyP>

          <TypographyCodeBlock
            code={`// ❌ BAD: Renders "0" if count is 0
{count && <h1>Messages: {count}</h1>}

// ✅ GOOD: Explicit boolean check
{count > 0 && <h1>Messages: {count}</h1>}
{!!count && <h1>Messages: {count}</h1>}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Clean Code: Variables">
          <TypographyP>
            If your JSX becomes cluttered with nested ternaries, assign the JSX
            to a variable using a standard{' '}
            <TypographyInlineCode>if</TypographyInlineCode> statement before
            returning.
          </TypographyP>

          <TypographyCodeBlock
            code={`function Item({ name, isPacked }) {
  let itemContent = name;

  if (isPacked) {
    itemContent = <del>{name + " ✅"}</del>;
  }

  return <li>{itemContent}</li>;
}`}
          />
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
