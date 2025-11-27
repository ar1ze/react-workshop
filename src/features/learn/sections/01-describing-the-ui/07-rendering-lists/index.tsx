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

export const RenderingListsPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Rendering Lists"
          url="https://react.dev/learn/rendering-lists"
        >
          You manipulate data using standard JavaScript array methods. The most
          common pattern is using{' '}
          <TypographyInlineCode>filter()</TypographyInlineCode> to select data
          and <TypographyInlineCode>map()</TypographyInlineCode> to transform
          that data into an array of components.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Workflow">
          <TypographyList>
            <li>
              <strong>Filter (Optional):</strong> Select specific items from
              your array (e.g.,{' '}
              <TypographyInlineCode>
                person.profession === 'chemist'
              </TypographyInlineCode>
              ).
            </li>
            <li>
              <strong>Map (Required):</strong> Transform the data array into a
              new array of JSX nodes.
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`const people = [
  { id: 0, name: 'Creola', profession: 'mathematician' },
  { id: 1, name: 'Mario', profession: 'chemist' },
];

export default function List() {
  // 1. Filter (optional)
  const chemists = people.filter(person => person.profession === 'chemist');

  // 2. Map to JSX
  // Note: Arrow functions with implicit return (no braces) are cleaner here.
  const listItems = chemists.map(person => (
    <li key={person.id}>
      {person.name}
    </li>
  ));

  return <ul>{listItems}</ul>;
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="The Rules of Keys">
          <TypographyP>
            Keys tell React which array item each component corresponds to. This
            is vital for performance and correctness when sorting, inserting, or
            deleting items.
          </TypographyP>

          <TypographyList>
            <li>
              <strong>Unique among siblings:</strong> Keys must be unique within
              that specific list. They don't need to be globally unique.
            </li>
            <li>
              <strong>Stable:</strong> Keys must not change. Never generate keys
              while rendering (e.g.,{' '}
              <TypographyInlineCode>Math.random()</TypographyInlineCode>).
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Pitfalls">
          <TypographyList>
            <li>
              <strong>Don't use Index as Key:</strong> If the order of items
              changes (sorting, deleting), using the array index will cause
              subtle bugs and state issues. Use unique IDs from your data.
            </li>
            <li>
              <strong>Implicit Return:</strong> If you use curly braces{' '}
              <TypographyInlineCode>{'=> { }'}</TypographyInlineCode> in your
              map function, you <strong>must</strong> write{' '}
              <TypographyInlineCode>return</TypographyInlineCode>.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
