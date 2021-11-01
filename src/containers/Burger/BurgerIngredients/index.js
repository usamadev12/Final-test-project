import React from 'react'

import Cheese from 'assets/images/cheese.jpg'
import Lettuce from 'assets/images/lettuse.jpg'
import Meat from 'assets/images/meat.jpg'
import Tomato from 'assets/images/tomato.jpg'



const BurgerIngredients = ingredients => {
  return (
    <div>
      {Object.keys(ingredients.ingredients).map(ingredient =>
        ingredients.ingredients[ingredient].map(() =>
          (() => {
            switch (ingredient) {
              case 'Cheese':
                return (
                  <div>
                    <img src={Cheese} />
                  </div>
                )
              case 'Lettuce':
                return (
                    <div>
                      <img src={Lettuce} />
                    </div>
                )
              case 'Meat':
                return (
                    <div>
                      <img src={Meat} />
                    </div>
                )
              case 'Tomato':
                return (
                    <div>
                      <img src={Tomato} />
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
