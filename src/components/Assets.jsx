import { useInView } from '../hooks/useInView'

const ASSETS = [
  {
    title: 'Commodities & Natural Resources',
    desc: 'Strategic allocation across agricultural commodities, precious and industrial metals, and global energy markets. Direct exposure through physical holdings and structured instruments.',
    tags: ['Agricultural', 'Precious Metals', 'Energy', 'Structured'],
  },
  {
    title: 'Global Real Estate',
    desc: 'Trophy assets, core-plus developments and opportunistic investments across gateway cities and select emerging markets. Active asset management across 14 countries.',
    tags: ['Residential', 'Commercial', 'Trophy Assets', 'Development'],
  },
  {
    title: 'Private Equity',
    desc: 'Direct investments, co-investments and fund positions in growth equity, buyout and late-stage venture strategies. Selective access to premier global managers.',
    tags: ['Growth Equity', 'Buyout', 'Venture', 'Co-Investment'],
  },
  {
    title: 'Fixed Income & Credit',
    desc: 'Sovereign and supranational bonds, investment-grade corporate credit, high-yield and bespoke structured credit. Duration-managed for intergenerational portfolios.',
    tags: ['Sovereign', 'Investment Grade', 'High Yield', 'Structured Credit'],
  },
  {
    title: 'Public Markets',
    desc: 'Systematic and discretionary equity strategies across developed and emerging markets, enhanced with rigorous macro overlay and active currency management.',
    tags: ['Global Equity', 'Emerging Markets', 'Systematic', 'Macro'],
  },
  {
    title: 'Infrastructure & Alternatives',
    desc: 'Long-duration infrastructure, digital assets, art advisory and direct lending. Providing genuine diversification and inflation-linked returns across economic cycles.',
    tags: ['Infrastructure', 'Digital Assets', 'Art Advisory', 'Lending'],
  },
]

export default function Assets() {
  const [ref, inView] = useInView()

  return (
    <section className="assets section" id="assets" ref={ref}>
      <div className="container">
        <div className="assets-header">
          <div>
            <p className="section-label">02 — Asset Classes</p>
            <h2 className="section-title">Global Capital<br />Allocation</h2>
          </div>
          <p className="assets-intro">
            We deploy capital across six core asset classes, each managed by dedicated specialists with decades of sector-specific experience.
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
