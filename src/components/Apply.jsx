import React from "react";
import { FaLocationDot, FaRegMoneyBill1 } from "react-icons/fa6";
import { IoBagSharp, IoTimeSharp } from "react-icons/io5";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Footer from "./Footer";

const Apply = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center p-10 bg-white shadow-md rounded-lg w-6xl mx-auto mt-10">
        {/* Job Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-1">
          Social Media Assistant
        </h2>
        <p className="text-gray-600 mb-4 text-xl">Connex India</p>

        {/* Job Details */}
        <div className="w-full space-y-4">
          <div className="flex justify-between items-center pr-80">
            <div className="flex items-center gap-2 text-gray-700">
              <FaLocationDot />
              <span>Delhi</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <IoBagSharp />
              <span>Full-time (40hrs/week)</span>
            </div>
          </div>

          <div className="flex justify-between items-center pr-90   ">
            <div className="flex items-center gap-2 text-gray-700">
              <IoTimeSharp />
              <span>6 months duration</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaRegMoneyBill1 />
              <span>Rs. 5000/month</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-red-500">
            <FaLocationDot />
            <span>Application Deadline: 3 days left</span>
          </div>
        </div>

        {/* Apply Button */}
        <button className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Apply Now
        </button>

        {/* Application Steps */}
        <div className="mt-10 w-full">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Application Process
          </h3>
          <div className="grid grid-cols-4 gap-4 text-center">
            {[
              "Resume & Cover Letter",
              "Personal Details",
              "Additional Questions",
              "Review",
            ].map((step, index) => (
              <div key={index} className="flex items-center text-gray-700">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full mb-2 mr-2">
                  {index + 1}
                </div>
                <span className="text-lg text-blue-900 font-semibold mb-2">
                  {step}
                </span>
              </div>
            ))}
          </div>

          <label
              htmlFor="Resume"
              className="block text-lg font-semibold text-gray-700 mb-2 mt-5"
            >
              Step1: Upload Resume & Cover Letter
            </label>
          <div className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-6 text-gray-600 hover:border-blue-600 transition mt-5">
            <div>
              <FaCloudDownloadAlt size={40} />
            </div>
            <p className="text-lg">Drag and drop your resume here, or</p>
            <label className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md cursor-pointer hover:bg-blue-700 transition">
              Upload Resume
              <input type="file" className="hidden" />
            </label>
          </div>

          {/* Cover Letter */}
          <div className="w-full mt-5">
            <label
              htmlFor="coverLetter"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              className="w-full h-40 border-2 border-gray-300 rounded-lg p-4 text-gray-700 resize-none focus:outline-none focus:border-blue-600 transition"
              placeholder="Write a compelling cover letter to showcase your skills..."
            ></textarea>
          </div>

          <div className="w-40 pt-1 pb-1 pl-3 pr-2 text-blue-700 border-1 text-lg rounded-xl mt-5">
            Use AI Template
          </div>

          {/* Step 2  */}
          {/* Step 2: Personal & Work Preference */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Step 2: Personal & Work Preference
            </h2>

            {/* Education */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Education
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="University"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Degree"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Skills
              </label>
              <input
                type="text"
                placeholder="Add Your Skills (e.g. JavaScript, React, Node.js)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Availability */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Availability
              </label>
              <div className="flex items-center gap-4 w-full">
                <input
                  type="date"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                />
                <select
                  name="availability"
                  id="availability"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                >
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Step 3: Additional Questions */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Step 3: Additional Questions
            </h2>

            {/* Internship Interest */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Why are you interested in this internship?
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                rows="4"
                placeholder="Write your answer here..."
              ></textarea>
            </div>

            {/* Portfolio Links */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Portfolio Links
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-2"
                placeholder="GitHub Profile"
              />
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="LinkedIn Profile"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
              Submit Application
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Apply;
