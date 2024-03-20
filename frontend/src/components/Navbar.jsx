import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoReorderThreeOutline, IoSearchOutline } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../assets/tuctube.svg";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-row fixed w-full bg-indigo-400">
      <div className="flex basis-1/4 w-20 gap-6 p-2 pl-8">
        <div className="text-5xl">
          <button>
            <IoReorderThreeOutline />
          </button>
        </div>
        <div className="flex">
          <img src={logo} alt="My Logo" className="h-12 w-12 p-1" />
          <p className="text-4xl pb-2">TucTube</p>
        </div>
      </div>
      <div className="flex basis-1/2 rounded-full pt-2 pb-4 gap-4 ">
        <div className="flex w-full">
          <input
            className="border border-black-400 rounded-tl-full rounded-bl-full p-2 w-full"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="w-20 rounded-tr-full rounded-br-full flex items-center justify-center text-2xl border-black-400 border p-1.5">
            <IoSearchOutline
              onClick={() => navigate(`/search?q=${searchQuery}`)}
            />
          </button>
        </div>
        <div className="text-4xl rounded-full p-1 cursor-pointer">
          <MdKeyboardVoice />
        </div>
      </div>
      <div className="flex basis-1/4 gap-4 items-center justify-end ">
        <div className="text-2xl cursor-pointer">
          <BsThreeDotsVertical />
        </div>
        <div className="flex items-center gap-2 border border-black-400 p-1 pr-3 pl-3 mr-4 rounded-2xl cursor-pointer">
          <FaRegUserCircle className="text-3xl" />
          <p>Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
