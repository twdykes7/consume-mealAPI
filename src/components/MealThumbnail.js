import React from 'react'

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