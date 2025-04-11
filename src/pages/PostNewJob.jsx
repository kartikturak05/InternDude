import React, { useState } from "react";
import {
  FaBriefcase,
  FaMoneyBillWave,
  FaUser,
  FaQuestionCircle,
  FaBuilding,
  FaChevronLeft,
} from "react-icons/fa";
import { BsCalendar, BsGeoAlt, BsClock, BsPlusCircle } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { AiOutlineUpload } from "react-icons/ai";
import { div } from "framer-motion/client";
import Footer from "../components/Footer";

const PostNewJob = () => {
  const [requiredSkills, setRequiredSkills] = useState([
    "React",
    "Figma",
    "Communication",
  ]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setRequiredSkills([...requiredSkills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setRequiredSkills(
      requiredSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  const [logo, setLogo] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setLogo(URL.createObjectURL(file));
    } else {
      alert("Please upload a JPG or PNG file");
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto  mt-10">
        <div className="text-3xl font-bold text-gray-800 mb-4 ml-20">
          Add Job Details
        </div>
        <div className="max-w-7xl mx-auto pb-6">
          {/* Basic Information Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-6">
              <FaBriefcase className="text-gray-500 mr-2" size={25} />
              <h2 className="text-xl font-semibold">Basic Information</h2>
            </div>

            <div className="mb-4">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input
                type="text"
                placeholder="e.g., UI/UX Designer – Junior Level"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                  <option value="">Select job type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Work Mode
                </label>
                <div className="flex space-x-4 mt-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="remote"
                      name="workMode"
                      className="mr-2"
                    />
                    <label htmlFor="remote" className="text-md text-gray-700">
                      Remote
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="onsite"
                      name="workMode"
                      className="mr-2"
                    />
                    <label htmlFor="onsite" className="text-md text-gray-700">
                      On-site
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="hybrid"
                      name="workMode"
                      className="mr-2"
                    />
                    <label htmlFor="hybrid" className="text-md text-gray-700">
                      Hybrid
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Location
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BsGeoAlt className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Joining Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BsCalendar className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Select date"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Compensation & Timing Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-6">
              <FaMoneyBillWave className="text-gray-500 mr-2" size={25} />
              <h2 className="text-xl font-semibold">Compensation & Timing</h2>
            </div>

            <div className="mb-4">
              <label className="block text-md font-medium text-gray-700 mb-1">
                CTC Range
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Min"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span>-</span>
                <input
                  type="text"
                  placeholder="Max"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>monthly</option>
                  <option>annually</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Probation Period
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select period</option>
                  <option value="1">1 month</option>
                  <option value="2">2 months</option>
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                </select>
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Working Hours
                </label>
                <div className="flex items-center space-x-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BsClock className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Start time"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <span>to</span>
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BsClock className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="End time"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description & Skills Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-6">
              <IoMdInformationCircleOutline
                className="text-gray-500 text-xl mr-2"
                size={25}
              />
              <h2 className="text-xl font-semibold">
                Job Description & Skills
              </h2>
            </div>

            <div className="mb-4">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Job Description
              </label>
              <textarea
                rows="6"
                placeholder="Enter job description, roles, responsibilities..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Required Skills
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {requiredSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full flex items-center"
                  >
                    <span className="text-md text-gray-800">{skill}</span>
                    <button
                      onClick={() => removeSkill(skill)}
                      className="ml-1 text-gray-500 hover:text-gray-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Add skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // onKeyDown={addSkill}
                  />
                  <button
                    onClick={addSkill}
                    className="bg-gray-200 px-2 rounded-r-md hover:bg-gray-300 ml-1 font-semibold text-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-md font-medium text-gray-700 mb-1">
                Preferred Skills (Optional)
              </label>
              <input
                type="text"
                placeholder="Add preferred skills"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Hiring Requirements Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-6">
              <FaUser className="text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold">Hiring Requirements</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Number of Openings
                </label>
                <input
                  type="text"
                  placeholder="Enter number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Experience Required
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Education Qualification
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select qualification</option>
                <option value="high-school">High School</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>

            <div>
              <label className="block text-md font-medium text-gray-700 mb-1">
                Who Can Apply?
              </label>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <input type="checkbox" id="fresher" className="mr-2" />
                  <label htmlFor="fresher" className="text-md text-gray-700">
                    Fresher-friendly
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="experienced" className="mr-2" />
                  <label
                    htmlFor="experienced"
                    className="text-md text-gray-700"
                  >
                    Experienced only
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="graduation" className="mr-2" />
                  <label htmlFor="graduation" className="text-md text-gray-700">
                    Specific graduation years
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Screening Questions Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-6">
              <FaQuestionCircle className="text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold">
                Screening Questions (Optional)
              </h2>
            </div>

            <button className="flex items-center text-blue-600 hover:text-blue-800">
              <BsPlusCircle className="mr-1" />
              <span>Add Question</span>
            </button>
          </div>

          {/* Company Information Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-6">
              <FaBuilding className="text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold">Company Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              {/* Upload Section */}
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Company Logo
                </label>

                {logo ? (
                  <img
                    src={logo}
                    alt="Company Logo Preview"
                    className="mt-4 w-32 h-32 object-contain border rounded-md"
                  />
                ) : (
                    <label className="border border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition">
                    <AiOutlineUpload className="text-gray-400 text-3xl mb-2" />
                    <span className="text-blue-600 hover:text-blue-800 font-medium">
                      Upload Logo
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      Supported formats: JPG, PNG
                    </p>
  
                    {/* Hidden file input */}
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                )}

               

                {/* Show Preview if selected */}
                
              </div>

              {/* Textarea Section */}
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  About Company
                </label>
                <textarea
                  rows="6"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Website
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <button className="flex items-center text-gray-600 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <FaChevronLeft className="mr-2" />
              Back
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Preview Job
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostNewJob;
