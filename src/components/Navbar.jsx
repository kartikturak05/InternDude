import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import SetPreference from "./SetPreference";

const Navbar = ({ setShowOptions, showOptions }) => {
  const [Internship, setInternship] = useState(false);
  const [Jobs, setJobs] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (Internship) {
      setShowOptions("Internship");
    } else if (Jobs) {
      setShowOptions("Jobs");
    }
  }
    , [Internship, Jobs]);
  return (
    <div className="">
      <div className="w-full bg-white shadow-md">
        <div className="container mx-auto flex justify-around items-center pt-4 pl-5 pr-5 pb-2">
          <div className="flex justify-between items-center">
            <img
              src="Logo.png"
              className="w-full h-14 text-lg text-gray-900 font-normal cursor-pointer hover:text-gray-700  mr-5"
              onClick={() => navigate("/")}
            />
            <div
              className={`text-base flex items-center text-gray-900 font-normal pt-2 pb-2 pl-5 pr-5 rounded-xl cursor-pointer hover:text-gray-700 hover:font-semibold ${
                showOptions === "Internship" ? "bg-gray-300 text-blue-800" : ""
              }`}
              onClick={() => {
                setShowOptions("Internship");
                setJobs(false);
                setInternship(!Internship);
              }}
            >
              Internship <IoIosArrowDown size={20} />
            </div>
            <div
              className={`text-base flex items-center text-gray-900 font-normal pt-2 pb-2 pl-5 pr-5 rounded-xl cursor-pointer hover:text-gray-700 hover:font-semibold ${
                showOptions === "Jobs" ? "bg-gray-300 text-blue-800" : ""
              }`}
              onClick={() => {
                setShowOptions("Jobs");
                setInternship(false);
                setJobs(!Jobs);
              }}
            >
              Jobs <IoIosArrowDown size={20} />
            </div>
            <div className="text-base text-gray-900 font-normal pt-2 pb-2 pl-5 pr-5 cursor-pointer hover:text-gray-700 hover:font-semibold">
              Courses
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className=" pl-2 pr-2 pt-1 pb-1 border-1 text-center border-[#1F509A] rounded-sm  text-[#1F509A] mr-5 text-base font-bold cursor-pointer hover:text-gray-700 ">
              Contact Us
            </div>
            <div
              className="pl-8 pr-8 pt-1 pb-1 bg-blue-800 text-white font-bold rounded-sm text-base cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </div>
            <select
              name="profile"
              id=""
              className="text-base text-gray-900 font-normal pt-2 pb-2 pl-5 pr-1 cursor-pointer hover:text-gray-700"
            >
              <option value="For Employeer">For Employeer</option>
              <option value="For Student">For Student</option>
            </select>
          </div>
        </div>
      </div>
      {console.log(showOptions)}
      {showOptions === "Internship" && <SetPreference />}
      {showOptions === "Jobs" && <SetPreference />}
    </div>
  );
};

export default Navbar;
