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

export const ReactingToInputPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock title="Reacting to Input with State">
          React forces a shift from <strong>Imperative</strong> (manipulating
          the UI directly) to <strong>Declarative</strong> (describing the UI
          based on state). You don't enable/disable buttons; you describe what
          the UI looks like when the state is{' '}
          <TypographyInlineCode>'submitting'</TypographyInlineCode>.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Imperative vs. Declarative">
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <TypographyCard>
              <CardHeader>
                <CardTitle className="text-muted-foreground">
                  Imperative (jQuery style)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0 text-sm">
                  You give turn-by-turn directions. You manually touch the DOM
                  for every update.
                </TypographyP>
                <TypographyCodeBlock
                  className="text-xs"
                  code={`// ❌ Fragile & Complex
function onSubmit() {
  disable(button);
  show(spinner);
  hide(form);
}`}
                />
              </CardContent>
            </TypographyCard>

            <TypographyCard>
              <CardHeader>
                <CardTitle className="text-blue-500">
                  Declarative (React)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0 text-sm">
                  You tell the driver the destination. React figures out how to
                  update the DOM.
                </TypographyP>
                <TypographyCodeBlock
                  className="text-xs"
                  code={`// ✅ Predictable
if (status === 'submitting') {
  return <Spinner />;
}`}
                />
              </CardContent>
            </TypographyCard>
          </div>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="The 5-Step Design Process">
          <TypographyList>
            <li>
              <strong>1. Identify Visual States:</strong> List every possible UI
              state (Empty, Typing, Submitting, Success, Error).
            </li>
            <li>
              <strong>2. Determine Triggers:</strong> What triggers changes?
              (Human inputs vs. Computer inputs/API responses).
            </li>
            <li>
              <strong>3. Represent with useState:</strong> Add the bare minimum
              state to memory.
            </li>
            <li>
              <strong>4. Remove Non-Essential State:</strong> Refactor to remove
              duplication and impossible states (see below).
            </li>
            <li>
              <strong>5. Connect Handlers:</strong> Wire up the event handlers
              to set the state.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Avoiding Impossible States">
          <TypographyP>
            A common bug is using multiple boolean flags that can conflict
            (creating "Impossible States").
          </TypographyP>

          <TypographyCard className="mt-4">
            <CardHeader>
              <CardTitle>The "Paradox" Problem</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP className="mt-0">
                If you have{' '}
                <TypographyInlineCode>isTyping</TypographyInlineCode> and{' '}
                <TypographyInlineCode>isSubmitting</TypographyInlineCode>, it is
                technically possible for both to be{' '}
                <TypographyInlineCode>true</TypographyInlineCode>, which is a
                bug.
              </TypographyP>
              <TypographyP>
                <strong>Solution:</strong> Replace multiple booleans with a
                single <strong>Status Enum</strong>.
              </TypographyP>
              <TypographyCodeBlock
                code={`// ❌ BAD: Multiple conflicting flags
const [isTyping, setIsTyping] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);

// ✅ GOOD: Single source of truth (State Machine)
const [status, setStatus] = useState('typing'); // 'typing' | 'submitting' | 'success'

const isSubmitting = status === 'submitting'; // Derived variable`}
              />
            </CardContent>
          </TypographyCard>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
