import { useState } from 'react'
import './NavBar.scss'
import Logo from '/assets/Images/logo-images.png'
import MobileNav from './MobileNav/MobileNav';

export default function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = ()  => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav__wrapper">
        <div className="nav__content">
            <img src={Logo} alt="" className="logo" />

            <ul>
                <li><a href="#HeroSection" className="menu__items">Home</a></li>
                <li><a href="#SkillsSectoion" className="menu__items">Skills</a></li>
                <li><a href="#workExprinceSection" className="menu__items">Work Experience</a></li>
                <li><a href="#ContactSection" className="menu__items">Contact Me</a></li>

                <button className="contact__btn" onClick={() => {}}>Hire Me</button>
            </ul>
            <button className="menu__btn" onClick={toggleMenu}>
            <i className="ri-menu-2-line"></i>
            {/* {openMenu ? "Close" : "Menu"} */}
            </button>
        </div>
      </nav>
    </>
  )
}
