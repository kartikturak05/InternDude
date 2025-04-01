import { div } from "framer-motion/client";
import React, { useState } from "react";
import { BsGiftFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { GrFormSchedule } from "react-icons/gr";
import { MdOutlineEventAvailable } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { MdOutlineManageSearch } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";

const EmployeeNavigator = ({ showContent, setShowContent }) => {
  return (
    <div className="w-full flex items-center justify-start gap-6 bg-white text-black p-4 shadow-md">
      <div
        className={`hover:border-b-2 border-blue-800 cursor-pointer px-4 py-2 ${
          showContent === "DashBoard" ? "border-b-2 border-blue-800" : ""
        }`}
        onClick={() => setShowContent("DashBoard")}
      >
        Dashboard
      </div>
      <div
        className={`hover:border-b-2 border-blue-800 cursor-pointer px-4 py-2 ${
          showContent === "Jobs" ? "border-b-2 border-blue-800" : ""
        }`}
        onClick={() => setShowContent("Jobs")}
      >
        Jobs
      </div>
      <div
        className={`hover:border-b-2 border-blue-800 cursor-pointer px-4 py-2 ${
          showContent === "Applications" ? "border-b-2 border-blue-800" : ""
        }`}
        onClick={() => setShowContent("Applications")}
      >
        Applications
      </div>
      <div
        className={`hover:border-b-2 border-blue-800 cursor-pointer px-4 py-2 ${
          showContent === "Freelance Project"
            ? "border-b-2 border-blue-800"
            : ""
        }`}
        onClick={() => setShowContent("Freelance Project")}
      >
        Freelance Project
      </div>
      <div
        className={`hover:border-b-2 border-blue-800 cursor-pointer px-4 py-2 ${
          showContent === "Analytics" ? "border-b-2 border-blue-800" : ""
        }`}
        onClick={() => setShowContent("Analytics")}
      >
        Analytics
      </div>
    </div>
  );
};

const DashBoard = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <div className="text-3xl font-semibold text-gray-800 text-left mb-6">
        Welcome back, <span className="text-blue-600">Tech Corp!</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex items-center gap-3  p-4 rounded-lg shadow hover:shadow-lg transition">
          <div className="p-3 bg-blue-100 rounded-lg">
            <BsGiftFill className="text-blue-600 text-2xl" />
          </div>
          <div>
            <div className="text-xl font-bold">5</div>
            <div className="text-gray-600 text-md">Active Job Openings</div>
          </div>
        </div>

        <div className="flex items-center gap-3  p-4 rounded-lg shadow hover:shadow-lg transition">
          <div className="p-3 bg-blue-100 rounded-lg">
            <IoPeopleSharp className="text-blue-600 text-3xl " />
          </div>
          <div>
            <div className="text-xl font-bold">250</div>
            <div className="text-gray-600 text-md">Total Applications</div>
          </div>
        </div>

        <div className="flex items-center gap-3  p-4 rounded-lg shadow hover:shadow-lg transition">
          <div className="p-3 bg-blue-100 rounded-lg">
            <GrFormSchedule className="text-blue-600 text-3xl" />
          </div>
          <div>
            <div className="text-xl font-bold">12</div>
            <div className="text-gray-600 text-md">Interviews Scheduled</div>
          </div>
        </div>

        <div className="flex items-center gap-3  p-4 rounded-lg shadow hover:shadow-lg transition">
          <div className="p-3 bg-blue-100 rounded-lg">
            <MdOutlineEventAvailable className="text-blue-600 text-3xl" />
          </div>
          <div>
            <div className="text-xl font-bold">15</div>
            <div className="text-gray-600 text-md">Available Projects</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">
      {/* Post New Job */}
      <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
        <IoMdAdd className="text-blue-600 text-3xl" />
        <div className="text-gray-800 font-semibold">Post New Job</div>
      </div>

      {/* Boost Listing */}
      <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
        <HiOutlineRocketLaunch className="text-green-600 text-3xl" />
        <div className="text-gray-800 font-semibold">Boost Listing</div>
      </div>

      {/* Manage Listing */}
      <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
        <MdOutlineManageSearch className="text-orange-600 text-3xl" />
        <div className="text-gray-800 font-semibold">Manage Listing</div>
      </div>

      {/* View Application */}
      <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
        <MdPeopleAlt className="text-purple-600 text-3xl" />
        <div className="text-gray-800 font-semibold">View Applications</div>
      </div>

      {/* View Projects */}
      <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
        <IoIosTimer className="text-red-600 text-3xl" />
        <div className="text-gray-800 font-semibold">View Projects</div>
      </div>
    </div>
    </div>
  );
};

const Jobs = () => {
  return (
    <div className="flex items-center justify-center w-full h-96  mt-10">
      <h1 className="text-3xl font-bold">Jobs Section</h1>
    </div>
  );
};

const Applications = () => {
  return (
    <div className="flex items-center justify-center w-full h-96  mt-10">
      <h1 className="text-3xl font-bold">Applications Section</h1>
    </div>
  );
};

const FreelanceProject = () => {
  return (
    <div className="flex items-center justify-center w-full h-96  mt-10">
      <h1 className="text-3xl font-bold">Freelance Project Section</h1>
    </div>
  );
};

const Analytics = () => {
  return (
    <div className="flex items-center justify-center w-full h-96  mt-10">
      <h1 className="text-3xl font-bold">Analytics Section</h1>
    </div>
  );
};

const EmployerHome = () => {
  const [showContent, setShowContent] = useState("DashBoard");
  return (
    <div>
      <EmployeeNavigator
        showContent={showContent}
        setShowContent={setShowContent}
      />

      {showContent === "DashBoard" && <DashBoard />}
      {showContent === "Jobs" && <Jobs />}
      {showContent === "Applications" && <Applications />}
      {showContent === "Freelance Project" && <FreelanceProject />}
      {showContent === "Analytics" && <Analytics />}
    </div>
  );
};

export default EmployerHome;
