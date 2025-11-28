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

export const SynchronizingWithEffectsPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Synchronizing with Effects"
          url="https://react.dev/learn/synchronizing-with-effects"
        >
          Most logic belongs in event handlers. Use <strong>Effects</strong>{' '}
          only to synchronize your component with an external system (browser
          APIs, server connections, widgets) when no specific event triggered
          the change.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Step 1: Declare the Effect">
          <TypographyP>
            <TypographyInlineCode>useEffect</TypographyInlineCode> runs{' '}
            <strong>after</strong> the browser repaints the screen.
          </TypographyP>
          <TypographyCodeBlock
            code={`import { useEffect } from 'react';

function VideoPlayer({ isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    // Synchronize the external <video> DOM node
    // with the React state 'isPlaying'
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }); // ⚠️ No dependency array: runs after EVERY render
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Step 2: Specify Dependencies">
          <TypographyP>
            To prevent the Effect from running unnecessarily, pass a dependency
            array. React compares these values to the previous render; if they
            haven't changed, it skips the Effect.
          </TypographyP>

          <TypographyList>
            <li>
              <strong>No Array:</strong> Runs after <em>every</em> render.
            </li>
            <li>
              <strong>
                Empty Array <TypographyInlineCode>[]</TypographyInlineCode>:
              </strong>{' '}
              Runs only on <strong>Mount</strong> (appear) and{' '}
              <strong>Unmount</strong> (disappear).
            </li>
            <li>
              <strong>
                <TypographyInlineCode>[prop, state]</TypographyInlineCode>:
              </strong>{' '}
              Runs on Mount + whenever{' '}
              <TypographyInlineCode>prop</TypographyInlineCode> or{' '}
              <TypographyInlineCode>state</TypographyInlineCode> changes.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Step 3: Cleanup Function">
          <TypographyP>
            If your Effect creates a long-running process (like a subscription
            or interval), you <strong>must</strong> return a cleanup function.
          </TypographyP>
          <TypographyCodeBlock
            code={`useEffect(() => {
  const connection = createConnection();
  connection.connect();

  // Cleanup function
  return () => {
    connection.disconnect();
  };
}, []);`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Development Mode Behavior">
          <TypographyCard>
            <CardHeader>
              <CardTitle>Why does it run twice?</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP className="mt-0 text-sm">
                In Strict Mode (Development only), React mounts components{' '}
                <strong>twice</strong> to stress-test your cleanup logic.
              </TypographyP>
              <TypographyList className="mt-2 text-sm">
                <li>
                  <strong>Sequence:</strong> Setup &rarr; Cleanup &rarr; Setup.
                </li>
                <li>
                  <strong>Goal:</strong> Ensure that{' '}
                  <TypographyInlineCode>Cleanup</TypographyInlineCode> correctly
                  undoes <TypographyInlineCode>Setup</TypographyInlineCode>. If
                  it doesn't (e.g., you create duplicate connections), you have
                  a bug.
                </li>
              </TypographyList>
            </CardContent>
          </TypographyCard>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
