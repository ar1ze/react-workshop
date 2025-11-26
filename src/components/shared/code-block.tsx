import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { cn } from '@/lib/utils'

import type { BaseProps } from './props'

export interface CodeBlockProps extends BaseProps {
  code: string
  language?: string
}

export const CodeBlock = ({
  code,
  language = 'typescript',
  className,
}: CodeBlockProps) => {
  return (
    <div
      className={cn(
        'grid max-w-full overflow-auto rounded-md bg-[#1e1e1e]',
        className
      )}
    >
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        wrapLongLines={true}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          fontSize: '0.9rem',
          lineHeight: '1.5',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
