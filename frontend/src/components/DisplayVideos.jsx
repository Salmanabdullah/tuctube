import React from "react";
import Video from "../components/Home/VideoCard";


const DisplayVideos = () => {
  return (
    <div className="ml-28 pt-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      <div className="bg-indigo-400 p-3">
        <div>
          <Video />
        </div>
        <div className="bg-red-400">
          <div></div>
          <div></div>
        </div>
      </div>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
};

export default DisplayVideos;
