import React from 'react'
import logo from '../images/logo.png'
import menu from '../images/menu.png'
import {Link} from 'react-scroll'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" className='toogle' />
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img src={menu} style={{width:'30px'}} alt="" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              {/* <a className="nav-link" aria-current="page" href="/">Home</a> */}
              <Link to='home' spy={true} smooth={true} offset={-100} duration={500} className='nav-link'>Home</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#about">About</a> */}
              <Link to='about' spy={true} smooth={true} offset={-100}  duration={50} className='nav-link'>About</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#skills">Skills</a> */}
              <Link to='skills' spy={true} smooth={true} offset={-100}  duration={500} className='nav-link'>Skills</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#projects">Projects</a> */}
              <Link to='projects' spy={true} smooth={true} offset={-100}  duration={500} className='nav-link'>Projects</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#contact">Contact</a> */}
              <Link to='contact' spy={true} smooth={true} offset={-100}  duration={500} className='nav-link'>Contact</Link>
            </li>
          </ul>

        </div>
      </div>

    </nav>
  )
}

export default Navbar