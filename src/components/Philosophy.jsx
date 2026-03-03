import { useInView } from '../hooks/useInView'

const PRINCIPLES = [
  {
    num: 'I',
    title: 'Capital Preservation',
    text: 'We prioritise the protection of principal above all. Every allocation decision begins with a rigorous assessment of downside risk before any consideration of return.',
  },
  {
    num: 'II',
    title: 'Generational Thinking',
    text: 'Our investment horizon extends across decades, not quarters. We structure portfolios to serve families across multiple generations, aligning incentives accordingly.',
  },
  {
    num: 'III',
    title: 'Concentrated Excellence',
    text: 'We do not diversify for the sake of diversification. Capital is concentrated in our highest-conviction positions, managed with surgical precision and discipline.',
  },
]

const STATS = [
  { num: 'CHF 4.2B', label: 'Assets Under Management' },
  { num: '67',       label: 'Client Families' },
  { num: '18',       label: 'Countries' },
  { num: '37',       label: 'Years of Excellence' },
]

export default function Philosophy() {
  const [ref, inView] = useInView()

  return (
    <section className="philosophy section" id="philosophy" ref={ref}>
      <div className="container">
        <p className="section-label">01 — Philosophy</p>

        <div className={`philosophy-grid reveal${inView ? ' visible' : ''}`}>
          <blockquote className="philosophy-quote">
            "Capital is not merely accumulated.<br />
            <em>It is cultivated.</em>"
          </blockquote>

          <div className="philosophy-principles">
            {PRINCIPLES.map((p) => (
              <div className="principle" key={p.num}>
                <div className="principle-num">{p.num}</div>
                <div className="principle-body">
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`stats-bar reveal reveal-delay-2${inView ? ' visible' : ''}`}>
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
