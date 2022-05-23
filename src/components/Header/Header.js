import React from 'react' 
import logo from '../../images/logo.jpg'
import { Link, NavLink } from 'react-router-dom'
import'./Header.css' 
import { useState } from 'react'

function Header(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div>
      <header className="header">
        <ul className="menu">
          <li>
            <NavLink
              to="/home"
              tag={Link}
              activestyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5,caretColor: 'transparent'}}
            >
            <img src={logo} alt='logo' className="logoi"></img>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="homei"
              to="/home"
              tag={Link}
              activestyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5,caretColor: 'transparent'}}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ec"
              to="/education"
              tag={Link}
              activestyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5, caretColor: 'transparent'}}
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              className="xp"
              to="/experience"
              tag={Link}
              activestyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5,caretColor: 'transparent'}}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              className="projects"
              to="/projects"
              tag={Link}
              activestyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5,caretColor: 'transparent' }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="cr"
              to="/contact"
              tag={Link}
              activestyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5,caretColor: 'transparent'}}
            >
              Contact and Resume
            </NavLink>
          </li>
        </ul>
      </header>
      <div className='hamburger-menu'>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
        </button>
        <NavLink
              to="/home"
              tag={Link}>
              <img src={logo} alt='logo' className="logo"></img>
        </NavLink>
       {isNavExpanded &&
        (<ul className='mobile-menu'>
        <li> 
          <NavLink
            to="/home"
            tag={Link}
            className="ham-items"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            tag={Link}
            className="ham-items"
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            tag={Link}
            className="ham-items"
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            tag={Link}
            className="ham-items"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            tag={Link}
            className="ham-items"
          >
            Contact and Resume
          </NavLink>
        </li>
      </ul>)}
      </div>
    </div>
  )
}

export default Header