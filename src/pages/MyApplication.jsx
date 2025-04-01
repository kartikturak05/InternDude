import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsGrid3X3Gap, BsListUl } from "react-icons/bs";
import {
  FiMapPin,
  FiCalendar,
  FiDollarSign,
  FiBriefcase,
  FiEye,
  FiMessageSquare,
} from "react-icons/fi";
import { TbCircleDashed } from "react-icons/tb";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const applications = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Tech Corp",
    appliedDate: "Jan 15, 2024",
    location: "San Francisco, CA",
    salary: "$45-55k/year",
    jobType: "Full-time",
    status: "Under Review",
  },
  {
    id: 2,
    title: "UX Design Intern",
    company: "Design Studio",
    appliedDate: "Jan 14, 2024",
    location: "Remote",
    salary: "$40-50k/year",
    jobType: "Internship",
    status: "Shortlisted",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Data Systems",
    appliedDate: "Jan 13, 2024",
    location: "New York, NY",
    salary: "$50-60k/year",
    jobType: "Full-time",
    status: "Pending",
  },
  {
    id: 4,
    title: "Cloud Engineer",
    company: "Cloud Services",
    appliedDate: "Jan 12, 2024",
    location: "Austin, TX",
    salary: "$60-70k/year",
    jobType: "Full-time",
    status: "Rejected",
  },
  {
    id: 5,
    title: "Product Manager Intern",
    company: "StartUp Inc",
    appliedDate: "Jan 11, 2024",
    location: "Seattle, WA",
    salary: "$45-55k/year",
    jobType: "Internship",
    status: "Offer Received",
  },
  {
    id: 6,
    title: "ML Engineer",
    company: "AI Solutions",
    appliedDate: "Jan 10, 2024",
    location: "Boston, MA",
    salary: "$70-80k/year",
    jobType: "Full-time",
    status: "Under Review",
  },
];

// Function to get status icon and color
const getStatusStyle = (status) => {
  switch (status) {
    case "Under Review":
      return {
        bgColor: "bg-blue-50",
        textColor: "text-blue-600",
        icon: <TbCircleDashed className="text-blue-600" />,
      };
    case "Shortlisted":
      return {
        bgColor: "bg-green-50",
        textColor: "text-green-600",
        icon: <FaRegCheckCircle className="text-green-600" />,
      };
    case "Pending":
      return {
        bgColor: "bg-yellow-50",
        textColor: "text-yellow-600",
        icon: <IoMdTime className="text-yellow-600" />,
      };
    case "Rejected":
      return {
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        icon: <FiX className="text-red-600" />,
      };
    case "Offer Received":
      return {
        bgColor: "bg-green-50",
        textColor: "text-green-600",
        icon: <FaRegCheckCircle className="text-green-600" />,
      };
    default:
      return {
        bgColor: "bg-gray-50",
        textColor: "text-gray-600",
        icon: <TbCircleDashed className="text-gray-600" />,
      };
  }
};

const StatCard = ({ icon, value, label, bgColor }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
      <div className={`${bgColor} p-3 rounded-lg mr-3`}>{icon}</div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  );
};

const JobCard = ({ application }) => {
  const statusStyle = getStatusStyle(application.status);
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="font-bold text-lg text-gray-800">
            {application.title}
          </h2>
          <p className="text-gray-600">{application.company}</p>
        </div>
        <div
          className={`flex items-center ${statusStyle.bgColor} ${statusStyle.textColor} px-3 py-1 rounded-full text-sm`}
        >
          {statusStyle.icon}
          <span className="ml-1">{application.status}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-2 text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <FiCalendar className="mr-2" />
          <span>Applied on {application.appliedDate}</span>
        </div>
        <div className="flex items-center">
          <FiMapPin className="mr-2" />
          <span>{application.location}</span>
        </div>
        <div className="flex items-center">
          <FiDollarSign className="mr-2" />
          <span>{application.salary}</span>
        </div>
        <div className="flex items-center">
          <FiBriefcase className="mr-2" />
          <span>{application.jobType}</span>
        </div>
      </div>

      <div className="flex gap-2 mt-auto">
        <button className="flex items-center justify-center text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 w-1/2"
        onClick={()=> navigate("/InternshipDetails")}
        >
          <FiEye className="mr-2" />
          View
        </button>
        <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-1/2">
          <FiMessageSquare className="mr-2" />
          Message
        </button>
      </div>
    </div>
  );
};

const MyApplication = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen pt-6 pb-6 pl-14 pr-14">
        <div className="">
          {/* Header with search and filters */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
            <div className="relative w-full md:w-96">
                <BiSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search your applications..."
                  className="pl-10 pr-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select className="border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Job Type</option>
                <option>Full-time</option>
                <option>Internship</option>
                <option>Contract</option>
              </select>

              <select className="border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Status</option>
                <option>Under Review</option>
                <option>Shortlisted</option>
                <option>Rejected</option>
                <option>Offer Received</option>
              </select>

              <select className="border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Date Range</option>
                <option>Last 30 days</option>
                <option>Last 60 days</option>
                <option>Last 90 days</option>
              </select>

              <select className="border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Company</option>
                <option>Tech Corp</option>
                <option>Design Studio</option>
                <option>AI Solutions</option>
              </select>

            
            </div>

            <div className="flex border rounded-lg overflow-hidden">
              <button className="p-2 bg-blue-50 text-blue-600">
                <BsGrid3X3Gap />
              </button>
              <button className="p-2 bg-white text-gray-600">
                <BsListUl />
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <StatCard
              icon={<IoStatsChartOutline className="text-blue-600 text-xl" />}
              value="48"
              label="Total Applications"
              bgColor="bg-blue-50"
            />
            <StatCard
              icon={<IoStatsChartOutline className="text-green-600 text-xl" />}
              value="32%"
              label="Success Rate"
              bgColor="bg-green-50"
            />
            <StatCard
              icon={<IoMdTime className="text-yellow-600 text-xl" />}
              value="12"
              label="In Progress"
              bgColor="bg-yellow-50"
            />
            <StatCard
              icon={<FiX className="text-red-600 text-xl" />}
              value="8"
              label="Rejected"
              bgColor="bg-red-50"
            />
          </div>

          {/* Job Applications in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((application) => (
              <JobCard key={application.id} application={application} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyApplication;
