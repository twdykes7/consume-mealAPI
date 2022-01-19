import React, { useState, useCallback } from 'react';

import Meal from './components/Meal';
import './App.css';

function App() {

  /* ToDo
  Add isLoading with useState
  */

  const [meal, setMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMealHandler = useCallback( async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

      if (response.status !== 200) {
        throw new Error ('Something backfired!');
      }

      const data = await response.json();
      const meal = data.meals[0];

      setMeal(meal);
    }  catch (error) {
      console.log(error.message)
    }
    setIsLoading(false);
  }, []);


  return (
    <div className="App">
      <section className="title">
        <h1>Welcome to a random meal generator app!</h1>
        <button onClick={fetchMealHandler} className="button">Click for new recipe!</button>
      </section>
      <section>
        {meal ? <Meal meal={meal}/> :
          <p>This app will generate a random meal evertime the button is clicked!</p>
        }
      </section>
    </div>
  );
}

export default App;
