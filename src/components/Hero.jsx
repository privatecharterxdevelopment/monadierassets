export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background layers */}
      <div className="hero-bg">
        {/* Drop a hero.mp4 into /public to enable the video */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-ambient" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <p className="hero-eyebrow">Geneva · London · Singapore — Est. 1987</p>
        <h1 className="hero-wordmark">Monadier</h1>
        <div className="hero-rule" aria-hidden="true" />
        <p className="hero-descriptor">Holding</p>
        <p className="hero-tagline">Capital. Structured. Compounded.</p>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
