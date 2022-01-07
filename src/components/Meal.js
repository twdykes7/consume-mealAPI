import React from 'react';

import MealIngredients from './MealIngredients';
import MealThumbnail from './MealThumbnail';
import MealInstructions from './MealInstructions';

const Meal = (props) => {
  const meal = props.meal;

  console.log(meal)

  if(meal) {
    return (
      <div>
        <section>
          <MealThumbnail image={meal.strMealThumb}/>
        </section>
        <section>
          <h2>{meal.strMeal}</h2>
        </section>
        <section>
          <MealInstructions instructions={meal.strInstructions} />
        </section>
        <section>
          <MealIngredients items={meal} />
        </section>
        <section href={meal.strYoutube}></section>
      </div>
    )
  }

  return (
    <p>Thanks for visiting!</p>
  )
};

export default Meal;
