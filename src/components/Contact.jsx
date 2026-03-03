import { useInView } from '../hooks/useInView'

const INFO = [
  {
    label: 'Geneva',
    text: 'Rue du Rhône 14\n1204 Genève, Switzerland',
  },
  {
    label: 'London',
    text: "22 St James\u2019s Square\nMayfair, London W1Y 4JH",
  },
  {
    label: 'Email',
    text: 'inquiries@monadier.com',
  },
  {
    label: 'Phone',
    text: '+41 22 717 00 00',
  },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <div className={`contact-left reveal${inView ? ' visible' : ''}`}>
            <p className="section-label">04 — Contact</p>
            <h2>
              Begin the<br />
              <em>Conversation</em>
            </h2>
            <p>
              Monadier engages selectively with co-investors, operating partners and counterparties whose interests align with our long-term holding mandate. All correspondence is handled with complete discretion.
            </p>
            <p className="contact-minimum">
              Co-investment threshold — CHF 10,000,000
            </p>
          </div>

          <div className={`contact-right reveal reveal-delay-2${inView ? ' visible' : ''}`}>
            <div className="contact-info">
              {INFO.map((item) => (
                <div className="contact-item" key={item.label}>
                  <span className="contact-item-label">{item.label}</span>
                  <p style={{ whiteSpace: 'pre-line' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
