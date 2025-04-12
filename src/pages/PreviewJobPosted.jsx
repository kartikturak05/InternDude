import React from "react";
import { FaMapMarkerAlt, FaDollarSign, FaClock, FaPen, FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { IoCashOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

const PreviewJobPosted = () => {

    const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto p-6 bg-white mt-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Preview Job Posting
          </h1>
          <p className="text-gray-500">
            Review your job posting before publishing
          </p>
        </div>

        <div className="rounded-xl mb-4 shadow-xl shadow-gray-300" >
          <div className="p-6 border-b flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Senior Frontend Developer
              </h2>
              <p className="text-gray-600 mt-1">TechCorp Solutions</p>
              <div className="flex items-center mt-2 text-gray-500">
                <FaMapMarkerAlt className="mr-2" />
                <span>San Francisco, CA (Hybrid)</span>
              </div>
            </div>
            <button className="text-gray-400">
              <FaPen size={18} />
            </button>
          </div>

          <div className="p-6 border-b flex justify-between items-center">
            <div className="flex space-x-8">
              <div className="flex items-center mr-10">
                <IoCashOutline  className="text-gray-600 mr-4" size={20}/>
                <div>
                  <p className="text-lg text-gray-500">Salary</p>
                  <p className="font-medium">$120,000 - $180,000</p>
                </div>
              </div>

              <div className="flex items-center mr-10">
                <CiCalendarDate  className="text-gray-600 mr-2" size={25}/>
                <div>
                  <p className="text-lg text-gray-500">Job Type</p>
                  <p className="font-medium">Full-time</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaClock className="text-gray-400 mr-2" size={20}/>
                <div>
                  <p className="text-lg text-gray-500">Experience</p>
                  <p className="font-medium">5+ years</p>
                </div>
              </div>
            </div>
            <button className="text-gray-400">
              <FaPen size={18} />
            </button>
          </div>

          <div className="p-6 border-b flex justify-between">
            <div className="w-full">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800">
                  About the Role
                </h3>
                <button className="text-gray-400">
                  <FaPen size={18} />
                </button>
              </div>
              <p className="text-gray-700  text-lg">
                We are seeking an experienced Senior Frontend Developer to join
                our dynamic team. You will be responsible for building and
                maintaining high-quality web applications, mentoring junior
                developers, and contributing to technical decisions that shape
                our products.
              </p>
            </div>
          </div>

          <div className="p-6 border-b flex justify-between">
            <div className="w-full">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800">
                  Requirements
                </h3>
                <button className="text-gray-400">
                  <FaPen size={18} />
                </button>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
                <li>
                  5+ years of experience with modern JavaScript frameworks
                  (React, Vue, Angular)
                </li>
                <li>
                  Strong understanding of web fundamentals (HTML5, CSS3,
                  JavaScript)
                </li>
                <li>
                  Experience with state management solutions (Redux, Vuex)
                </li>
                <li>Knowledge of modern build tools and workflows</li>
                <li>Excellent problem-solving and communication skills</li>
              </ul>
            </div>
          </div>

          <div className="p-6 flex justify-between">
            <div className="w-full">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800">Benefits</h3>
                <button className="text-gray-400">
                  <FaPen size={18} />
                </button>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700  text-lg">
                <li>Competitive salary and equity package</li>
                <li>Comprehensive health, dental, and vision insurance</li>
                <li>Flexible working hours and remote work options</li>
                <li>Professional development budget</li>
                <li>Generous paid time off and parental leave</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6 mb-10">
        <button className="flex items-center text-gray-600 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer"
        onClick={()=> navigate("/employer/PostOpportunity/PostNewJob")}>
          <FaChevronLeft className="mr-2" />
          Back
        </button>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
          onClick={() => navigate("/employer/PostOpportunity/PreviewJobPosted/success")}
        >
          Post Job
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default PreviewJobPosted;
