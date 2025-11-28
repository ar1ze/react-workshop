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

export const SharingStatePage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock title="Sharing State Between Components">
          When two components need to coordinate (e.g., only one panel open at a
          time), you must remove state from them and move it to their closest
          common parent. This is called <strong>Lifting State Up</strong>.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The 3-Step Process">
          <TypographyList>
            <li>
              <strong>1. Remove state from children:</strong> The child should
              not hold the data (e.g.,{' '}
              <TypographyInlineCode>isActive</TypographyInlineCode>).
            </li>
            <li>
              <strong>2. Pass hardcoded data from parent:</strong> Pass the data
              down via props to verify the child is now "controlled."
            </li>
            <li>
              <strong>3. Add state to the parent:</strong> The parent holds the
              source of truth (e.g.,{' '}
              <TypographyInlineCode>activeIndex</TypographyInlineCode>) and
              passes event handlers down to allow children to update it.
            </li>
          </TypographyList>

          <TypographyCodeBlock
            code={`export default function Accordion() {
  // 1. State lives in Parent
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Panel
        title="About"
        // 2. Data flows down
        isActive={activeIndex === 0} 
        // 3. Control flows up (via handlers)
        onShow={() => setActiveIndex(0)}
      />
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      />
    </>
  );
}

function Panel({ title, isActive, onShow }) {
  // Child has NO state. It is fully controlled by props.
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? (
        <p>Content...</p>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </section>
  );
}`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Controlled vs. Uncontrolled">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TypographyCard>
              <CardHeader>
                <CardTitle>Uncontrolled Component</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0 text-sm">
                  The component holds its own local state (e.g., an{' '}
                  <TypographyInlineCode>&lt;input&gt;</TypographyInlineCode>
                  that updates itself).
                </TypographyP>
                <TypographyList className="mt-2 text-sm">
                  <li>Easier to write initially.</li>
                  <li>Harder to coordinate with others.</li>
                  <li>
                    <strong>Driven by State.</strong>
                  </li>
                </TypographyList>
              </CardContent>
            </TypographyCard>

            <TypographyCard>
              <CardHeader>
                <CardTitle>Controlled Component</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="mt-0 text-sm">
                  The component receives its information via props from a
                  parent.
                </TypographyP>
                <TypographyList className="mt-2 text-sm">
                  <li>Maximum flexibility.</li>
                  <li>Parent dictates behavior.</li>
                  <li>
                    <strong>Driven by Props.</strong>
                  </li>
                </TypographyList>
              </CardContent>
            </TypographyCard>
          </div>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Single Source of Truth">
          <TypographyP>
            For each unique piece of data, there should be <strong>one</strong>{' '}
            specific component that "owns" it. Do not duplicate shared state. If
            multiple components need it, lift it up.
          </TypographyP>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
