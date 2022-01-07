import React from 'react'
/**
At some point need to set styling for thumbnail image
 */

const MealThumbnail = (props) => {

  let image = props.image;

  let content = <p></p>;

  if(image) {
    content = <img src={image} alt="meal" />
  }
  return (
    <div>
      {content}
    </div>
  )
};

export default MealThumbnail;
