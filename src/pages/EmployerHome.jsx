// Removed incorrect import of div
import React, { useState } from "react";
import { BsEye, BsGiftFill } from "react-icons/bs";
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
import { IoIosRocket } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineStock } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa6";
import { MdAvTimer } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";
import {
  Search,
  FileText,
  MessageCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { CgSortAz } from "react-icons/cg";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { Check, Copy } from "lucide-react";
import AnalyticsDashboard from "./AnalyticsDashboard";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

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
  const navigate = useNavigate();
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
          <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition cursor-pointer" onClick={()=> navigate("PostOpportunity")}>
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
                      <span className=" text-gray-500">{applicant.time}</span>
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
                        <div className=" text-gray-500">{interview.job}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-800">
                        {interview.time}
                      </div>
                      <div className=" text-gray-500">{interview.date}</div>
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
                      <div className=" text-gray-500">{metric.label}</div>
                      <div className="font-semibold text-gray-800">
                        {metric.value}
                      </div>
                    </div>
                    <div
                      className={`flex gap-2 items-center ${
                        metric.trend[0] == "+"
                          ? "text-green-500"
                          : "text-red-500"
                      } `}
                    >
                      {metric.icon}
                      <span className="font-medium">{metric.trend}</span>
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
            <h3 className="text-2xl font-semibold text-white">
              Upgrade to Premium
            </h3>
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
  const JobsData = [
    {
      title: "UI/UX Intern",
      applications: 58,
      status: "Active",
      DateOfPost: "2023-10-01",
    },
    {
      title: "Frontend Developer",
      applications: 42,
      status: "Active",
      DateOfPost: "2023-10-02",
    },
    {
      title: "Content Writer",
      applications: 23,
      status: "Under Review",
      DateOfPost: "2023-10-03",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center w-full h-auto mt-10 gap-6 px-4">
      {/* Job Listings */}
      <div className="w-full lg:w-[70%] bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Job Listings</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search jobs Title ..."
          className="w-full p-2 border rounded mb-4"
        />

        {/* Filters */}
        <div className="flex items-center justify-start gap-4 mb-4">
          <select className="p-2 border border-gray-500  rounded">
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Under Review">Under Review</option>
          </select>
          <select className="p-2 border border-gray-500 rounded">
            <option value="">Select Job Type</option>
          </select>
          <select className="p-2 border border-gray-500 rounded ">
            <option value="">Date Posted</option>
          </select>
        </div>

        {/* Job Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-500 bg-gray-100">
                <th className="text-left py-3 px-2 text-gray-700 font-medium">
                  Job Title
                </th>
                <th className="text-left py-3 px-2 text-gray-700 font-medium">
                  Applications
                </th>
                <th className="text-left py-3 px-2 text-gray-700 font-medium">
                  Status
                </th>
                <th className="text-left py-3 px-2 text-gray-700 font-medium">
                  Posted Date
                </th>
                <th className="text-left py-3 px-2 text-gray-700 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {JobsData.map((job, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-400 hover:bg-gray-50"
                >
                  <td className="py-4 px-3">{job.title}</td>
                  <td className="py-4 px-3">{job.applications} Applicants</td>
                  <td className="py-4 px-3">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        job.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : job.status === "Under Review"
                          ? "bg-yellow-100 text-yellow-800"
                          : ""
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="py-4 px-3">
                    {new Date(job.DateOfPost).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="py-4 px-3">
                    <div className="flex gap-3 text-blue-600">
                      <button className="hover:text-gray-500">
                        <FaRegEye size={18} />
                      </button>
                      <button className="hover:text-gray-500">
                        <FaRegEdit size={18} />
                      </button>
                      <button className="hover:text-gray-500">
                        <IoIosRocket size={18} />
                      </button>
                      <button className="hover:text-gray-500">
                        <RxCross1 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="w-full lg:w-[30%] bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-8">Performance Overview</h2>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="px-1 py-1 bg-indigo-100 text-indigo-900 rounded-lg">
              <BsEye size={30} className="text-indigo-600" />
            </div>
            <div>
              <p className="text-gray-500 ">Total Job Views</p>
              <p className="text-lg font-medium">2,456</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-1 py-1 bg-indigo-100 text-indigo-900 rounded-lg">
              <AiOutlineStock size={30} className="text-indigo-600" />
            </div>
            <div>
              <p className="text-gray-500 text-lg">Most Applied Job</p>
              <p className="text-lg font-medium">58</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-1 py-1 bg-indigo-100 text-indigo-900 rounded-lg">
              <FaRegStar size={30} className="text-indigo-600" />
            </div>
            <div>
              <p className="text-gray-500 text-lg">Best Performing</p>
              <p className="text-lg font-medium">Frontend Dev</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-1 py-1 bg-indigo-100 text-indigo-900 rounded-lg">
              <MdAvTimer size={30} className="text-indigo-500" />
            </div>
            <div>
              <p className="text-gray-500 text-lg">Avg. Applications</p>
              <p className="text-lg font-medium">45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Applications = () => {
  const applications = [
    {
      id: 1,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      position: "Senior UX Designer",
      department: "Design Team",
      dateApplied: "Nov 15, 2024",
      timeApplied: "2:30 PM",
      status: "New",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      position: "Frontend Developer",
      department: "Engineering",
      dateApplied: "Nov 14, 2024",
      timeApplied: "11:45 AM",
      status: "Reviewed",
    },
    {
      id: 3,
      name: "Emily Brown",
      email: "emily.brown@example.com",
      position: "Product Manager",
      department: "Product",
      dateApplied: "Nov 14, 2024",
      timeApplied: "9:15 AM",
      status: "Shortlisted",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded";
      case "Reviewed":
        return "bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded";
      case "Shortlisted":
        return "bg-green-500 text-white text-xs font-medium px-2 py-1 rounded";
      default:
        return "bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded";
    }
  };

  return (
    <div className="p-10 w-full mx-auto">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Applications</h1>
        <div className="flex items-center gap-3 px-5">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-1">
            {/* <span className="text-sm font-medium text-gray-700">JS</span> */}
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-full"
            />
          </div>
          <div>
            <p className="font-medium text-md">John Smith</p>
            <p className="text-md text-gray-500">HR Manager</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
            placeholder="Search by candidate, job title, or status..."
          />
        </div>

        <div className="flex-shrink-0">
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option value="">Job Title</option>
          </select>
        </div>

        <div className="flex-shrink-0">
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option value="">Status</option>
          </select>
        </div>

        <div className="flex-shrink-0">
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option value="">Date Applied</option>
          </select>
        </div>

        <div className="flex-shrink-0">
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option value="">Experience Level</option>
          </select>
        </div>
      </div>

      {/* Selection controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <input type="checkbox" id="selectAll" className="mr-2" />
            <label htmlFor="selectAll" className="text-sm">
              Select All
            </label>
          </div>
          <span className="text-sm text-gray-500">Selected: 0 items</span>
        </div>

        <div className="flex gap-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm">
            Shortlist Selected
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm">
            Reject Selected
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
            Message Selected
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="w-12 py-3 px-4">
                <input type="checkbox" />
              </th>
              <th
                scope="col"
                className="py-3 px-4 text-left text-sm font-medium text-gray-500"
              >
                Candidate
              </th>
              <th
                scope="col"
                className="py-3 px-4 text-left text-sm font-medium text-gray-500"
              >
                Applied For
              </th>
              <th
                scope="col"
                className="py-3 px-4 text-left text-sm font-medium text-gray-500"
              >
                Date Applied
              </th>
              <th
                scope="col"
                className="py-3 px-4 text-left text-sm font-medium text-gray-500"
              >
                Status
              </th>
              <th
                scope="col"
                className="py-3 px-4 text-left text-sm font-medium text-gray-500"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applications.map((application) => (
              <tr key={application.id}>
                <td className="py-4 px-4">
                  <input type="checkbox" />
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                      <img
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{application.name}</div>
                      <div className="text-sm text-gray-500">
                        {application.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="font-medium">{application.position}</div>
                  <div className="text-sm text-gray-500">
                    {application.department}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div>{application.dateApplied}</div>
                  <div className="text-sm text-gray-500">
                    {application.timeApplied}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={getStatusClass(application.status)}>
                    {application.status}
                  </span>
                </td>
                <td className="py-4 px-0">
                  <div className="flex gap-6">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <FileText size={18} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <MessageCircle size={18} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-green-600">
                      <CheckCircle size={18} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-600">
                      <XCircle size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FreelanceProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Logo Design for Tech Startup",
      freelancer: {
        name: "Alex Thompson",
        avatar:
          "https://plus.unsplash.com/premium_photo-1689747698547-271d2d553cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.8,
      },
      skills: ["UI/UX", "Photoshop", "Illustrator"],
      budget: "₹8,000",
      deadline: "7 Days Left",
      applications: 12,
      status: "Open",
    },
    {
      id: 2,
      title: "E-commerce Website Development",
      freelancer: {
        name: "Sarah Chen",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.5,
      },
      skills: ["React", "Node.js", "MongoDB"],
      budget: "₹15,000",
      deadline: "14 Days Left",
      applications: 8,
      status: "Open",
    },
    {
      id: 3,
      title: "Content Writing for Blog",
      freelancer: {
        name: "Michael Brown",
        avatar:
          "https://plus.unsplash.com/premium_photo-1690296204289-14e517830d8e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.2,
      },
      skills: ["Content Writing", "SEO", "Research"],
      budget: "₹4,000",
      deadline: "3 Days Left",
      applications: 5,
      status: "In Progress",
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  const getStatusClass = (status) => {
    if (status === "Open") return "text-green-500";
    if (status === "In Progress") return "text-blue-500";
    return "text-gray-500";
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen pl-5 pr-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 pl-5 pr-5">
        Freelance Projects
      </h1>

      {/* Search Bar */}
      <div className="relative mb-6 pl-5 pr-5">
        <div className="absolute inset-y-0 left-0  flex items-center pointer-events-none pl-7 pr-5">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="pl-10 pr-4 py-2 w-2xl border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search projects, skills, or students..."
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-3 pl-5 pr-5">
        <div className="relative inline-block">
          <div className="flex items-center justify-between">
            <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Skills Required</option>
              <option>UI/UX</option>
              <option>Frontend</option>
              <option>Backend</option>
            </select>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="relative inline-block">
          <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700">
            <option>Budget Range</option>
            <option>Below ₹5,000</option>
            <option>₹5,000 - ₹10,000</option>
            <option>Above ₹10,000</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="relative inline-block">
          <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700">
            <option>Deadline</option>
            <option>1 Day</option>
            <option>3 Days</option>
            <option>7 Days</option>
            <option>30 Days</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="relative inline-block">
          <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700">
            <option>Student Rating</option>
            <option>5 Stars</option>
            <option>4 Stars & above</option>
            <option>3 Stars & above</option>
            <option>Unrated</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="relative inline-block">
          <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700">
            <option>Sort By: Newest</option>
            <option>Sort By: Oldest</option>
            <option>Sort By: Budget (Low to High)</option>
            <option>Sort By: Budget (High to Low)</option>
            <option>Sort By: Rating</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex justify-end mb-6 pl-5 pr-15">
        <div className="inline-flex rounded-md shadow-sm">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-l-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            Grid
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300 rounded-r-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            List
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-5 pr-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden max-w-lg"
          >
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>

              {/* Freelancer Info */}
              <div className="flex items-center mb-3">
                <img
                  src={project.freelancer.avatar}
                  alt={project.freelancer.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium text-gray-800">
                    {project.freelancer.name}
                  </div>
                  {renderStars(project.freelancer.rating)}
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Budget & Deadline */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-md text-gray-500 font-medium mb-1">
                    Budget
                  </div>
                  <div className="text-gray-800 font-bold">
                    {project.budget}
                  </div>
                </div>
                <div>
                  <div className="text-md text-gray-500 font-medium mb-1">
                    Deadline
                  </div>
                  <div className="text-gray-800 font-bold mb-1">
                    {project.deadline}
                  </div>
                </div>
              </div>

              {/* Applications & Status */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-md text-gray-600 mb-1">
                  {project.applications} Applications
                </div>
                <div
                  className={`text-sm font-medium mt-1 mb-1 pt-1 pb-1 pr-2 pl-2 bg-blue-100 rounded-full  ${getStatusClass(
                    project.status
                  )}`}
                >
                  {project.status}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md text-md font-medium hover:bg-blue-700">
                  View Details
                </button>
                <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded-md text-md font-medium hover:bg-blue-50">
                  Message
                </button>
              </div>

              {/* Footer Actions */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button className="flex  items-center justify-around bg-green-600 text-white py-2 px-4 rounded-md text-md font-medium hover:bg-green-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <Check className="h-4 w-4 mr-1" />
                    </div>
                    <div>Hire</div>
                  </div>
                </button>
                <button className="flex  items-center justify-around border border-gray-600 text-gray-600 py-2 px-4 rounded-md text-md font-medium hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <Copy className="h-4 w-4 mr-1" />
                    </div>
                    <div>Clone</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Analytics = () => {
  return (
    <>
    <AnalyticsDashboard/>
    </>
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
      {showContent === "Freelance Project" && <FreelanceProjects />}
      {showContent === "Analytics" && <Analytics />}
    </div>
  );
};

export default EmployerHome;
