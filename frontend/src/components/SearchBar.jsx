import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoReorderThreeOutline, IoSearchOutline } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import logo from "../assets/tuctube.svg";


const SearchBar = () => {
  return (
    <div className="flex p-4">
      <div className="flex w-64 gap-8">
        <div className="text-4xl p-2">
          <button>
            <IoReorderThreeOutline />
          </button>
        </div>
        <div>
          <img
            src={logo}
            alt="My Logo"
            className="border-sky-400 h-12 w-12 p-1"
          />
        </div>
      </div>
      <div className="flex border-2 border-sky-400 rounded-xl w-1/2 items-center justify-center">
        <input
          className="border-2 border-sky-400 rounded-xl w-5/6 p-4 pr-8"
          type="text"
          placeholder="Search"
        />
        <button className=" w-1/6 rounded-xl flex items-center justify-center text-3xl">
          <IoSearchOutline />
        </button>
        <div className="text-3xl">
          <MdKeyboardVoice />
        </div>
      </div>

      <div className="flex flex-row gap-12 items-center justify-center float-right">
        <div className="">
          <BsThreeDotsVertical />
        </div>
        <div className="flex flex-row gap-4">
          <FaRegUserCircle />
          Sign in
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
