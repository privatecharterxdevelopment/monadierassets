export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-logo">Monadier</div>
            <div className="footer-tagline">Asset Management</div>
          </div>
          <nav className="footer-nav">
            <a href="#philosophy">Philosophy</a>
            <a href="#assets">Asset Classes</a>
            <a href="#team">Partnership</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Monadier Asset Management AG.<br />
            All rights reserved. Regulated by FINMA.
          </p>
          <p className="footer-disclaimer">
            This website is for informational purposes only and does not constitute investment advice, an offer to sell, or a solicitation to buy any securities. Past performance is not indicative of future results. Monadier Asset Management AG is a licensed asset manager regulated by the Swiss Financial Market Supervisory Authority (FINMA). Investments involve risk, including the possible loss of principal.
          </p>
        </div>
      </div>
    </footer>
  )
}
