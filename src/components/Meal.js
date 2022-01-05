import React from 'react';

const Meal = (props) => {

  for (const property in props.meal) {
    console.log(`${property} `, `${props.meal[property]} ` )
  }

  return (
    <div>Meal goes here!</div>
  )
};

export default Meal;