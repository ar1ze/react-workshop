import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TypographyCard,
  TypographyCodeBlock,
  TypographyList,
  TypographyP,
} from '@/components/ui/typography'
import {
  LearnPageHeaderBlock,
  LearnSectionHeaderBlock,
} from '@/features/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

export const RemovingEffectDependenciesPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Removing Effect Dependencies"
          url="https://react.dev/learn/removing-effect-dependencies"
        >
          The dependency array must <strong>always</strong> match the code. If
          you don't like the dependencies the linter suggests, you must change
          the
          <strong>code</strong>, not the linter rule. Suppressing the linter
          leads to stale closures and impossible-to-debug synchronization
          errors.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Strategy 1: Move Logic Out (Is it an Effect?)">
          <TypographyP>
            Often, a dependency is annoying because the code shouldn't be in an
            Effect at all.
          </TypographyP>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <TypographyCard>
              <CardHeader>
                <CardTitle>Event-Specific Logic</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0 text-sm">
                  If logic runs because of a user interaction (like a click),
                  move it to an <strong>Event Handler</strong>.
                </TypographyP>
                <TypographyCodeBlock
                  className="text-xs"
                  code={`// ❌ Effect depends on 'submitted' state
useEffect(() => {
  if (submitted) post('/api/register');
}, [submitted]);

// ✅ Event Handler
function handleSubmit() {
  post('/api/register');
}`}
                />
              </CardContent>
            </TypographyCard>

            <TypographyCard>
              <CardHeader>
                <CardTitle>Calculations</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0 text-sm">
                  If you are updating state based on props, calculate it during{' '}
                  <strong>render</strong> instead.
                </TypographyP>
              </CardContent>
            </TypographyCard>
          </div>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Strategy 2: Dependency Handling (Objects & Functions)">
          <TypographyP>
            Objects and functions created during render are{' '}
            <strong>new references</strong> every time. This causes the Effect
            to run on every render, even if the content hasn't changed.
          </TypographyP>

          <TypographyList>
            <li>
              <strong>Move it inside:</strong> If an object/function is only
              used in the Effect, declare it <em>inside</em> the Effect. It is
              no longer reactive.
            </li>
            <li>
              <strong>Move it outside:</strong> If it doesn't depend on
              props/state, move it <em>outside</em> the component. It is
              constant.
            </li>
            <li>
              <strong>Read primitives:</strong> Destructure the object outside
              the Effect and pass specific strings/numbers as dependencies.
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`// ❌ BAD: 'options' is new every render
const options = { server: serverUrl, room: roomId };
useEffect(() => { ... }, [options]); 

// ✅ GOOD: Move inside (No longer a dependency)
useEffect(() => {
  const options = { server: serverUrl, room: roomId };
  // ...
}, [serverUrl, roomId]);`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Strategy 3: The Functional Update">
          <TypographyP>
            If your Effect needs to set state based on the <em>previous</em>{' '}
            state, use the updater function form. This removes the state
            variable itself from the dependency array.
          </TypographyP>
          <TypographyCodeBlock
            code={`// ❌ BAD: Depends on 'messages'
useEffect(() => {
  socket.on('msg', (msg) => setMessages([...messages, msg]));
}, [messages]); // Re-connects on every message!

// ✅ GOOD: Updater function
useEffect(() => {
  socket.on('msg', (msg) => setMessages(prev => [...prev, msg]));
}, []); // 'messages' is no longer needed`}
          />
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
