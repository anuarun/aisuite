import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getPost, getBoard, USERS, Comment, formatRelativeTime } from '../data'
import Prose from '../components/Prose'

const BOARD_COLORS: Record<string, string> = {
  mission: 'var(--mission)',
  engineering: 'var(--engineering)',
  safety: 'var(--safety)',
  commercial: 'var(--commercial)',
  science: 'var(--science)',
  leadership: 'var(--leadership)',
  commons: 'var(--commons)',
}

function CommentBlock({ comment, depth = 0 }: { comment: Comment; depth?: number }) {
  const author = USERS[comment.authorId]

  return (
    <div className={depth > 0 ? 'reply' : 'comment'}>
      <div
        className={`avatar ${depth > 0 ? 'avatar-sm' : 'avatar-md'}`}
        style={{ background: author?.avatarColor ?? '#64748b', marginTop: '2px' }}
      >
        {author?.initials ?? '??'}
      </div>
      <div className="comment-body-area">
        <div className="comment-meta">
          <span className="comment-author">{author?.name ?? 'Unknown'}</span>
          <span className="comment-role">{author?.role}</span>
          <span className="comment-time">{formatRelativeTime(comment.timestamp)}</span>
        </div>
        <div className="comment-text">
          <Prose text={comment.body} />
        </div>
        <div className="comment-footer">
          <button className="comment-endorse">
            ↑ Endorse · {comment.endorsements}
          </button>
        </div>

        {comment.replies && comment.replies.length > 0 && (
          <div className="replies">
            {comment.replies.map(reply => (
              <CommentBlock key={reply.id} comment={reply} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function PostPage() {
  const { postId } = useParams<{ postId: string }>()
  const navigate = useNavigate()
  const post = getPost(postId!)

  if (!post) return <Navigate to="/" />

  const board = getBoard(post.boardId)
  const author = USERS[post.authorId]
  const color = BOARD_COLORS[post.boardId] || 'var(--accent)'
  const totalReplies = post.comments.reduce((acc, c) => acc + (c.replies?.length ?? 0), 0)

  return (
    <div className="post-view">
      <div className="post-view-header">
        <div className="post-view-board">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
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
        </div>

        <h1 className="post-view-title">{post.title}</h1>

        {board?.restricted && (
          <div className="restricted-banner">
            ◈ &nbsp;Leadership Circle — visible company-wide per transparency policy
          </div>
        )}

        <div className="post-view-byline">
          <div
            className="avatar avatar-lg"
            style={{ background: author?.avatarColor ?? '#64748b' }}
          >
            {author?.initials ?? '??'}
          </div>
          <div className="byline-info">
            <div className="byline-name">{author?.name}</div>
            <div className="byline-role">{author?.role} · {author?.department}</div>
          </div>
          <div className="byline-right">
            <span className="byline-timestamp">{formatRelativeTime(post.timestamp)}</span>
            <button className="endorse-btn">
              ↑ Endorse · {post.endorsements}
            </button>
          </div>
        </div>
      </div>

      <Prose text={post.body} />

      <div style={{ display: 'flex', gap: '16px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
        {post.tags.map(tag => (
          <span key={tag} className="tag">#{tag}</span>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'var(--text3)', fontFamily: 'JetBrains Mono, monospace' }}>
          {post.views.toLocaleString()} views
        </span>
      </div>

      <div className="comments-section">
        <div className="comments-header">
          Responses
          <span className="comments-count">{post.comments.length + totalReplies}</span>
        </div>

        {post.comments.map(comment => (
          <CommentBlock key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}
