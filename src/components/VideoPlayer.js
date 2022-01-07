import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = (props) => {

  console.log(props.url)
  console.log(window.location.href)
  // return (
  //   <div>{props.url}</div>
  // )
  return (
    <div>
      <ReactPlayer
        url={props.url}
      />
    </div>
  )
};

export default VideoPlayer;
