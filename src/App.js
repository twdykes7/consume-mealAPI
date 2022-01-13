import React, { useState, useCallback } from 'react';

import Meal from './components/Meal';
import './App.css';

function App() {

  /* ToDo
  Add isLoading with useState
  */

  const [meal, setMeal] = useState(null);

  const fetchMealHandler = useCallback( async () => {

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
  }, []);

  return (
    <div className="App">
      <section>
        <h1>Welcome to a random meal generator app!</h1>
        <button onClick={fetchMealHandler}>Click for new recipe!</button>
      </section>
      <section>
        <Meal meal={meal}/>
      </section>
    </div>
  );
}

export default App;
