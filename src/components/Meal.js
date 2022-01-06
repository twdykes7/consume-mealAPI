import React from 'react';

import MealIngredients from './MealIngredients'

const Meal = (props) => {
  const meal = props.meal;

  return (
    <section>
      <MealIngredients items={meal} />
    </section>
  )
};

export default Meal;