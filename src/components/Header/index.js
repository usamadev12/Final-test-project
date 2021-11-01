import React from 'react'

import HeaderStyles from './HeaderStyles'
import logo from 'assets/logos/BurgerLogo.png'

const Header = () => {
  return (
    <HeaderStyles>
      <div>
        <img src={logo} alt='myBurger'></img>
      </div>
    </HeaderStyles>
  )
}

export default Header
