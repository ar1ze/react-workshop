import { TypographyP } from '@/components/ui/typography'
import {
  LearnNavigationCard,
  LearnPageHeaderBlock,
  LearnSectionHeaderBlock,
} from '@/features/learn/components'
import { getLearnSectionNodes } from '@/features/learn/hooks'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

export const OverviewSection = () => {
  const nodes = getLearnSectionNodes([
    'describing-the-ui',
    'adding-interactivity',
    'managing-state',
    'escape-hatches',
  ])

  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock title="Overview">
          I created this project to document my progress as I learn React. It
          serves as my personal knowledge base a mix of high-impact study notes
          and interactive challenges to ensure I truly understand the core
          concepts.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Structure">
          <TypographyP>
            The learning path is organized into four main sections:
          </TypographyP>
          {nodes && <LearnNavigationCard nodes={nodes} title="Sections" />}
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="About these Notes">
          <TypographyP>
            These pages highlight the most critical concepts for quick reference
            and are not intended as a comprehensive beginner's guide. The
            content is condensed for proficiency and impact. Interactive
            challenges are included selectively where they reinforce specific
            topics.
          </TypographyP>
        </LearnSectionHeaderBlock>
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
