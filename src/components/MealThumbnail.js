import React from 'react'

import './MealThumbnail.css';
/**
At some point need to set styling for thumbnail image
 */

const MealThumbnail = (props) => {

  let image = props.image;

  let content = <p></p>;

  if(image) {
    content = <img src={image} className="meal-img" alt="This is a meal" />
  }
  return (
    <div>
      {content}
    </div>
  )
};

export default MealThumbnail;
