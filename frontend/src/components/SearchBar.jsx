import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex border-2 border-sky-400 rounded-xl w-1/2">
      <input
        className="border-2 border-sky-400 rounded-xl w-5/6 p-4 pr-8"
        type="text"
        placeholder="Search"
      />
      <button className=" w-1/6 rounded-xl flex items-center justify-center text-3xl">
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default SearchBar;
