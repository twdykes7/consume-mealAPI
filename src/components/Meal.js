import React from 'react';

const Meal = (props) => {

  const trimmedMealObj = {};

  // for ( const property in meal ) {
  //   if (`${meal[property]}`) {
  //     //console.log(`${property} `, `${meal[property]} ` )
  //     trimmedMealObj[`${property}`] = `${meal[property]}`;
  //   }
  // }
  // console.log(trimmedMealObj);

  for (const property in props.meal) {
    // console.log(`${property} `, `${props.meal[property]} ` )
    if (`$props.meal[property]`) {
      trimmedMealObj[`${property}`] = `${props.meal[property]}`
    }
  }
  // console.log(props.meal)
  console.log(trimmedMealObj)

  return (
    <div>Meal goes here!</div>
  )
};

export default Meal;