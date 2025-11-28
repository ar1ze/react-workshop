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

export const SeparatingEventsFromEffectsPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Separating Events from Effects"
          url="https://react.dev/learn/separating-events-from-effects"
        >
          Event handlers run when a user interacts. Effects run when the state
          changes (synchronization). Sometimes you need a mix: an Effect that
          runs on synchronization, but reads a value without "reacting" to it.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Reactive vs. Non-Reactive Logic">
          <div className="grid gap-4 md:grid-cols-2">
            <TypographyCard>
              <CardHeader>
                <CardTitle>Event Handlers</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyList className="mt-0 text-sm">
                  <li>
                    <strong>Trigger:</strong> Specific interaction (Click,
                    Submit).
                  </li>
                  <li>
                    <strong>Logic:</strong> Non-Reactive.
                  </li>
                  <li>
                    <strong>Behavior:</strong> Reads the latest props/state but
                    does <em>not</em> re-run when they change.
                  </li>
                </TypographyList>
              </CardContent>
            </TypographyCard>

            <TypographyCard>
              <CardHeader>
                <CardTitle>Effects</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyList className="mt-0 text-sm">
                  <li>
                    <strong>Trigger:</strong> Synchronization needed.
                  </li>
                  <li>
                    <strong>Logic:</strong> Reactive.
                  </li>
                  <li>
                    <strong>Behavior:</strong> Must re-run whenever <em>any</em>{' '}
                    read value changes.
                  </li>
                </TypographyList>
              </CardContent>
            </TypographyCard>
          </div>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="The Problem: Mixed Concerns">
          <TypographyP>
            Sometimes an Effect needs to read a value (like{' '}
            <TypographyInlineCode>theme</TypographyInlineCode>) that shouldn't
            trigger a re-sync.
          </TypographyP>
          <TypographyCodeBlock
            code={`// ❌ BAD: Chat reconnects every time the user toggles Dark Mode
useEffect(() => {
  const connection = createConnection(roomId);
  connection.connect();
  
  connection.on('connected', () => {
    // We want to read 'theme', but reading it makes it a dependency
    showNotification('Connected!', theme);
  });

  return () => connection.disconnect();
}, [roomId, theme]); // theme causes unwanted re-runs`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="The Solution: Effect Events">
          <TypographyP>
            <TypographyInlineCode>useEffectEvent</TypographyInlineCode> extracts
            non-reactive logic from your Effect. It gives you a function that
            sees the latest props/state, but is <strong>not reactive</strong>{' '}
            itself.
          </TypographyP>

          <TypographyCodeBlock
            code={`import { useEffect, useEffectEvent } from 'react';

function Chat({ roomId, theme }) {
  // 1. Define the Effect Event
  const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme); // Reads latest theme
  });

  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    
    connection.on('connected', () => {
      // 2. Call it from the Effect
      onConnected();
    });

    return () => connection.disconnect();
  }, [roomId]); // ✅ 'theme' and 'onConnected' are NOT dependencies
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Rules of Effect Events">
          <TypographyList>
            <li>
              <strong>Internal Only:</strong> Only call them from inside
              Effects.
            </li>
            <li>
              <strong>Do Not Pass:</strong> Never pass them to child components
              or other hooks.
            </li>
            <li>
              <strong>Always Fresh:</strong> They always see the latest props
              and state without being added to the dependency array.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
