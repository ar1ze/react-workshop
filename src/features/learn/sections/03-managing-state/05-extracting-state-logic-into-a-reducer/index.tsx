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

export const ExtractingStateLogicPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock title="Extracting State Logic into a Reducer">
          When a component becomes complex with many event handlers updating
          state in different ways, you can move that logic into a single
          function called a <strong>Reducer</strong>. This separates the{' '}
          <em>"what happened"</em> (Action) from the{' '}
          <em>"how state updates"</em> (Reducer).
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Reducer Pattern">
          <TypographyList>
            <li>
              <strong>1. Dispatch Actions:</strong> Instead of setting state
              directly, event handlers dispatch an "Action" object describing
              the user's intent.
            </li>
            <li>
              <strong>2. Write a Reducer:</strong> A pure function that takes
              the <TypographyInlineCode>current state</TypographyInlineCode> and
              the <TypographyInlineCode>action</TypographyInlineCode>, and
              returns the{' '}
              <TypographyInlineCode>next state</TypographyInlineCode>.
            </li>
            <li>
              <strong>3. Use useReducer:</strong> Hook it up to the component.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Step 1: The Action (What Happened)">
          <TypographyP>
            An action is a plain JavaScript object. It typically has a{' '}
            <TypographyInlineCode>type</TypographyInlineCode> string and any
            necessary data.
          </TypographyP>
          <TypographyCodeBlock
            code={`// Event handler in component
function handleAddTask(text) {
  dispatch({
    type: 'added', // Describes the user's intent
    id: nextId++,
    text: text,
  });
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Step 2: The Reducer (How State Updates)">
          <TypographyP>
            This function lives <strong>outside</strong> your component. It must
            be pure (no side effects).
          </TypographyP>
          <TypographyCodeBlock
            code={`function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        { id: action.id, text: action.text, done: false },
      ];
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Step 3: Wiring It Up">
          <TypographyCodeBlock
            code={`import { useReducer } from 'react';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  
  // ... rest of component
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="When to use a Reducer?">
          <TypographyList>
            <li>
              <strong>Complex Updates:</strong> When the next state depends on
              complex logic involving the previous state.
            </li>
            <li>
              <strong>Debugging:</strong> You can log every action to see
              exactly what triggered a state change.
            </li>
            <li>
              <strong>Testing:</strong> You can test the reducer function in
              isolation without rendering the component.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
