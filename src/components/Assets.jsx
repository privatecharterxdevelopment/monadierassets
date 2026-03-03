import { useInView } from '../hooks/useInView'

const ASSETS = [
  {
    title: 'Commodities & Natural Resources',
    desc: 'Direct and structured exposure across agricultural commodities, precious metals, industrial inputs and global energy. Held through physical ownership and purpose-built vehicles.',
    tags: ['Agricultural', 'Precious Metals', 'Energy', 'Physical'],
  },
  {
    title: 'Global Real Estate',
    desc: 'Controlling positions in trophy assets, mixed-use developments and income-generating property across gateway cities. We own, develop and operate across 14 jurisdictions.',
    tags: ['Residential', 'Commercial', 'Trophy Assets', 'Development'],
  },
  {
    title: 'Direct Equity & Acquisitions',
    desc: 'Majority and significant minority stakes in private businesses. We source proprietary transactions, lead negotiations and retain ownership for years — not quarters.',
    tags: ['Majority Stakes', 'Buyout', 'Proprietary', 'Control'],
  },
  {
    title: 'Fixed Income & Credit',
    desc: 'Sovereign bonds, investment-grade corporate credit and bespoke structured instruments. Used to optimise the holding structure and manage liquidity across cycles.',
    tags: ['Sovereign', 'Investment Grade', 'High Yield', 'Structured'],
  },
  {
    title: 'Public Markets',
    desc: 'Concentrated, high-conviction equity positions in listed businesses where we have deep sectoral understanding. Systematic overlays applied for risk and currency management.',
    tags: ['Concentrated Equity', 'Emerging Markets', 'Systematic', 'Macro'],
  },
  {
    title: 'Infrastructure & Special Situations',
    desc: 'Long-duration infrastructure ownership, special situations and direct lending. Assets that generate predictable cash flows independent of short-term market sentiment.',
    tags: ['Infrastructure', 'Special Situations', 'Direct Lending', 'Cash Flow'],
  },
]

export default function Assets() {
  const [ref, inView] = useInView()

  return (
    <section className="assets section" id="assets" ref={ref}>
      <div className="container">
        <div className="assets-header">
          <div>
            <p className="section-label">02 — Portfolio</p>
            <h2 className="section-title">Holdings &<br />Deployment</h2>
          </div>
          <p className="assets-intro">
            Monadier deploys capital across six verticals through direct ownership, structured vehicles and proprietary acquisition — not fund intermediation.
          </p>
        </div>

        <div className="assets-grid">
          {ASSETS.map((asset, i) => (
            <div
              className={`asset-card reveal${inView ? ' visible' : ''} reveal-delay-${(i % 3) + 1}`}
              key={asset.title}
            >
              <div className="asset-num">0{i + 1}</div>
              <h3>{asset.title}</h3>
              <p>{asset.desc}</p>
              <div className="asset-tags">
                {asset.tags.map((t) => (
                  <span className="asset-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
