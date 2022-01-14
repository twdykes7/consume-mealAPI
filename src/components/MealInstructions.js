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

  let instructionsList = split.map((step, index) => {
    return (
      step ? <li key={index}>{step}</li> : <p></p>)
  })

  return (
    <div className="instructions">
      <h2 className="title">Instructions</h2>
      <div>
        {instructionsList}
      </div>
    </div>
  )
};

export default MealInstructions;
