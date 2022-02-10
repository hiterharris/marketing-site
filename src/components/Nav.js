import { useState } from 'react'
import '../App.css'
import logo from '../assets/images/logo.png'

const Nav = () => {
  const [active] = useState({
    culture: true,
    services: false,
    careers: false,
    contact: false,
  })

  return (
    <nav className="Nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-menu">
        <p className={active.culture ? 'active' : 'inactive'}>CULTURE</p>
        <p className={active.services ? 'active' : 'inactive'}>SERVICES</p>
        <p className={active.careers ? 'active' : 'inactive'}>CAREERS</p>
        <p className={active.contact ? 'active' : 'inactive'}>CONTACT</p>
      </div>
    </nav>
  );
}

export default Nav;
