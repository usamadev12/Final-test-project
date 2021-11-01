import React from 'react'

const AddingIngredients = properties => {
  let ingredientList = [
    { id: 1, type: 'Lettuce', price: 3 },
    { id: 2, type: 'Cheese', price: 4 },
    { id: 3, type: 'Meat', price: 5 },
    { id: 4, type: 'Tomato', price: 6 }
  ]

  return (
    <div>
      {ingredientList.map(ingredient => (
        <>
          <div>{ingredient.type}</div>
          <button onClick={() => properties.addItem(ingredient.type, ingredient.price)}>Add</button>
          <button
            disabled={properties.status[ingredient.type] === false}
            onClick={() => properties.removeItem(ingredient.type, ingredient.price)}
          >
            Less
          </button>
        </>
      ))}
    </div>
  )
}
export default AddingIngredients
