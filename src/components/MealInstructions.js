import React from 'react';

import './MealInstructions.css';

const MealInstructions = (props) => {

  return (
    <div className="instructions">
      <p>{props.instructions}</p>
    </div>
  )
};

export default MealInstructions;