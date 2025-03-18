import React from "react";
import { FaBell } from "react-icons/fa";

const JobNotification = () => {
  return (
    <div className="bg-blue-800 text-white py-10 px-5 rounded-lg mt-20 mx-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 max-w-md">
          <h2 className="text-2xl font-bold">Never Miss an Opportunity</h2>
          <p className="text-lg">
            Get personalized job alerts and bookmark your favorite positions.
          </p>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto space-y-3 sm:space-y-0 sm:space-x-4 mt-3">
            <button className="bg-white text-blue-600 px-5 py-3 rounded-lg font-semibold shadow-lg w-full sm:w-auto">
              Set Job Alerts
            </button>
            <button className="border border-white px-5 py-3 rounded-lg font-semibold shadow-lg w-full sm:w-auto">
              Browse All Jobs
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 bg-white p-5 rounded-lg shadow-lg w-full md:w-auto">
          <FaBell className="text-4xl text-black" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-black">
              New Job Alert
            </span>
            <span className="text-sm text-black">
              3 new jobs match your profile
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobNotification;
