import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__logo">Monadier</a>
        <ul className="nav__links">
          <li><a href="#philosophy">Philosophy</a></li>
          <li><a href="#assets">Asset Classes</a></li>
          <li><a href="#team">Partnership</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav__cta">
          <a href="#contact">Inquire</a>
        </div>
      </div>
    </nav>
  )
}
