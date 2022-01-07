import React from 'react';

import MealIngredients from './MealIngredients';
import MealThumbnail from './MealThumbnail';
import MealInstructions from './MealInstructions';
import VideoPlayer from './VideoPlayer';

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
        <center>
          <VideoPlayer url={meal.strYoutube}/>
        </center>
        <section>
          <a href={meal.strSource}>Click for the original recipe link</a>
        </section>
      </div>
    )
  }

  return (
    <div></div>
  )
};

export default Meal;
