import { useInView } from '../hooks/useInView'

const PRINCIPLES = [
  {
    num: 'I',
    title: 'Structured Ownership',
    text: 'We acquire and hold controlling or significant stakes in businesses and real assets. Our holding structure provides stability, alignment and the conditions for compounding over time.',
  },
  {
    num: 'II',
    title: 'Permanent Capital',
    text: 'We operate without redemption pressure or fund lifecycles. Permanent capital allows us to hold positions indefinitely, act counter-cyclically and avoid forced selling.',
  },
  {
    num: 'III',
    title: 'Operational Conviction',
    text: 'We do not take passive positions. Where we invest, we engage — providing governance, strategic direction and access to our network to compound value across every holding.',
  },
]

const STATS = [
  { num: 'CHF 150M+', label: 'Assets Under Management' },
  { num: '2',         label: 'Portfolio Structures' },
  { num: '18',        label: 'Countries' },
  { num: '37',        label: 'Years of Operation' },
]

export default function Philosophy() {
  const [ref, inView] = useInView()

  return (
    <section className="philosophy section" id="philosophy" ref={ref}>
      <div className="container">
        <p className="section-label">01 — Approach</p>

        <div className={`philosophy-grid reveal${inView ? ' visible' : ''}`}>
          <blockquote className="philosophy-quote">
            "We do not manage capital.<br />
            <em>We build with it.</em>"
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
