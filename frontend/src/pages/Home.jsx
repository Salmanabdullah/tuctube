import React from "react";
import SearchBar from "../components/SearchBar";
import LeftSideBar from "../components/LeftSideBar";
import DisplayVideos from "../components/DisplayVideos"; 

const Home = () => {
  return (
    <div>
      <SearchBar />
      <LeftSideBar />
      <DisplayVideos />
    </div>
  );
};

export default Home;
