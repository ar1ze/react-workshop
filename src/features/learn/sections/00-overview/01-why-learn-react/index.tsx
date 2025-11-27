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
          React is a JavaScript library for building user interfaces. It lets
          you define the UI based on your data and handles updates when that
          data changes. Its component model helps break the interface into
          clear, reusable parts, making it a practical choice for modern
          development.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="The Technical Appeal">
          <TypographyP>
            Beyond popularity, React introduces a mental model that simplifies
            UI development:
          </TypographyP>
          <TypographyList>
            <li>
              <strong>Declarative Nature:</strong> You describe <em>what</em>{' '}
              the UI should look like for a given state, and React handles the
              "how" (DOM updates).
            </li>
            <li>
              <strong>Component-Based:</strong> Encapsulating logic and markup
              into small, reusable units makes complex applications manageable.
            </li>
            <li>
              <strong>"Just JavaScript":</strong> Unlike frameworks that
              introduce heavy domain-specific languages, React relies mostly on
              standard JavaScript patterns.
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
