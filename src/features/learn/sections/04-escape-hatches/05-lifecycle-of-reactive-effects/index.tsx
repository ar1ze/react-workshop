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

export const LifecycleOfEffectsPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Lifecycle of Reactive Effects"
          url="https://react.dev/learn/lifecycle-of-reactive-effects"
        >
          Components have a lifecycle (Mount &rarr; Update &rarr; Unmount).
          Effects are different. They have a{' '}
          <strong>Synchronization Lifecycle</strong>. An Effect can start and
          stop synchronizing multiple times while the component remains mounted.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Synchronization Cycle">
          <TypographyP>
            Don't think "runs after render." Think "
            <strong>keeps synchronized</strong> with state."
          </TypographyP>

          <TypographyList>
            <li>
              <strong>Start Sync:</strong> The body of your Effect.
            </li>
            <li>
              <strong>Stop Sync:</strong> The cleanup function you return.
            </li>
          </TypographyList>
          <TypographyP>
            If a dependency changes, React <strong>Stops</strong> the old
            synchronization (cleanup) and immediately <strong>Starts</strong>{' '}
            the new one (body).
          </TypographyP>

          <TypographyCodeBlock
            code={`function ChatRoom({ roomId }) {
  useEffect(() => {
    // 1. Start Sync (Connect to NEW room)
    const connection = createConnection(roomId);
    connection.connect();

    // 2. Stop Sync (Disconnect from OLD room)
    return () => connection.disconnect();
  }, [roomId]);
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="What is a Reactive Value?">
          <TypographyP>
            This is the rule for the Dependency Array:{' '}
            <strong>
              All variables declared inside the component are reactive.
            </strong>
          </TypographyP>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <TypographyCard>
              <CardHeader>
                <CardTitle>Reactive (Must be dependency)</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyList className="mt-0 text-sm">
                  <li>Props</li>
                  <li>State</li>
                  <li>Variables calculated inside the component body.</li>
                </TypographyList>
              </CardContent>
            </TypographyCard>

            <TypographyCard>
              <CardHeader>
                <CardTitle>Non-Reactive (Optional)</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyList className="mt-0 text-sm">
                  <li>
                    Variables declared <strong>outside</strong> the component.
                  </li>
                  <li>
                    Stable values (e.g.,{' '}
                    <TypographyInlineCode>ref.current</TypographyInlineCode>,{' '}
                    <TypographyInlineCode>setState</TypographyInlineCode>).
                  </li>
                </TypographyList>
              </CardContent>
            </TypographyCard>
          </div>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="The Golden Rule of Dependencies">
          <TypographyP>
            <strong>You do not choose your dependencies.</strong> The code
            chooses them.
          </TypographyP>
          <TypographyP>
            If the linter says a variable is missing, do <strong>not</strong>{' '}
            suppress the linter. It means your code reads a value that might
            change, but you aren't re-synchronizing when it does. This leads to
            bugs (stale closures).
          </TypographyP>
          <TypographyCodeBlock
            code={`// ❌ Linter Error: 'serverUrl' is missing
useEffect(() => {
  createConnection(serverUrl, roomId);
}, [roomId]); 

// ✅ FIX: Add it, OR move 'serverUrl' outside the component so it's not reactive.
useEffect(() => {
  createConnection(serverUrl, roomId);
}, [roomId, serverUrl]);`}
          />
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
