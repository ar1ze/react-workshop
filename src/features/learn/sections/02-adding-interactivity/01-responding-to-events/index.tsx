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

export const RespondingToEventsPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Responding to Events"
          url="https://react.dev/learn/responding-to-events"
        >
          React lets you handle user interactions by passing functions as props
          to JSX elements. Event handlers are the primary place for side effects
          (like API calls or state updates) because they do not need to be pure.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Passing Event Handlers">
          <TypographyP>
            The golden rule: Pass the function, don't call it.
          </TypographyP>
          <TypographyList>
            <li>
              <strong>Correct:</strong>{' '}
              <TypographyInlineCode>
                onClick={'{handleClick}'}
              </TypographyInlineCode>{' '}
              (React calls it when clicked).
            </li>
            <li>
              <strong>Incorrect:</strong>{' '}
              <TypographyInlineCode>
                onClick={'{handleClick()}'}
              </TypographyInlineCode>{' '}
              (Fires immediately during render).
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`export default function Button() {
  function handleClick() {
    alert('Clicked!');
  }

  return (
    // 1. Pass reference
    <button onClick={handleClick}>Click me</button>
    
    // 2. Or Inline Arrow Function (useful for passing arguments)
    <button onClick={() => alert('Inline')}>Inline</button>
  );
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Event Propagation (Bubbling)">
          <TypographyP>
            Events start at the clicked element and bubble up the tree to
            parents.
          </TypographyP>
          <TypographyList>
            <li>
              <strong>e.stopPropagation():</strong> Stops the event from
              reaching parents. Use this when a child button shouldn't trigger a
              parent container's click logic.
            </li>
            <li>
              <strong>e.preventDefault():</strong> Prevents default browser
              behavior (like a form submitting and reloading the page).
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`function Toolbar() {
  return (
    <div onClick={() => alert('Toolbar clicked!')}>
      
      {/* Clicking this triggers BOTH alerts (Bubbling) */}
      <button onClick={() => alert('Button 1')}>
        Normal Button
      </button>

      {/* Clicking this triggers ONLY 'Button 2' */}
      <button onClick={(e) => {
        e.stopPropagation();
        alert('Button 2');
      }}>
        Stop Propagation
      </button>
      
    </div>
  );
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Naming Convention">
          <TypographyList>
            <li>
              <strong>Props (What you pass):</strong> Start with{' '}
              <strong>on</strong> (e.g.,{' '}
              <TypographyInlineCode>onPlay</TypographyInlineCode>,{' '}
              <TypographyInlineCode>onUpload</TypographyInlineCode>).
            </li>
            <li>
              <strong>Handlers (The function itself):</strong> Start with{' '}
              <strong>handle</strong> (e.g.,{' '}
              <TypographyInlineCode>handlePlay</TypographyInlineCode>,{' '}
              <TypographyInlineCode>handleUpload</TypographyInlineCode>).
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
