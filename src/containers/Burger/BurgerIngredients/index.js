import React from 'react'


const BurgerIngredients = ingredients => {
  return (
    <div>
      {Object.keys(ingredients.ingredients).map(ingredient =>
        ingredients.ingredients[ingredient].map(() =>
          (() => {
            switch (ingredient) {
              case ingredient:
                return (
                  <div>
                    <img src={ingredients.ingredients[ingredient][0].image}/>
                  </div>
                )
              default:
                return null
            }
          })()
        )
      )}
    </div>
  )
}

export default BurgerIngredients
