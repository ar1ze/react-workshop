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

export const UpdatingObjectsPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Updating Objects in State"
          url="https://react.dev/learn/updating-objects-in-state"
        >
          State can hold objects, but you should treat them as{' '}
          <strong>read-only</strong>. To update an object, you must create a{' '}
          <strong>new</strong> one (or copy the existing one) and pass it to the
          setter.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Mutation Problem">
          <TypographyP>
            React compares state by reference (identity). If you modify an
            object directly (mutation), the reference stays the same, so React
            ignores the change.
          </TypographyP>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <TypographyCard>
              <CardHeader>
                <CardTitle className="text-destructive">
                  Mutation (Bad)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0">
                  Modifies the existing object. React sees the same object, so
                  it <strong>does not re-render</strong>.
                </TypographyP>
                <TypographyCodeBlock
                  code={`const [position, setPosition] = useState({ x: 0, y: 0 });

// ❌ React won't know this changed
position.x = 5;`}
                />
              </CardContent>
            </TypographyCard>

            <TypographyCard>
              <CardHeader>
                <CardTitle className="text-green-600">
                  Replacement (Good)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0">
                  Creates a fresh object. React sees a new reference and{' '}
                  <strong>re-renders</strong>.
                </TypographyP>
                <TypographyCodeBlock
                  code={`const [position, setPosition] = useState({ x: 0, y: 0 });

// ✅ Triggers render
setPosition({ x: 5, y: 0 });`}
                />
              </CardContent>
            </TypographyCard>
          </div>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Copying with Spread Syntax">
          <TypographyP>
            Usually, you want to update one field and keep the rest. Use the
            object spread syntax{' '}
            <TypographyInlineCode>...</TypographyInlineCode> to copy previous
            properties.
          </TypographyP>
          <TypographyCodeBlock
            code={`setPerson({
  ...person, // Copy old fields
  firstName: e.target.value // Override specific field
});`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Nested Objects">
          <TypographyP>
            Spread syntax is <strong>shallow</strong>. It only copies one level
            deep. To update a nested object, you must spread every level up to
            the root.
          </TypographyP>

          <TypographyCodeBlock
            code={`const [person, setPerson] = useState({
  name: 'Niki',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
  }
});

// To change just the city:
setPerson({
  ...person,
  artwork: {
    ...person.artwork,
    city: 'New Delhi'
  }
});`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Shortcuts">
          <TypographyList>
            <li>
              <strong>Immer:</strong> For deeply nested state, consider using
              the <TypographyInlineCode>useImmer</TypographyInlineCode> library.
              It lets you write mutable-style code (e.g.,{' '}
              <TypographyInlineCode>
                draft.artwork.city = 'Lagos'
              </TypographyInlineCode>
              ) and handles the immutable copying for you.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
