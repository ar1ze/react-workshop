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

export const ScalingUpPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Scaling Up with Reducer and Context"
          url="https://react.dev/learn/scaling-up-with-reducer-and-context"
        >
          Reducers consolidate state logic. Context passes data deep. Combining
          them creates a powerful state management engine that scales for
          complex screens, allowing you to avoid "Prop Drilling" completely.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Architecture">
          <TypographyP>
            Instead of passing state and dispatch through props, we lift the
            reducer into a parent and provide the result via Context.
          </TypographyP>

          <TypographyList>
            <li>
              <strong>State Context:</strong> Provides the current state value
              (e.g., <TypographyInlineCode>TasksContext</TypographyInlineCode>).
            </li>
            <li>
              <strong>Dispatch Context:</strong> Provides the dispatch function
              (e.g.,{' '}
              <TypographyInlineCode>TasksDispatchContext</TypographyInlineCode>
              ).
            </li>
          </TypographyList>
          <TypographyP className="text-muted-foreground text-sm">
            <em>
              Tip: Use two separate contexts. This allows components to read the
              dispatch function without re-rendering every time the state
              changes.
            </em>
          </TypographyP>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="The Provider Pattern">
          <TypographyP>
            Best practice is to encapsulate all wiring (Context creation,
            Reducer, and Provider) in a single file. This keeps your main
            components clean.
          </TypographyP>

          <TypographyCodeBlock
            code={`// TasksContext.js
import { createContext, useContext, useReducer } from 'react';

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext value={tasks}>
      <TasksDispatchContext value={dispatch}>
        {children}
      </TasksDispatchContext>
    </TasksContext>
  );
}

function tasksReducer(tasks, action) { 
  /* ... reducer logic ... */ 
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Custom Hooks for Consumption">
          <TypographyCard>
            <CardHeader>
              <CardTitle>Don't export the Context directly</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP className="mt-0 text-sm">
                Instead, export custom hooks. This abstracts the{' '}
                <TypographyInlineCode>useContext</TypographyInlineCode> call and
                provides a clean API for your components.
              </TypographyP>
              <TypographyCodeBlock
                className="mt-2"
                code={`// TasksContext.js
export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}`}
              />
            </CardContent>
          </TypographyCard>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Final Usage">
          <TypographyP>
            Your components become incredibly clean. No props are passed for
            state handling.
          </TypographyP>
          <TypographyCodeBlock
            code={`// TaskList.js
export default function TaskList() {
  const tasks = useTasks(); // Read state
  return (
    <ul>{tasks.map(t => <Task key={t.id} task={t} />)}</ul>
  );
}

// AddTask.js
export default function AddTask() {
  const dispatch = useTasksDispatch(); // Read dispatch
  return (
    <button onClick={() => dispatch({ type: 'added', text: 'New Task' })}>
      Add
    </button>
  );
}`}
          />
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
