import React from 'react';

const MealIngredients = (props) => {
  const ingredientType = [];
  const ingredientAmt = [];
  const ingredientArr = [];

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
  for(var i = 0; i < ingredientType.length; i++) {
    let tempBlock = ingredientType[i] + ' ' + ingredientAmt[i];
    ingredientArr.push(tempBlock);
  }

  const ingredientList = ingredientArr.map((item, index) => {
    return <li key={index}>{item}</li>})

  let content = <p></p>

  if (ingredientList.length > 0) {
    content = <div>
    <h3>Ingredients</h3>
    <p>{ingredientList}</p>
  </div>
  }

  return (
    content
  )
};

export default MealIngredients;