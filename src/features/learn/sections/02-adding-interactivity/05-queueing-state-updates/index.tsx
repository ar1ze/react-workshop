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

export const StateUpdatesQueuePage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Queueing a Series of State Updates"
          url="https://react.dev/learn/queueing-a-series-of-state-updates"
        >
          Setting a state variable doesn't happen instantly. React "batches"
          updates to optimize performance. To perform multiple updates based on
          the previous state within the same event, you need a specific
          strategy.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Batching">
          <TypographyP>
            React waits until <em>all</em> code in the event handler has run
            before processing state updates. This is like a waiter taking your
            entire order before going to the kitchen.
          </TypographyP>
          <TypographyP>
            This explains why calling{' '}
            <TypographyInlineCode>setNumber(number + 1)</TypographyInlineCode>{' '}
            three times results in only one increment: each call reads the{' '}
            <em>same</em> initial value (0) from the current snapshot.
          </TypographyP>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="The Updater Function">
          <TypographyP>
            To update state multiple times before the next render, pass a{' '}
            <strong>function</strong> to the setter instead of a value.
          </TypographyP>
          <TypographyP>
            <TypographyInlineCode>
              setNumber(n {'=>'} n + 1)
            </TypographyInlineCode>
          </TypographyP>
          <TypographyList>
            <li>
              <strong>n:</strong> Represents the <em>pending</em> state from the
              previous update in the queue.
            </li>
            <li>
              <strong>Return value:</strong> Becomes the next state.
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <button onClick={() => {
      // 1. Queue: 0 + 5 -> (Replace with 5)
      setNumber(number + 5);
      
      // 2. Queue: 5 + 1 -> 6 (Updater function receives pending state)
      setNumber(n => n + 1);
      
      // 3. Queue: 42 -> (Replace with 42, ignores previous 6)
      setNumber(42);
    }}>
      Result will be 42
    </button>
  );
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Processing the Queue">
          <TypographyP>
            React processes the queue in order during the next render:
          </TypographyP>
          <TypographyList>
            <li>
              <strong>Value (e.g., 5):</strong> Adds "Replace with 5" to the
              queue.
            </li>
            <li>
              <strong>Updater (e.g., n {'=>'} n + 1):</strong> Adds the function
              to the queue. It receives the result of the previous operation as
              its argument.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
