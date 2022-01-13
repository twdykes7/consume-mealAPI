import React from 'react';
import ReactPlayer from 'react-player/youtube';

import './VideoPlayer.css';

const VideoPlayer = (props) => {

  return (
    <ReactPlayer
      url={props.url} className="react-player"
    />
  )
};

export default VideoPlayer;
