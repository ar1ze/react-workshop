import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TypographyCard,
  TypographyCodeBlock,
  TypographyInlineCode,
  TypographyP,
} from '@/components/ui/typography'
import {
  LearnPageHeaderBlock,
  LearnSectionHeaderBlock,
} from '@/features/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

export const ChoosingStateStructurePage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Choosing the State Structure"
          url="https://react.dev/learn/choosing-the-state-structure"
        >
          Structuring state correctly is the single biggest factor in preventing
          bugs. The goal is to represent the data with the{' '}
          <strong>minimum number of state variables</strong> needed to calculate
          the UI.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Core Principles">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TypographyCard>
              <CardHeader>
                <CardTitle>1. Group Related State</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0 text-sm">
                  If two variables always change together (like mouse
                  coordinates or form dimensions), merge them into an object.
                </TypographyP>
                <TypographyCodeBlock
                  className="text-xs"
                  code={`// ❌ Split
const [x, setX] = useState(0);
const [y, setY] = useState(0);

// ✅ Grouped
const [position, setPosition] = useState({ x: 0, y: 0 });`}
                />
              </CardContent>
            </TypographyCard>

            <TypographyCard>
              <CardHeader>
                <CardTitle>2. Avoid Contradictions</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0 text-sm">
                  Avoid boolean flags that can conflict (e.g.,{' '}
                  <TypographyInlineCode>isSending</TypographyInlineCode> and{' '}
                  <TypographyInlineCode>isSent</TypographyInlineCode> both being
                  true).
                </TypographyP>
                <TypographyCodeBlock
                  className="text-xs"
                  code={`// ❌ Contradictory
const [isSending, setIsSending] = useState(false);
const [isSent, setIsSent] = useState(false);

// ✅ Single Source (Status Enum)
const [status, setStatus] = useState('sending');`}
                />
              </CardContent>
            </TypographyCard>
          </div>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="3. Avoid Redundancy (Derived State)">
          <TypographyP>
            If you can calculate information from props or existing state during
            render, <strong>do not</strong> put it in state.
          </TypographyP>

          <TypographyCodeBlock
            code={`// ❌ BAD: Redundant state
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [fullName, setFullName] = useState(''); // manually updated... buggy!

// ✅ GOOD: Calculated during render
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const fullName = firstName + ' ' + lastName; // Always in sync`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="4. Avoid Duplication">
          <TypographyP>
            Don't copy an object from a list into a separate "selected" state
            variable. If the original list updates, the copy goes stale.
            instead, store the <strong>ID</strong>.
          </TypographyP>

          <TypographyCodeBlock
            code={`const items = [{ id: 1, title: 'Apple' }];

// ❌ BAD: Duplicates the entire object
const [selectedItem, setSelectedItem] = useState(items[0]); 

// ✅ GOOD: References by ID
const [selectedId, setSelectedId] = useState(1);
const selectedItem = items.find(item => item.id === selectedId);`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="5. Avoid Deep Nesting (Normalization)">
          <TypographyP>
            Updating deeply nested objects requires copying every parent level.
            Prefer a "flat" or "normalized" structure (like a database table)
            using IDs.
          </TypographyP>

          <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-muted/50 rounded-md border p-3">
              <TypographyP className="mt-0 mb-2 text-xs font-bold uppercase">
                Nested (Hard to update)
              </TypographyP>
              <pre className="text-xs">{`{
  id: 1,
  children: [
    { id: 2, children: [] }
  ]
}`}</pre>
            </div>
            <div className="bg-muted/50 rounded-md border p-3">
              <TypographyP className="mt-0 mb-2 text-xs font-bold uppercase">
                Flat (Easy to update)
              </TypographyP>
              <pre className="text-xs">{`{
  1: { id: 1, childIds: [2] },
  2: { id: 2, childIds: [] }
}`}</pre>
            </div>
          </div>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
