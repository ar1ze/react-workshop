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

export const YouMightNotNeedEffectPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="You Might Not Need an Effect"
          url="https://react.dev/learn/you-might-not-need-an-effect"
        >
          Effects are an escape hatch. If there is no external system involved
          (e.g., you just want to update state when props change), you probably
          don't need an Effect. Removing unnecessary Effects makes your code
          faster and less error-prone.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Case 1: Transforming Data">
          <TypographyP>
            <strong>Don't</strong> use Effects to update state based on props or
            other state. This causes an extra render pass (flash of old
            content).
          </TypographyP>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <TypographyCard className="border-destructive">
              <CardHeader>
                <CardTitle className="text-destructive">
                  Avoid (Redundant State)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyCodeBlock
                  className="text-xs"
                  code={`function Form() {
  const [firstName, setFirst] = useState('Taylor');
  const [lastName, setLast] = useState('Swift');
  
  // 🔴 BAD: Cascading update
  const [fullName, setFull] = useState('');
  useEffect(() => {
    setFull(firstName + ' ' + lastName);
  }, [firstName, lastName]);
}`}
                />
              </CardContent>
            </TypographyCard>

            <TypographyCard className="border-chart-2">
              <CardHeader>
                <CardTitle className="text-chart-2">
                  Prefer (Derived State)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyCodeBlock
                  className="text-xs"
                  code={`function Form() {
  const [firstName, setFirst] = useState('Taylor');
  const [lastName, setLast] = useState('Swift');
  
  // ✅ GOOD: Calculated during render
  const fullName = firstName + ' ' + lastName;
}`}
                />
              </CardContent>
            </TypographyCard>
          </div>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Case 2: Resetting State">
          <TypographyP>
            <strong>Don't</strong> use Effects to reset state when a prop
            changes. Instead, use the{' '}
            <TypographyInlineCode>key</TypographyInlineCode> attribute.
          </TypographyP>
          <TypographyCodeBlock
            code={`// ❌ BAD: Manual reset via Effect
useEffect(() => {
  setComment('');
}, [userId]);

// ✅ GOOD: Key forces complete reset
<Profile userId={userId} key={userId} />`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Case 3: Handling User Events">
          <TypographyP>
            <strong>Don't</strong> put logic in an Effect if it was triggered by
            a specific interaction (like a click). Effects run because the
            component <em>displayed</em>, not because the user <em>clicked</em>.
          </TypographyP>
          <TypographyCodeBlock
            code={`// ❌ BAD: Buying logic in Effect
useEffect(() => {
  if (product.isInCart) {
    buyProduct(); // Runs on page reload if cart persists!
  }
}, [product]);

// ✅ GOOD: Logic in Event Handler
function handleBuyClick() {
  buyProduct();
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Case 4: Fetching Data">
          <TypographyP>
            Fetching in <TypographyInlineCode>useEffect</TypographyInlineCode>{' '}
            is okay, but you must handle <strong>Race Conditions</strong>.
          </TypographyP>
          <TypographyCodeBlock
            code={`useEffect(() => {
  let ignore = false;
  
  fetchResults(query).then(json => {
    if (!ignore) setResults(json);
  });

  return () => { ignore = true; };
}, [query]);`}
          />
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
