import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TypographyCard,
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

export const RenderAndCommitPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Render and Commit"
          url="https://react.dev/learn/render-and-commit"
        >
          Before your components appear on screen, they go through a specific
          lifecycle. You can imagine React as a waiter: it takes requests from
          users and serves them UI. This happens in three distinct steps.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Lifecycle">
          <TypographyList>
            <li>
              <strong>1. Trigger:</strong> (Delivering the order) The app starts
              or state changes.
            </li>
            <li>
              <strong>2. Render:</strong> (Preparing the order) React calls your
              components to figure out what the UI should look like.
            </li>
            <li>
              <strong>3. Commit:</strong> (Placing the order) React modifies the
              DOM to match the result.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Step 1: Trigger">
          <TypographyP>A render is triggered by only two events:</TypographyP>
          <TypographyList>
            <li>
              <strong>Initial Render:</strong> When the app first starts (via{' '}
              <TypographyInlineCode>
                createRoot(...).render()
              </TypographyInlineCode>
              ).
            </li>
            <li>
              <strong>State Updates:</strong> When you (or an ancestor) call a
              set function (e.g.,{' '}
              <TypographyInlineCode>setCount</TypographyInlineCode>). This
              automatically queues a new render.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Step 2: Render">
          <TypographyP>
            "Rendering" simply means{' '}
            <strong>React calls your component function</strong>.
          </TypographyP>
          <TypographyList>
            <li>
              It is a recursive process: if your component returns another
              component, React calls that one next, and so on.
            </li>
            <li>
              <strong>Crucial:</strong> This process must be{' '}
              <TypographyInlineCode>Pure</TypographyInlineCode>. It should just
              calculate the result, not change things (side effects).
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Step 3: Commit">
          <TypographyP>
            After React knows <em>what</em> to render, it applies changes to the
            actual DOM.
          </TypographyP>

          <TypographyCard>
            <CardHeader>
              <CardTitle>
                <TypographyH4>Minimal DOM Updates</TypographyH4>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP className="mt-0">
                React does not wipe the screen and redraw everything. It
                calculates the difference (diff) and only touches the DOM nodes
                that actually changed.
              </TypographyP>
              <TypographyP>
                For example, if a parent component re-renders but an{' '}
                <TypographyInlineCode>&lt;input /&gt;</TypographyInlineCode> is
                in the exact same spot in the JSX, React will update the text
                around it but leave the input (and your typed text) alone.
              </TypographyP>
            </CardContent>
          </TypographyCard>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
