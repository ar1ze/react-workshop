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

export const ReusingLogicPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Reusing Logic with Custom Hooks"
          url="https://react.dev/learn/reusing-logic-with-custom-hooks"
        >
          You can't share <em>state</em> between components (unless you lift it
          up), but you can share <em>stateful logic</em>. Custom Hooks allow you
          to extract complex logic (like data fetching, form handling, or
          subscriptions) into reusable functions.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Core Concept">
          <TypographyP>
            A Custom Hook is just a JavaScript function that uses other Hooks.
          </TypographyP>
          <TypographyCodeBlock
            code={`// useOnlineStatus.js
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // ... logic to listen to window events ...
  }, []);

  return isOnline;
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Rules of Custom Hooks">
          <TypographyList>
            <li>
              <strong>Naming:</strong> Must start with{' '}
              <TypographyInlineCode>use</TypographyInlineCode> (e.g.,{' '}
              <TypographyInlineCode>useForm</TypographyInlineCode>,{' '}
              <TypographyInlineCode>useFetch</TypographyInlineCode>). This tells
              React to check for Hook violations.
            </li>
            <li>
              <strong>Independence:</strong> State is{' '}
              <strong>not shared</strong>. Every time you call a hook, it
              creates a completely isolated instance of that state.
            </li>
          </TypographyList>

          <TypographyCard className="mt-4">
            <CardHeader>
              <CardTitle>Mental Model: Logic vs. State</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP className="mt-0 text-sm">
                If you use <TypographyInlineCode>useForm</TypographyInlineCode>{' '}
                in Component A and Component B, they have{' '}
                <strong>separate</strong> form states. If you want them to share
                the <em>same</em> data, you must use Context or a global store.
              </TypographyP>
            </CardContent>
          </TypographyCard>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Composition">
          <TypographyP>
            Hooks are composable. You can pass values from one hook into
            another, creating chains of logic.
          </TypographyP>
          <TypographyCodeBlock
            code={`function ChatRoom({ roomId }) {
  // 1. Hook A
  const serverUrl = useServerUrl(); 
  
  // 2. Hook B (consumes output of A)
  useChatConnection(serverUrl, roomId); 
  
  return <h1>Connected to {roomId}</h1>;
}`}
          />
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
