import { useInView } from '../hooks/useInView'

const TEAM = [
  {
    initials: 'AV',
    name: 'Alexander von Monadier',
    title: 'Founding Chairman & Senior Partner',
    bio: 'Former Managing Director at Goldman Sachs Private Wealth Management. 35 years across institutional asset management, private banking and principal investing on three continents.',
  },
  {
    initials: 'IH',
    name: 'Isabella Hartmann',
    title: 'Chief Investment Officer',
    bio: 'Former Portfolio Manager at Bridgewater Associates. Architect of our macro overlay strategy and alternative asset framework. CFA Charterholder, LSE MSc Economics.',
  },
  {
    initials: 'MR',
    name: 'Maximilian Reuss',
    title: 'Head of Real Assets & Commodities',
    bio: 'Former Vice President at Glencore International. Oversees a CHF 1.4B portfolio spanning agricultural commodities, precious metals and energy. ETH Zürich.',
  },
  {
    initials: 'SL',
    name: 'Sophia Lindqvist',
    title: 'Head of Global Real Estate',
    bio: 'Former Director at Brookfield Asset Management. Manages our cross-border real estate portfolio across 14 countries. EPFL Architecture, Oxford MSc Finance.',
  },
  {
    initials: 'TE',
    name: 'Tobias Ehrhardt',
    title: 'Head of Private Equity & Structured Finance',
    bio: 'Former Partner at KKR. Leads direct investment strategy and co-investment programmes with premier global buyout firms. CFA & CAIA Charterholder, WHU Otto Beisheim.',
  },
]

export default function Team() {
  const [ref, inView] = useInView()

  return (
    <section className="team section" id="team" ref={ref}>
      <div className="container">
        <div className="team-header">
          <p className="section-label">03 — The Partnership</p>
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
