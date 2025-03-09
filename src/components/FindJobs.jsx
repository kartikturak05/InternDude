import React, { useState, useEffect } from "react";
import {
  IoSearchSharp,
  IoLocationOutline,
  IoTimeOutline,
  IoCashOutline,
  IoLocationSharp,
  IoCheckmarkCircle,
} from "react-icons/io5";
import { BsBriefcase, BsFilter, BsSearch } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";
import { WiTime3 } from "react-icons/wi";
import { IoWalletOutline } from "react-icons/io5";
import { BsBarChart } from "react-icons/bs";
import { HiOutlineBriefcase, HiOutlineWallet } from "react-icons/hi2";
import SuccessStories from "./SuccessStories";
import ReviewsAndRatings from "./ReviewsAndRatings";
import JobNotification from "./JobNotification";
import Footer from "./Footer";

const JobCard = ({
  title,
  company,
  location,
  stipend,
  experience,
  daysLeft,
  isEasyApply,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition mb-4 border-l-4 border-blue-600">
      <div className="flex justify-between items-start pl-10">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
          <p className="text-gray-600 font-medium">{company}</p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm mt-2">
            <div className="flex items-center text-gray-600">
              <IoLocationOutline className="mr-1" />
              {location}
            </div>
            <div className="flex items-center text-gray-600">
              <IoCashOutline className="mr-1" />
              {stipend}
            </div>
            <div className="flex items-center text-gray-600">
              {experience} Years
            </div>
          </div>

          {isEasyApply && (
            <div className="flex items-center text-green-600 text-sm font-medium mt-1">
              <IoCheckmarkCircle className="mr-1" />
              Easy Apply
            </div>
          )}
          <button className="mt-4 bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-sm font-medium text-orange-600">
            {daysLeft} days left
          </span>
        </div>
      </div>
    </div>
  );
};

// Sample jobs data
const allJobs = [
  {
    id: 1,
    title: "Graphic Designer",
    company: "Pixel Creators",
    location: "On-Site",
    workType: "onSite",
    package: "₹4,80,000",
    salary: 4.8,
    experience: "1-3",
    companyType: "startup",
    roleCategory: "design",
    duration: "3-6",
    daysLeft: 10,
    isEasyApply: true,
    jobType: "fulltime",
  },
  {
    id: 2,
    title: "Mechanical Engineer",
    company: "Industry Experts",
    location: "On-Site",
    workType: "onSite",
    package: "₹8,40,000",
    salary: 8.4,
    experience: "3-5",
    companyType: "mnc",
    roleCategory: "technology",
    duration: "6+",
    daysLeft: 5,
    isEasyApply: false,
    jobType: "fulltime",
  },
  {
    id: 3,
    title: "Marketing Specialist",
    company: "Brand Builders",
    location: "Remote",
    workType: "remote",
    package: "₹6,50,000",
    salary: 6.5,
    experience: "1-3",
    companyType: "startup",
    roleCategory: "marketing",
    duration: "3-6",
    daysLeft: 7,
    isEasyApply: true,
    jobType: "contract",
  },
  {
    id: 4,
    title: "Software Developer",
    company: "TechSolutions",
    location: "Hybrid",
    workType: "hybrid",
    package: "₹12,00,000",
    salary: 12,
    experience: "3-5",
    companyType: "mnc",
    roleCategory: "technology",
    duration: "6+",
    daysLeft: 14,
    isEasyApply: true,
    jobType: "fulltime",
  },
  {
    id: 5,
    title: "Business Analyst",
    company: "Data Insights",
    location: "Hybrid",
    workType: "hybrid",
    package: "₹9,50,000",
    salary: 9.5,
    experience: "3-5",
    companyType: "mid",
    roleCategory: "business",
    duration: "6+",
    daysLeft: 3,
    isEasyApply: false,
    jobType: "fulltime",
  },
  {
    id: 6,
    title: "UX Designer",
    company: "Creative Labs",
    location: "Remote",
    workType: "remote",
    package: "₹7,20,000",
    salary: 7.2,
    experience: "1-3",
    companyType: "startup",
    roleCategory: "design",
    duration: "3-6",
    daysLeft: 8,
    isEasyApply: true,
    jobType: "freelance",
  },
];

const AdvancedFilter = ({ filters, setFilters, applyAdvancedFilters }) => {
  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value) // Remove if already selected
        : [...prev[category], value], // Add if not selected
    }));
  };

  const resetFilters = () => {
    setFilters({
      workType: [],
      roleCategory: [],
      experience: [],
      companyType: [],
      duration: [],
      salary: 0,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg flex items-center">
          <BsFilter className="mr-2" /> Advanced Filters
        </h3>
        <button onClick={resetFilters} className="text-sm text-blue-600">
          Reset
        </button>
      </div>

      <div className="space-y-4">
        {/* Work Type */}
        <div>
          <h4 className="font-medium mb-2 text-gray-700">Work Type</h4>
          {["remote", "hybrid", "onSite"].map((type) => (
            <div key={type} className="flex items-center">
              <input
                type="checkbox"
                id={type}
                checked={filters.workType.includes(type)}
                onChange={() => handleCheckboxChange("workType", type)}
                className="mr-2 h-4 w-4 text-blue-600"
              />
              <label htmlFor={type} className="text-gray-700 capitalize">
                {type.replace("onSite", "On-Site")}
              </label>
            </div>
          ))}
        </div>

        {/* Role Category */}
        <div>
          <h4 className="font-medium mb-2 text-gray-700">Role Category</h4>
          {["technology", "marketing", "design", "business"].map((role) => (
            <div key={role} className="flex items-center">
              <input
                type="checkbox"
                id={role}
                checked={filters.roleCategory.includes(role)}
                onChange={() => handleCheckboxChange("roleCategory", role)}
                className="mr-2 h-4 w-4 text-blue-600"
              />
              <label htmlFor={role} className="text-gray-700 capitalize">
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </label>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div>
          <h4 className="font-medium mb-2 text-gray-700">Experience</h4>
          {["0-1", "1-3", "3-5", "5+"].map((exp) => (
            <div key={exp} className="flex items-center">
              <input
                type="checkbox"
                id={`exp-${exp}`}
                checked={filters.experience.includes(exp)}
                onChange={() => handleCheckboxChange("experience", exp)}
                className="mr-2 h-4 w-4 text-blue-600"
              />
              <label htmlFor={`exp-${exp}`} className="text-gray-700">
                {exp} Years
              </label>
            </div>
          ))}
        </div>

        {/* Company Type */}
        <div>
          <h4 className="font-medium mb-2 text-gray-700">Company Type</h4>
          {["startup", "mnc", "government", "mid"].map((type) => (
            <div key={type} className="flex items-center">
              <input
                type="checkbox"
                id={type}
                checked={filters.companyType.includes(type)}
                onChange={() => handleCheckboxChange("companyType", type)}
                className="mr-2 h-4 w-4 text-blue-600"
              />
              <label htmlFor={type} className="text-gray-700 capitalize">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            </div>
          ))}
        </div>

        {/* Duration */}
        <div>
          <h4 className="font-medium mb-2 text-gray-700">Duration</h4>
          {["1-3", "3-6", "6+"].map((duration) => (
            <div key={duration} className="flex items-center">
              <input
                type="checkbox"
                id={`duration-${duration}`}
                checked={filters.duration.includes(duration)}
                onChange={() => handleCheckboxChange("duration", duration)}
                className="mr-2 h-4 w-4 text-blue-600"
              />
              <label htmlFor={`duration-${duration}`} className="text-gray-700">
                {duration} Months
              </label>
            </div>
          ))}
        </div>

        {/* Salary (Range Input) */}
        <div>
          <h4 className="font-medium mb-2 text-gray-700">
            Salary (₹0 - ₹50LPA)
          </h4>
          <input
            type="range"
            min="0"
            max="50"
            step="1"
            value={filters.salary}
            onChange={(e) =>
              setFilters({ ...filters, salary: parseInt(e.target.value) })
            }
            className="w-full"
          />
          <p className="text-sm text-gray-600">₹{filters.salary} LPA</p>
        </div>

        <button
          onClick={applyAdvancedFilters}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

const FindJobs = () => {
  const [showJobs, setshowJobs] = useState(4);
  const handleLoadMore = () => {
    setshowJobs((prev) => Math.min(prev + 4, filteredJobs.length));
  };
  // State for jobs and filters
  const [jobs, setJobs] = useState(allJobs);
  const [filteredJobs, setFilteredJobs] = useState(allJobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [simpleFilters, setSimpleFilters] = useState({
    location: "any",
    jobType: "any",
    experience: "any",
    salary: "any",
    companyType: "any",
  });
  const [advancedFilters, setAdvancedFilters] = useState({
    workType: [],
    roleCategory: [],
    experience: [],
    companyType: [],
    duration: [],
    salary: 0,
  });
  const [sortBy, setSortBy] = useState("MostRelevant");

  // Function to apply all filters together
  const applyAllFilters = () => {
    let results = [...allJobs];

    // Apply search query filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query)
      );
    }

    // Apply simple filters from the header
    if (simpleFilters.location !== "any") {
      // Map location filter to workType for consistency
      const workTypeMap = {
        remote: "remote",
        hybrid: "hybrid",
        onsite: "onSite",
      };
      results = results.filter(
        (job) => job.workType === workTypeMap[simpleFilters.location]
      );
    }

    if (simpleFilters.jobType !== "any") {
      results = results.filter((job) => job.jobType === simpleFilters.jobType);
    }

    if (simpleFilters.experience !== "any") {
      if (simpleFilters.experience === "fresher") {
        results = results.filter((job) => job.experience === "0-1");
      } else {
        results = results.filter(
          (job) => job.experience === simpleFilters.experience
        );
      }
    }

    if (simpleFilters.salary !== "any") {
      const [minSalary, maxSalary] = simpleFilters.salary
        .split("-")
        .map((s) => parseFloat(s));
      if (maxSalary) {
        results = results.filter(
          (job) => job.salary >= minSalary && job.salary <= maxSalary
        );
      } else {
        // For cases like "20+"
        results = results.filter((job) => job.salary >= minSalary);
      }
    }

    if (simpleFilters.companyType !== "any") {
      results = results.filter(
        (job) => job.companyType === simpleFilters.companyType
      );
    }

    // Apply advanced filters
    if (advancedFilters.workType.length > 0) {
      results = results.filter((job) =>
        advancedFilters.workType.includes(job.workType)
      );
    }

    if (advancedFilters.roleCategory.length > 0) {
      results = results.filter((job) =>
        advancedFilters.roleCategory.includes(job.roleCategory)
      );
    }

    if (advancedFilters.experience.length > 0) {
      results = results.filter((job) =>
        advancedFilters.experience.includes(job.experience)
      );
    }

    if (advancedFilters.companyType.length > 0) {
      results = results.filter((job) =>
        advancedFilters.companyType.includes(job.companyType)
      );
    }

    if (advancedFilters.duration.length > 0) {
      results = results.filter((job) =>
        advancedFilters.duration.includes(job.duration)
      );
    }

    if (advancedFilters.salary > 0) {
      results = results.filter((job) => job.salary >= advancedFilters.salary);
    }

    // Apply sorting
    if (sortBy === "MostRecent") {
      results.sort((a, b) => b.daysLeft - a.daysLeft);
    } else if (sortBy === "HighestPaid") {
      results.sort((a, b) => b.salary - a.salary);
    }
    // MostRelevant is the default order (as defined in allJobs)

    setFilteredJobs(results);
  };

  // Apply filters whenever any filter or search changes
  useEffect(() => {
    applyAllFilters();
  }, [searchQuery, simpleFilters, sortBy]);

  // Function to handle simple filter changes
  const handleSimpleFilterChange = (filterName, value) => {
    setSimpleFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  // Function to apply advanced filters (triggered by button click)
  const applyAdvancedFilters = () => {
    applyAllFilters();
  };

  return (
    <>
      <div className="min-h-screen p-6">
        <div className="w-full p-12">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Your Dream Job is just One Click <br />
              Away
            </h1>
            <p className="text-gray-600 text-xl">
              Search, Filter, Apply & Get Matched to Job That Fit You!
            </p>

            {/* Search Bar */}
            <div className="mt-6 max-w-8xl mx-auto">
              <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden px-4 py-2">
                <IoSearchSharp className="text-gray-500 mr-2 text-xl" />
                <input
                  type="text"
                  className="w-full py-2 focus:outline-none text-gray-700"
                  placeholder="Search for Job (e.g., Software Engineer, Product Manager)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                  onClick={applyAllFilters}
                >
                  Search
                </button>
              </div>
            </div>

            <div className="flex justify-start items-center gap-10 mt-6">
              {/* Location */}
              <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                <IoLocationSharp className="text-gray-500 mr-2 text-xl" />
                <select
                  name="location"
                  id="location"
                  className="outline-none"
                  value={simpleFilters.location}
                  onChange={(e) =>
                    handleSimpleFilterChange("location", e.target.value)
                  }
                >
                  <option value="any">Location</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="onsite">On-Site</option>
                </select>
              </div>

              {/* Job Type */}
              <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                <HiOutlineBriefcase className="text-gray-500 mr-2 text-xl" />
                <select
                  name="jobType"
                  id="jobType"
                  className="outline-none"
                  value={simpleFilters.jobType}
                  onChange={(e) =>
                    handleSimpleFilterChange("jobType", e.target.value)
                  }
                >
                  <option value="any">Job Type</option>
                  <option value="fulltime">Full-Time</option>
                  <option value="parttime">Part-Time</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                </select>
              </div>

              {/* Experience Level */}
              <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                <MdWorkHistory className="text-gray-500 mr-2 text-xl" />
                <select
                  name="experience"
                  id="experience"
                  className="outline-none"
                  value={simpleFilters.experience}
                  onChange={(e) =>
                    handleSimpleFilterChange("experience", e.target.value)
                  }
                >
                  <option value="any">Experience</option>
                  <option value="fresher">Fresher</option>
                  <option value="1-3">1-3 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>

              {/* Salary Range */}
              <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                <IoWalletOutline className="text-gray-500 mr-2 text-xl" />
                <select
                  name="salary"
                  id="salary"
                  className="outline-none"
                  value={simpleFilters.salary}
                  onChange={(e) =>
                    handleSimpleFilterChange("salary", e.target.value)
                  }
                >
                  <option value="any">Salary Range</option>
                  <option value="0-5">₹0-5 LPA</option>
                  <option value="5-10">₹5-10 LPA</option>
                  <option value="10-20">₹10-20 LPA</option>
                  <option value="20-50">₹20-50 LPA</option>
                </select>
              </div>

              {/* Company Type */}
              <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                <BsBarChart className="text-gray-500 mr-2 text-xl" />
                <select
                  name="companyType"
                  id="companyType"
                  className="outline-none"
                  value={simpleFilters.companyType}
                  onChange={(e) =>
                    handleSimpleFilterChange("companyType", e.target.value)
                  }
                >
                  <option value="any">Company Type</option>
                  <option value="startup">Startup</option>
                  <option value="mnc">MNC</option>
                  <option value="government">Government</option>
                  <option value="mid">Mid-sized</option>
                  <option value="ngo">NGO</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-12 gap-6 mt-20">
            {/* Filter Column */}
            <div className="col-span-3">
              <AdvancedFilter
                filters={advancedFilters}
                setFilters={setAdvancedFilters}
                applyAdvancedFilters={applyAdvancedFilters}
              />
            </div>

            {/* Main Column */}
            <div className="col-span-6">
              {/* Jobs Section */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-xl flex items-center">
                    <BsBriefcase className="mr-2" /> Best Job Opportunities
                  </h2>
                  <select
                    className="border border-gray-300 rounded-md p-2 text-sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="MostRelevant">Most Relevant</option>
                    <option value="MostRecent">Most Recent</option>
                    <option value="HighestPaid">Highest Paid</option>
                  </select>
                </div>

                <div>
                  {filteredJobs.length > 0 ? (
                    filteredJobs
                      .slice(0, showJobs)
                      .map((Job, index) => (
                        <JobCard key={index} {...Job} />
                      ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <BsSearch className="mx-auto text-4xl mb-3" />
                      <p className="text-lg">
                        No internships found matching your filters
                      </p>
                      <p className="mt-2">Try adjusting your filter criteria</p>
                    </div>
                  )}
                </div>

                {showJobs < filteredJobs.length && (
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={handleLoadMore}
                      className="text-blue-600 border border-blue-600 rounded-md px-4 py-2 hover:bg-blue-50 transition cursor-pointer"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessStories />
      <ReviewsAndRatings />
      <JobNotification />
      <Footer />
    </>
  );
};

export default FindJobs;
