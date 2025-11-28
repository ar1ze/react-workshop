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

export const PassingDataDeeplyPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock title="Passing Data Deeply with Context">
          Usually, you pass data via props. But when you need to pass data
          through many intermediate components that don't use it (Prop
          Drilling), it becomes verbose. <strong>Context</strong> allows a
          parent to provide data to the entire tree below it, no matter how
          deep.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The 3-Step Process">
          <TypographyList>
            <li>
              <strong>1. Create:</strong> Create and export the context with a
              default value.
            </li>
            <li>
              <strong>2. Use:</strong> Call the{' '}
              <TypographyInlineCode>useContext</TypographyInlineCode> hook in
              the child component to read the value.
            </li>
            <li>
              <strong>3. Provide:</strong> Wrap the children with the Context
              Provider to supply the actual value.
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`import { createContext, useContext } from 'react';

// 1. Create Context (Default value: 1)
export const LevelContext = createContext(1);

// 2. Use Context (Child)
function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1: return <h1>{children}</h1>;
    case 2: return <h2>{children}</h2>;
    default: return <span>{children}</span>;
  }
}

// 3. Provide Context (Parent)
export default function Section({ level, children }) {
  return (
    <LevelContext value={level}>
      {children}
    </LevelContext>
  );
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Nesting Providers">
          <TypographyP>
            Context is not global state. You can nest providers of the same
            context. A component will always read the value from the{' '}
            <strong>nearest</strong> provider above it.
          </TypographyP>
          <TypographyCodeBlock
            code={`<LevelContext value={1}>
  <Heading>Level 1</Heading>
  
  <LevelContext value={2}>
    <Heading>Level 2 (Reads nearest provider)</Heading>
  </LevelContext>
</LevelContext>`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Before You Use Context">
          <TypographyP>
            Context is powerful but often overused. Before reaching for it,
            consider simpler alternatives:
          </TypographyP>

          <div className="mt-4 grid gap-4">
            <TypographyCard>
              <CardHeader>
                <CardTitle>Alternative 1: Pass Props</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0 text-sm">
                  If it's only a few levels deep, passing props explicitly makes
                  the data flow easier to follow.
                </TypographyP>
              </CardContent>
            </TypographyCard>

            <TypographyCard>
              <CardHeader>
                <CardTitle>Alternative 2: Component Composition</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0 text-sm">
                  Instead of passing data through a layout component just to
                  reach a child, pass the child itself as{' '}
                  <TypographyInlineCode>children</TypographyInlineCode>.
                </TypographyP>
                <TypographyCodeBlock
                  className="mt-2 text-xs"
                  code={`// ❌ Prop Drilling
<Layout user={user} />

// ✅ Composition (Layout doesn't need to know about user)
<Layout>
  <Header user={user} />
</Layout>`}
                />
              </CardContent>
            </TypographyCard>
          </div>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
