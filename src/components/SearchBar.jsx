import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex justify-around items-center bg-white shadow-lg px-5 py-5 rounded-full">
      {/* Enter Skills Input */}
      <div className="flex items-center text-[#486B9F] font-medium w-auto">
        <CiSearch className="text-[#486B9F] mr-2" size={27} />
        <input
          type="text"
          placeholder="Enter skills / designations / companies"
          className=" w-full outline-none bg-transparent text-[#486B9F] placeholder-[#486B9F] text-medium font-medium"
        />
      </div>

      {/* Divider Line */}
      <div className="h-5 w-[2px] bg-gray-300 ml-5 mr-5"></div>

      {/* Select Experience */}
      <div className="flex items-center text-[#486B9F] font-medium">
        <select
          name="Experience"
          id="Experience"
          className="outline-none bg-transparent"
        >
          <option value="experience">Select Experience</option>
        </select>
      </div>

      {/* Divider Line */}
      <div className="h-5 w-[2px] bg-gray-300 ml-5 mr-5"></div>

      {/* Enter Location Input */}
      <input
        type="text"
        placeholder="Enter Location"
        className="outline-none bg-transparent text-[#486B9F] placeholder-[#486B9F] font-medium w-[130px] mr-[10px]"
      />

      {/* Search Button */}
      <div className="flex justify-around text-[#486B9F] font-medium rounded-full ">

        

        <div className="bg-blue-700 text-white px-7 py-1 rounded-full cursor-pointer">
          Search
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
