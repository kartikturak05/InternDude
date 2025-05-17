// Removed incorrect import of div
import React, { useState, useEffect } from "react";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaEnvelope,
  FaLink,
  FaFileAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { ExternalLink, Mail, FileCheck, Calendar, X } from "lucide-react";

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
          <div
            className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate("PostOpportunity")}
          >
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
                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-md hover:bg-blue-600 transition">
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
                {/* <button className="text-blue-500 hover:text-blue-600 text-md font-medium">
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
                <button className="text-blue-500 hover:text-blue-600 text-md font-medium">
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
      jobType: "Internship",
    },
    {
      title: "Frontend Developer",
      applications: 42,
      status: "Active",
      DateOfPost: "2023-10-02",
      jobType: "Full-Time",
    },
    {
      title: "Content Writer",
      applications: 23,
      status: "Under Review",
      DateOfPost: "2023-10-03",
      jobType: "Part-Time",
    },
    {
      title: "Backend Developer",
      applications: 35,
      status: "Active",
      DateOfPost: "2023-10-04",
      jobType: "Full-Time",
    },
    {
      title: "Graphic Designer",
      applications: 18,
      status: "Closed",
      DateOfPost: "2023-10-05",
      jobType: "Freelance",
    },
    {
      title: "Social Media Manager",
      applications: 50,
      status: "Under Review",
      DateOfPost: "2023-10-06",
      jobType: "Part-Time",
    },
    {
      title: "React Native Intern",
      applications: 29,
      status: "Active",
      DateOfPost: "2023-10-07",
      jobType: "Internship",
    },
    {
      title: "SEO Specialist",
      applications: 33,
      status: "Active",
      DateOfPost: "2023-10-08",
      jobType: "Freelance",
    },
    {
      title: "Project Manager",
      applications: 21,
      status: "Closed",
      DateOfPost: "2023-10-09",
      jobType: "Full-Time",
    },
    {
      title: "Marketing Associate",
      applications: 40,
      status: "Active",
      DateOfPost: "2023-10-10",
      jobType: "Full-Time",
    },
    {
      title: "Data Analyst",
      applications: 45,
      status: "Under Review",
      DateOfPost: "2023-10-11",
      jobType: "Full-Time",
    },
    {
      title: "Customer Support Executive",
      applications: 27,
      status: "Active",
      DateOfPost: "2023-10-12",
      jobType: "Part-Time",
    },
    {
      title: "Business Development Intern",
      applications: 32,
      status: "Active",
      DateOfPost: "2023-10-13",
      jobType: "Internship",
    },
    {
      title: "QA Tester",
      applications: 20,
      status: "Closed",
      DateOfPost: "2023-10-14",
      jobType: "Freelance",
    },
    {
      title: "HR Executive",
      applications: 36,
      status: "Active",
      DateOfPost: "2023-10-15",
      jobType: "Full-Time",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const filteredJobs = JobsData.filter((job, index) => {
    return (
      (searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedStatus === "" || job.status === selectedStatus) &&
      (selectedJobType === "" || job.jobType === selectedJobType) &&
      (selectedDate === "" || job.DateOfPost === selectedDate)
    );
  });

  const visibleJobs =
    searchTerm || selectedStatus || selectedJobType || selectedDate
      ? filteredJobs
      : JobsData.slice(0, 4); // Show only first 4 by default

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center w-full h-auto mt-10 gap-6 px-4">
      {/* Job Listings */}
      <div className="w-full lg:w-[70%] bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Job Listings</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search jobs Title ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        {/* Filters */}
        <div className="flex items-center justify-start gap-4 mb-4">
          <select
            className="p-2 border border-gray-500 rounded"
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Under Review">Under Review</option>
            <option value="Closed">Closed</option>
          </select>
          <select
            className="p-2 border border-gray-500 rounded"
            onChange={(e) => setSelectedJobType(e.target.value)}
          >
            <option value="">Select Job Type</option>
            <option value="Internship">Internship</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Freelance">Freelance</option>
          </select>
          <DatePicker
            selected={selectedDate ? new Date(selectedDate) : null}
            onChange={(date) =>
              setSelectedDate(date ? date.toISOString().split("T")[0] : "")
            }
            placeholderText="Select a date"
            className="p-2 border border-gray-500 rounded w-full"
            dateFormat="yyyy-MM-dd"
            isClearable
          />
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
              {visibleJobs.map((job, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-400 hover:bg-gray-50"
                >
                  <td className="py-4 px-3">{job.title}</td>
                  <td className="py-4 px-3">{job.applications} Applicants</td>
                  <td className="py-4 px-3">
                    <span
                      className={`rounded-full px-3 py-1 text-md font-medium ${
                        job.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : job.status === "Under Review"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
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
              {visibleJobs.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-5 text-gray-500">
                    No jobs found matching filters.
                  </td>
                </tr>
              )}
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
              <p className="text-gray-500">Total Job Views</p>
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
const allApplications = [
  {
    id: 1,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    position: "UX Designer",
    department: "Design",
    dateApplied: "2024-11-15",
    timeApplied: "2:30 PM",
    status: "New",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael@example.com",
    position: "Frontend Developer",
    department: "Engineering",
    dateApplied: "2024-11-14",
    timeApplied: "11:45 AM",
    status: "Reviewed",
  },
  {
    id: 3,
    name: "Emily Brown",
    email: "emily@example.com",
    position: "Product Manager",
    department: "Product",
    dateApplied: "2024-11-14",
    timeApplied: "9:15 AM",
    status: "Shortlisted",
  },
  {
    id: 4,
    name: "John Doe",
    email: "john@example.com",
    position: "Backend Developer",
    department: "Engineering",
    dateApplied: "2024-11-12",
    timeApplied: "3:00 PM",
    status: "New",
  },
  {
    id: 5,
    name: "Jane Lee",
    email: "jane@example.com",
    position: "Data Analyst",
    department: "Analytics",
    dateApplied: "2024-11-13",
    timeApplied: "12:15 PM",
    status: "Reviewed",
  },
  {
    id: 6,
    name: "Chris Johnson",
    email: "chris@example.com",
    position: "DevOps Engineer",
    department: "Engineering",
    dateApplied: "2024-11-11",
    timeApplied: "2:45 PM",
    status: "New",
  },
  {
    id: 7,
    name: "Lara Smith",
    email: "lara@example.com",
    position: "UI Developer",
    department: "Design",
    dateApplied: "2024-11-10",
    timeApplied: "4:15 PM",
    status: "Shortlisted",
  },
  {
    id: 8,
    name: "Robert Blake",
    email: "robert@example.com",
    position: "UX Designer",
    department: "Design",
    dateApplied: "2024-11-09",
    timeApplied: "1:00 PM",
    status: "Reviewed",
  },
  {
    id: 9,
    name: "Nina Patel",
    email: "nina@example.com",
    position: "Product Manager",
    department: "Product",
    dateApplied: "2024-11-08",
    timeApplied: "10:45 AM",
    status: "New",
  },
  {
    id: 10,
    name: "Amit Verma",
    email: "amit@example.com",
    position: "Frontend Developer",
    department: "Engineering",
    dateApplied: "2024-11-07",
    timeApplied: "9:00 AM",
    status: "Reviewed",
  },
  {
    id: 11,
    name: "Tina Gomez",
    email: "tina@example.com",
    position: "Backend Developer",
    department: "Engineering",
    dateApplied: "2024-11-06",
    timeApplied: "5:00 PM",
    status: "Shortlisted",
  },
  {
    id: 12,
    name: "Daniel Rad",
    email: "daniel@example.com",
    position: "UI Developer",
    department: "Design",
    dateApplied: "2024-11-05",
    timeApplied: "2:00 PM",
    status: "New",
  },
  {
    id: 13,
    name: "Meera Jain",
    email: "meera@example.com",
    position: "DevOps Engineer",
    department: "Engineering",
    dateApplied: "2024-11-04",
    timeApplied: "11:15 AM",
    status: "Reviewed",
  },
  {
    id: 14,
    name: "Zayn Malik",
    email: "zayn@example.com",
    position: "Data Analyst",
    department: "Analytics",
    dateApplied: "2024-11-03",
    timeApplied: "3:45 PM",
    status: "Shortlisted",
  },
  {
    id: 15,
    name: "Ravi Singh",
    email: "ravi@example.com",
    position: "Product Manager",
    department: "Product",
    dateApplied: "2024-11-02",
    timeApplied: "10:30 AM",
    status: "New",
  },
];
const Applications = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    position: "",
    status: "",
    date: "",
  });

  // CandidateProfileCard component defined inline
  const CandidateProfileCard = ({
    name = "Sarah Johnson",
    email = "sarah.johnson@email.com",
    position = "Frontend Developer Intern",
    department = "Engineering",
    applicationDate = "Jan 15, 2024",
    status = "New",
    education = {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      graduationYear: "2024",
    },
    experience = {
      company: "Tech Solutions Inc.",
      role: "Web Development Intern",
      duration: "3 months",
    },
    skills = ["React", "TypeScript", "UI/UX", "HTML/CSS"],
    portfolioUrl = "www.sarahportfolio.com",
    coverLetter = "I am excited to apply for the Frontend Developer Intern position. With my strong foundation in React and TypeScript, combined with my passion for creating intuitive user interfaces, I believe I would be a valuable addition to your team...",
  }) => {
    const [expanded, setExpanded] = useState(false);

    // Generate appropriate background color for each skill
    const getSkillColor = (skill) => {
      const skillColors = {
        React: "bg-blue-100 text-blue-700",
        TypeScript: "bg-blue-50 text-blue-600",
        "UI/UX": "bg-purple-100 text-purple-700",
        "HTML/CSS": "bg-orange-100 text-orange-700",
        JavaScript: "bg-yellow-100 text-yellow-700",
        "Node.js": "bg-green-100 text-green-700",
        Python: "bg-cyan-100 text-cyan-700",
        Java: "bg-red-100 text-red-700",
        MongoDB: "bg-green-100 text-green-700",
        Express: "bg-gray-100 text-gray-700",
        Figma: "bg-purple-100 text-purple-700",
        "Adobe XD": "bg-pink-100 text-pink-700",
        Sketch: "bg-blue-100 text-blue-700",
        PostgreSQL: "bg-blue-100 text-blue-700",
        R: "bg-blue-100 text-blue-700",
        "Machine Learning": "bg-yellow-100 text-yellow-700",
        SQL: "bg-orange-100 text-orange-700",
        AWS: "bg-orange-100 text-orange-700",
        Docker: "bg-blue-100 text-blue-700",
        Kubernetes: "bg-blue-100 text-blue-700",
        "CI/CD": "bg-gray-100 text-gray-700",
      };

      return skillColors[skill] || "bg-gray-100 text-gray-700";
    };

    // Generate background color for status
    const getStatusColor = (status) => {
      const statusColors = {
        New: "bg-blue-100 text-blue-700",
        Reviewing: "bg-yellow-100 text-yellow-700",
        Reviewed: "bg-yellow-100 text-yellow-700",
        Interviewed: "bg-purple-100 text-purple-700",
        Rejected: "bg-red-100 text-red-700",
        Accepted: "bg-green-100 text-green-700",
        Shortlisted: "bg-green-100 text-green-700",
      };

      return statusColors[status] || "bg-gray-100 text-gray-700";
    };

    return (
      <div className="w-full border rounded-lg shadow-sm bg-white p-6">
        <div className="flex items-start justify-between mb-6">
          {/* Left: Candidate avatar and info */}
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-4">
              {/* If there's an avatar prop, use it. Otherwise show initials */}
              <span className="text-gray-600 font-medium text-lg">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
              <p className="text-gray-500 text-md">{email}</p>
            </div>
          </div>


         

          {/* Right: Position and Date */}
          <div className="text-right">
            <div className="flex items-center justify-end">
              <p className="font-medium text-gray-800">{position}</p>
              <span className="mx-2 text-gray-400">•</span>
              <p className="text-gray-500">{department}</p>
            </div>
            <div className="flex items-center mt-1 justify-end">
              <p className="text-md text-gray-500">{applicationDate}</p>
              <span
                className={`ml-2 px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(
                  status
                )}`}
              >
                {status}
              </span>
            </div>
          </div>
        </div>

         <div className="mt-6 flex gap-3 flex-wrap mb-6 justify-end">
            <button className="flex items-center text-blue-600 hover:text-blue-800 border border-blue-600 rounded-md px-3 py-1 text-md">
              <Mail size={16} className="mr-1" /> Message
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md px-3 py-1 text-md">
              <FileText size={16} className="mr-1" /> View Resume
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md px-3 py-1 text-md">
              <FileCheck size={16} className="mr-1" /> Notes
            </button>
            <button className="flex items-center text-green-600 hover:text-green-800 border border-green-300 rounded-md px-3 py-1 text-md">
              <Calendar size={16} className="mr-1" /> Schedule Interview
            </button>
            {/* <div className="flex-grow"></div> */}
            <button className="flex items-center text-red-600 hover:text-red-800 border border-red-300 rounded-md px-3 py-1 text-md">
              <X size={16} className="mr-1" /> Reject
            </button>
            <button className="flex items-center text-green-600 hover:text-green-800 border border-green-300 rounded-md px-3 py-1 text-md">
              <Check size={16} className="mr-1" /> Shortlist
            </button>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div>
            <h3 className="text-md font-medium text-gray-500 mb-2">
              Education
            </h3>
            <p className="font-medium text-gray-800">{education.degree}</p>
            <p className="text-md text-gray-600">
              {education.school} • Class of {education.graduationYear}
            </p>

            <h3 className="text-md font-medium text-gray-500 mt-6 mb-2">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-md rounded-full ${getSkillColor(
                    skill
                  )}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-md font-medium text-gray-500 mb-2">
              Experience
            </h3>
            <p className="font-medium text-gray-800">{experience.company}</p>
            <p className="text-md text-gray-600">
              {experience.role} • {experience.duration}
            </p>

            <h3 className="text-md font-medium text-gray-500 mt-6 mb-2">
              Portfolio
            </h3>
            <a
              href={`https://${portfolioUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 text-md"
            >
              <ExternalLink size={16} className="mr-1" />
              {portfolioUrl}
            </a>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-md font-medium text-gray-500 mb-2">
            Cover Letter
          </h3>
          <p className="text-gray-700 text-md">
            {expanded
              ? coverLetter
              : `${coverLetter.substring(0, 150)}${
                  coverLetter.length > 150 ? "..." : ""
                }`}
          </p>
          {coverLetter.length > 150 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 hover:text-blue-800 text-md mt-1"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    );
  };

  // Sample application data
  const allApplications = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      position: "Frontend Developer Intern",
      department: "Engineering",
      dateApplied: "2024-01-15",
      status: "New",
      education: {
        degree: "Bachelor of Computer Science",
        school: "University of Technology",
        graduationYear: "2024",
      },
      experience: {
        company: "Tech Solutions Inc.",
        role: "Web Development Intern",
        duration: "3 months",
      },
      skills: ["React", "TypeScript", "UI/UX", "HTML/CSS"],
      portfolioUrl: "www.sarahportfolio.com",
      coverLetter:
        "I am excited to apply for the Frontend Developer Intern position. With my strong foundation in React and TypeScript, combined with my passion for creating intuitive user interfaces, I believe I would be a valuable addition to your team...",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      position: "Backend Developer",
      department: "Engineering",
      dateApplied: "2024-01-20",
      status: "Reviewed",
      education: {
        degree: "Master of Computer Science",
        school: "State University",
        graduationYear: "2023",
      },
      experience: {
        company: "DataCore Systems",
        role: "Software Engineer Intern",
        duration: "6 months",
      },
      skills: ["Node.js", "Python", "MongoDB", "Express"],
      portfolioUrl: "www.michaelchendev.com",
      coverLetter:
        "As a recent graduate with a Master's in Computer Science and hands-on experience with Node.js and Python, I am well-equipped to contribute to your Backend Developer position. My previous internship at DataCore Systems has given me practical experience in developing RESTful APIs and working with database systems.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      email: "emma.r@email.com",
      position: "UX/UI Designer",
      department: "Design",
      dateApplied: "2024-01-25",
      status: "Shortlisted",
      education: {
        degree: "Bachelor of Design",
        school: "Creative Arts Institute",
        graduationYear: "2022",
      },
      experience: {
        company: "VisualWorks Agency",
        role: "Junior Designer",
        duration: "1 year",
      },
      skills: ["Figma", "UI/UX", "Adobe XD", "Sketch"],
      portfolioUrl: "www.emmarodriguez.design",
      coverLetter:
        "With my background in UX/UI design and one year of professional experience at VisualWorks Agency, I would love to bring my creative vision and user-centered design approach to your team. I specialize in creating intuitive interfaces that balance aesthetic appeal with functional design principles.",
    },
    {
      id: 4,
      name: "Jason Park",
      email: "j.park@email.com",
      position: "Full Stack Developer",
      department: "Engineering",
      dateApplied: "2024-01-10",
      status: "New",
      education: {
        degree: "Bachelor of Software Engineering",
        school: "Tech Institute",
        graduationYear: "2023",
      },
      experience: {
        company: "StartupLabs",
        role: "Junior Developer",
        duration: "8 months",
      },
      skills: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      portfolioUrl: "www.jasonpark.dev",
      coverLetter:
        "Having worked as a Junior Developer at StartupLabs, I've gained valuable experience across the full development stack. I'm passionate about building end-to-end solutions and am excited about the possibility of bringing my skills in React, Node.js, and database management to your team. I thrive in collaborative environments and am always eager to learn new technologies.",
    },
    {
      id: 5,
      name: "Priya Sharma",
      email: "priya.s@email.com",
      position: "Data Scientist",
      department: "Analytics",
      dateApplied: "2024-01-22",
      status: "Reviewed",
      education: {
        degree: "Master of Data Science",
        school: "Global Tech University",
        graduationYear: "2023",
      },
      experience: {
        company: "DataViz Analytics",
        role: "Data Analyst",
        duration: "1 year 2 months",
      },
      skills: ["Python", "R", "Machine Learning", "SQL"],
      portfolioUrl: "www.priyasharma.io",
      coverLetter:
        "With my strong background in data science and analytics, I am excited to contribute to your team's data-driven initiatives. My experience at DataViz Analytics has equipped me with the skills to extract meaningful insights from complex datasets and translate them into actionable business strategies.",
    },
    {
      id: 6,
      name: "David Wilson",
      email: "d.wilson@email.com",
      position: "DevOps Engineer",
      department: "Infrastructure",
      dateApplied: "2024-01-18",
      status: "Shortlisted",
      education: {
        degree: "Bachelor of Engineering",
        school: "Tech College",
        graduationYear: "2021",
      },
      experience: {
        company: "CloudSystems Inc.",
        role: "System Administrator",
        duration: "2 years",
      },
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      portfolioUrl: "www.davidwilsontech.com",
      coverLetter:
        "As a DevOps Engineer with 2 years of experience in cloud infrastructure and CI/CD pipelines, I am passionate about optimizing development workflows and ensuring system reliability. My background in CloudSystems Inc. has given me hands-on experience with containerization and orchestration technologies that I'm eager to bring to your team.",
    },
  ];

  const filteredApplications = allApplications
    .filter((app) => {
      const matchesSearch =
        app.name.toLowerCase().includes(search.toLowerCase()) ||
        app.position.toLowerCase().includes(search.toLowerCase()) ||
        app.status.toLowerCase().includes(search.toLowerCase());
      const matchesFilters =
        (!filters.position || app.position === filters.position) &&
        (!filters.status || app.status === filters.status) &&
        (!filters.date || app.dateApplied === filters.date);
      return matchesSearch && matchesFilters;
    })
    .slice(0, 4); // Default show only 4

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
      {/* Header and User Info */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          onClick={() => navigate("/post-job")}
        >
          Post New Job
        </button>
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex-shrink-0">
          <select
            className="border border-gray-300 rounded-md px-3 py-2"
            value={filters.position}
            onChange={(e) =>
              setFilters({ ...filters, position: e.target.value })
            }
          >
            <option value="">Job Title</option>
            {[...new Set(allApplications.map((a) => a.position))].map(
              (title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              )
            )}
          </select>
        </div>

        <div className="flex-shrink-0">
          <select
            className="border border-gray-300 rounded-md px-3 py-2"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">Status</option>
            {[...new Set(allApplications.map((a) => a.status))].map((stat) => (
              <option key={stat} value={stat}>
                {stat}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-shrink-0">
          <DatePicker
            selected={filters.date ? new Date(filters.date) : null}
            onChange={(date) =>
              setFilters({
                ...filters,
                date: date ? date.toISOString().split("T")[0] : "",
              })
            }
            placeholderText="Date Applied"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            dateFormat="yyyy-MM-dd"
            isClearable
          />
        </div>

        <div className="flex-shrink-0">
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option value="">Experience Level</option>
          </select>
        </div>
      </div>

      {/* Applications count and showing info */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">
          Showing {filteredApplications.length} of {allApplications.length}{" "}
          applications
        </p>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Sort by:</span>
          <select className="border border-gray-300 rounded-md px-2 py-1 text-md">
            <option>Most Recent</option>
            <option>Oldest First</option>
            <option>Name (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Application Cards */}
      <div className="space-y-6">
        {filteredApplications.map((application) => (
          <div key={application.id} className="mb-6">
            <CandidateProfileCard
              name={application.name}
              email={application.email}
              position={application.position}
              department={application.department}
              applicationDate={new Date(
                application.dateApplied
              ).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              status={application.status}
              education={application.education}
              experience={application.experience}
              skills={application.skills}
              portfolioUrl={application.portfolioUrl}
              coverLetter={application.coverLetter}
            />
          </div>
        ))}

        {filteredApplications.length === 0 && (
          <div className="text-center py-10 bg-gray-50 rounded-lg">
            <p className="text-gray-500">
              No applications match your search criteria.
            </p>
          </div>
        )}
      </div>

      {/* Pagination controls */}
      {allApplications.length > 4 && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md">
              Next
            </button>
          </nav>
        </div>
      )}
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
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
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
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.2,
      },
      skills: ["Content Writing", "SEO", "Research"],
      budget: "₹4,000",
      deadline: "3 Days Left",
      applications: 5,
      status: "In Progress",
    },
    {
      id: 4,
      title: "Mobile App UI/UX Design",
      freelancer: {
        name: "Jessica Lee",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.9,
      },
      skills: ["UI Design", "Sketch", "Figma"],
      budget: "₹10,000",
      deadline: "10 Days Left",
      applications: 7,
      status: "Open",
    },
    {
      id: 5,
      title: "Website SEO Optimization",
      freelancer: {
        name: "David Martinez",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.6,
      },
      skills: ["SEO", "Content Writing", "Keyword Research"],
      budget: "₹6,500",
      deadline: "5 Days Left",
      applications: 10,
      status: "Closed",
    },
    {
      id: 6,
      title: "Full-stack Web App Development",
      freelancer: {
        name: "Emily Johnson",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.7,
      },
      skills: ["React", "Node.js", "MongoDB"],
      budget: "₹18,000",
      deadline: "20 Days Left",
      applications: 9,
      status: "In Progress",
    },
    {
      id: 7,
      title: "Social Media Marketing Campaign",
      freelancer: {
        name: "John Smith",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.4,
      },
      skills: ["Social Media", "Marketing", "Facebook Ads"],
      budget: "₹12,000",
      deadline: "15 Days Left",
      applications: 14,
      status: "Open",
    },
    {
      id: 8,
      title: "Logo Design for Fashion Brand",
      freelancer: {
        name: "Olivia Taylor",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.1,
      },
      skills: ["Logo Design", "Photoshop", "Illustrator"],
      budget: "₹7,000",
      deadline: "5 Days Left",
      applications: 6,
      status: "Closed",
    },
    {
      id: 9,
      title: "Video Editing for YouTube Channel",
      freelancer: {
        name: "Matthew Wilson",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.3,
      },
      skills: ["Video Editing", "Premiere Pro", "Final Cut Pro"],
      budget: "₹9,000",
      deadline: "12 Days Left",
      applications: 11,
      status: "Open",
    },
    {
      id: 10,
      title: "Copywriting for Website Content",
      freelancer: {
        name: "Sophia Lee",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.7,
      },
      skills: ["Copywriting", "Content Writing", "SEO"],
      budget: "₹5,000",
      deadline: "8 Days Left",
      applications: 8,
      status: "In Progress",
    },
    {
      id: 11,
      title: "Brand Identity Design",
      freelancer: {
        name: "William Harris",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.9,
      },
      skills: ["Branding", "Logo Design", "Illustrator"],
      budget: "₹11,000",
      deadline: "6 Days Left",
      applications: 13,
      status: "Open",
    },
    {
      id: 12,
      title: "Photography for Product Ads",
      freelancer: {
        name: "Chloe Clark",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.5,
      },
      skills: ["Photography", "Photoshop", "Lightroom"],
      budget: "₹8,500",
      deadline: "9 Days Left",
      applications: 7,
      status: "Closed",
    },
    {
      id: 13,
      title: "Translation for Website Content",
      freelancer: {
        name: "Ethan Lewis",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.3,
      },
      skills: ["Translation", "Copywriting", "SEO"],
      budget: "₹6,000",
      deadline: "3 Days Left",
      applications: 5,
      status: "In Progress",
    },
    {
      id: 14,
      title: "WordPress Website Design",
      freelancer: {
        name: "Isabella Scott",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.6,
      },
      skills: ["WordPress", "Web Design", "HTML"],
      budget: "₹9,500",
      deadline: "11 Days Left",
      applications: 9,
      status: "Open",
    },
    {
      id: 15,
      title: "Custom Web Development for Agency",
      freelancer: {
        name: "Daniel Young",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.8,
      },
      skills: ["PHP", "JavaScript", "MySQL"],
      budget: "₹16,000",
      deadline: "18 Days Left",
      applications: 10,
      status: "Open",
    },
    {
      id: 16,
      title: "UI/UX Design for Mobile App",
      freelancer: {
        name: "Ava Rodriguez",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.7,
      },
      skills: ["UI/UX", "Figma", "Sketch"],
      budget: "₹12,500",
      deadline: "13 Days Left",
      applications: 15,
      status: "Open",
    },
    {
      id: 17,
      title: "Data Analysis and Visualization",
      freelancer: {
        name: "Noah Martin",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.5,
      },
      skills: ["Data Analysis", "Python", "Tableau"],
      budget: "₹14,000",
      deadline: "16 Days Left",
      applications: 7,
      status: "In Progress",
    },
    {
      id: 18,
      title: "Animation for Marketing Video",
      freelancer: {
        name: "Emma White",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.6,
      },
      skills: ["Animation", "After Effects", "Premiere Pro"],
      budget: "₹10,500",
      deadline: "9 Days Left",
      applications: 8,
      status: "Open",
    },
    {
      id: 19,
      title: "Backend API Development",
      freelancer: {
        name: "Liam Thompson",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.8,
      },
      skills: ["Node.js", "Express", "MongoDB"],
      budget: "₹17,000",
      deadline: "15 Days Left",
      applications: 11,
      status: "In Progress",
    },
    {
      id: 20,
      title: "Podcast Editing and Production",
      freelancer: {
        name: "Charlotte Davis",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.4,
      },
      skills: ["Audio Editing", "Sound Design", "Audacity"],
      budget: "₹9,000",
      deadline: "7 Days Left",
      applications: 6,
      status: "Closed",
    },
    {
      id: 21,
      title: "Social Media Content Calendar",
      freelancer: {
        name: "Aiden Wilson",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.3,
      },
      skills: ["Content Planning", "Social Media", "Marketing"],
      budget: "₹7,500",
      deadline: "8 Days Left",
      applications: 9,
      status: "Open",
    },
    {
      id: 22,
      title: "E-book Cover Design",
      freelancer: {
        name: "Mia Johnson",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.6,
      },
      skills: ["Photoshop", "Illustration", "Typography"],
      budget: "₹5,500",
      deadline: "6 Days Left",
      applications: 12,
      status: "Closed",
    },
    {
      id: 23,
      title: "Product Catalog Design",
      freelancer: {
        name: "Jacob Anderson",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.5,
      },
      skills: ["InDesign", "Graphic Design", "Layout"],
      budget: "₹8,000",
      deadline: "10 Days Left",
      applications: 7,
      status: "In Progress",
    },
    {
      id: 24,
      title: "Technical Documentation Writing",
      freelancer: {
        name: "Abigail Thomas",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.7,
      },
      skills: ["Technical Writing", "Documentation", "Research"],
      budget: "₹11,000",
      deadline: "12 Days Left",
      applications: 5,
      status: "Open",
    },
    {
      id: 25,
      title: "React Native Mobile App",
      freelancer: {
        name: "Lucas Garcia",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.9,
      },
      skills: ["React Native", "JavaScript", "Firebase"],
      budget: "₹20,000",
      deadline: "25 Days Left",
      applications: 14,
      status: "Open",
    },
    {
      id: 26,
      title: "Online Course Creation",
      freelancer: {
        name: "Sofia Martinez",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.4,
      },
      skills: ["Course Design", "Video Production", "Teaching"],
      budget: "₹15,500",
      deadline: "20 Days Left",
      applications: 8,
      status: "In Progress",
    },
    {
      id: 27,
      title: "Game Asset Design",
      freelancer: {
        name: "Henry Lopez",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.6,
      },
      skills: ["3D Modeling", "Texture Design", "Unity"],
      budget: "₹13,000",
      deadline: "15 Days Left",
      applications: 10,
      status: "Open",
    },
    {
      id: 28,
      title: "Marketing Email Campaign",
      freelancer: {
        name: "Lily Wilson",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.5,
      },
      skills: ["Email Marketing", "Copywriting", "Mailchimp"],
      budget: "₹6,000",
      deadline: "5 Days Left",
      applications: 9,
      status: "Closed",
    },
    {
      id: 29,
      title: "Corporate Branding Package",
      freelancer: {
        name: "Benjamin Clark",
        avatar:
          "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.8,
      },
      skills: ["Branding", "Logo Design", "Brand Strategy"],
      budget: "₹18,500",
      deadline: "17 Days Left",
      applications: 16,
      status: "Open",
    },
    {
      id: 30,
      title: "Virtual Assistant Services",
      freelancer: {
        name: "Zoe Peterson",
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.3,
      },
      skills: ["Administrative Support", "Data Entry", "Customer Service"],
      budget: "₹5,000",
      deadline: "4 Days Left",
      applications: 8,
      status: "In Progress",
    },
  ];

  const navigate = useNavigate();

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [skillFilter, setSkillFilter] = useState("All");
  const [budgetFilter, setBudgetFilter] = useState("All");
  const [deadlineFilter, setDeadlineFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  // State for filtered projects and visible projects
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const handleToggle = () => setShowAll(!showAll);

  // Extract unique skills for filter dropdown
  const allSkills = [
    "All",
    ...Array.from(new Set(projects.flatMap((project) => project.skills))),
  ];

  // Extract status options
  const allStatuses = ["All", "Open", "In Progress", "Closed"];

  // Extract budget ranges
  const budgetRanges = [
    "All",
    "Below ₹5,000",
    "₹5,000 - ₹10,000",
    "Above ₹10,000",
  ];

  // Extract deadline options
  const deadlineOptions = [
    "All",
    "1-3 Days",
    "4-7 Days",
    "8-14 Days",
    "15+ Days",
  ];

  // Extract rating options
  const ratingOptions = [
    "All",
    "5 Stars",
    "4 Stars & above",
    "3 Stars & above",
  ];

  // Function to filter projects
  useEffect(() => {
    let filtered = projects.filter((project) => {
      // Search query filter (title, skills, freelancer name)
      const searchMatch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        project.freelancer.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      // Status filter
      const statusMatch =
        statusFilter === "All" || project.status === statusFilter;

      // Skill filter
      const skillMatch =
        skillFilter === "All" || project.skills.includes(skillFilter);

      // Budget filter
      let budgetMatch = true;
      if (budgetFilter !== "All") {
        const budget = parseInt(project.budget.replace(/[^\d]/g, ""));
        if (budgetFilter === "Below ₹5,000" && budget >= 5000) {
          budgetMatch = false;
        } else if (
          budgetFilter === "₹5,000 - ₹10,000" &&
          (budget < 5000 || budget > 10000)
        ) {
          budgetMatch = false;
        } else if (budgetFilter === "Above ₹10,000" && budget <= 10000) {
          budgetMatch = false;
        }
      }

      // Deadline filter
      let deadlineMatch = true;
      if (deadlineFilter !== "All") {
        const days = parseInt(project.deadline.split(" ")[0]);
        if (deadlineFilter === "1-3 Days" && (days < 1 || days > 3)) {
          deadlineMatch = false;
        } else if (deadlineFilter === "4-7 Days" && (days < 4 || days > 7)) {
          deadlineMatch = false;
        } else if (deadlineFilter === "8-14 Days" && (days < 8 || days > 14)) {
          deadlineMatch = false;
        } else if (deadlineFilter === "15+ Days" && days < 15) {
          deadlineMatch = false;
        }
      }

      // Rating filter
      let ratingMatch = true;
      if (ratingFilter !== "All") {
        const rating = project.freelancer.rating;
        if (ratingFilter === "5 Stars" && rating < 5) {
          ratingMatch = false;
        } else if (ratingFilter === "4 Stars & above" && rating < 4) {
          ratingMatch = false;
        } else if (ratingFilter === "3 Stars & above" && rating < 3) {
          ratingMatch = false;
        }
      }

      return (
        searchMatch &&
        statusMatch &&
        skillMatch &&
        budgetMatch &&
        deadlineMatch &&
        ratingMatch
      );
    });

    // Sort the filtered projects
    if (sortBy === "Newest") {
      // No change needed as the projects are already in newest order
    } else if (sortBy === "Oldest") {
      filtered = [...filtered].reverse();
    } else if (sortBy === "Budget (Low to High)") {
      filtered = [...filtered].sort((a, b) => {
        const budgetA = parseInt(a.budget.replace(/[^\d]/g, ""));
        const budgetB = parseInt(b.budget.replace(/[^\d]/g, ""));
        return budgetA - budgetB;
      });
    } else if (sortBy === "Budget (High to Low)") {
      filtered = [...filtered].sort((a, b) => {
        const budgetA = parseInt(a.budget.replace(/[^\d]/g, ""));
        const budgetB = parseInt(b.budget.replace(/[^\d]/g, ""));
        return budgetB - budgetA;
      });
    } else if (sortBy === "Rating") {
      filtered = [...filtered].sort(
        (a, b) => b.freelancer.rating - a.freelancer.rating
      );
    }

    setFilteredProjects(filtered);
  }, [
    searchQuery,
    statusFilter,
    skillFilter,
    budgetFilter,
    deadlineFilter,
    ratingFilter,
    sortBy,
    projects,
  ]);

  // Handle showing more projects
  const handleShowMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, filteredProjects.length));
  };

  // Handle showing less projects
  const handleShowLess = () => {
    setVisibleProjects(3);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setStatusFilter("All");
    setSkillFilter("All");
    setBudgetFilter("All");
    setDeadlineFilter("All");
    setRatingFilter("All");
    setSortBy("Newest");
    setVisibleProjects(3);
  };

  // Function to render rating stars
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
        <span className="ml-1 text-md text-gray-600">{rating}</span>
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-3 pl-5 pr-5">
        {/* Skill Filter */}
        <div className="relative inline-block">
          <select
            value={skillFilter}
            onChange={(e) => setSkillFilter(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          >
            {allSkills.map((skill, index) => (
              <option key={index} value={skill}>
                {skill === "All" ? "Skills Required" : skill}
              </option>
            ))}
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

        {/* Budget Filter */}
        <div className="relative inline-block">
          <select
            value={budgetFilter}
            onChange={(e) => setBudgetFilter(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          >
            {budgetRanges.map((range, index) => (
              <option key={index} value={range}>
                {range === "All" ? "Budget Range" : range}
              </option>
            ))}
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

        {/* Deadline Filter */}
        <div className="relative inline-block">
          <select
            value={deadlineFilter}
            onChange={(e) => setDeadlineFilter(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          >
            {deadlineOptions.map((option, index) => (
              <option key={index} value={option}>
                {option === "All" ? "Deadline" : option}
              </option>
            ))}
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

        {/* Status Filter */}
        <div className="relative inline-block">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          >
            {allStatuses.map((status, index) => (
              <option key={index} value={status}>
                {status === "All" ? "Status" : status}
              </option>
            ))}
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

        {/* Rating Filter */}
        <div className="relative inline-block">
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          >
            {ratingOptions.map((rating, index) => (
              <option key={index} value={rating}>
                {rating === "All" ? "Rating" : rating}
              </option>
            ))}
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

        {/* Sort By Filter */}
        <div className="relative inline-block">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>Budget (Low to High)</option>
            <option>Budget (High to Low)</option>
            <option>Rating</option>
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

        {/* Reset Button */}
        <button
          onClick={handleResetFilters}
          className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition"
        >
          Reset Filters
        </button>
      </div>

      {/* View Toggle */}
      <div className="flex justify-end mb-6 pl-5 pr-15">
        <div className="inline-flex rounded-md shadow-sm">
          <button className="px-4 py-2 text-md font-medium text-white bg-blue-600 rounded-l-md">
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
          <button className="px-4 py-2 text-md font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300 rounded-r-md">
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
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-5 pr-5">
          {visibleProjects.map((project) => (
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
                    className={`text-md font-medium mt-1 mb-1 pt-1 pb-1 pr-2 pl-2 bg-blue-100 rounded-full  ${getStatusClass(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    onClick={() => {
                      navigate("/employer/freelanceProject");
                      window.location.reload();
                    }}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md text-md font-medium hover:bg-blue-700 cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    className="border border-blue-600 text-blue-600 py-2 px-4 rounded-md text-md font-medium hover:bg-blue-50 cursor-pointer"
                    onClick={() => {
                      navigate("/employer/ChatWithApplicants");
                      window.location.reload();
                    }}
                  >
                    Message
                  </button>
                </div>

                {/* Footer Actions */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button className="flex items-center justify-around bg-green-600 text-white py-2 px-4 rounded-md text-md font-medium hover:bg-green-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <Check className="h-4 w-4 mr-1" />
                      </div>
                      <div>Hire</div>
                    </div>
                  </button>
                  <button className="flex items-center justify-around border border-gray-600 text-gray-600 py-2 px-4 rounded-md text-md font-medium hover:bg-gray-50">
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

        {/* Toggle Button */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-6 mb-10">
            <button
              onClick={handleToggle}
              className="text-blue-600 border border-blue-600 px-5 py-2 rounded-md hover:bg-blue-50"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </>
    </div>
  );
};

const Analytics = () => {
  return (
    <>
      <AnalyticsDashboard />
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

      <Footer />
    </div>
  );
};

export default EmployerHome;
