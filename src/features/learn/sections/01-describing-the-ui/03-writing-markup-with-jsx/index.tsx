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

export const WritingMarkupWithJSXPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Writing Markup with JSX"
          url="https://react.dev/learn/writing-markup-with-jsx"
        >
          JSX is a syntax extension that lets you write HTML-like markup inside
          JavaScript. It groups rendering logic and markup together, ensuring
          they stay in sync. While it looks like HTML, it is stricter and more
          closely related to JavaScript logic.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Rules of JSX">
          <TypographyP>
            To convert HTML to JSX, you must follow three distinct rules due to
            how JSX is compiled into JavaScript objects:
          </TypographyP>

          <TypographyList>
            <li>
              <strong>1. Return a single root element:</strong> A component
              cannot return multiple elements. Wrap them in a{' '}
              <TypographyInlineCode>&lt;div&gt;</TypographyInlineCode> or use a
              Fragment{' '}
              <TypographyInlineCode>&lt;&gt;...&lt;/&gt;</TypographyInlineCode>{' '}
              to avoid adding extra nodes to the DOM.
            </li>
            <li>
              <strong>2. Close all tags:</strong> Self-closing tags must be
              explicitly closed (e.g.,{' '}
              <TypographyInlineCode>&lt;img /&gt;</TypographyInlineCode>), and
              wrapping tags must have a closing tag.
            </li>
            <li>
              <strong>3. camelCase all attributes:</strong> Since JSX turns into
              JS objects, attributes become keys. You must switch hyphenated
              HTML attributes to camelCase (e.g.,{' '}
              <TypographyInlineCode>stroke-width</TypographyInlineCode> &rarr;{' '}
              <TypographyInlineCode>strokeWidth</TypographyInlineCode>).
              <br />
              <em>Exception:</em>{' '}
              <TypographyInlineCode>aria-*</TypographyInlineCode> and{' '}
              <TypographyInlineCode>data-*</TypographyInlineCode> attributes
              remain hyphenated.
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`export default function TodoList() {
  // Rule 1: Single root element (Fragment used here)
  return (
    <>
      <h1 className="header-text">Hedy Lamarr's Todos</h1>
      
      {/* Rule 2: Self-closing tag explicitly closed */}
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo" 
      />

      <ul>
        {/* Rule 3: standard closing tags required */}
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}`}
          />
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
