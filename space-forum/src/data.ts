export interface User {
  id: string;
  name: string;
  role: string;
  department: string;
  clearance: 'standard' | 'senior' | 'executive';
  initials: string;
  avatarColor: string;
  bio: string;
  joined: string;
}

export interface Board {
  id: string;
  name: string;
  description: string;
  emoji: string;
  accent: string;
  restricted?: boolean;
}

export interface Comment {
  id: string;
  authorId: string;
  body: string;
  timestamp: string;
  endorsements: number;
  replies?: Comment[];
}

export interface Post {
  id: string;
  boardId: string;
  authorId: string;
  title: string;
  excerpt: string;
  body: string;
  timestamp: string;
  endorsements: number;
  views: number;
  comments: Comment[];
  tags: string[];
  pinned?: boolean;
}

export const USERS: Record<string, User> = {
  nadia: {
    id: 'nadia',
    name: 'Dr. Nadia Vasquez',
    role: 'CEO & Co-Founder',
    department: 'Executive',
    clearance: 'executive',
    initials: 'NV',
    avatarColor: '#6366f1',
    bio: 'Former NASA Mission Commander (Apollo Next, Artemis III). Founded Perihelion in 2019 after 14 years at NASA. First woman to EVA beyond lunar orbit.',
    joined: 'March 2019',
  },
  felix: {
    id: 'felix',
    name: 'Felix Okonkwo',
    role: 'CTO & Co-Founder',
    department: 'Engineering',
    clearance: 'executive',
    initials: 'FO',
    avatarColor: '#0ea5e9',
    bio: 'Inventor of the Cascade Drive propulsion architecture. PhD in Plasma Physics, MIT. Former lead at Ad Astra Rocket Company. Holds 23 patents in ion propulsion.',
    joined: 'March 2019',
  },
  marcus: {
    id: 'marcus',
    name: 'Marcus Chen',
    role: 'CFO',
    department: 'Finance',
    clearance: 'executive',
    initials: 'MC',
    avatarColor: '#10b981',
    bio: 'Former Managing Director at Goldman Sachs Aerospace & Defense practice. Joined Perihelion in 2021 to lead Series B. Architect of the current capital structure.',
    joined: 'January 2021',
  },
  astrid: {
    id: 'astrid',
    name: 'Dr. Astrid Lehmann',
    role: 'Chief Mission Officer',
    department: 'Mission Planning',
    clearance: 'executive',
    initials: 'AL',
    avatarColor: '#f59e0b',
    bio: 'Former ESA Mission Director (ExoMars 2028). Designed the Ares-1 mission architecture. Expert in interplanetary trajectory optimization and crew selection methodology.',
    joined: 'August 2020',
  },
  calloway: {
    id: 'calloway',
    name: 'Dr. James Calloway',
    role: 'Head of Safety (Independent)',
    department: 'Safety & Compliance',
    clearance: 'senior',
    initials: 'JC',
    avatarColor: '#ef4444',
    bio: 'External appointment following Site-7 incident. Former NASA Chief Safety Officer. Led Columbia and Challenger post-incident review teams. Not an employee — reports directly to the Board.',
    joined: 'March 2025',
  },
  yui: {
    id: 'yui',
    name: 'Dr. Yui Tanaka',
    role: 'Chief Science Officer',
    department: 'Science Division',
    clearance: 'senior',
    initials: 'YT',
    avatarColor: '#a855f7',
    bio: 'Planetary geologist. Former PI on Mars Reconnaissance Orbiter science team. Authored the Ares-1 scientific objectives framework. Specialty: Martian subsurface hydrology.',
    joined: 'February 2021',
  },
  priya: {
    id: 'priya',
    name: 'Priya Subramaniam',
    role: 'VP Engineering',
    department: 'Engineering',
    clearance: 'senior',
    initials: 'PS',
    avatarColor: '#f97316',
    bio: 'Systems engineering lead for Helix launch vehicle. Previously at SpaceX (Falcon 9 structural team) and Northrop Grumman. Known for the "no margin on margins" engineering philosophy.',
    joined: 'June 2020',
  },
  dario: {
    id: 'dario',
    name: 'Dario Espinoza',
    role: 'Chief Commercial Officer',
    department: 'Commercial',
    clearance: 'senior',
    initials: 'DE',
    avatarColor: '#06b6d4',
    bio: 'Built the Perihelion commercial launch business from zero to $340M ARR. Former Virgin Galactic SVP. Negotiated the Sentinel-7 constellation contract.',
    joined: 'October 2021',
  },
  simone: {
    id: 'simone',
    name: 'Simone Beaumont',
    role: 'General Counsel',
    department: 'Legal',
    clearance: 'executive',
    initials: 'SB',
    avatarColor: '#84cc16',
    bio: 'Space law specialist. Former State Department advisor on the Artemis Accords. Key architect of Perihelion\'s IP protection strategy and the ongoing ITAR compliance framework.',
    joined: 'May 2021',
  },
  kai: {
    id: 'kai',
    name: 'Kai Morrison',
    role: 'Senior Mission Architect',
    department: 'Mission Planning',
    clearance: 'senior',
    initials: 'KM',
    avatarColor: '#3b82f6',
    bio: 'Lead architect for Ares-1 crew operations and surface mission profile. Former JAXA mission planner. Co-designed the autonomous surface navigation system (ARGUS).',
    joined: 'April 2021',
  },
  remy: {
    id: 'remy',
    name: 'Remy Duval',
    role: 'Senior Propulsion Engineer',
    department: 'Engineering',
    clearance: 'standard',
    initials: 'RD',
    avatarColor: '#ec4899',
    bio: 'Propellant systems specialist. Was present during the Site-7 incident and sustained injuries requiring 6 weeks medical leave. Returned to work March 2025. Expert in exotic fuel handling.',
    joined: 'November 2020',
  },
  zara: {
    id: 'zara',
    name: 'Zara Al-Rashid',
    role: 'Flight Systems Lead',
    department: 'Engineering',
    clearance: 'senior',
    initials: 'ZA',
    avatarColor: '#14b8a6',
    bio: 'Avionics and life support systems architect. Designed the PHALANX habitat control systems. Former Boeing 787 systems engineer. Holds FAA Commercial Pilot Certificate.',
    joined: 'September 2020',
  },
  owen: {
    id: 'owen',
    name: 'Owen Park',
    role: 'Systems Engineer, L3',
    department: 'Engineering',
    clearance: 'standard',
    initials: 'OP',
    avatarColor: '#78716c',
    bio: 'Joined Perihelion directly from MIT Systems Engineering program in 2023. Works on PHALANX integration. Turned down offers from SpaceX, Blue Origin, and Lockheed.',
    joined: 'July 2023',
  },
};

export const BOARDS: Board[] = [
  {
    id: 'mission',
    name: 'Mission Planning',
    description: 'Ares-1 architecture, crew selection, trajectory analysis, and mission design debates',
    emoji: '🚀',
    accent: '#3b82f6',
  },
  {
    id: 'engineering',
    name: 'Engineering Lab',
    description: 'Technical specifications, test results, design reviews, and systems debates',
    emoji: '⚙️',
    accent: '#f97316',
  },
  {
    id: 'safety',
    name: 'Safety & Ethics',
    description: 'Post-incident reviews, safety culture, protocol changes, and ethics discussions',
    emoji: '🛡️',
    accent: '#ef4444',
  },
  {
    id: 'commercial',
    name: 'Commercial Hub',
    description: 'Revenue strategy, partnerships, licensing, and investor relations',
    emoji: '📈',
    accent: '#10b981',
  },
  {
    id: 'science',
    name: 'Science Division',
    description: 'Mars science objectives, data analysis, landing site selection, research proposals',
    emoji: '🔬',
    accent: '#a855f7',
  },
  {
    id: 'leadership',
    name: 'Leadership Circle',
    description: 'Executive-level strategy and board-facing discussions',
    emoji: '◈',
    accent: '#eab308',
    restricted: true,
  },
  {
    id: 'commons',
    name: 'The Commons',
    description: 'Company-wide discussion, culture, ideas, and everything that doesn\'t fit elsewhere',
    emoji: '◎',
    accent: '#64748b',
  },
];

export const POSTS: Post[] = [
  {
    id: 'ceo-state-of-perihelion',
    boardId: 'leadership',
    authorId: 'nadia',
    title: 'Where We Stand — Honestly',
    excerpt: 'A direct message to the company about the current situation, what the board is deliberating, and what I need from each of you in the next 60 days.',
    body: `I don't like managed messaging. You all know that. So I'm going to write this the way I'd say it in the all-hands if we weren't in the middle of a board deliberation that constrains what I can say publicly.

Here is where we are.

**The mission is not cancelled.** I want to say that clearly because I know the rumors circulating are worse than reality. Ares-1 is not cancelled. The board has asked for a formal proposal on timeline options before it makes any decision. That is the correct governance response to what happened at Site-7. I support it.

**The Calloway review is real, and the findings are serious.** I asked James to be blunt and independent, and he has been both. His executive summary is now on NEXUS. I expect you to read it — not just your own section, but the full document. If you feel defensive reading it, that's probably the part most worth sitting with.

**The Meridian conversation is not what people think it is.** Yes, The Meridian Group has approached us. Yes, it involves the Cascade Drive. The board has asked Marcus to prepare a framework document. That document is for analysis, not announcement. Nothing has been decided. I will say more when I can.

**What I need from you now.**

Astrid's proposal for a structured 6-month partial pause is on the Mission Planning board. Felix's Elara-7 data is on Engineering Lab. These are the two documents that should be consuming technical attention right now. If you have a substantive contribution to either debate, make it. NEXUS exists precisely for this.

We are 847 days from our November 2027 launch window. That number gets smaller every day we spend on anything other than solving the problems in front of us.

I founded this company because I believe the long-term survival of our species depends on becoming multi-planetary. That belief has not changed. What I know from 14 years at NASA is that the missions that go wrong are the ones where the urgency to go becomes indistinguishable from the urgency to *not look like we're not going.*

Those are different things. I need us to be honest about which one is driving us.

More soon.

— Nadia`,
    timestamp: '2025-06-16T08:47:00Z',
    endorsements: 412,
    views: 2847,
    pinned: true,
    tags: ['all-company', 'ares-1', 'site-7'],
    comments: [
      {
        id: 'c-ceo-1',
        authorId: 'astrid',
        body: 'Thank you for this, Nadia. I know how carefully you chose each word here. The distinction in your last paragraph is the one I\'ve been trying to articulate in my own post and haven\'t quite landed. You said it better. I\'ll be linking to it.',
        timestamp: '2025-06-16T09:12:00Z',
        endorsements: 89,
      },
      {
        id: 'c-ceo-2',
        authorId: 'remy',
        body: 'I appreciate this being on NEXUS and not in a town hall where we can\'t respond. I have things to say about the Calloway review. I\'ve been trying to find the right place and register to say them. I think that\'s the Safety board. I\'m working on something.',
        timestamp: '2025-06-16T09:38:00Z',
        endorsements: 156,
      },
      {
        id: 'c-ceo-3',
        authorId: 'felix',
        body: 'The Elara-7 data is up. The Phase 3 anomaly section is going to generate discussion. I want to get ahead of some of the interpretation before the non-engineers in the room start drawing their own conclusions from the summary charts.',
        timestamp: '2025-06-16T10:02:00Z',
        endorsements: 74,
      },
      {
        id: 'c-ceo-4',
        authorId: 'owen',
        body: 'I\'m a level-3 engineer and I know I don\'t have standing to comment on strategy. But I want to say: the fact that this message exists on NEXUS, publicly within the company, and that you\'re asking for substantive debate rather than alignment — that\'s why I\'m here and not somewhere else. Thank you.',
        timestamp: '2025-06-16T11:44:00Z',
        endorsements: 287,
        replies: [
          {
            id: 'c-ceo-4-r1',
            authorId: 'nadia',
            body: 'Owen, everyone has standing. That\'s the point.',
            timestamp: '2025-06-16T14:22:00Z',
            endorsements: 398,
          },
        ],
      },
    ],
  },

  {
    id: 'delay-case-against',
    boardId: 'mission',
    authorId: 'astrid',
    title: 'The Case Against 18 Months: Why the Ares-1 Timeline Isn\'t Just Ambition',
    excerpt: 'The board\'s proposed delay is being framed as the conservative option. I want to challenge that framing directly, with orbital mechanics, competitive analysis, and a specific alternative proposal.',
    body: `I've spent the past three weeks reviewing the board's proposed 18-month delay framework, and I want to be direct with the people who've dedicated years of their lives to this mission: **I believe the 18-month delay is not the conservative choice it's being framed as. It is, in fact, the riskier one.**

---

## The Math We're Not Talking About

The November 2027 Earth-Mars transfer window gives us a 78-day optimal corridor with the Cascade Drive operating at 85% efficiency. That mission profile — 19-day transit, 14-day surface, 19-day return — is the architecture this entire company has been built around for four years.

The next available window is January 2030. And here's what the delay advocates aren't putting in their slides:

- Mars reaches near-aphelion proximity in 2030, increasing transit time to **31 days** even at full Cascade efficiency
- Consumables mass increases by **42%** (0.7 metric tons additional per crew member)
- The Helix-3 fairing diameter cannot accommodate this payload increase without a **complete payload bay reengineering** — estimated at 14 months and $340M

We are not talking about pushing the same mission 18 months later. We are talking about redesigning a substantial portion of it, at enormous cost, while explaining to our investors why we need another $340M after just raising Series D.

---

## The Competitive Dimension

I'm going to say out loud what we're all thinking.

Tianjin Aerospace Ventures' reported timeline puts crewed Mars orbit in **Q2 2028** at the earliest, based on the public statements from CNSA's commercial affairs office and the trajectory modeling our science team has done from publicly visible launch cadence data.

Their transit architecture remains chemical propulsion. Any crew they send will arrive after a 190-day transit with significant physiological degradation and limited initial surface capability. They will plant a flag on a planet they cannot yet safely inhabit.

An 18-month delay from us doesn't close that gap. It inverts our strategic position from **"Perihelion lands first and stays"** to **"Perihelion lands later but scientifically"** — which is the kind of framing that sounds good to scientists and terrible to the sovereign wealth funds in our cap table.

I'm not saying the competitive race should override safety. I am saying the competitive context should be visible when we model the costs of delay.

---

## What I'm Actually Proposing

I am not suggesting we ignore the Calloway findings. The Site-7 incident was serious and the systemic findings deserve systemic responses.

But "fix the systemic issues AND delay 18 months" treats the delay as free. It isn't.

**My proposal:** A targeted 6-month structured pause on Cascade Drive fuel loading procedures only, concurrent with an accelerated PHALANX habitat qualification campaign that doesn't require the Cascade system. We use that window to:

1. Implement all 7 of Calloway's Tier-1 protocol changes
2. Complete the PHALANX v3.2 habitat qualification to TRL-7
3. Advance crew selection from candidate pool of 12 to primary crew of 4 + backups
4. Rebuild the fuel loading sequence from scratch with the new safety architecture

I've spoken informally with Felix and Priya. They believe this is technically feasible — though Felix has caveats about the Phase-3 anomaly that he'll need to address separately.

The question isn't whether we take safety seriously. It's whether we understand that delay itself carries risk — to the mission, to this company, and to the 847 people who chose Perihelion over a hundred easier paths.

I'm requesting a formal working group before the board makes its final decision. I believe we owe the data that conversation.

— *Astrid Lehmann, Chief Mission Officer*`,
    timestamp: '2025-06-16T11:00:00Z',
    endorsements: 203,
    views: 1842,
    tags: ['ares-1', 'timeline', 'board-decision', 'cascade-drive'],
    comments: [
      {
        id: 'c-delay-1',
        authorId: 'marcus',
        body: `Astrid, I support convening the working group you're proposing — though I want to be transparent about my reasoning, which is different from yours.

The 2030 window math is correct and I've been making the same case to the board from a financial angle. Our current burn rate doesn't support a 2030 mission without raising another round, and doing that raise after a 18-month public delay announcement, in this rate environment, would be extraordinarily difficult.

What I want the working group to model carefully: whether a 6-month partial pause is actually credible to the board and our insurance underwriters as a safety response, or whether it reads as a timeline-motivated minimum. Calloway's team will have a view on that. It should be on the table early.`,
        timestamp: '2025-06-16T12:15:00Z',
        endorsements: 98,
      },
      {
        id: 'c-delay-2',
        authorId: 'calloway',
        body: `Dr. Lehmann — I appreciate that you've engaged directly with my findings rather than around them. Let me do the same.

My concern with the 6-month partial pause is not the timeline itself. It's the premise that the Cascade Drive fuel loading protocols can be safely isolated from the broader systemic issues I identified.

Finding 3.4 in my report (which I'd ask everyone to read before this discussion goes further) identified a **decision-making pattern** — not just a procedural failure. The fuel loading incident was the proximate cause of Site-7. The root cause was a culture in which schedule pressure consistently resulted in risk assessments being finalized before relevant engineering objections were fully aired.

You can rewrite fuel loading protocols in 6 months. Changing that pattern takes longer, and the pattern affects every system, not just propulsion.

I am not opposed to a working group. I think the proposal deserves serious technical modeling. I'm only cautioning against a process that treats the 18-month figure as the problem to be solved rather than the recommendation to be evaluated on its merits.`,
        timestamp: '2025-06-16T13:45:00Z',
        endorsements: 167,
        replies: [
          {
            id: 'c-delay-2-r1',
            authorId: 'astrid',
            body: 'James — Finding 3.4 is the one I keep returning to as well. You\'re right that it\'s not just the fuel loading sequence. I want to be honest: I\'m not sure a 6-month pause fully addresses it either. What I\'m trying to avoid is an 18-month delay that doesn\'t address it either, but costs us the window. Can we get your team to define what a credible cultural intervention actually looks like on a timeline, so we\'re arguing about specifics rather than durations?',
            timestamp: '2025-06-16T14:30:00Z',
            endorsements: 134,
          },
          {
            id: 'c-delay-2-r2',
            authorId: 'calloway',
            body: 'That\'s a fair ask. I\'ll have something by end of next week.',
            timestamp: '2025-06-16T14:47:00Z',
            endorsements: 88,
          },
        ],
      },
      {
        id: 'c-delay-3',
        authorId: 'felix',
        body: `The 6-month targeted pause is technically feasible. I want to be clear about that.

What I need Astrid's working group to grapple with: the Phase-3 anomaly I've described in the Engineering Lab post isn't just an anomaly. It's a data point that currently has no satisfying explanation. We can proceed without understanding it — engineers make that call all the time — but Calloway's finding 3.4 is precisely about the culture of proceeding without satisfying explanations.

I am not saying we need 18 months. I am saying the Phase-3 question should be answered before we commit to any specific timeline. We might get that answer in 6 weeks. We might not get it in 6 months. I don't know yet, and anyone who tells you they do know is guessing.`,
        timestamp: '2025-06-16T15:10:00Z',
        endorsements: 211,
      },
      {
        id: 'c-delay-4',
        authorId: 'nadia',
        body: 'Working group formally authorized. Astrid leads. Felix, James, Priya, Marcus — please confirm participation. First session within 5 days. Output: a structured options analysis with timeline scenarios and cost implications for each. Board presentation in 3 weeks.',
        timestamp: '2025-06-16T17:00:00Z',
        endorsements: 334,
      },
    ],
  },

  {
    id: 'elara7-results',
    boardId: 'engineering',
    authorId: 'felix',
    title: 'Elara-7 Campaign: Full Performance Data and the Phase-3 Anomaly',
    excerpt: 'Complete test results from the Elara-7 Cascade Drive campaign, including the 340% efficiency numbers everyone wants to quote — and the Phase-3 data everyone should be worried about.',
    body: `The full Elara-7 dataset is now released to engineering staff (Classification: INTERNAL — NEXUS only, do not forward externally or discuss with press).

This post is the narrative companion. The raw data package is in the Engineering Lab data room: **ELR-7/FULL-DATASET-v2.1**. I'd ask everyone to read this before drawing conclusions from the summary charts.

---

## What Went Right

The numbers people keep quoting in hallways are accurate. Under full operational conditions, the Cascade Drive achieved **340% fuel efficiency improvement** over the best available chemical propulsion architecture for the Ares-1 mission profile.

More specifically:
- **Phase 1 (Low-thrust activation):** 99.2% of nominal performance. Textbook.
- **Phase 2 (Sustained burn, 72-hour simulation):** 97.8% of nominal. Minor thrust vector oscillation at hour 41, self-corrected. Logged, not concerning.
- **Phase 4 (High-thrust Mars orbit insertion simulation):** 101.3% of nominal. Actually exceeded projections. The plasma containment field stability at these pressures was better than our models predicted.

The Elara-7 data, taken together, represents a mature propulsion architecture operating at or above design specifications. If you only read Phase 1, 2, and 4, you'd be justified in feeling very good about this engine.

---

## Phase 3. The Part We Need to Talk About.

Phase 3 of the Elara-7 campaign simulated the **deep-space cruise phase**: sustained low-level thrust at 12% power over a simulated 19-day transit.

At 11 days, 14 hours, 22 minutes into the Phase-3 burn, the plasma diagnostics logged a **non-repeating magnetic containment fluctuation** lasting 0.8 seconds. The event was self-correcting and had no measurable effect on thrust output. Performance remained at 98.6% nominal throughout.

The event is in the logs. It is not in the summary report that was shared with the board last month. It was not omitted intentionally — it was classified as a "Tier-3 diagnostic event" under our standard telemetry triage protocol, which routes sub-second self-correcting anomalies to the engineering log queue rather than the report narrative.

**I am flagging it here because I believe the triage classification was wrong.**

A 0.8-second magnetic containment fluctuation in a plasma drive, in deep space, 11 days from the nearest human assistance, is not a Tier-3 event. I don't know what it is. That's the problem.

Our working theory is harmonic resonance between the containment field generator and the spacecraft's power management system at the specific power draw profile of deep-space cruise. We have a simulation model for this and the model fits the observed data. The simulation also predicts the event would not recur under the same conditions. But a simulation fitting a single data point is not a satisfying explanation.

**What we need:** A Phase-3 rerun, extended to 30-day transit simulation, with enhanced plasma diagnostics at 5x standard resolution throughout. That campaign takes approximately 10–14 weeks.

I want to know what that fluctuation was before we put crew behind this engine. Anything less than knowing would require me to make a confidence-versus-schedule trade that I'm not comfortable making.

I'm aware of the timeline implications. Astrid and I have discussed them. The working group will need to model them.

**Questions, challenges, and pushback welcome.** This is exactly what NEXUS is for.

— *Felix Okonkwo, CTO*`,
    timestamp: '2025-06-16T10:15:00Z',
    endorsements: 289,
    views: 1647,
    tags: ['cascade-drive', 'elara-7', 'test-data', 'phase-3-anomaly', 'ares-1'],
    comments: [
      {
        id: 'c-felix-1',
        authorId: 'priya',
        body: `Felix — I want to address the triage classification question directly because my team made that call.

The Tier-3 classification was made by our telemetry lead (Anjali, who's on NEXUS — hi Anjali) based on the literal definition in the protocol: sub-second, self-correcting, no mission-parameter impact. By the letter of the protocol, it was correct.

By the spirit of what we're trying to do with that protocol? I think Felix is right. We need a review of the triage thresholds specifically for anomalies in plasma containment systems. The protocol was designed for conventional avionics. The Cascade Drive is not a conventional system and we've been applying conventional diagnostics to it. I'll own that.

On the technical substance: the harmonic resonance hypothesis is plausible. I'd add a second hypothesis worth testing — thermal cycling interaction between the containment field coils and the spacecraft bus during the cruise phase low-draw period. The power management logs from Phase 3 show a minor thermal oscillation cycle at the same frequency as the anomaly event. Might be coincidence. Probably worth 2 weeks of simulation before we run the 30-day retest.`,
        timestamp: '2025-06-16T11:30:00Z',
        endorsements: 143,
      },
      {
        id: 'c-felix-2',
        authorId: 'remy',
        body: `I've been going through the Phase-3 logs since Felix's post. Two things.

First, the thermal cycling hypothesis Priya mentions: the timestamps align within 3 seconds of the containment fluctuation. That's not coincidence. I'd put high confidence on thermal interaction as the mechanism, which actually makes me less worried — thermal dynamics in the containment coils are manageable through active thermal regulation, which we already have architecture for.

Second, and this is important: the power management profile during Phase-3 was running in "cruise optimization mode," which was a last-minute software change made 48 hours before the campaign started. That change wasn't in the original test plan and I don't believe it was reviewed by the full systems team. If thermal interaction is the mechanism, we need to understand whether it only emerges in cruise optimization mode or in all deep-space transit profiles.

I'll write up the full analysis. Give me 3 days.`,
        timestamp: '2025-06-16T13:00:00Z',
        endorsements: 201,
        replies: [
          {
            id: 'c-felix-2-r1',
            authorId: 'felix',
            body: 'Remy — the software change. I didn\'t know about it. Who approved the last-minute modification to the cruise optimization profile? I need that answer today.',
            timestamp: '2025-06-16T13:18:00Z',
            endorsements: 89,
          },
          {
            id: 'c-felix-2-r2',
            authorId: 'priya',
            body: 'I\'m looking into this now. Stand by.',
            timestamp: '2025-06-16T13:24:00Z',
            endorsements: 44,
          },
          {
            id: 'c-felix-2-r3',
            authorId: 'priya',
            body: 'Found it. The cruise optimization mode change was approved in a 6-person engineering review on April 11th. Standard ECR process. But it was classified as a "software configuration update" rather than a "test profile modification," which meant it went through the software track and not the systems integration review track. The systems integration team didn\'t see it until after the campaign. This is a process gap. I\'m writing it up for Calloway.',
            timestamp: '2025-06-16T14:55:00Z',
            endorsements: 178,
          },
        ],
      },
      {
        id: 'c-felix-3',
        authorId: 'zara',
        body: `Felix, two questions for the working group.

If the 30-day Phase-3 retest finds similar anomalies at the same rate (one per ~11 days), what is the go/no-go threshold? One occurrence per mission is different from one occurrence per 11 days across a 19-day transit — the latter gives us ~1.7 expected events. Is there a version of this where we proceed with active thermal regulation mitigation and enhanced in-flight monitoring?

Also: the crew module sits 6.2 meters from the containment array in the current configuration. What's the radiation exposure implication of a containment fluctuation event at that proximity, even a sub-second self-correcting one? I don't see that modeled anywhere in the Elara-7 package.`,
        timestamp: '2025-06-16T14:05:00Z',
        endorsements: 176,
        replies: [
          {
            id: 'c-felix-3-r1',
            authorId: 'felix',
            body: 'Zara — the radiation modeling question is the right question and I don\'t have a good answer for you. Adding it to the Phase-3 retest requirements list. The go/no-go threshold question is one for the working group and ultimately for Astrid and Nadia, not engineering. But I want engineering to define what data would allow that threshold to exist at all before the working group starts trying to negotiate one.',
            timestamp: '2025-06-16T15:30:00Z',
            endorsements: 133,
          },
        ],
      },
      {
        id: 'c-felix-4',
        authorId: 'calloway',
        body: `Felix, I want to acknowledge two things publicly.

First: flagging the Phase-3 anomaly on NEXUS, explicitly naming that the triage classification was wrong, and asking for challenge and pushback — that is exactly the kind of behavior my review identified as systematically insufficient in the run-up to Site-7. I don't want it to pass without notice.

Second: the last-minute software configuration change that Priya identified is not a new pattern. It is the same pattern, applied to a different system. I'll be including it in my supplementary findings. This is not an accusation — it's data about how decisions get made here, and it's important data.

Remy's write-up is going to be important. I'd like to be included when it's ready.`,
        timestamp: '2025-06-16T16:00:00Z',
        endorsements: 224,
      },
    ],
  },

  {
    id: 'site7-independent-review',
    boardId: 'safety',
    authorId: 'calloway',
    title: 'Boca Chica Site-7 — Independent Safety Review: Executive Summary',
    excerpt: 'The findings of the independent safety review commissioned by the board following the February 2025 propellant loading incident. Read before commenting on any timeline discussion.',
    body: `*This document is the executive summary of the Independent Safety Review of the Perihelion Dynamics Boca Chica Site-7 Incident, commissioned by the Board of Directors on February 28, 2025. The full 214-page report is available in the Safety & Compliance data room. I am posting this summary on NEXUS because the board and Nadia have agreed that transparency within the company serves the goal of cultural change better than restricted distribution.*

*— Dr. James Calloway*

---

## Incident Summary

On February 19, 2025, at 14:37 CST, during a propellant loading procedure for the Cascade Drive Phase-2 validation campaign at Site-7, a seal failure in the primary xenon-fluoride oxidizer line resulted in a vapor release. Ignition of the vapor with ambient residual propellant caused a pressure event (classified: deflagration, not detonation) that injured two personnel: Senior Propulsion Engineer Remy Duval (hospitalized, lacerations and burns to left forearm and face, 6 weeks recovery) and contractor technician Marcus Webb (permanent partial hearing loss, left ear, currently in litigation).

The incident was contained within Site-7's blast perimeter. No fatalities. No facility structural compromise. No environmental contamination beyond the immediate site.

---

## Proximate Cause

Failure of a Grade-4 xenon-fluoride compatible polymer seal in the primary oxidizer manifold. Post-incident analysis confirmed the seal had been installed 11 days prior (February 8th) following a routine manifold inspection. The seal was the correct specification for the application. The failure mode was stress cracking consistent with installation at the wrong torque specification.

Installation was performed by a contractor technician operating under direct supervision of site personnel. The torque specification used (62 ft-lbf) was from a previous-generation manifold schematic. The current manifold requires 78 ft-lbf. The current specification was in the updated procedure document. The updated procedure document was not the version present on the physical tablet used by the supervising technician at the time of installation.

---

## Root Cause Analysis

The review identified **three root causes**, none of which is the seal.

**Root Cause 1: Document Control Failure.** The procedure document on the site tablet was 14 months out of date. Our document control system does not require technician tablets to be online during procedure execution, and does not enforce version verification at procedure start. This is a system design failure.

**Root Cause 2: Supervision Gap.** The supervising technician — a Perihelion employee — verbally confirmed the torque value against the tablet display without cross-referencing the master procedure in the control system. Post-incident interviews suggest this was normal practice at Site-7, not an exception. A supervisory culture that accepts tablet display as authoritative for life-safety procedures is not an adequate supervisory culture.

**Root Cause 3: Schedule-Driven Risk Normalization (Finding 3.4).** This is the finding I consider most significant and most difficult to address.

In reviewing communications records, meeting notes, and conducting 47 interviews across engineering, operations, and management levels, the review identified a consistent and documented pattern: **when engineering concerns created schedule risk, the standard resolution path was to finalize risk assessments before all engineering objections were fully aired.**

This pattern appeared in at least 9 documented incidents between March 2023 and February 2025, none of which resulted in injury. Site-7 was the tenth. In each prior case, the outcome was acceptable. This created learned behavior that the pattern was safe.

It is not safe. It was fortunate.

The distinction matters because the 9 successful instances did not validate the pattern. They established it.

---

## Tier-1 Recommendations (Mandatory for Return to Operations)

1. Mandatory online document verification at procedure initiation for all life-safety procedures
2. Dual-authorization for all propellant loading procedures at or above 50% operational pressure
3. Mandatory written engineering sign-off on all risk assessments, with a minimum 48-hour period for objections to be registered before finalization
4. Termination of the document control system's offline-execution mode for life-safety procedures
5. Re-training of all Site-7 personnel on current procedure documents before site re-activation
6. Independent quality audit of all procedure documents site-wide before re-activation
7. Establishment of a Safety Advisory Council with authority to pause operations and direct board-level reporting independent of management chain

---

## On the Timeline Question

I've been asked to comment on whether the board's proposed 18-month delay is necessary to address these findings.

My answer is: the Tier-1 technical recommendations can be implemented in 3–4 months. The schedule-driven risk normalization pattern (Finding 3.4) cannot be addressed in any specific timeframe because it is a cultural condition, not a procedural one.

I am not in a position to tell this board how long it takes to change a culture. I can tell it when specific behavioral markers that indicate cultural change are present, and I can design an ongoing monitoring program to track them. I'm working on that framework and will have it within two weeks.

What I will say: the 18-month figure in the board's current proposal was not derived from a bottoms-up analysis of what these specific recommendations require. It was derived from a general principle of caution, which is a legitimate starting point but not a complete answer. I support the proposal to model alternatives, as Dr. Lehmann has requested.

My one non-negotiable: no crewed mission element proceeds until all 7 Tier-1 recommendations are fully implemented and independently verified. That is not a timeline discussion. That is a precondition.

— *Dr. James Calloway*
*Independent Safety Review, Perihelion Dynamics*`,
    timestamp: '2025-06-15T09:00:00Z',
    endorsements: 445,
    views: 2847,
    tags: ['site-7', 'safety-review', 'finding-3.4', 'boca-chica', 'mandatory'],
    comments: [
      {
        id: 'c-safety-1',
        authorId: 'remy',
        body: `I was there. I need to say something about this document.

Everything James has written is accurate. I've read the full 214 pages. The technical description of what happened to me is accurate. The root cause analysis is accurate. Finding 3.4 is accurate, and I know it's accurate because I can name specific meetings where I sat quietly while a risk assessment was finalized over an objection I'd raised and not had answered.

What I want to say — because I think it matters for how people receive this document — is that I don't think any individual is the villain here. I was part of that culture. I participated in it. I have my own moments in those 47 interview transcripts that I'm not proud of.

I'm putting something separately on this board about what I think needs to happen from an engineering culture perspective, because I don't think the Tier-1 recommendations alone get us there. But I wanted to say first: read this. Actually read it. Don't just read your department's section.`,
        timestamp: '2025-06-15T10:30:00Z',
        endorsements: 387,
      },
      {
        id: 'c-safety-2',
        authorId: 'priya',
        body: 'The document control failure in Root Cause 1 is on me. My team owns document control. I\'ve already authorized the system changes required to enforce online verification at procedure initiation. That one can be done in 6 weeks, not 3-4 months — we\'ve already started. The harder part is Root Cause 2, which is a supervisory culture question that starts with me. I\'m taking it seriously.',
        timestamp: '2025-06-15T11:15:00Z',
        endorsements: 212,
      },
      {
        id: 'c-safety-3',
        authorId: 'nadia',
        body: 'The Safety Advisory Council in Tier-1 recommendation 7 will be chartered this week. Its independence from management is not negotiable. James, I\'d like you to propose the initial council composition.',
        timestamp: '2025-06-15T12:00:00Z',
        endorsements: 289,
      },
      {
        id: 'c-safety-4',
        authorId: 'simone',
        body: 'Legal note for the record: Marcus Webb\'s litigation is active and certain facts in this document may be discoverable. I\'ve reviewed it with outside counsel and we\'re comfortable with this level of disclosure internally, but please don\'t quote from or forward this document without checking with my office first. The transparency is the right call. The guardrails around it matter too.',
        timestamp: '2025-06-15T14:30:00Z',
        endorsements: 134,
      },
    ],
  },

  {
    id: 'meridian-framing',
    boardId: 'leadership',
    authorId: 'marcus',
    title: 'The Meridian Group Proposal — Framing This Decision Correctly',
    excerpt: 'A financial and strategic framework for the executive team\'s discussion of The Meridian Group\'s Cascade Drive licensing proposal. Not a recommendation — an analysis.',
    body: `This is written for the executive team and board. I'm putting it on NEXUS rather than in a closed document because Nadia has committed to transparency on this and I think that commitment should be honored, even when the conversation is uncomfortable.

The Meridian Group has offered **$2.3 billion** for exclusive licensing rights to the Cascade Drive propulsion architecture for military satellite applications over a 15-year term. The license would cover satellite propulsion only and explicitly excludes crewed mission applications. Perihelion would retain full rights to use the Cascade Drive for all human spaceflight and scientific mission purposes.

Here is the financial reality we have to start from.

---

## Our Current Position

- Cash position: $680M (post-Series D)
- Monthly burn at current operational tempo: $47M
- Ares-1 mission development remaining cost (Nov 2027 window): $1.4B
- Ares-1 mission development remaining cost (Jan 2030 window): $1.9B (includes reengineering for transit profile change)
- **Runway at current burn, no additional revenue: 14.5 months**

I want to be clear about what that last number means. We are not in immediate crisis. We have nearly 15 months of runway. But the Ares-1 mission cannot be completed within that runway without either: (a) additional equity raises, (b) significant new commercial revenue, or (c) an event like the Meridian offer.

Series E in the current environment is possible but not certain. Our valuation after a public delay announcement combined with a safety incident and a visible competitor advancing — that conversation with investors is not the one we had during Series D.

---

## What Meridian Actually Wants

I've spent 4 hours with their BD lead and their general counsel. A few things are clear:

The military application is satellite station-keeping and orbital transfer for classified constellation repositioning. This is entirely consistent with the license scope they're proposing — no crewed applications, no interplanetary missions.

The exclusivity in the satellite domain is a hard requirement for them. They will not accept a non-exclusive deal. The reason, which they were candid about: they are concerned that a non-exclusive license would allow Chinese commercial entities to eventually acquire the same capability. I don't have a good answer to whether that concern is valid or paranoid.

The $2.3B is structured as: $800M at signing, $500M at delivery of technical documentation and 90-day knowledge transfer, and $1B deferred over 8 years tied to their deployment milestones.

The $800M upfront solves our runway problem entirely and funds a substantial portion of Ares-1.

---

## What We'd Be Giving Up

Exclusivity in the military satellite market, for 15 years. That market is currently valued at approximately $12-18B over that period. Whether Perihelion would ever have captured a meaningful share of it is not clear — we've never pursued it and it wasn't in our roadmap. But we'd be foreclosing the option.

More importantly: the knowledge transfer clause requires us to provide Meridian with complete technical documentation including the Phase-3 anomaly data and any unresolved engineering questions. They will know everything we know about the Cascade Drive, including the things we don't yet understand.

Simone has flagged several ITAR considerations in the knowledge transfer that we haven't fully mapped yet. That analysis will take another 3-4 weeks.

---

## The Question I Can't Answer

Is this a sale of something we'll regret, or a transaction that lets us do what we actually exist to do?

$2.3B funds Ares-1 with margin. It probably funds Ares-2. It changes the company's financial position from "fragile at the mission horizon" to "capable."

But I built financial models for a living for 15 years before I came here. I know how these deals look in hindsight. The ones that look smart in year 1 of a 15-year exclusive tend to look very different in year 9.

I'm presenting this as a framework, not a recommendation. The question of whether to engage further with Meridian is above my pay grade — which is saying something — and should involve this full group before it goes to the board.

— *Marcus Chen, CFO*`,
    timestamp: '2025-06-14T16:00:00Z',
    endorsements: 178,
    views: 1203,
    tags: ['meridian', 'cascade-drive', 'licensing', 'board', 'financials'],
    comments: [
      {
        id: 'c-meridian-1',
        authorId: 'felix',
        body: `I'm going to be the one who says the thing no one else will say in writing.

If we sign a 15-year exclusive with a defense contractor that requires us to transfer complete technical documentation of the Cascade Drive, we become, in a meaningful sense, a defense contractor. The nature of who owns or controls our most important technology changes. The incentives around that technology's development change.

I don't know if that's wrong. I know it's different from why I built it.

I also know that a mission that doesn't happen because we ran out of money doesn't make Mars any more accessible than a mission that was never attempted. So I'm not saying no. I'm saying: the board should understand that a transaction with Meridian is not purely financial. It changes what Perihelion is.

I want Nadia to be the one to decide if that's acceptable, not the financial model.`,
        timestamp: '2025-06-14T17:30:00Z',
        endorsements: 302,
      },
      {
        id: 'c-meridian-2',
        authorId: 'simone',
        body: `Marcus, the ITAR analysis is underway but I want to flag one dimension that isn\'t purely legal: the knowledge transfer clause as currently drafted would require us to disclose ongoing unresolved technical questions, including anomalies. Once that information is in Meridian\'s possession, our ability to control how it\'s characterized — particularly in any future litigation or regulatory inquiry — is significantly constrained.

I am not recommending we hide technical issues. I am recommending we get clarity on what our disclosure obligations to Meridian would be regarding the Phase-3 anomaly *before* we proceed further with their BD team. The sequence matters.`,
        timestamp: '2025-06-14T18:15:00Z',
        endorsements: 145,
      },
      {
        id: 'c-meridian-3',
        authorId: 'nadia',
        body: `I want to say two things.

Felix: I hear you. I share the concern and it\'s part of why I\'ve been slow to engage with this. We\'ll have that conversation properly, with everyone in the room.

To everyone: I made a commitment to transparency on this. That commitment extends to the outcome of the discussion, not just the discussion itself. Whatever we decide, you\'ll know why.

No decision before the board meets. No further engagement with Meridian\'s BD team until Simone\'s ITAR analysis is complete.`,
        timestamp: '2025-06-14T19:00:00Z',
        endorsements: 234,
      },
    ],
  },

  {
    id: 'mars-landing-site',
    boardId: 'science',
    authorId: 'yui',
    title: 'Landing Site Final Recommendation: Jezero Crater — With Caveats That Are Not Small',
    excerpt: 'The science team\'s final recommendation on the Ares-1 primary landing site, and why the caveats in this document need to be in the mission briefing, not the appendix.',
    body: `After 18 months of analysis and a site selection workshop with the Mars science community, the Science Division is formally recommending **Jezero Crater (18.4°N, 77.7°E)** as the primary landing site for Ares-1.

This is not a unanimous recommendation. Dr. Patel and Dr. Osei both abstained in the final vote, and I want their reasoning on the record because I think it's important and I disagree with them in the wrong direction if I bury it.

---

## Why Jezero

The scientific case for Jezero is strong enough that I'll be brief, because you've heard it.

Jezero is a paleolake. We have orbital spectroscopy confirming phyllosilicate minerals — clay-forming minerals that only form in sustained liquid water environments — across the crater floor and the ancient river delta on the western rim. The Perseverance rover has been operating there since 2021 and its findings have confirmed, rather than undermined, the original selection rationale.

Biosignature potential at Jezero is, in the assessment of the external science review panel, **the highest of any identified Mars landing site from available data.** If microbial life existed on Mars during the Noachian or Hesperian period, Jezero is the place it would have been preserved.

The mission rationale for Ares-1 includes scientific return as a co-primary objective alongside establishing proof-of-concept for crewed surface operations. Jezero achieves both.

---

## The Caveats

**Terrain.** The Jezero delta is scientifically optimal and operationally challenging. Perseverance has spent 4 years navigating terrain that a crew will need to traverse on foot and in pressurized rovers. The delta scarps, rock field density, and uneven regolith make it the most operationally demanding site we considered.

Our terrain modeling team has identified a landing ellipse on the crater floor — 1.8km × 2.4km — that avoids the highest-risk terrain features. The crew will still need to traverse approximately 2.1km to reach the delta margin for prime sample collection. That traverse is manageable but requires mission time allocation that the current surface ops plan (see Kai's crew architecture discussion) has not fully accounted for.

**Dust.** Jezero sits in a region with above-average dust devil frequency and a documented tendency for regional dust storms in the Ls 180-270° solar longitude range. The current Ares-1 surface mission is planned for Ls 210-230°. This is not ideal.

Dr. Patel's abstention was specifically about the dust storm risk in combination with the terrain traverse requirements. Her argument: if we lose crew surface time to a dust event during the sampling campaign, the science return drops significantly and we have less margin to recover it than we would at a flatter site. She's right about the math. I disagree with her conclusion because the scientific case for Jezero outweighs the risk at the margin levels we're operating at — but "at the margin levels we're operating at" is doing a lot of work in that sentence, and the margin is thinner than I'm comfortable pretending it isn't.

**The alternative.** Hellas Basin was the second-ranked site. Lower scientific potential, significantly better terrain, lower dust risk, and — importantly — it's in the lowest-elevation terrain on Mars, which means the atmospheric pressure is measurably higher. Higher pressure helps certain surface operations and potentially reduces cosmic radiation exposure. Dr. Osei's abstention was a vote for Hellas over Jezero on risk profile grounds.

If the mission architecture changes significantly (timeline extension, reduced crew time budget, increased dust risk modeling), Hellas is worth reconsidering. I want that on the record.

---

## What I'm Asking For

The mission briefing documentation that goes to crew candidates, the board, and the public relations team should include these caveats at the same prominence as the Jezero selection rationale. Not in the appendix. Not in a technical annex.

The dust storm risk and terrain complexity are real features of this mission. The crew needs to know them. The board needs to understand them. And the communications team needs to not oversimplify them to the press, because the press will find out about the dust storm window eventually and "we knew and didn't mention it" is a much worse story than "we selected the site with full knowledge of these challenges."

I'll hold a Science Division briefing for the crew candidates whenever Kai's selection process is ready to proceed.

— *Dr. Yui Tanaka, Chief Science Officer*`,
    timestamp: '2025-06-13T14:00:00Z',
    endorsements: 156,
    views: 988,
    tags: ['jezero', 'landing-site', 'mars-science', 'ares-1', 'crew-safety'],
    comments: [
      {
        id: 'c-mars-1',
        authorId: 'kai',
        body: `Yui — thank you for putting the terrain traverse allocation issue in writing. I\'ve been flagging this in mission planning reviews for 8 months and it keeps getting pushed to "detailed design phase." The 2.1km delta margin traverse is 4-6 hours of crew EVA time depending on suit fatigue parameters, and the current surface ops plan has it as a 2-hour allocation.

I\'m opening a formal discrepancy report. This needs to be resolved before we finalize the surface ops plan, not after crew training has started.`,
        timestamp: '2025-06-13T15:20:00Z',
        endorsements: 129,
      },
      {
        id: 'c-mars-2',
        authorId: 'zara',
        body: 'The dust storm risk has life support implications I want to flag. Regional dust events at Ls 210-230° at Jezero can reduce solar panel efficiency by 30-60% depending on storm density. PHALANX v3.2\'s power budget for a 14-day surface stay assumes baseline solar input. I\'ll run the dust-degraded scenarios. There\'s a version of this where a Category 2 regional storm forces early abort from the surface, and I want the mission planning team to have the power budget model before they build contingency procedures.',
        timestamp: '2025-06-13T16:45:00Z',
        endorsements: 112,
      },
      {
        id: 'c-mars-3',
        authorId: 'astrid',
        body: 'Adding Yui\'s caveats formally to the Ares-1 mission risk register. This is exactly the kind of pre-mortem identification that Finding 3.4 requires us to get better at. The crew briefing documentation will include the dust storm window and terrain complexity — not in the appendix. Yui, I\'d like you to co-author that section.',
        timestamp: '2025-06-13T17:30:00Z',
        endorsements: 167,
      },
    ],
  },

  {
    id: 'speed-culture-question',
    boardId: 'commons',
    authorId: 'owen',
    title: 'Three Years, Two Injuries, One Question: Does Perihelion Have a Speed Problem?',
    excerpt: 'I\'m a level-3 engineer. I don\'t normally post things like this. But I\'ve been here long enough to notice something, and I think it needs to be said somewhere that isn\'t a performance review.',
    body: `I want to preface this by saying I almost didn't post it. I drafted it four times. Then I read Nadia's post this morning where she said "everyone has standing" and I decided to trust that.

I joined Perihelion in July 2023 straight out of MIT. I turned down SpaceX, Blue Origin, and Lockheed. I turned them down because Perihelion felt different — a place that was genuinely trying to do the hardest thing, not just the most profitable version of it. That belief is still here. I still feel it when I walk through the engineering bay. But I've been watching something for about eight months, and Site-7 has made me unable to keep watching it quietly.

---

**The thing I've noticed is this:**

When something needs to move faster, it gets framed as urgent and it moves faster.

When something needs to slow down — an engineering concern, a testing gap, a question that doesn't have a good answer yet — it gets framed as conservative, or as "we've discussed this," or sometimes just... not responded to in the thread and the decision moves on anyway.

I have seen this pattern. I've participated in it. I've sat in reviews where someone raised something and the meeting moved on because the timeline didn't have room for the thing being raised. I am not accusing specific people. I'm describing something that feels structural.

Here's my question, and I'm asking it in earnest because I don't know the answer:

**At what point does urgency become a self-justifying override of legitimate caution?**

We have a mission with a launch window and genuine competitive pressure. Those are real constraints. But we also have the finding that Dr. Calloway called "the most significant" in his 214-page report — the pattern of risk assessment finalization before engineering objections were fully aired. That's not the fault of the schedule. The schedule is what it is. The question is: what do we do when the schedule and the objection can't both be true?

I don't think Perihelion has a safety problem the way the Challenger or Columbia programs had safety problems. I don't think anyone here is reckless. What I think is that we have a lot of very smart, very committed people who believe so strongly in this mission that they have sometimes convinced themselves that an unanswered question is acceptable because it has been acceptable so far.

I'm writing this because I'm 24 years old and I have a long career ahead of me and I am genuinely afraid to be the engineer on the team that sent people to Mars knowing something wasn't answered. I'm also afraid to be on a team that had the chance to go and didn't because we let perfect be the enemy of possible.

I don't know how to hold both of those things. But I think we need to try.

— Owen Park, Systems Engineer, L3`,
    timestamp: '2025-06-16T20:00:00Z',
    endorsements: 687,
    views: 2847,
    tags: ['culture', 'safety', 'finding-3.4', 'mission-urgency'],
    comments: [
      {
        id: 'c-owen-1',
        authorId: 'remy',
        body: `Owen.

I was there at Site-7. I have burns on my forearm that are still finishing their last stage of healing. And everything you've written here is correct.

I've been trying to write something like this for three months and I couldn't figure out how to say it without it sounding like I was blaming specific people or wallowing in what happened to me. You said it without doing either.

Thank you. Really.`,
        timestamp: '2025-06-16T20:47:00Z',
        endorsements: 423,
      },
      {
        id: 'c-owen-2',
        authorId: 'calloway',
        body: `Mr. Park — I want to name what you did here precisely because it's the behavior my review says this company needs more of, not less.

You identified a pattern you were uncertain about. You considered the professional risk of saying it out loud. You said it anyway, in a place where it could be heard, with enough precision that it can be responded to rather than managed.

Finding 3.4 is about structural conditions that suppress exactly this. You just modeled the antidote.

I'd like to use an anonymized version of this post — not the author's name, just the substance — in the cultural intervention framework I'm developing. Only with your permission.`,
        timestamp: '2025-06-16T21:15:00Z',
        endorsements: 356,
        replies: [
          {
            id: 'c-owen-2-r1',
            authorId: 'owen',
            body: 'Dr. Calloway — you can use it. You don\'t need to anonymize it. I put my name on it deliberately.',
            timestamp: '2025-06-16T21:30:00Z',
            endorsements: 512,
          },
        ],
      },
      {
        id: 'c-owen-3',
        authorId: 'astrid',
        body: 'I\'ve been in this industry for 22 years. The two kinds of engineers I trust the most are the ones who are genuinely afraid of making a mistake, and the ones who are genuinely afraid of never trying. You are clearly both at once. That\'s not a contradiction — it\'s what mission work requires. Don\'t lose either one.',
        timestamp: '2025-06-16T22:00:00Z',
        endorsements: 489,
      },
      {
        id: 'c-owen-4',
        authorId: 'nadia',
        body: `Owen, I said on my post that everyone has standing. I meant it. But I want to be specific about what you did here, so it doesn't just float as a nice sentiment.

You named a structural pattern accurately. You owned your own role in it ("I've participated in it") rather than positioning yourself as an outside observer. You asked a question rather than issued an indictment. And you held the genuine tension — the fear of going with something unresolved AND the fear of not going at all — without resolving it falsely in either direction.

That is harder than it sounds. I don't always manage it. This conversation is going into the working group inputs.`,
        timestamp: '2025-06-17T07:30:00Z',
        endorsements: 634,
      },
      {
        id: 'c-owen-5',
        authorId: 'felix',
        body: 'I\'ve been at this company since day one. I invented the engine that put us in this position. And I\'ll tell you what I tell every engineer who joins us: the day you stop being uncomfortable about the unanswered questions is the day you become dangerous. Owen, you are not dangerous. Stay that way.',
        timestamp: '2025-06-17T08:15:00Z',
        endorsements: 578,
      },
    ],
  },

  {
    id: 'phalanx-co2-gap',
    boardId: 'engineering',
    authorId: 'zara',
    title: 'PHALANX v3.2 Life Support: The CO₂ Scrubber Redundancy Gap Cannot Ship',
    excerpt: 'Following the Elara-7 discussion, I need to raise a PHALANX issue that has been in the detailed design backlog for two months. The redundancy architecture for the primary CO₂ scrubber does not meet our stated safety margins for a 14-day surface mission.',
    body: `This is a formal engineering concern, posted publicly on NEXUS because I've raised it twice in design reviews and received acknowledgment but no resolution. Per the new safety culture commitments, I'm escalating to NEXUS rather than letting it continue in the design backlog.

**The issue:** PHALANX v3.2's primary CO₂ scrubber system (lithium hydroxide canisters, 8-hour cycle, 4-person crew) has a single-layer redundancy architecture. One primary system, one backup. If the backup fails, crew CO₂ exposure exceeds safe limits within approximately 4.5 hours.

**Our stated design requirement:** Two-layer redundancy (primary + two independent backups) for all life-critical systems, per the Ares-1 Mission Safety Requirements Document, Revision 4, Section 7.2.

**How we got here:** The second backup was descoped in the v3.1→v3.2 mass budget revision in April 2024. The descoping was approved as a "temporary cost-saving measure pending mass budget resolution." The mass budget has not been resolved. The descoping has been in place for 14 months.

**The math:** A 4.5-hour response window for a CO₂ event while on the Martian surface — 19 light-minutes from Earth — requires the crew to be able to independently identify, diagnose, and respond to a system failure without ground support in a timeframe that may not be achievable given suit don/doff procedures and the surface EVA timeline.

I am not saying PHALANX is unsafe in a nominal scenario. I am saying the redundancy gap creates a failure mode that we explicitly committed to designing out, and it is still in the design.

**What I'm requesting:** A formal discrepancy resolution meeting within 10 days, with engineering, mission planning, and safety representation. The options are: (a) restore the second backup and solve the mass budget problem, (b) formally revise the safety requirements with documented rationale, or (c) accept the current design with a formal risk acceptance signed by the appropriate authority. I am not accepting continued deferral.

If the mass budget is the blocker, that's a problem we need to solve — not a reason to leave a life safety gap undocumented and unresolved in a design that's heading toward crew certification review.

— *Zara Al-Rashid, Flight Systems Lead*`,
    timestamp: '2025-06-15T16:00:00Z',
    endorsements: 234,
    views: 1124,
    tags: ['phalanx', 'life-support', 'co2', 'redundancy', 'safety-critical'],
    comments: [
      {
        id: 'c-phalanx-1',
        authorId: 'priya',
        body: `Zara — you\'re right to escalate this and I apologize it took this to get a formal response.

The mass budget revision in April 2024 was made under pressure from the Schedule-C milestone and the second backup was identified as the lowest-risk descope at the time. The reasoning at the time: primary plus backup is industry standard for ISS systems, the crew would have contingency EVA procedures for a life support failure, and the mass savings (47kg) were significant for the orbital insertion budget.

What that reasoning missed: ISS crews have 0-delay communication with ground support. Ares-1 crews do not.

I'm convening the meeting you're requesting. 10 days, firm. In the meantime I'm flagging this to Calloway's team as an example of the Finding 3.4 pattern — a descoping decision made under schedule pressure where the risk acceptance wasn't formally documented at the right level. Zara, thank you for not letting this stay in the backlog.`,
        timestamp: '2025-06-15T17:30:00Z',
        endorsements: 189,
      },
      {
        id: 'c-phalanx-2',
        authorId: 'calloway',
        body: 'Priya, adding this to the supplementary findings documentation. Zara, this is exactly what Recommendation 3 in my Tier-1 list is designed to prevent going forward. The 48-hour written objection window before risk assessment finalization should have caught this in April 2024. It didn\'t, because that protocol didn\'t exist yet. Now it will.',
        timestamp: '2025-06-15T18:00:00Z',
        endorsements: 145,
      },
      {
        id: 'c-phalanx-3',
        authorId: 'astrid',
        body: 'The CO₂ redundancy gap is going into the working group risk register immediately. This is a crew safety issue that affects mission viability. Mass budget or not, option (a) is the only acceptable resolution. If the mass budget can\'t support the required safety architecture, that\'s the design constraint we need to solve, not the safety requirement.',
        timestamp: '2025-06-15T19:00:00Z',
        endorsements: 198,
      },
    ],
  },

  {
    id: 'crew-selection-criteria',
    boardId: 'mission',
    authorId: 'kai',
    title: 'Ares-1 Crew Selection: The Commander Criteria Need a Second Look',
    excerpt: 'We\'ve been applying a commander selection framework designed for ISS rotations to the first crewed Mars mission. I think we\'re selecting for the wrong set of qualities, and I want to make the case for revising the criteria before we enter the final selection round.',
    body: `Ares-1 crew selection enters its final round in approximately 60 days (timeline-dependent, obviously). Before we get there, I want to challenge one of the core assumptions in our commander selection framework.

The current commander criteria were developed in 2022 by adapting the NASA ISS mission commander framework, adjusted for mission duration and Perihelion's operational structure. The framework prioritizes, in order: prior mission command experience, EVA hours, mission emergency response training, and team coordination assessments.

**My concern:** All of these criteria were developed for an environment with continuous, low-latency communication with a mission control team. They select for someone who is excellent at integrating real-time ground support into decision-making under pressure.

The Ares-1 commander will operate with a **19-minute one-way communication delay** to Earth. The crew will make every critical decision themselves, without the possibility of real-time consultation. A 4.5-hour CO₂ event (see Zara's post) is resolved or not resolved by the crew before ground support can even receive the emergency transmission.

This isn't just a communication constraint. It fundamentally changes the profile of who should command.

---

## What the Research Suggests

I've spent the last six weeks reviewing the psychological and operational research on autonomous high-stakes decision-making in isolated, communication-constrained environments. The closest analogs are not previous space missions — they're Antarctic winter-over stations, submarine commanders during extended radio silence, and deep expedition leaders.

The pattern that emerges is consistent: in communication-constrained environments, the most effective commanders are not necessarily the most experienced mission operators. They are, with striking regularity, people with two specific characteristics that don't appear in our current criteria:

**1. Tolerance for sustained ambiguity without decision paralysis.** The ability to hold a problem open — to not resolve it prematurely — when more information is needed but unavailable. This is different from decision-making under pressure; it's the capacity to *not* decide when deciding would be premature.

**2. Explicit comfort with admitting uncertainty to the crew.** In communication-isolated environments, commanders who performed worst were those who maintained an authoritative front when uncertain. Crews in those environments consistently underperformed on contingency response because they had adapted to waiting for the commander to know the answer. Crews with commanders who said "I don't know yet" outperformed significantly.

Our current selection criteria assess neither of these. The emergency response simulations we use are all 90-minute scenarios with mock ground support available.

---

## What I'm Proposing

Two additions to the final-round commander assessment:

1. An extended 72-hour simulation with complete communication blackout, requiring the candidate to manage a realistic multi-system contingency with crew coordination but no ground support whatsoever.

2. An uncertainty tolerance assessment — not a personality test, but a structured interview protocol developed for this purpose, based on the Antarctic winter-over research.

I want to work with Astrid and our crew selection psychologist on the specific design. But I think this discussion needs to happen now, before we enter final round, not after.

The commander we select will make decisions that ground cannot second-guess until 38 minutes after they happen. We should select accordingly.

— *Kai Morrison, Senior Mission Architect*`,
    timestamp: '2025-06-14T10:00:00Z',
    endorsements: 178,
    views: 934,
    tags: ['crew-selection', 'commander', 'ares-1', 'mission-planning', 'autonomous-ops'],
    comments: [
      {
        id: 'c-crew-1',
        authorId: 'astrid',
        body: `Kai — this is one of the most important posts on NEXUS right now and I want it in the working group inputs.

The 72-hour simulation proposal is exactly right. I\'d extend it: I want candidates to experience genuine uncertainty about whether a simulated system failure is real or simulated, because that\'s the cognitive state the Ares-1 commander will actually be in during a novel failure mode. The assessment shouldn\'t feel like an assessment.

On the uncertainty tolerance framework: I\'d like to connect you with Dr. Kamau at the University of Oslo. She\'s done the most rigorous work on this in Antarctic analog environments and has expressed interest in working with us. I\'ll make the introduction.`,
        timestamp: '2025-06-14T11:30:00Z',
        endorsements: 145,
      },
      {
        id: 'c-crew-2',
        authorId: 'yui',
        body: `From a science perspective, the ambiguity tolerance criterion matters enormously for surface ops. A significant fraction of what the crew will encounter on the Martian surface will be novel — Perseverance has given us a map, not a script. The commander will face moments where the science protocols and the operations protocols are in tension, with no one to call.

I\'d add one more criterion for discussion: demonstrated ability to deprioritize personal mission objectives when crew safety requires it. We should not be selecting someone who will push the science traverse past the safe return threshold because the sample site is tantalizingly close.`,
        timestamp: '2025-06-14T12:45:00Z',
        endorsements: 134,
      },
    ],
  },
];

export function getPost(id: string): Post | undefined {
  return POSTS.find(p => p.id === id);
}

export function getPostsByBoard(boardId: string): Post[] {
  return POSTS.filter(p => p.boardId === boardId);
}

export function getBoard(id: string): Board | undefined {
  return BOARDS.find(b => b.id === id);
}

export function getUser(id: string): User | undefined {
  return USERS[id];
}

export function formatRelativeTime(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date('2025-06-17T12:00:00Z');
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return 'yesterday';
  return `${diffDays}d ago`;
}

export const COMPANY = {
  name: 'Perihelion Dynamics',
  tagline: 'Making Mars not a question of if, but when.',
  founded: '2019',
  employees: 2847,
  funding: '$4.1B',
  hq: 'Austin, TX',
  facilities: ['Boca Chica, TX', 'Cape Canaveral, FL', 'Mojave, CA'],
  mission: 'Ares-1',
  launchWindow: 'November 2027',
  daysToWindow: 498,
  status: 'Board Review: Timeline & Safety',
};
