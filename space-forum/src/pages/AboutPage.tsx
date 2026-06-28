import { COMPANY, USERS } from '../data'

const LEADERSHIP_ORDER = ['nadia', 'felix', 'marcus', 'astrid', 'calloway', 'yui', 'priya', 'dario', 'simone']

const TIMELINE = [
  { date: 'Mar 2019', event: 'Perihelion Dynamics founded', note: 'Austin, TX. Seed round: $12M.', status: 'done' },
  { date: 'Jan 2021', event: 'Series B — $420M', note: 'Cascade Drive concept proven in lab.', status: 'done' },
  { date: 'Aug 2022', event: 'First Helix launch vehicle test', note: 'Suborbital. Partial success — stage 2 anomaly.', status: 'done' },
  { date: 'Nov 2023', event: 'Series D — $2.1B', note: 'Valuation: $18B. Ares-1 mission officially announced.', status: 'done' },
  { date: 'Apr 2024', event: 'Helix-3 full orbital qualification', note: '120 MT LEO capacity confirmed. Sentinel-7 contract signed.', status: 'done' },
  { date: 'Feb 2025', event: 'Site-7 Incident — Boca Chica', note: '2 injuries. Site suspended. Independent review commissioned.', status: 'blocked' },
  { date: 'Jun 2025', event: 'Calloway Review complete', note: 'Board deliberating 18-month vs. 6-month delay options.', status: 'active' },
  { date: 'Q3 2025', event: 'Timeline decision expected', note: 'Board vote pending working group output.', status: 'pending' },
  { date: 'Q4 2025', event: 'Elara-7 Phase-3 retest (planned)', note: '30-day campaign. Anomaly investigation.', status: 'pending' },
  { date: 'Q2 2026', event: 'Crew selection final round', note: '4 crew + 2 backups for Ares-1.', status: 'pending' },
  { date: 'Q1 2027', event: 'Crew training begins', note: 'Integrated mission simulation phase.', status: 'pending' },
  { date: 'Nov 2027', event: 'Ares-1 — Mars launch window opens', note: 'T-498 days. 78-day optimal corridor.', status: 'pending' },
]

export default function AboutPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Perihelion Dynamics</h1>
        <p className="page-subtitle">{COMPANY.tagline}</p>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, rgba(59,110,240,0.08), rgba(124,58,237,0.08))',
        border: '1px solid rgba(59,110,240,0.2)',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '28px',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {[
            { label: 'Founded', value: COMPANY.founded },
            { label: 'Employees', value: COMPANY.employees.toLocaleString() },
            { label: 'Total Funding', value: COMPANY.funding },
            { label: 'Headquarters', value: COMPANY.hq },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ fontSize: '10px', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', fontWeight: 700 }}>
                {label}
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', fontFamily: 'JetBrains Mono, monospace' }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(59,110,240,0.15)' }}>
          <div style={{ fontSize: '10px', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', fontWeight: 700 }}>
            Facilities
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {COMPANY.facilities.map(f => (
              <span key={f} style={{
                fontSize: '12px',
                color: 'var(--text2)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border)',
                padding: '4px 12px',
                borderRadius: '6px',
              }}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px' }}>
        <div style={{ gridColumn: 'span 2' }}>
          <div className="about-card">
            <div className="about-card-title">Mission Statement</div>
            <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.7' }}>
              Perihelion Dynamics was founded in 2019 with a single mission: to make crewed Mars exploration a commercial reality before the end of this decade.
              Our Cascade Drive propulsion technology represents a 340% efficiency improvement over existing chemical propulsion systems, reducing Mars transit time from
              6–9 months to 18–21 days. The Ares-1 mission targets the November 2027 launch window for humanity's first crewed Mars landing, with a 14-day surface
              mission at Jezero Crater followed by return to Earth orbit.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.7', marginTop: '12px' }}>
              As of June 2025, Perihelion is navigating a pivotal period: the Boca Chica Site-7 incident in February 2025 triggered an independent safety review
              and board deliberations on mission timeline. The company's financial runway, competitive positioning, and the technical questions raised by the
              Elara-7 test campaign are all feeding into a decision expected in Q3 2025 that will determine whether Ares-1 proceeds on the November 2027 window.
            </p>
          </div>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-card" style={{ gridColumn: 'span 2' }}>
          <div className="about-card-title">Key Technologies</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              {
                name: 'Cascade Drive',
                desc: 'Ion propulsion architecture achieving 340% efficiency over chemical alternatives. 19-day Mars transit at 85% efficiency. Under active review following Elara-7 Phase-3 anomaly.',
                status: 'UNDER REVIEW',
                statusColor: 'var(--gold)',
              },
              {
                name: 'Helix-3 Launch Vehicle',
                desc: '3-stage fully reusable rocket. 120 MT LEO capacity. Qualified Q2 2024. Powers Sentinel-7 commercial contracts and will carry Ares-1 payload.',
                status: 'OPERATIONAL',
                statusColor: 'var(--green)',
              },
              {
                name: 'PHALANX Habitat',
                desc: 'Modular Mars surface habitat system. v3.2 in development. CO₂ scrubber redundancy gap identified — under resolution. Targets TRL-7 qualification.',
                status: 'IN DEV',
                statusColor: 'var(--gold)',
              },
              {
                name: 'ARGUS Navigation',
                desc: 'Autonomous surface navigation AI for Mars operations. Handles 19-minute communication delay by enabling crew-independent mission planning and obstacle avoidance.',
                status: 'TRL-5',
                statusColor: 'var(--mission)',
              },
            ].map(tech => (
              <div key={tech.name} style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '14px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>{tech.name}</span>
                  <span style={{
                    fontSize: '9px',
                    fontWeight: 700,
                    color: tech.statusColor,
                    border: `1px solid ${tech.statusColor}40`,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    letterSpacing: '0.5px',
                  }}>{tech.status}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text2)', lineHeight: '1.5' }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-title">Leadership Team</div>
          <div className="profile-list">
            {LEADERSHIP_ORDER.map(id => {
              const user = USERS[id]
              if (!user) return null
              return (
                <div key={id} className="profile-item">
                  <div
                    className="avatar avatar-md"
                    style={{ background: user.avatarColor }}
                  >
                    {user.initials}
                  </div>
                  <div className="profile-info">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className="profile-name">{user.name}</span>
                      <span className={`clearance-badge clearance-${user.clearance}`}>
                        {user.clearance.toUpperCase()}
                      </span>
                    </div>
                    <div className="profile-role">{user.role}</div>
                    <div className="profile-bio">{user.bio.slice(0, 120)}…</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-title">Mission Timeline — Ares-1</div>
          <div className="mission-timeline">
            {TIMELINE.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className={`timeline-dot ${item.status}`} />
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-event">{item.event}</div>
                <div className="timeline-note">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-card" style={{ marginBottom: '20px' }}>
        <div className="about-card-title">Current Situation — Case Summary</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            {
              title: 'The Safety Question',
              icon: '🛡️',
              color: 'var(--safety)',
              body: 'The February 2025 Site-7 incident led to an independent safety review identifying a systemic "schedule-driven risk normalization" pattern (Finding 3.4). The board is considering an 18-month delay to Ares-1.',
            },
            {
              title: 'The Technical Question',
              icon: '⚙️',
              color: 'var(--engineering)',
              body: 'A 0.8-second magnetic containment fluctuation in the Cascade Drive\'s Phase-3 deep-space cruise simulation remains unexplained. A 30-day Phase-3 retest is required before crew certification can proceed.',
            },
            {
              title: 'The Commercial Question',
              icon: '📈',
              color: 'var(--commercial)',
              body: 'The Meridian Group has offered $2.3B for exclusive Cascade Drive military satellite licensing. The deal would solve runway concerns but raise questions about Perihelion\'s identity and the geopolitical implications of the tech transfer.',
            },
            {
              title: 'The Competitive Question',
              icon: '🚀',
              color: 'var(--mission)',
              body: 'Tianjin Aerospace Ventures is reportedly targeting crewed Mars orbit by Q2 2028 using chemical propulsion. An 18-month Perihelion delay would invert the strategic position from "first and permanent" to "second but scientific."',
            },
            {
              title: 'The Financial Question',
              icon: '◈',
              color: 'var(--leadership)',
              body: 'At $47M monthly burn, current cash ($680M) gives 14.5 months of runway. The 2027 mission requires ~$1.4B more. The 2030 mission would require ~$1.9B. A Series E in the current environment, after a public delay + safety incident, is uncertain.',
            },
            {
              title: 'The Culture Question',
              icon: '◎',
              color: 'var(--commons)',
              body: 'A post by a junior engineer asking if Perihelion has a "speed problem" became the most-endorsed discussion in NEXUS history. The response from leadership — open engagement rather than management — has itself become a case study in cultural transparency.',
            },
          ].map(item => (
            <div key={item.title} style={{
              background: 'var(--bg)',
              border: `1px solid ${item.color}30`,
              borderTop: `3px solid ${item.color}`,
              borderRadius: '8px',
              padding: '14px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{ fontSize: '16px' }}>{item.icon}</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: item.color }}>{item.title}</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text2)', lineHeight: '1.6' }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
