import React from 'react';

import './MealInstructions.css';

const MealInstructions = (props) => {
  let whereToSplit = '';

  if (props.instructions.includes('\r\n')) {
    whereToSplit = '\r\n';
  } else if (props.instructions.includes('.')) {
    whereToSplit = '.';
  }

  let split = props.instructions.split(whereToSplit)
  console.log(split)

  return (
    <div className="instructions">
      <h2 className="title">Instructions</h2>
      <div>
        {split.map(step => {
          return (
            step ? <li>{step}</li> : <p></p>)
        })}
      </div>
    </div>
  )
};

export default MealInstructions;
