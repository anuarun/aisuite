import { useState } from 'react'
import { POSTS, BOARDS } from '../data'
import PostCard from '../components/PostCard'

const FILTERS = ['All', 'Pinned', 'Mission', 'Engineering', 'Safety', 'Science', 'Commons']

const FILTER_BOARD_MAP: Record<string, string> = {
  Mission: 'mission',
  Engineering: 'engineering',
  Safety: 'safety',
  Science: 'science',
  Commons: 'commons',
}

export default function Home() {
  const [filter, setFilter] = useState('All')

  const filtered = POSTS.filter(p => {
    if (filter === 'All') return true
    if (filter === 'Pinned') return p.pinned
    const boardId = FILTER_BOARD_MAP[filter]
    return p.boardId === boardId
  }).sort((a, b) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  })

  const totalPosts = POSTS.length
  const totalComments = POSTS.reduce((acc, p) => acc + p.comments.length + p.comments.reduce((r, c) => r + (c.replies?.length ?? 0), 0), 0)

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">NEXUS — Perihelion Dynamics</h1>
        <p className="page-subtitle">
          {totalPosts} discussions · {totalComments} responses · {BOARDS.length} boards
          &nbsp;·&nbsp;
          <span style={{ color: 'var(--red)', fontWeight: 600 }}>Site-7 suspension in effect</span>
        </p>
      </div>

      <div className="feed-filter">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-tab${filter === f ? ' active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="post-list">
        {filtered.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
