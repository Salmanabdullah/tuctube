import React from "react";
import vLogo from "../assets/videoLogo.png";
import Video from "../components/Home/VideoCard";

const DisplayVideos = () => {
  return (
    <div className="ml-28 pt-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      <div className=" ">
        <div>
          <Video />
        </div>
        <div className=" flex flex-row gap-4">
          <div className="h-12 w-12 bg-indigo-400 rounded-full">
            <img src={vLogo} alt="fdsgf" className=""/>
          </div>
          <div>
            <div className="text-2xl">
              Title of the video
            </div>
            <div className="">Channel name</div>
          </div>
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
