import '../App.css'
import { Nav } from './'

function Header() {
  return (
    <header className="Header">
      <Nav />
      <div className="header-content">
        <h1 className="header-title">Luxury digital marketing services</h1>
        <div className="header-subtitle">
          <div className="side-bar"></div>
          <p className="header-subtitle-text">We provide luxury, boutique brands with digital marketing services including social media, SEO, PPC, etc.</p>
        </div>
        <button className="read-more">Read more</button>
      </div>
    </ header>
  );
}

export default Header;
