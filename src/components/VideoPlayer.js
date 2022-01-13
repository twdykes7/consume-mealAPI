import React from 'react';
import ReactPlayer from 'react-player/youtube';

import './VideoPlayer.css';

const VideoPlayer = (props) => {

  return (
    <center>
      <ReactPlayer
        url={props.url} className="react-player"
      />
    </center>
  )
};

export default VideoPlayer;
