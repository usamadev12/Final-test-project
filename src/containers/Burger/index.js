import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AddIngredient from '../AddIngredients'
import BurgerIngredients from './BurgerIngredients'
import LowerBurger from './LowerBurger'
import UpperBurger from './UpperBurger'
import { AddIngredientStyles, BurgerStyles } from './BurgerStyles'

const Burger = () => {
  const Ingredient = useSelector(state => state.Ingredients)
  const usedDispatch = useDispatch()
  const bill = useSelector(state => state.Bill)
  const status = useSelector(state => state.Status)


  const removeItem = (type, price) => {
    const updateIngredients = {
      ...Ingredient,
      [type]: Ingredient[type].filter(item => item.id !== Ingredient[type].length)
    }

    if (updateIngredients[type].length == 1) {
      const updatedStatus = {
        ...status,
        [type]: false
      }
      usedDispatch({ type: 'REMOVE_STATUS', payload: { Status: updatedStatus } })
    }
    usedDispatch({ type: 'REMOVE_BILL', payload: { Bill: bill - price } })
    usedDispatch({ type: 'REMOVE_INGREDIENTS', payload: { Ingredients: updateIngredients } })
  }
  const addItem = (type, price) => {
    const updateIngredients = {
      ...Ingredient,
      [type]: [...Ingredient[type], { id: Ingredient[type].length + 1}]
    }
    const updatedStatus = {
      ...status,
      [type]: true
    }

    usedDispatch({ type: 'ENABLE_STATUS', payload: { Status: updatedStatus } })
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

export default Burger
