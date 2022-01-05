import React, { useState, useCallback } from 'react';

import './App.css';

function App() {
  const [meal, setMeal] = useState(null);

  const fetchMealHandler = useCallback( async () => {

    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

      if (response.status !== 200) {
        throw new Error ('Something backfired!');
      }

      const data = await response.json();
      const meal = data.meals[0];
      console.log(meal)

      const trimmedMealObj = {};

      for ( const property in meal ) {
        if (`${meal[property]}`) {
          //console.log(`${property} `, `${meal[property]} ` )
          trimmedMealObj[`${property}`] = `${meal[property]}`;
        }
      }
      console.log(trimmedMealObj);

    }  catch (error) {
      console.log(error.message)
    }
  }, []);

  return (
    <div className="App">
      <h2>This is the mealAPI app</h2>
      <button onClick={fetchMealHandler}>Click for new recipe!</button>
    </div>
  );
}

export default App;
