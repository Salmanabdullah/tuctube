import React from 'react'
import video from "../../assets/Countdown.mp4";

const VideoCard = () => {
  return (
    <div>
      <video controls width="600">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoCard