import React from 'react'

import "./Navbar.css"
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo/>
      <Nav/>
    </div>
  )
}

export default Navbar
