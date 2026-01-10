'use client'

import React from 'react'

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Enhanced markdown parser with table support
  const parseMarkdown = (text: string): React.ReactNode[] => {
    const lines = text.split('\n')
    const elements: React.ReactNode[] = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i]
      const trimmed = line.trim()

      // Empty line
      if (!trimmed) {
        i++
        continue
      }

      // Table
      if (trimmed.startsWith('|')) {
        const tableRows: string[][] = []
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          const row = lines[i].trim()
          // Remove leading/trailing | and split by |
          const cells = row.slice(1, -1).split('|').map(c => c.trim())
          tableRows.push(cells)
          i++
        }
        // Skip separator row
        if (tableRows.length > 1 && tableRows[1][0]?.match(/^-+/)) {
          tableRows.splice(1, 1)
        }
        if (tableRows.length > 0) {
          elements.push(
            <div key={i} className="my-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {tableRows[0]?.map((cell, idx) => (
                      <th key={idx} className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                        {parseInline(cell)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableRows.slice(1).map((row, rowIdx) => (
                    <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="px-4 py-2 text-sm text-gray-700">
                          {parseInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
        continue
      }

      // Code block
      if (trimmed.startsWith('```')) {
        const language = trimmed.slice(3).trim()
        const codeLines: string[] = []
        i++
        while (i < lines.length && !lines[i].trim().startsWith('```')) {
          codeLines.push(lines[i])
          i++
        }
        elements.push(
          <pre key={i} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm">
            <code>{codeLines.join('\n')}</code>
          </pre>
        )
        i++
        continue
      }

      // Headings
      if (trimmed.startsWith('#')) {
        const level = trimmed.match(/^#+/)?.[0].length || 1
        const text = trimmed.replace(/^#+\s*/, '')
        const baseClasses = 'font-bold my-4 scroll-mt-20'
        const sizeClasses: Record<number, string> = {
          1: 'text-3xl',
          2: 'text-2xl',
          3: 'text-xl',
          4: 'text-lg',
          5: 'text-base',
          6: 'text-sm',
        }
        const HeadingTag = `h${Math.min(level, 6)}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
        elements.push(
          <HeadingTag key={i} className={`${baseClasses} ${sizeClasses[level] || 'text-base'}`}>
            {text}
          </HeadingTag>
        )
        i++
        continue
      }

      // Horizontal rule
      if (trimmed.match(/^---+$/)) {
        elements.push(<hr key={i} className="my-6 border-gray-300" />)
        i++
        continue
      }

      // Unordered list
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const items: string[] = []
        while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
          items.push(lines[i].trim().replace(/^[-*]\s*/, ''))
          i++
        }
        elements.push(
          <ul key={i} className="list-disc pl-6 my-4 space-y-2">
            {items.map((item, idx) => (
              <li key={idx}>{parseInline(item)}</li>
            ))}
          </ul>
        )
        continue
      }

      // Ordered list
      if (trimmed.match(/^\d+\.\s/)) {
        const items: string[] = []
        while (i < lines.length && lines[i].trim().match(/^\d+\.\s/)) {
          items.push(lines[i].trim().replace(/^\d+\.\s*/, ''))
          i++
        }
        elements.push(
          <ol key={i} className="list-decimal pl-6 my-4 space-y-2">
            {items.map((item, idx) => (
              <li key={idx}>{parseInline(item)}</li>
            ))}
          </ol>
        )
        continue
      }

      // Blockquote
      if (trimmed.startsWith('>')) {
        const quoteLines: string[] = []
        while (i < lines.length && lines[i].trim().startsWith('>')) {
          quoteLines.push(lines[i].trim().replace(/^>\s*/, ''))
          i++
        }
        elements.push(
          <blockquote key={i} className="border-l-4 border-primary/30 bg-primary/5 pl-4 py-2 my-4 text-gray-700 italic rounded-r">
            {quoteLines.map((line, idx) => (
              <p key={idx} className="my-1">{parseInline(line)}</p>
            ))}
          </blockquote>
        )
        continue
      }

      // Regular paragraph - collect consecutive non-special lines
      const paragraphLines: string[] = []
      while (i < lines.length) {
        const nextLine = lines[i].trim()
        if (!nextLine || nextLine.startsWith('#') || nextLine.startsWith('```') || nextLine.match(/^---+$/)) {
          break
        }
        if (nextLine.startsWith('- ') || nextLine.startsWith('* ') || nextLine.match(/^\d+\.\s/) || nextLine.startsWith('>')) {
          break
        }
        if (nextLine.startsWith('|')) {
          break
        }
        paragraphLines.push(line)
        i++
      }

      if (paragraphLines.length > 0) {
        elements.push(
          <p key={i} className="my-4 leading-relaxed text-gray-700">
            {parseInline(paragraphLines.join(' '))}
          </p>
        )
        continue
      }

      i++
    }

    return elements
  }

  // Parse inline markdown (bold, italic, code, links)
  const parseInline = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = []
    let remaining = text
    let key = 0

    while (remaining.length > 0) {
      // Bold **text**
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
      if (boldMatch && boldMatch.index === 0) {
        if (remaining.startsWith('**')) {
          parts.push(<strong key={key++} className="font-semibold">{boldMatch[1]}</strong>)
          remaining = remaining.slice(boldMatch[0].length)
          continue
        }
      }

      // Italic *text*
      const italicMatch = remaining.match(/\*(.+?)\*/)
      if (italicMatch && italicMatch.index === 0) {
        if (remaining.startsWith('*') && !remaining.startsWith('**')) {
          parts.push(<em key={key++}>{italicMatch[1]}</em>)
          remaining = remaining.slice(italicMatch[0].length)
          continue
        }
      }

      // Inline code `text`
      const codeMatch = remaining.match(/`(.+?)`/)
      if (codeMatch && codeMatch.index === 0) {
        parts.push(<code key={key++} className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-primary">{codeMatch[1]}</code>)
        remaining = remaining.slice(codeMatch[0].length)
        continue
      }

      // Links [text](url)
      const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/)
      if (linkMatch && linkMatch.index === 0) {
        parts.push(<a key={key++} href={linkMatch[2]} className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">{linkMatch[1]}</a>)
        remaining = remaining.slice(linkMatch[0].length)
        continue
      }

      // Regular text - take one character at a time to avoid recursion issues
      parts.push(remaining[0])
      remaining = remaining.slice(1)
    }

    return parts
  }

  return <div className="markdown-content prose prose-gray max-w-none">{parseMarkdown(content)}</div>
}
