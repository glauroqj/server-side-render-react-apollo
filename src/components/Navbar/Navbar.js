import React from 'react'

/** style */
import * as El from './Navbar.style'

const Navbar = () => (
  <El.Navbar>
    <El.NavbarLogo onClick={ () => window.location.replace('/') }>
      Find Jobs
    </El.NavbarLogo>
    <El.NavbarMenu>
      <div>Options</div>
    </El.NavbarMenu>
  </El.Navbar>
)

export default Navbar