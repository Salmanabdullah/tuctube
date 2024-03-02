import React from "react";
import { GoHome } from "react-icons/go";
import { GrHistory } from "react-icons/gr";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

const LeftSideBar = () => {
  return (
    <div className="flex flex-col w-28 p-4 absolute left-0 top-20 gap-8">
      <div className="grid items-center justify-center rounded-xl cursor-pointer">
        <button className="flex items-center justify-center text-2xl">
          <GoHome />
        </button>
        <p>Home</p>
      </div>
      <div className="grid items-center justify-center rounded-xl cursor-pointer">
        <button className="flex items-center justify-center text-2xl">
          <SiYoutubeshorts />
        </button>
        <p>Shorts</p>
      </div>
      <div className="grid items-center justify-center rounded-xl cursor-pointer">
        <button className="flex items-center justify-center text-2xl">
          <MdOutlineSubscriptions />
        </button>
        <p>Subscriptions</p>
      </div>
      <div className="grid items-center justify-center rounded-xl cursor-pointer">
        <button className="flex items-center justify-center text-2xl">
          <GrHistory />
        </button>
        <p>History</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
