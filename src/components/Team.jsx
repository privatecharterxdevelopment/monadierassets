import { useInView } from '../hooks/useInView'

const TEAM = [
  {
    initials: 'AV',
    name: 'Alexander von Monadier',
    title: 'Founding Principal & Chairman',
    bio: 'Former Managing Director at Goldman Sachs. 35 years across principal investing, corporate acquisitions and structured capital deployment on three continents.',
  },
  {
    initials: 'IH',
    name: 'Isabella Hartmann',
    title: 'Chief Investment Officer',
    bio: 'Former Portfolio Manager at Bridgewater Associates. Oversees capital allocation strategy, macro positioning and the deployment framework across all holding verticals.',
  },
  {
    initials: 'MR',
    name: 'Maximilian Reuss',
    title: 'Director — Real Assets & Commodities',
    bio: 'Former Vice President at Glencore International. Leads direct commodity positions and physical asset acquisitions across agricultural, metals and energy sectors.',
  },
  {
    initials: 'SL',
    name: 'Sophia Lindqvist',
    title: 'Director — Real Estate',
    bio: 'Former Director at Brookfield Asset Management. Oversees property acquisition, development and operations across the holding portfolio in 14 countries.',
  },
  {
    initials: 'TE',
    name: 'Tobias Ehrhardt',
    title: 'Director — Acquisitions & Structured Finance',
    bio: 'Former Partner at KKR. Leads proprietary deal sourcing, corporate acquisitions and structured capital solutions within the Monadier holding structure.',
  },
]

export default function Team() {
  const [ref, inView] = useInView()

  return (
    <section className="team section" id="team" ref={ref}>
      <div className="container">
        <div className="team-header">
          <p className="section-label">03 — Principals</p>
          <h2 className="section-title">Leadership</h2>
        </div>

        <div className="team-grid">
          {TEAM.map((member, i) => (
            <div
              className={`team-card reveal${inView ? ' visible' : ''} reveal-delay-${i + 1}`}
              key={member.name}
            >
              <div className="team-photo">
                <span className="team-initials">{member.initials}</span>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
