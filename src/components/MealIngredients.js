import React from 'react';

import './MealIngredients.css';

const MealIngredients = (props) => {
  const ingredientType = [];
  const ingredientAmt = [];
  const items = props.items;

  for (const property in items) {
    if (items[property] !== null && items[property].length > 0){
      if(property.includes('strIngredient')) {
        ingredientType.push(items[property]);
      }
      else if(property.includes('strMeasure')) {
        ingredientAmt.push(items[property]);
      }
    }
  }

  const ingredientList = ingredientType.map((item, index) => {
    return (ingredientAmt[index] !== 'undefined' ? <li key={index} className="ingredient-item">
    <span className="ingredient-type">{item}</span>
    <span>-</span>
    <span className="ingredient-amt">{ingredientAmt[index]}</span>
  </li> : <span className="ingredient-type">{item}</span>
  )})

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