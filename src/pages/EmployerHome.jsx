// Removed incorrect import of div
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
import { FaRegEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

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

const jobs = [
  { title: "UI/UX Intern", applications: 58, status: "Active" },
  { title: "Frontend Developer", applications: 42, status: "Active" },
  { title: "Content Writer", applications: 23, status: "Under Review" },
];

const applicants = [
  {
    name: "Alex Thompson",
    profileImage:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "UI/UX Intern",
    time: "2 hours ago",
  },
  {
    name: "Jessica Lee",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1690086519096-0594592709d3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Frontend Developer",
    time: "3 hours ago",
  },
  {
    name: "Ryan Martinez",
    profileImage:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Content Writer",
    time: "5 hours ago",
  },
];

const interviews = [
  {
    name: "Sarah Johnson",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1693000696650-e73643956033?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "UI/UX Intern",
    time: "10:30 AM",
    date: "Nov 15",
  },
  {
    name: "Michael Chen",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Frontend Developer",
    time: "2:00 PM",
    date: "Nov 15",
  },
  {
    name: "Emily Davis",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1688739379441-fa764e016555?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Content Writer",
    time: "11:00 PM",
    date: "Nov 16",
  },
];

const metrics = [
  { label: "Job Views", value: "1,234", trend: "+12.5%", icon: <FaArrowUp /> },
  {
    label: "Application Rate",
    value: "24.8%",
    trend: "+5.3%",
    icon: <FaArrowUp />,
  },
  {
    label: "Time to Hire",
    value: "12 Days",
    trend: "-2.3%",
    icon: <FaArrowDown />,
  },
];

const DashBoard = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen p-6">
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

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10 mb-10">
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

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-grow lg:w-2/3">
            {/* Active Job Postings */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Active Job Postings
                </h2>
                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition">
                  + New Job
                </button> */}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 text-gray-600 font-medium">
                        Job Title
                      </th>
                      <th className="text-left py-3 px-2 text-gray-600 font-medium">
                        Applications
                      </th>
                      <th className="text-left py-3 px-2 text-gray-600 font-medium">
                        Status
                      </th>
                      <th className="text-left py-3 px-2 text-gray-600 font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-4 px-3">{job.title}</td>
                        <td className="py-4 px-3">
                          <span className=" rounded-full px-3 py-1 ">
                            {job.applications} Applicants
                          </span>
                        </td>
                        <td className="py-4 px-3">
                          <span
                            className={`rounded-full px-3 py-1  ${
                              job.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : job.status === "Closing Soon"
                                ? "bg-orange-100 text-orange-800"
                                : ""
                            }`}
                          >
                            {job.status}
                          </span>
                        </td>
                        <td className="py-4 px-3">
                          <div className="flex gap-3">
                            <button className="hover:text-gray-500 text-blue-600 cursor-pointer">
                              <FaRegEye size={18} />
                            </button>
                            <button className="hover:text-gray-500 text-blue-600 cursor-pointer">
                              <FaRegEdit size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Applications */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Recent Applications
                </h2>
                {/* <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                  View All
                </button> */}
              </div>

              <div className="space-y-4">
                {applicants.map((applicant, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition"
                  >
                    <div className="flex gap-4 items-center">
                      <img
                        src={applicant.profileImage}
                        alt={applicant.name}
                        className="w-10 h-10 rounded-full bg-gray-200"
                      />
                      <div>
                        <div className="font-medium text-gray-800">
                          {applicant.name}
                        </div>
                        <div className=" text-gray-500">
                          Applied for {applicant.job}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className=" text-gray-500">
                        {applicant.time}
                      </span>
                      <button className="text-blue-500  pt-1 pb-1 pl-2 pr-2 border-1 border-blue-900 rounded-lg cursor-pointer">
                        View
                      </button>
                      <button className=" pt-1 pb-1 pr-2 pl-2 bg-blue-800 text-white rounded-lg cursor-pointer">
                        Shortlist
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3">
            {/* Upcoming Interviews */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Upcoming Interviews
                </h2>
                <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                  Schedule
                </button>
              </div>

              <div className="space-y-4">
                {interviews.map((interview, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition"
                  >
                    <div className="flex gap-3 items-center">
                      <img
                        src={interview.profileImage}
                        alt={interview.name}
                        className="w-12 h-12 rounded-full bg-gray-200"
                      />
                      <div>
                        <div className="font-medium text-gray-800">
                          {interview.name}
                        </div>
                        <div className=" text-gray-500">
                          {interview.job}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-800">
                        {interview.time}
                      </div>
                      <div className=" text-gray-500">
                        {interview.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Performance Metrics
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <div className=" text-gray-500">
                        {metric.label}
                      </div>
                      <div className="font-semibold text-gray-800">
                        {metric.value}
                      </div>
                    </div>
                    <div className={`flex gap-2 items-center ${metric.trend[0] == '+'? 'text-green-500':'text-red-500'} `}>
                        {metric.icon}
                      <span className="font-medium">
                        {metric.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade to Premium */}
        <div className="flex justify-between items-center bg-blue-900 p-4 mt-6 rounded-lg shadow-md w-full">
          <div>
            <h3 className="text-2xl font-semibold text-white">Upgrade to Premium</h3>
            <p className=" text-xl mt-3 text-gray-400">
              Get more applications and premium features
            </p>
          </div>
          <button className="text-blue-900 bg-white text-xl px-3 py-2 rounded-lg cursor-poinrter">
            Upgrade Now
          </button>
        </div>
      </div>
    </>
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
