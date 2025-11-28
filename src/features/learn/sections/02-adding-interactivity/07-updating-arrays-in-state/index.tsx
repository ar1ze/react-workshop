import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TypographyCard,
  TypographyCodeBlock,
  TypographyInlineCode,
  TypographyList,
  TypographyP,
} from '@/components/ui/typography'
import {
  LearnChallengeTabsBlock,
  LearnPageHeaderBlock,
  LearnSectionHeaderBlock,
} from '@/features/learn/components'
import { LearnContentLayout, LearnPageLayout } from '@/features/learn/layouts'

import { UpdatingArraysInStateChallenges } from './challenge'

export const UpdatingArraysPage = () => {
  return (
    <LearnContentLayout>
      <LearnPageLayout>
        <LearnPageHeaderBlock
          title="Updating Arrays in State"
          url="https://react.dev/learn/updating-arrays-in-state"
        >
          Arrays are mutable in JavaScript, but in React state, you must treat
          them as <strong>immutable</strong>. Never use methods that change the
          array in place (like <TypographyInlineCode>push</TypographyInlineCode>
          ); always create a <em>new</em> array.
        </LearnPageHeaderBlock>

        <LearnSectionHeaderBlock title="Method Reference Cheat Sheet">
          <div className="grid gap-4 md:grid-cols-2">
            <TypographyCard>
              <CardHeader>
                <CardTitle className="text-destructive">
                  Avoid (Mutates)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyList className="mt-0">
                  <li>
                    <TypographyInlineCode>push</TypographyInlineCode>,{' '}
                    <TypographyInlineCode>unshift</TypographyInlineCode>
                  </li>
                  <li>
                    <TypographyInlineCode>pop</TypographyInlineCode>,{' '}
                    <TypographyInlineCode>shift</TypographyInlineCode>
                  </li>
                  <li>
                    <TypographyInlineCode>splice</TypographyInlineCode>
                  </li>
                  <li>
                    <TypographyInlineCode>reverse</TypographyInlineCode>,{' '}
                    <TypographyInlineCode>sort</TypographyInlineCode>
                  </li>
                </TypographyList>
              </CardContent>
            </TypographyCard>

            <TypographyCard>
              <CardHeader>
                <CardTitle className="text-green-600">
                  Prefer (Returns New)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyList className="mt-0">
                  <li>
                    <TypographyInlineCode>concat</TypographyInlineCode>,{' '}
                    <TypographyInlineCode>[...spread]</TypographyInlineCode>
                  </li>
                  <li>
                    <TypographyInlineCode>filter</TypographyInlineCode>,{' '}
                    <TypographyInlineCode>slice</TypographyInlineCode>
                  </li>
                  <li>
                    <TypographyInlineCode>map</TypographyInlineCode>
                  </li>
                  <li>
                    <TypographyInlineCode>toSorted</TypographyInlineCode>,{' '}
                    <TypographyInlineCode>toReversed</TypographyInlineCode>
                  </li>
                </TypographyList>
              </CardContent>
            </TypographyCard>
          </div>
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Common Patterns">
          <TypographyP>
            <strong>1. Adding:</strong> Use spread syntax.
          </TypographyP>
          <TypographyCodeBlock
            code={`setArtists([ ...artists, { id: nextId++, name: name } ]); // Add to end
setArtists([ { id: nextId++, name: name }, ...artists ]); // Add to start`}
          />

          <TypographyP>
            <strong>2. Removing:</strong> Use{' '}
            <TypographyInlineCode>filter</TypographyInlineCode>.
          </TypographyP>
          <TypographyCodeBlock
            code={`setArtists(artists.filter(a => a.id !== artistId));`}
          />

          <TypographyP>
            <strong>3. Replacing / Updating:</strong> Use{' '}
            <TypographyInlineCode>map</TypographyInlineCode>.
          </TypographyP>
          <TypographyCodeBlock
            code={`setArtists(artists.map(artist => {
  if (artist.id === targetId) {
    // Return a new object with changes
    return { ...artist, seen: true }; 
  } else {
    // Return original item
    return artist;
  }
}));`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Critical Pitfall: Shallow Copies">
          <TypographyP>
            Copying an array with{' '}
            <TypographyInlineCode>[...arr]</TypographyInlineCode> is{' '}
            <strong>shallow</strong>. The items inside are still referenced. Do
            not mutate them directly.
          </TypographyP>

          <TypographyCodeBlock
            code={`const nextList = [...list];

// ❌ BAD: Mutates the existing object inside the array
nextList[0].seen = true; 

// ✅ GOOD: Replace the object entirely (using map pattern above)`}
          />
        </LearnSectionHeaderBlock>

        <LearnSectionHeaderBlock title="Shortcut: Immer">
          <TypographyP>
            If logic gets complicated (e.g., nested arrays),{' '}
            <TypographyInlineCode>useImmer</TypographyInlineCode> lets you write
            mutable-style code (like{' '}
            <TypographyInlineCode>push</TypographyInlineCode> or assignment) and
            handles the immutable updates for you.
          </TypographyP>
        </LearnSectionHeaderBlock>

        <LearnChallengeTabsBlock
          challenges={UpdatingArraysInStateChallenges}
          url="https://react.dev/learn/updating-arrays-in-state#challenges"
        />
      </LearnPageLayout>
    </LearnContentLayout>
  )
}
