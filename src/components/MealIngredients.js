import React from 'react';

import './MealIngredients.css';

const MealIngredients = (props) => {
  const ingredientType = [];
  const ingredientAmt = [];
  const items = props.items;

  for (const property in items) {
    if (items[property] !== null && items[property].length > 1){
      if(property.includes('Ingredient')) {
        ingredientType.push(items[property]);
      }
      if(property.includes('Measure')) {
        ingredientAmt.push(items[property]);
      }
    }
  }

  const ingredientList = ingredientType.map((item, index) => {
    return <li key={index} className="ingredient-item">
      <span className="ingredient-type">{item}</span>
      <span>-</span>
      <span className="ingredient-amt">{ingredientAmt[index]}</span>
    </li>
  })

  let content = <p></p>

  if (ingredientList.length > 0) {
    content = <div>
    <h3 className="ingredients">Ingredients</h3>
    <p>{ingredientList}</p>
  </div>
  }

  return (
    content
  )
};

export default MealIngredients;