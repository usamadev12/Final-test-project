import React from 'react'

import './UpperBurgerStyles'
import UpperPart from 'assets/images/top.jpg'
import UpperBurgerStyles from './UpperBurgerStyles'

const UpperBurger = () => {
  return (
    <UpperBurgerStyles>
      <img src={UpperPart} />
    </UpperBurgerStyles>
  )
}
export default UpperBurger
