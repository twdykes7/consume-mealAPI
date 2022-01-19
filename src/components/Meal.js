import React from 'react';

import MealIngredients from './MealIngredients';
import MealThumbnail from './MealThumbnail';
import MealInstructions from './MealInstructions';
import VideoPlayer from './VideoPlayer';
import './Meal.css';

const Meal = (props) => {
  const meal = props.meal;
  //console.log(meal);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  if(meal) {
    return (
      <div className="meals">
        <section>
          <MealThumbnail image={meal.strMealThumb}/>
        </section>
        <section>
          <h2>{meal.strMeal}</h2>
          <h3 className="origin">This is a {meal.strArea} meal</h3>
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
        <section>
          <button id="scroll-button" className="button" onClick={scrollToTop}>Return to top</button>
        </section>
      </div>
    )
  }

  return (
    <div></div>
  )
};

export default Meal;
