import './MobileNav.scss'
import Logo from '/assets/Images/logo-images.png'


// eslint-disable-next-line react/prop-types
function MobileNav({ isOpen, toggleMenu }) {
  return (
    <>
      <div className={`mobile__menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="mobile_menu_container">
          <img src={Logo} alt="site logo" className="logo" />

          <ul>
            <li><a href="" className="menu__items">Home</a></li>
            <li><a href="" className="menu__items">Skills</a></li>
            <li><a href="" className="menu__items">Work Experience</a></li>
            <li><a href="" className="menu__items">Contact Me</a></li>

            <button className="contact__btn" onClick={() => {}}>Hire Me</button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default MobileNav
