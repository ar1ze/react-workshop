import { TypographyList, TypographyP } from '@/components/ui/typography'
import {
  LearnPageHeaderBlock,
  LearnSectionHeaderBlock,
} from '@/features/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

export const WhyLearnReactPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock title="Why Learn React">
          React is one of the most powerful and widely used JavaScript libraries
          today. The frontend landscape changes constantly, so choosing a
          framework can feel risky, but React has proven it is here to stay. It
          makes code scalable, readable, and efficient.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Practical Reasons">
          <TypographyP>
            Once you dive in, you realize why it is the industry standard:
          </TypographyP>
          <TypographyList>
            <li>
              <strong>Components are reusable:</strong> You build pieces of UI
              once and use them anywhere, making your code cleaner and easier to
              maintain.
            </li>
            <li>
              <strong>It is well-supported:</strong> Because of its massive
              popularity, if you get stuck, someone has likely already solved
              your problem.
            </li>
            <li>
              <strong>It is unopinionated:</strong> React doesn't force you to
              follow specific design patterns or project structures. You decide
              how to organize your logic.
            </li>
            <li>
              <strong>Smaller learning curve:</strong> If you already have a
              grasp of standard JavaScript, HTML, and CSS, React is much easier
              to pick up than heavier frameworks.
            </li>
          </TypographyList>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="My Goal">
          <TypographyP>
            I am building this documentation not just to learn the syntax, but
            to master the mental model. By rewriting the core concepts in my own
            words and building interactive examples, I aim to move beyond
            "knowing how to code" to "understanding how React thinks."
          </TypographyP>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
