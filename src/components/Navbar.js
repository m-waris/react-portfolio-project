import React from 'react'
import logo from '../logo7.png'
import barIcon from 'bootstrap-icons/icons/window-stack.svg'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">
        <img src={logo} alt="" className=''/>
    </a>
    <button className="navbar-toggler border-0 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <img src={barIcon} className='icon' alt="" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    
    </div>
  </div>
  
</nav>
  )
}

export default Navbar