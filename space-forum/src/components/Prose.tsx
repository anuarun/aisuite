interface Props {
  text: string
}

function parseMarkdown(text: string): string {
  return text
    // bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // em
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // h2
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // h3
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    // hr
    .replace(/^---$/gm, '<hr />')
    // numbered list
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    // bullet list
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    // wrap consecutive <li> in <ul>
    .replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    // blockquote
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // paragraphs: wrap blocks separated by blank lines
    .split(/\n\n+/)
    .map(block => {
      const trimmed = block.trim()
      if (!trimmed) return ''
      if (trimmed.startsWith('<h2>') || trimmed.startsWith('<h3>') ||
          trimmed.startsWith('<ul>') || trimmed.startsWith('<hr') ||
          trimmed.startsWith('<blockquote>')) {
        return trimmed
      }
      return `<p>${trimmed.replace(/\n/g, '<br />')}</p>`
    })
    .filter(Boolean)
    .join('\n')
}

export default function Prose({ text }: Props) {
  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(text) }}
    />
  )
}
