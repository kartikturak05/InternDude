import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import useStore from './store'; // Import the Zustand store

const SearchBar = () => {
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("All");
  
  const updateLocation = useStore((state) => state.updateLocation);

  useEffect(() => {
    if(location === ""){
      updateLocation("All"); // Update Zustand store with default location
    }
    updateLocation(location); // Update Zustand store with new location
    
  }, [location]);

  const handleClick = ()=>{
    console.log(skills, experience, location);
    updateLocation(location); // Update Zustand store with new location
  }
  return (
    <div className="flex justify-around items-center bg-white shadow-lg px-5 py-5 rounded-full">
      {/* Enter Skills Input */}
      <div className="flex items-center text-[#486B9F] font-medium w-auto">
        <CiSearch className="text-[#486B9F] mr-2" size={27} />
        <input
          type="text"
          placeholder="Enter skills / designations / companies"
          className=" w-full outline-none bg-transparent text-[#486B9F] placeholder-[#486B9F] text-medium font-medium"
          onChange={(e) => setSkills(e.target.value)}
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
          onChange={(e) => setExperience(e.target.value)}
        >
           <option value="experience">Select Experience</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
         
      </div>

      {/* Divider Line */}
      <div className="h-5 w-[2px] bg-gray-300 ml-5 mr-5"></div>

      {/* Enter Location Input */}
      <input
        type="text"
        placeholder="Enter Location"
        className="outline-none bg-transparent text-[#486B9F] placeholder-[#486B9F] font-medium w-[130px] mr-[10px]"
        onChange={(e) => setLocation(e.target.value)}
      />

      {/* Search Button */}
      <div className="flex justify-around text-[#486B9F] font-medium rounded-full ">

        

        <div className="bg-blue-700 text-white px-7 py-1 rounded-full cursor-pointer"
        onClick={handleClick}
        >
          Search
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
