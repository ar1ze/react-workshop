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

export const JavascriptInJsxPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock title="JavaScript in JSX with Curly Braces">
          Curly braces <TypographyInlineCode>{'{ }'}</TypographyInlineCode> open
          a "window" to JavaScript within your JSX. They allow you to pass
          dynamic variables, function calls, and objects instead of static
          strings.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Syntax Rules">
          <TypographyP>
            You can use curly braces in two specific places: as text directly
            inside a tag, or as attributes immediately following the{' '}
            <TypographyInlineCode>=</TypographyInlineCode> sign.
          </TypographyP>

          <TypographyList>
            <li>
              <strong>Strings vs. Expressions:</strong>
              <br />
              <TypographyInlineCode>
                className="avatar"
              </TypographyInlineCode>{' '}
              passes the exact string "avatar".
              <br />
              <TypographyInlineCode>src={'{avatar}'}</TypographyInlineCode>{' '}
              reads the JavaScript variable{' '}
              <TypographyInlineCode>avatar</TypographyInlineCode>.
            </li>
            <li>
              <strong>Double Curlies (Objects):</strong>
              <br />
              <TypographyInlineCode>
                style={'{ { color: "red" } }'}
              </TypographyInlineCode>{' '}
              is not special syntax. It is simply a JavaScript object{' '}
              <TypographyInlineCode>{'{...}'}</TypographyInlineCode> inside the
              JSX curly braces.
              <br />
              <em>Note:</em> Inline styles require <strong>camelCase</strong>{' '}
              keys (e.g.,{' '}
              <TypographyInlineCode>backgroundColor</TypographyInlineCode>).
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    // 1. Double Curlies: Passing an object to the style attribute
    <div style={person.theme}>
      
      {/* 2. Text Content: Reading a variable */}
      <h1>{person.name}'s Todos</h1>
      
      {/* 3. Attribute: Calling a function or reading a variable */}
      <img 
        className="avatar" 
        src={getAvatarUrl(person)} 
        alt={person.name} 
      />
    </div>
  );
}`}
          />
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
