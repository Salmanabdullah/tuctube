import React from "react";
import Navbar from "../components/Navbar";
import LeftSideBar from "../components/LeftSideBar";
import DisplayVideos from "../components/DisplayVideos"; 

const Home = () => {
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      <DisplayVideos />
    </div>
  );
};

export default Home;
