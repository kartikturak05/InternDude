import React from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const FindYourJobs = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-12 mb-30 w-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full px-6 lg:px-10">
        {/* Left side content */}
        <div className="flex flex-col justify-between space-y-3 max-w-lg text-center lg:text-left lg:mr-15">
          <h1 className="text-3xl lg:text-5xl font-bold text-blue-900">
            Find Your Perfect
          </h1>
          <h2 className="text-3xl lg:text-5xl font-bold text-blue-900">
            Internship or Job
          </h2>
          <p className="text-3xl lg:text-5xl font-bold text-blue-900">
            Instantly
          </p>
          <p className="text-md lg:text-lg text-gray-600 font-semibold mt-3">
            AI-powered matching helps you apply smarter, faster, and
            stress-free.
          </p>
          <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-4 mt-4">
            <button
              className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
              onClick={() => navigate("/Internships")}
            >
              Find Internship/Jobs
            </button>
            <button className="text-blue-800 font-semibold border border-blue-700 px-6 py-3 rounded-lg hover:bg-gray-400">
              Upload Resume & Get Matches
            </button>
          </div>
        </div>

        {/* Right side content */}
        <div className="w-auto h-auto mt-7">
          <img
            src="home.jpg"
            alt="Find Jobs"
            className="w-full max-w-[698px] h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FindYourJobs;
