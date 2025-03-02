import React from "react";
import SearchBar from "./SearchBar";

const FindYourJobs = () => {
  return (
    <div className="pt-12 mb-30 w-auto">
        <div className="flex flex-row items-center justify-center w-full px-10">

          {/* Left side content */}
          <div className="flex flex-col justify-between space-y-3 max-w-lg mr-15">
            <h1 className="text-5xl font-bold text-blue-900">Find Your Perfect</h1>
            <h2 className="text-5xl font-bold text-blue-900">Internship or Job</h2>
            <p className="text-5xl font-bold text-blue-900">Instantly</p>
            <p className="text-lg text-gray-600 font-semibold mt-3">
              AI-powered matching helps you apply smarter, faster, and stress-free.
            </p>
            <div className="flex space-x-4 mt-4">
              <button className="bg-blue-800 text-white px-7 py-3 rounded-lg hover:bg-blue-700">
                Find Internship/Jobs
              </button>
              <button className=" text-blue-800 font-semibold border-1 border-blue-700  px-4 py-2 rounded-lg hover:bg-gray-400  ">
                Upload Resume & Get Matches
              </button>
            </div>
          </div>

          {/* Right side content */}
          <div className="w-auto h-auto mt-7">
            <img src="home.jpg" alt="Find Jobs" className="w-[698px] h-[409px] object-cover rounded-lg shadow-lg" />
          </div>
        </div>
    </div>
  );
};

export default FindYourJobs;
