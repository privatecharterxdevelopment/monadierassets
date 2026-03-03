const ITEMS = [
  'Commodities & Natural Resources',
  'Global Real Estate',
  'Private Equity',
  'Fixed Income & Credit',
  'Infrastructure & Energy',
  'Public Markets',
  'Alternative Investments',
  'Direct Lending',
  'Art Advisory',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div className="ticker-item" key={i}>
            <span>{item}</span>
            <div className="ticker-sep" />
          </div>
        ))}
      </div>
    </div>
  )
}
