import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AddIngredient from '../AddIngredients'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import LowerBurger from './LowerBurger/LowerBurger'
import UpperBurger from './UpperBurger/UpperBurger'
import { AddIngredientStyles, BurgerStyles } from './BurgerStyles'

export default () => {
  const Ingredient = useSelector(state => state.Ingredients)
  const usedDispatch = useDispatch()
  const bill = useSelector(state => state.Bill)
  const [status, setStatus] = useState({
    Lettuce: false,
    Tomato: false,
    Meat: false,
    Cheese: false
  })

  const removeItem = (type, price) => {
    const updateIngredients = {
      ...Ingredient,
      [type]: Ingredient[type].filter(item => item.id !== Ingredient[type].length)
    }

    if (updateIngredients[type].length == 0) {
      const updatedStatus = {
        ...status,
        [type]: false
      }
      setStatus(updatedStatus)
    }
    usedDispatch({ type: 'REMOVE_BILL', payload: { Bill: bill - price } })
    usedDispatch({ type: 'REMOVE_INGREDIENTS', payload: { Ingredients: updateIngredients } })
  }
  const addItem = (type, price) => {
    const updateIngredients = {
      ...Ingredient,
      [type]: [...Ingredient[type], { id: Ingredient[type].length + 1 }]
    }
    const updatedStatus = {
      ...status,
      [type]: true
    }
    setStatus(updatedStatus)
    usedDispatch({ type: 'ADD_BILL', payload: { Bill: bill + price } })
    usedDispatch({ type: 'ADD_INGREDIENTS', payload: { Ingredients: updateIngredients } })
  }

  return (
    <>
      <BurgerStyles>
        <UpperBurger />
        <BurgerIngredients ingredients={Ingredient} />
        <LowerBurger />
      </BurgerStyles>
      <AddIngredientStyles>
        <div>{`Total Amount : ${bill} $`}</div>
        <AddIngredient
          status={status}
          ingredient={Ingredient}
          addItem={addItem}
          removeItem={removeItem}
        />
      </AddIngredientStyles>
    </>
  )
}
