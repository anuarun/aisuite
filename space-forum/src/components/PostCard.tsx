import { useNavigate } from 'react-router-dom'
import { Post, BOARDS, USERS, formatRelativeTime } from '../data'

interface Props {
  post: Post
}

const BOARD_COLORS: Record<string, string> = {
  mission: 'var(--mission)',
  engineering: 'var(--engineering)',
  safety: 'var(--safety)',
  commercial: 'var(--commercial)',
  science: 'var(--science)',
  leadership: 'var(--leadership)',
  commons: 'var(--commons)',
}

export default function PostCard({ post }: Props) {
  const navigate = useNavigate()
  const board = BOARDS.find(b => b.id === post.boardId)
  const author = USERS[post.authorId]
  const color = BOARD_COLORS[post.boardId] || 'var(--accent)'

  return (
    <div className="post-card" onClick={() => navigate(`/post/${post.id}`)}>
      <div className="post-card-main">
        <div className="post-card-meta">
          {board && (
            <span
              className="board-chip"
              style={{
                background: `${color}18`,
                color,
                border: `1px solid ${color}30`,
              }}
            >
              {board.emoji} {board.name}
            </span>
          )}
          {post.pinned && (
            <span className="post-pinned">◈ PINNED</span>
          )}
          {author && (
            <span className="post-author-chip">
              <div
                className="avatar avatar-sm"
                style={{ background: author.avatarColor }}
              >
                {author.initials}
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text2)' }}>{author.name}</span>
            </span>
          )}
          <span className="post-timestamp">{formatRelativeTime(post.timestamp)}</span>
        </div>

        <div className="post-title">{post.title}</div>
        <div className="post-excerpt">{post.excerpt}</div>

        {post.tags.length > 0 && (
          <div className="post-tags">
            {post.tags.slice(0, 4).map(tag => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
        )}
      </div>

      <div className="post-card-stats">
        <div className="stat">
          <span className="stat-icon">↑</span>
          <span>{post.endorsements}</span>
        </div>
        <div className="stat">
          <span className="stat-icon">◎</span>
          <span>{post.comments.length + post.comments.reduce((acc, c) => acc + (c.replies?.length ?? 0), 0)}</span>
        </div>
        <div className="stat">
          <span className="stat-icon">◷</span>
          <span>{post.views.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}
