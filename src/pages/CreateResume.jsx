import React from "react";
import { FiDownload } from "react-icons/fi";
import { GrUpload } from "react-icons/gr";
import { RiGeminiFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import Footer from "../components/Footer";
import { MdOutlineDone } from "react-icons/md";
import { LiaSave } from "react-icons/lia";
import { FaRegEye } from "react-icons/fa";

const CreateResume = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center  bg-blue-900 text-white rounded-lg shadow-md p-10 w-full mx-auto">
        <div className="flecx flex-col justify-center items-center">
          <div className="text-6xl font-bold ">
            Build a Resume That Gets You Noticed
          </div>
          <div className="text-2xl text-center mt-2">
            Fill in your details , and we'll help you create a Professional
            resume
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center justify-between pt-2 pb-2 pl-4 pr-4 border-2 border-gray-300 rounded-lg shadow-md  cursor-pointer hover:shadow-lg transition-all mr-4">
              <div className="mr-2">
                <FiDownload />
              </div>
              <div>Download as PDF</div>
            </div>
            <div className="flex items-center justify-between pt-2 pb-2 pl-4 pr-4 border-2 border-gray-300 rounded-lg shadow-md  cursor-pointer hover:shadow-lg transition-all mr-4">
              <div className="mr-2">
                <GrUpload />
              </div>
              <div>Auto -Fill Profile</div>
            </div>
            <div className="flex items-center justify-between pt-2 pb-2 pl-4 pr-4 border-2 border-gray-300 rounded-lg shadow-md  cursor-pointer hover:shadow-lg transition-all mr-4">
              <div className="mr-2">
                <RiGeminiFill />
              </div>
              <div>AI Suggestions</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between mt-10 w-full px-6">
        {/* Left Section - Form */}
        <div className="bg-gray-100 h-auto w-[60%] flex flex-col gap-4 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Basic Information</h2>

          {/* Upload & Name Section */}
          <div className="flex items-center w-full gap-4">
            <div className="p-10 bg-white rounded-full cursor-pointer">
              <GrUpload size={20} />
            </div>
            <div className="flex flex-col w-full gap-2">
              <input
                className="border p-2 rounded bg-white"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="border p-2 rounded bg-white"
                type="text"
                placeholder="Location"
              />
            </div>
          </div>

          {/* Email & Phone Section */}
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center gap-2 w-full border mr-6 pl-3 pr-3 bg-white">
              <MdOutlineEmail size={20} />
              <input
                className=" p-2 rounded w-full outline-none"
                type="text"
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center gap-2 w-full border pl-3 pr-3 bg-white">
              <FaPhoneAlt size={18} />
              <input
                className=" p-2 rounded w-full outline-none"
                type="text"
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* Portfolio & LinkedIn */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 w-full border mr-6 pl-3 pr-3 bg-white">
              <MdOutlineEmail size={20} />
              <input
                className="p-2 rounded  w-full outline-none "
                type="text"
                placeholder="Portfolio Website"
              />
            </div>
            <div className="flex items-center gap-2 w-full border mr-6 pl-3 pr-3 bg-white">
              <FaLinkedinIn size={18} />
              <input
                className="p-2 rounded  w-full outline-none "
                type="text"
                placeholder="LinkedIn Profile"
              />
            </div>
          </div>

          {/* Professional Summary */}
          <h2 className="text-xl font-semibold">Professional Summary</h2>
          <textarea
            className="border p-2 rounded w-full h-24 resize-none bg-white"
            placeholder="Write a short summary..."
          ></textarea>

          {/* Work Experience */}
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-semibold">Work Experience</h2>
            <div className="flex items-center gap-2 cursor-pointer bg-blue-900 text-white rounded-lg pl-4 pr-4 pt-1 pb-1">
              <IoMdAdd size={20} />
              <span>Add Experience</span>
            </div>
          </div>

          {/* Experience Fields */}
          <div className="flex flex-col gap-4 bg-white p-5">
            <div className="flex items-center justify-between w-full gap-4">
              <input
                className="border p-2 rounded w-1/2"
                type="text"
                placeholder="Company Name"
              />
              <input
                className="border p-2 rounded w-1/2"
                type="text"
                placeholder="Job Title"
              />
            </div>
            <div className="flex items-center justify-between w-full gap-4">
              <input
                className="border p-2 rounded w-1/2"
                type="text"
                placeholder="Start Date"
              />
              <input
                className="border p-2 rounded w-1/2"
                type="text"
                placeholder="End Date"
              />
            </div>
            <textarea
              className="border p-2 rounded w-full h-20 resize-none"
              placeholder="Additional information..."
            ></textarea>

            <div className="flex items-center gap-2 cursor-pointer">
              <div className="text-blue-900 font-semibold">
                <IoMdAdd size={20} />
              </div>

              <span className="text-blue-900 font-semibold">
                Add Work Sample
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Preview */}
        <div className=" h-auto w-[40%] flex flex-col items-center p-6 rounded-lg ml-5">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-lg font-semibold">Preview</h2>
            <div className="flex items-center gap-4">
              <FaRegEdit size={20} className="cursor-pointer" />
              <LuDownload size={20} className="cursor-pointer" />
            </div>
          </div>

          <div className="w-full h-96 bg-gray-100 flex items-center justify-center text-lg font-semibold mt-4 rounded">
            Resume Preview
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-3 w-full px-6">
        {/* Auto-save message */}
        <div className="flex items-center gap-2 w-full justify-start text-gray-600">
          <div ><MdOutlineDone className="text-green-500" size={30} /></div>
          <span className="w-full">Auto-saved 2 minutes ago</span>
      

        {/* Buttons Section */}
        <div className="flex items-center justify-end mt-4 w-full gap-4 px-6 mb-10">
          <button className="flex items-center gap-2 px-4 py-2 border rounded cursor-pointer">
            <LiaSave size={18} />
            <span>Save Draft</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-2 border rounded cursor-pointer">
            <FaRegEye size={18} />
            <span>Preview</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-2 border rounded cursor-pointer">
            <FiDownload size={18} />
            <span>Download PDF</span>
          </button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
            Apply Now
          </button>
        </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateResume;
