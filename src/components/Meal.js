import React from 'react';

import MealIngredients from './MealIngredients';
import MealThumbnail from './MealThumbnail';

const Meal = (props) => {
  const meal = props.meal;

  console.log(meal)
  let content = <p></p>
  let thumbnail = <p></p>

  if(meal) {
    content = <div>
      <h2>{meal.strMeal}</h2>
    </div>;
    thumbnail = <MealThumbnail image={meal.strMealThumb}/>;
  }

  return (
    <div>
      <section>
        {thumbnail}
      </section>
      <section>
        {content}
      </section>
      <section>
        <MealIngredients items={meal} />
      </section>
    </div>
  )
};

export default Meal;