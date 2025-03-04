import React, { useState } from "react";
import {
  IoSearchSharp,
  IoLocationOutline,
  IoTimeOutline,
  IoCashOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";
import { BsBriefcase, BsFillStarFill, BsFilter } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";
import { IoWalletOutline } from "react-icons/io5";
import { BsBarChart } from "react-icons/bs";
import { HiOutlineWallet } from "react-icons/hi2";
import TopCompaniesHiring from "./TopCompaniesHiring";
import BoostYourChances from "./BoostYourChances";
import SuccessStories from "./SuccessStories";
import ReviewsAndRatings from "./ReviewsAndRatings";
import JobNotification from "./JobNotification";
import Footer from "./Footer";

const AdvancedFilter = () => {
  const [filters, setFilters] = useState({
    remote: false,
    hybrid: false,
    onSite: false,
    technology: false,
    marketing: false,
    design: false,
    business: false,
    duration: "any",
    stipend: "any",
  });

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      remote: false,
      hybrid: false,
      onSite: false,
      technology: false,
      marketing: false,
      design: false,
      business: false,
      duration: "any",
      stipend: "any",
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
                checked={filters[type]}
                onChange={(e) => handleFilterChange(type, e.target.checked)}
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
                checked={filters[role]}
                onChange={(e) => handleFilterChange(role, e.target.checked)}
                className="mr-2 h-4 w-4 text-blue-600"
              />
              <label htmlFor={role} className="text-gray-700 capitalize">
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </label>
            </div>
          ))}
        </div>

        {/* Duration */}
        <div>
          <h4 className="font-medium mb-2 text-gray-700">Duration</h4>
          <select
            value={filters.duration}
            onChange={(e) => handleFilterChange("duration", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="any">Any Duration</option>
            <option value="1-3">1-3 Months</option>
            <option value="3-6">3-6 Months</option>
            <option value="6+">6+ Months</option>
          </select>
        </div>

        {/* Stipend */}
        <div>
          <h4 className="font-medium mb-2 text-gray-700">Stipend</h4>
          <select
            value={filters.stipend}
            onChange={(e) => handleFilterChange("stipend", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="any">₹0 - ₹5,000</option>
            <option value="5000-10000">₹5,000 - ₹10,000</option>
            <option value="10000-20000">₹10,000 - ₹20,000</option>
            <option value="20000+">₹20,000+</option>
          </select>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

const InternshipCard = ({
  title,
  company,
  location,
  stipend,
  duration,
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
              <IoTimeOutline className="mr-1" />
              {duration}
            </div>
          </div>

          {/* {isEasyApply && (
            <div className="flex items-center text-green-600 text-sm font-medium mt-1">
              <IoCheckmarkCircle className="mr-1" />
              Easy Apply
            </div>
          )} */}
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

const FeaturedInternship = () => {
  const featuredInternships = [
    {
      title: "Product Design Intern",
      company: "Google",
      stipend: "$3000/month",
      logo: "G",
    },
    {
      title: "Software Engineer Intern",
      company: "Microsoft",
      stipend: "$5000/month",
      logo: "M",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="font-semibold text-lg mb-4 flex items-center">
        <BsFillStarFill className="mr-2 text-yellow-500" />
        Featured Internships
      </h3>

      <div className="space-y-4">
        {featuredInternships.map((internship, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0"
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              {internship.logo}
            </div>
            <div>
              <h4 className="font-medium text-gray-800">{internship.title}</h4>
              <p className="text-sm text-gray-600">{internship.company}</p>
              <p className="text-sm font-medium text-blue-600">
                {internship.stipend}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TrendingInsights = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="font-semibold text-lg mb-4">Trending Insights</h3>
      <ul className="space-y-2">
        <li className="flex items-center hover:bg-gray-50 p-2 rounded cursor-pointer">
          <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mr-2">
            1
          </span>
          <span className="text-gray-700">Top 10 Internships in India</span>
        </li>
        <li className="flex items-center hover:bg-gray-50 p-2 rounded cursor-pointer">
          <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mr-2">
            2
          </span>
          <span className="text-gray-700">Top 10 Internships in USA</span>
        </li>
        <li className="flex items-center hover:bg-gray-50 p-2 rounded cursor-pointer">
          <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mr-2">
            3
          </span>
          <span className="text-gray-700">Top 10 Internships in UK</span>
        </li>
      </ul>
    </div>
  );
};

const FindInternship = () => {
  const internships = [
    {
      title: "Software Development Intern",
      company: "Tech Solution Inc",
      location: "Remote",
      stipend: "₹10,000",
      duration: "3 months",
      daysLeft: 4,
      isEasyApply: true,
    },
    {
      title: "UI/UX Design Intern",
      company: "Creative Studios",
      location: "Hybrid",
      stipend: "₹15,000",
      duration: "6 months",
      daysLeft: 7,
      isEasyApply: false,
    },
    {
      title: "Marketing Intern",
      company: "Global Brands Ltd",
      location: "On-Site",
      stipend: "₹12,000",
      duration: "4 months",
      daysLeft: 2,
      isEasyApply: true,
    },
  ];

  return (
    <>
      <div className=" min-h-screen p-6">
        <div className="w-full p-12">
          {/* Header Section */}
          <div className="text-left mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Unlock Your First Internship - Apply Now
            </h1>
            <p className="text-gray-600 text-xl">
              Filter, Apply & Get Matched to Internships That Fit You!
            </p>

            {/* Search Bar */}
            <div className="mt-6 max-w-8xl mx-auto">
              <div className="flex items-center  bg-white rounded-full shadow-md overflow-hidden px-4 py-2">
                <IoSearchSharp className="text-gray-500 mr-2 text-xl" />
                <input
                  type="text"
                  className="w-full py-2 focus:outline-none text-gray-700"
                  placeholder="Search for internships (e.g., Marketing Intern, Software Developer)"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              {/* Location */}
              <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                <IoLocationSharp className="text-gray-500 mr-2 text-xl" />
                <select name="location" id="location" className="outline-none">
                  <option value="any">Location</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="onsite">On-Site</option>
                </select>
              </div>
              {/* Role */}
              <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                <HiOutlineWallet className="text-gray-500 mr-2 text-xl" />
                <select name="role" id="role" className="outline-none">
                  <option value="any">Role</option>
                  <option value="software">Software Developer</option>
                  <option value="marketing">Marketing</option>
                  <option value="design">Product Design</option>
                </select>
              </div>
              {/* Stipend */}
              <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                <IoWalletOutline className="text-gray-500 mr-2 text-xl" />
                <select name="stipend" id="stipend" className="outline-none">
                  <option value="any">Stipend</option>
                  <option value="paid">Paid</option>
                  <option value="unpaid">Unpaid</option>
                  <option value="high">₹ 10,000+</option>
                </select>
              </div>
              {/* Duration */}
              <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                <WiTime3 className="text-gray-500 mr-2 text-xl" />
                <select name="duration" id="duration" className="outline-none">
                  <option value="any">Duration</option>
                  <option value="1month">1 Month</option>
                  <option value="3months">3 Months</option>
                  <option value="6months">6 Months</option>
                </select>
              </div>
              {/* Skills */}
              <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                <select name="skills" id="skills" className="outline-none">
                  <option value="any">Skills</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="data">Data Science</option>
                </select>
              </div>
              {/* Company Type */}
              <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                <BsBarChart className="text-gray-500 mr-2 text-xl" />
                <select
                  name="companyType"
                  id="companyType"
                  className="outline-none"
                >
                  <option value="any">Company Type</option>
                  <option value="startup">Startup</option>
                  <option value="mnc">MNC</option>
                  <option value="mid">Mid-sized</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-12 gap-6 mt-20">
            {/* Filter Column */}
            <div className="col-span-3">
              <AdvancedFilter />
            </div>

            {/* Main Column */}
            <div className="col-span-6">
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-xl flex items-center">
                    <BsBriefcase className="mr-2" /> Best Internship
                    Opportunities
                  </h2>
                  <select className="border border-gray-300 rounded-md p-2 text-sm">
                    <option value="MostRelevant">Most Relevant</option>
                    <option value="MostRecent">Most Recent</option>
                    <option value="HighestPaid">Highest Paid</option>
                  </select>
                </div>

                <div>
                  {internships.map((internship, index) => (
                    <InternshipCard key={index} {...internship} />
                  ))}
                </div>

                <div className="flex justify-center mt-4">
                  <button className="text-blue-600 border border-blue-600 rounded-md px-4 py-2 hover:bg-blue-50 transition">
                    Load More
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-3">
              <FeaturedInternship />
              <TrendingInsights />
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

export default FindInternship;
