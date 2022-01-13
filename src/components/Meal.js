import React from 'react';

import MealIngredients from './MealIngredients';
import MealThumbnail from './MealThumbnail';
import MealInstructions from './MealInstructions';
import VideoPlayer from './VideoPlayer';
import './Meal.css';

const Meal = (props) => {
  const meal = props.meal;

  console.log(meal)

  if(meal) {
    return (
      <div className="meals">
        <section>
          <MealThumbnail image={meal.strMealThumb}/>
        </section>
        <section>
          <h2>{meal.strMeal}</h2>
        </section>
        <section>
          <MealIngredients items={meal} />
        </section>
        <section>
          <MealInstructions instructions={meal.strInstructions} />
        </section>
        <section>
          <VideoPlayer url={meal.strYoutube}/>
        </section>
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
