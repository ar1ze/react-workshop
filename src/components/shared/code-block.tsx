import { useTheme } from 'next-themes'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  oneLight,
  vscDarkPlus,
} from 'react-syntax-highlighter/dist/esm/styles/prism'

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
  const { theme } = useTheme()
  const themeStyle = theme === 'dark' ? vscDarkPlus : oneLight

  return (
    <div className={cn('grid max-w-full overflow-auto rounded-md', className)}>
      <SyntaxHighlighter
        language={language}
        style={themeStyle}
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
