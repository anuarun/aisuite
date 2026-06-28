import { useParams, Navigate } from 'react-router-dom'
import { BOARDS, getPostsByBoard } from '../data'
import PostCard from '../components/PostCard'

const BOARD_COLORS: Record<string, string> = {
  mission: 'var(--mission)',
  engineering: 'var(--engineering)',
  safety: 'var(--safety)',
  commercial: 'var(--commercial)',
  science: 'var(--science)',
  leadership: 'var(--leadership)',
  commons: 'var(--commons)',
}

export default function BoardPage() {
  const { boardId } = useParams<{ boardId: string }>()
  const board = BOARDS.find(b => b.id === boardId)

  if (!board) return <Navigate to="/" />

  const posts = getPostsByBoard(boardId!).sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )

  const color = BOARD_COLORS[boardId!] || 'var(--accent)'

  return (
    <div>
      <div
        className="board-header"
        style={{ borderLeft: `4px solid ${color}` }}
      >
        <span className="board-icon-large">{board.emoji}</span>
        <div className="board-header-info">
          <div className="board-header-name" style={{ color }}>{board.name}</div>
          <div className="board-header-desc">{board.description}</div>
        </div>
        {board.restricted && (
          <div style={{
            fontSize: '11px',
            color: 'var(--gold)',
            border: '1px solid rgba(234,179,8,0.3)',
            padding: '4px 10px',
            borderRadius: '6px',
            fontWeight: 700,
            letterSpacing: '0.5px',
          }}>
            EXEC ONLY
          </div>
        )}
      </div>

      {board.restricted && (
        <div className="restricted-banner">
          ◈ &nbsp;Access to this board is limited to Executive and Senior leadership.
          Posts are visible company-wide per Nadia's transparency commitment.
        </div>
      )}

      {posts.length === 0 ? (
        <div style={{ color: 'var(--text3)', padding: '40px 0', textAlign: 'center', fontSize: '13px' }}>
          No discussions in this board yet.
        </div>
      ) : (
        <div className="post-list">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
