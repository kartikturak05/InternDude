import React from 'react';

const BoostYourChances = () => {
  return (
    <div className="pt-12 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-10">

        {/* Left side content */}
        <div className="flex flex-col space-y-4 max-w-xl md:mr-16">
          <h1 className="text-3xl font-bold  text-gray-800">Struggling to Land Interviews?</h1>
          <p className="text-md text-gray-600 font-semibold mt-2">
            Boost your chances with these quick actions.
          </p>

          <div className="flex flex-col gap-4 w-full mt-3">
            <button className="text-gray-800 font-semibold border border-gray-700 px-4 py-3 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-300 w-full text-left hover:scale-105">
              Optimize Your Resume
            </button>
            <button className="text-gray-800 font-semibold border border-gray-700 px-4 py-3 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-300 w-full text-left hover:scale-105">
              Check Best Time To Apply
            </button>
            <button className="text-gray-800 font-semibold border border-gray-700 px-4 py-3 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-300 w-full text-left hover:scale-105">
              Find Hidden Internship
            </button>
          </div>
        </div>

        {/* Right side content */}
        <div className="w-full md:w-auto h-auto mt-7">
          <img src="boostCarrier.png
          " alt="Find Jobs" className="w-[350px] md:w-[400px] lg:w-[698px] h-[509px] object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default BoostYourChances;
