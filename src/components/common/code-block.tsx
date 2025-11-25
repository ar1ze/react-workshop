import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  code: string
  language?: string
}

export const CodeBlock = ({
  code,
  language = 'typescript',
}: CodeBlockProps) => {
  return (
    <div className="overflow-hidden rounded-md border bg-[#1e1e1e]">
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
