import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { BOARDS, COMPANY, USERS } from '../data'

const CURRENT_USER = USERS['nadia']

export default function Layout() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <header className="header">
        <div className="header-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <div className="header-logo">◈</div>
          <div className="header-brand-name">
            <span className="header-nexus">NEXUS</span>
            <span className="header-company">Perihelion Dynamics — Internal</span>
          </div>
        </div>

        <div className="header-ticker">
          <div className="ticker-item">
            <span className="ticker-label">MISSION</span>
            <span className="ticker-value">ARES-1</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-label">WINDOW</span>
            <span className="ticker-value">NOV 2027</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-label">T-</span>
            <span className="ticker-value">{COMPANY.daysToWindow}d</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-label">STATUS</span>
            <span className="ticker-status">BOARD REVIEW</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-label">SITE-7</span>
            <span className="ticker-value" style={{ color: 'var(--red)' }}>SUSPENDED</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-label">CASCADE</span>
            <span className="ticker-value" style={{ color: 'var(--gold)' }}>ELARA-7 REVIEW</span>
          </div>
        </div>

        <div className="header-user">
          <span className="header-user-name">{CURRENT_USER.name.split(' ')[0]} {CURRENT_USER.name.split(' ').slice(-1)}</span>
          <div
            className="avatar avatar-sm"
            style={{ background: CURRENT_USER.avatarColor }}
          >
            {CURRENT_USER.initials}
          </div>
        </div>
      </header>

      <div className="main-layout">
        <nav className="sidebar">
          <div className="sidebar-section">
            <div className="sidebar-label">Navigate</div>
            <NavLink to="/" className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`} end>
              <span className="sidebar-icon">⊞</span>
              <span className="sidebar-link-name">All Posts</span>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
              <span className="sidebar-icon">◉</span>
              <span className="sidebar-link-name">Company</span>
            </NavLink>
          </div>

          <div className="sidebar-divider" />

          <div className="sidebar-section">
            <div className="sidebar-label">Boards</div>
            {BOARDS.map(board => (
              <NavLink
                key={board.id}
                to={`/board/${board.id}`}
                className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
              >
                <span className="sidebar-icon">{board.emoji}</span>
                <span className="sidebar-link-name">{board.name}</span>
                {board.restricted && (
                  <span className="sidebar-restricted">EXEC</span>
                )}
              </NavLink>
            ))}
          </div>
        </nav>

        <main className="content">
          <Outlet />
        </main>

        <aside className="content-right">
          <div className="widget">
            <div className="widget-title">Mission Status</div>
            <div className="countdown">
              <div className="countdown-number">{COMPANY.daysToWindow}</div>
              <div className="countdown-label">days to window</div>
              <div className="countdown-mission">Ares-1 · Nov 2027</div>
            </div>
          </div>

          <div className="widget">
            <div className="widget-title">Company Overview</div>
            <div className="company-stat">
              <span className="stat-label">Employees</span>
              <span className="stat-val">{COMPANY.employees.toLocaleString()}</span>
            </div>
            <div className="company-stat">
              <span className="stat-label">Total Funding</span>
              <span className="stat-val">{COMPANY.funding}</span>
            </div>
            <div className="company-stat">
              <span className="stat-label">Cash Runway</span>
              <span className="stat-val warning">14.5 mo</span>
            </div>
            <div className="company-stat">
              <span className="stat-label">Site-7 Status</span>
              <span className="stat-val critical">SUSPENDED</span>
            </div>
            <div className="company-stat">
              <span className="stat-label">Cascade Drive</span>
              <span className="stat-val warning">Under Review</span>
            </div>
            <div className="company-stat">
              <span className="stat-label">Competitor Gap</span>
              <span className="stat-val ok">~6 months ahead</span>
            </div>
          </div>

          <div className="widget">
            <div className="widget-title">Hot Discussions</div>
            <NavLink to="/post/speed-culture-question" style={{ display: 'block' }}>
              <div className="trending-post">
                <span className="trending-num">↑ 687</span>
                <span className="trending-title">Does Perihelion have a speed problem?</span>
              </div>
            </NavLink>
            <NavLink to="/post/ceo-state-of-perihelion" style={{ display: 'block' }}>
              <div className="trending-post">
                <span className="trending-num">↑ 412</span>
                <span className="trending-title">CEO: Where We Stand — Honestly</span>
              </div>
            </NavLink>
            <NavLink to="/post/site7-independent-review" style={{ display: 'block' }}>
              <div className="trending-post">
                <span className="trending-num">↑ 445</span>
                <span className="trending-title">Site-7 Independent Safety Review</span>
              </div>
            </NavLink>
            <NavLink to="/post/elara7-results" style={{ display: 'block' }}>
              <div className="trending-post">
                <span className="trending-num">↑ 289</span>
                <span className="trending-title">Elara-7: Phase-3 anomaly explained</span>
              </div>
            </NavLink>
          </div>
        </aside>
      </div>
    </div>
  )
}
