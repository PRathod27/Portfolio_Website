import React, { useRef, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.jpg'
import underline from '../../assets/underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_icon from '../../assets/menu_icon.svg'
import close_icon from '../../assets/close_icon.svg'
  
const Navbar = () => {

  const [menu, setMenu] = useState("home")

  const menRef = useRef()


  const openMenu = () => {
    menRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <img src={Logo} alt="not available" />
      <img src={menu_icon} alt='menu' className='nav-mob-open' onClick={openMenu}/>
      <ul className="nav-menu" ref={menRef }>
        <img src={close_icon} alt='' className='nav-mob-close' onClick={closeMenu}/>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} style={{ width: '50px', height: '10px' }} /> : <></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <img src={underline} style={{ width: '50px', height: '10px' }} /> : <></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={() => setMenu("skills")}>Skills</p></AnchorLink>{menu === "skills" ? <img src={underline} style={{ width: '50px', height: '10px' }} /> : <></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#experience'><p onClick={() => setMenu("experie")}>Experience</p></AnchorLink>{menu === "experience" ? <img src={underline} style={{ width: '50px', height: '10px' }} /> : <></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} style={{ width: '50px', height: '10px' }} /> : <></>}</li>
      </ul>
      <div className="nav-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me.</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar