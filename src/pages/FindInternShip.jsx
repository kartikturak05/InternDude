import React, { useEffect, useState } from "react";
import {
  IoSearchSharp,
  IoLocationOutline,
  IoTimeOutline,
  IoCashOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";
import {
  BsBriefcase,
  BsFillStarFill,
  BsFilter,
  BsSearch,
} from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";
import { IoWalletOutline } from "react-icons/io5";
import { BsBarChart } from "react-icons/bs";
import { HiOutlineWallet } from "react-icons/hi2";
import TopCompaniesHiring from "../components/TopCompaniesHiring";
import BoostYourChances from "../components/BoostYourChances";
import SuccessStories from "../components/SuccessStories";
import ReviewsAndRatings from "../components/ReviewsAndRatings";
import JobNotification from "../components/JobNotification";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {  IoBookmarkOutline, IoBookmark } from "react-icons/io5";


const AdvancedFilter = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    remote: false,
    hybrid: false,
    onSite: false,
    technology: false,
    marketing: false,
    design: false,
    business: false,
    duration: [],
    stipend: [],
  });

  const handleFilterChange = (name, value) => {
    setFilters((prev) => {
      if (Array.isArray(prev[name])) {
        // Toggle values for checkboxes (add if not present, remove if present)
        const newValue = prev[name].includes(value)
          ? prev[name].filter((item) => item !== value)
          : [...prev[name], value];

        return { ...prev, [name]: newValue };
      }

      return { ...prev, [name]: value };
    });
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
      duration: [],
      stipend: [],
    });
  };

  const handleApplyFilters = () => {
    // Pass the current filters to the parent component
    if (onApplyFilters) {
      onApplyFilters(filters);
    }
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
                {type === "onSite" ? "On-Site" : type}
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
          {["1-3", "3-6", "6+"].map((duration) => (
            <label key={duration} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                value={duration}
                checked={filters.duration.includes(duration)}
                onChange={(e) => handleFilterChange("duration", e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">
                {duration === "1-3"
                  ? "1-3 Months"
                  : duration === "3-6"
                  ? "3-6 Months"
                  : "6+ Months"}
              </span>
            </label>
          ))}
        </div>

        {/* Stipend */}
        <div>
          <h4 className="font-medium mb-2 text-gray-700">Stipend</h4>
          {[
            { value: "0-5000", label: "₹0 - ₹5,000" },
            { value: "5000-10000", label: "₹5,000 - ₹10,000" },
            { value: "10000-20000", label: "₹10,000 - ₹20,000" },
            { value: "20000+", label: "₹20,000+" },
          ].map((stipend) => (
            <label
              key={stipend.value}
              className="flex items-center space-x-2 mb-1"
            >
              <input
                type="checkbox"
                value={stipend.value}
                checked={filters.stipend.includes(stipend.value)}
                onChange={(e) => handleFilterChange("stipend", e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">{stipend.label}</span>
            </label>
          ))}
        </div>

        <button
          onClick={handleApplyFilters}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
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
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition mb-4 border-l-4 border-blue-600 cursor-pointer"
      onClick={() => navigate("/InternshipDetails")}
    >
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

          <button className="mt-4 bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-sm font-medium text-orange-600">{daysLeft} days left</span>
          <div
            className="mt-4 text-2xl cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark();
            }}
          >
            {isBookmarked ? <IoBookmark className="text-blue-600" /> : <IoBookmarkOutline className="text-gray-600" />}
          </div>
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
const internships = [
  {
    title: "Software Development Intern",
    company: "Tech Solution Inc",
    location: "Remote",
    stipend: "₹10,000",
    duration: "3 months",
    skills: "frontend",
    companyType: "startup",
    daysLeft: 4,
    isEasyApply: true,
    category: "technology",
  },
  {
    title: "Frontend Developer Intern",
    company: "Web Creations",
    location: "Hybrid",
    stipend: "₹12,000",
    duration: "4 months",
    skills: "frontend",
    companyType: "mid",
    daysLeft: 6,
    isEasyApply: false,
    category: "technology",
  },
  {
    title: "React Developer Intern",
    company: "Innovatech",
    location: "Remote",
    stipend: "₹15,000",
    duration: "6 months",
    skills: "frontend",
    companyType: "mnc",
    daysLeft: 7,
    isEasyApply: true,
    category: "technology",
  },
  {
    title: "UI/UX Design Intern",
    company: "Creative Studios",
    location: "Hybrid",
    stipend: "₹15,000",
    duration: "6 months",
    skills: "design",
    companyType: "mnc",
    daysLeft: 7,
    isEasyApply: false,
    category: "design",
  },
  {
    title: "Graphic Design Intern",
    company: "Visual Works",
    location: "On-Site",
    stipend: "₹8,000",
    duration: "3 months",
    skills: "design",
    companyType: "mid",
    daysLeft: 5,
    isEasyApply: true,
    category: "design",
  },
  {
    title: "Product Design Intern",
    company: "Innovative Labs",
    location: "Remote",
    stipend: "₹20,000",
    duration: "6 months",
    skills: "design",
    companyType: "startup",
    daysLeft: 12,
    isEasyApply: false,
    category: "design",
  },
  {
    title: "Marketing Intern",
    company: "Global Brands Ltd",
    location: "On-Site",
    stipend: "₹12,000",
    duration: "4 months",
    skills: "marketing",
    companyType: "mid",
    daysLeft: 2,
    isEasyApply: true,
    category: "marketing",
  },
  {
    title: "Digital Marketing Intern",
    company: "Ads Agency",
    location: "Hybrid",
    stipend: "₹10,000",
    duration: "3 months",
    skills: "marketing",
    companyType: "startup",
    daysLeft: 9,
    isEasyApply: false,
    category: "marketing",
  },
  {
    title: "Social Media Manager Intern",
    company: "Trendsetters",
    location: "Remote",
    stipend: "₹14,000",
    duration: "5 months",
    skills: "marketing",
    companyType: "mnc",
    daysLeft: 7,
    isEasyApply: true,
    category: "marketing",
  },
  {
    title: "Backend Developer Intern",
    company: "Code Innovations",
    location: "Remote",
    stipend: "₹8,000",
    duration: "3 months",
    skills: "backend",
    companyType: "startup",
    daysLeft: 5,
    isEasyApply: false,
    category: "technology",
  },
  {
    title: "Node.js Developer Intern",
    company: "API Builders",
    location: "On-Site",
    stipend: "₹10,000",
    duration: "4 months",
    skills: "backend",
    companyType: "mid",
    daysLeft: 3,
    isEasyApply: true,
    category: "technology",
  },
  {
    title: "Django Developer Intern",
    company: "Python Coders",
    location: "Hybrid",
    stipend: "₹14,000",
    duration: "6 months",
    skills: "backend",
    companyType: "mnc",
    daysLeft: 6,
    isEasyApply: false,
    category: "technology",
  },
  {
    title: "Data Science Intern",
    company: "AI Research Lab",
    location: "Hybrid",
    stipend: "₹20,000",
    duration: "6 months",
    skills: "data",
    companyType: "mnc",
    daysLeft: 10,
    isEasyApply: true,
    category: "technology",
  },
  {
    title: "Machine Learning Intern",
    company: "DeepMind Tech",
    location: "Remote",
    stipend: "₹22,000",
    duration: "5 months",
    skills: "data",
    companyType: "startup",
    daysLeft: 11,
    isEasyApply: false,
    category: "technology",
  },
  {
    title: "Data Analytics Intern",
    company: "Insight Corp",
    location: "On-Site",
    stipend: "₹18,000",
    duration: "6 months",
    skills: "data",
    companyType: "mid",
    daysLeft: 9,
    isEasyApply: true,
    category: "technology",
  },
  {
    title: "Content Writing Intern",
    company: "Writers Hub",
    location: "On-Site",
    stipend: "₹5,000",
    duration: "2 months",
    skills: "writing",
    companyType: "mid",
    daysLeft: 3,
    isEasyApply: true,
    category: "business",
  },
  {
    title: "Technical Writing Intern",
    company: "DocuTech",
    location: "Hybrid",
    stipend: "₹9,000",
    duration: "3 months",
    skills: "writing",
    companyType: "startup",
    daysLeft: 7,
    isEasyApply: false,
    category: "business",
  },
  {
    title: "SEO Content Writer Intern",
    company: "RankBoost",
    location: "Remote",
    stipend: "₹7,000",
    duration: "4 months",
    skills: "writing",
    companyType: "mnc",
    daysLeft: 5,
    isEasyApply: true,
    category: "business",
  },
  {
    title: "Cybersecurity Intern",
    company: "CyberSecure Pvt Ltd",
    location: "Remote",
    stipend: "₹18,000",
    duration: "5 months",
    skills: "security",
    companyType: "mnc",
    daysLeft: 8,
    isEasyApply: false,
    category: "technology",
  },
  {
    title: "Ethical Hacking Intern",
    company: "Hack Secure",
    location: "Hybrid",
    stipend: "₹20,000",
    duration: "6 months",
    skills: "security",
    companyType: "mid",
    daysLeft: 12,
    isEasyApply: true,
    category: "technology",
  },
  {
    title: "Penetration Tester Intern",
    company: "WhiteHat Labs",
    location: "On-Site",
    stipend: "₹22,000",
    duration: "4 months",
    skills: "security",
    companyType: "startup",
    daysLeft: 10,
    isEasyApply: false,
    category: "technology",
  },
];
// Sample Internship Data
const FindInternship = () => {
  

  const [showInternships, setShowInternships] = useState(4);
  const handleLoadMore = () => {
    setShowInternships((prev) =>
      Math.min(prev + 4, filteredInternships.length)
    );
  };

  const [filteredInternships, setFilteredInternships] = useState(internships);
  const [locations, setLocations] = useState("");
  const [roles, setRoles] = useState("");
  const [stipends, setStipends] = useState("");
  const [durations, setDurations] = useState("");
  const [skills, setSkills] = useState("");
  const [companyTypes, setCompanyTypes] = useState("");
  const [useAdvancedFilters, setUseAdvancedFilters] = useState(false);
  const [advancedFiltersActive, setAdvancedFiltersActive] = useState(false);

  // Function to handle advanced filter application
  const handleAdvancedFilterApply = (advancedFilters) => {
    setUseAdvancedFilters(true);
    setAdvancedFiltersActive(true);

    // Reset the basic filters
    setLocations("");
    setRoles("");
    setStipends("");
    setDurations("");
    setSkills("");
    setCompanyTypes("");

    // Apply advanced filters
    let newFilteredInternships = internships;

    // Filter by location (work type)
    const locationFilters = [];
    if (advancedFilters.remote) locationFilters.push("remote");
    if (advancedFilters.hybrid) locationFilters.push("hybrid");
    if (advancedFilters.onSite) locationFilters.push("on-site");

    if (locationFilters.length > 0) {
      newFilteredInternships = newFilteredInternships.filter((internship) =>
        locationFilters.some(
          (loc) => internship.location.toLowerCase() === loc.toLowerCase()
        )
      );
    }

    // Filter by role category
    const categoryFilters = [];
    if (advancedFilters.technology) categoryFilters.push("technology");
    if (advancedFilters.marketing) categoryFilters.push("marketing");
    if (advancedFilters.design) categoryFilters.push("design");
    if (advancedFilters.business) categoryFilters.push("business");

    if (categoryFilters.length > 0) {
      newFilteredInternships = newFilteredInternships.filter((internship) =>
        categoryFilters.includes(internship.category)
      );
    }

    // Filter by duration
    if (advancedFilters.duration.length > 0) {
      newFilteredInternships = newFilteredInternships.filter((internship) => {
        const months = parseInt(internship.duration.split(" ")[0]);

        return advancedFilters.duration.some((range) => {
          if (range === "1-3") return months >= 1 && months <= 3;
          if (range === "3-6") return months > 3 && months <= 6;
          if (range === "6+") return months > 6;
          return false;
        });
      });
    }

    // Filter by stipend
    if (advancedFilters.stipend.length > 0) {
      newFilteredInternships = newFilteredInternships.filter((internship) => {
        const stipendValue = parseInt(
          internship.stipend.replace("₹", "").replace(",", "")
        );

        return advancedFilters.stipend.some((range) => {
          if (range === "0-5000")
            return stipendValue >= 0 && stipendValue <= 5000;
          if (range === "5000-10000")
            return stipendValue > 5000 && stipendValue <= 10000;
          if (range === "10000-20000")
            return stipendValue > 10000 && stipendValue <= 20000;
          if (range === "20000+") return stipendValue > 20000;
          return false;
        });
      });
    }

    setFilteredInternships(newFilteredInternships);
    setShowInternships(4); // Reset to show first 4 results
  };

  // Reset advanced filters
  const resetAdvancedFilters = () => {
    setUseAdvancedFilters(false);
    setAdvancedFiltersActive(false);
    setFilteredInternships(internships);
  };

  // Basic Filtering Function
  useEffect(() => {
    // Skip if advanced filters are active
    if (useAdvancedFilters) return;

    let newFilteredInternships = internships;

    if (locations && locations !== "any") {
      newFilteredInternships = newFilteredInternships.filter(
        (internship) =>
          internship.location.toLowerCase() === locations.toLowerCase()
      );
    }

    if (roles && roles !== "any") {
      newFilteredInternships = newFilteredInternships.filter((internship) =>
        internship.title.toLowerCase().includes(roles.toLowerCase())
      );
    }

    if (stipends && stipends !== "any") {
      if (stipends === "paid") {
        newFilteredInternships = newFilteredInternships.filter(
          (internship) => internship.stipend !== "Unpaid"
        );
      } else if (stipends === "unpaid") {
        newFilteredInternships = newFilteredInternships.filter(
          (internship) => internship.stipend === "Unpaid"
        );
      } else if (stipends === "high") {
        newFilteredInternships = newFilteredInternships.filter(
          (internship) =>
            parseInt(internship.stipend.replace("₹", "").replace(",", "")) >=
            10000
        );
      }
    }

    if (durations && durations !== "any") {
      newFilteredInternships = newFilteredInternships.filter(
        (internship) =>
          internship.duration.toLowerCase() === durations.toLowerCase()
      );
    }

    if (skills && skills !== "any") {
      newFilteredInternships = newFilteredInternships.filter(
        (internship) => internship.skills.toLowerCase() === skills.toLowerCase()
      );
    }

    if (companyTypes && companyTypes !== "any") {
      newFilteredInternships = newFilteredInternships.filter(
        (internship) =>
          internship.companyType.toLowerCase() === companyTypes.toLowerCase()
      );
    }

    setFilteredInternships(newFilteredInternships);
  }, [
    locations,
    roles,
    stipends,
    durations,
    skills,
    companyTypes,
    useAdvancedFilters,
  ]);

  return (
    <>
      <div className="min-h-screen p-6">
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
              <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden px-4 py-2">
                <IoSearchSharp className="text-gray-500 mr-2 text-xl" />
                <input
                  type="text"
                  className="w-full py-2 focus:outline-none text-gray-700"
                  placeholder="Search for internships (e.g., Marketing Intern, Software Developer)"
                  onChange={(e) => setRoles(e.target.value)}
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                  Search
                </button>
              </div>
            </div>

            {/* Basic Filters - Show only when advanced filters are not active */}
            {!advancedFiltersActive && (
              <div className="flex flex-wrap gap-4 mt-6">
                {/* Location */}
                <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                  <IoLocationSharp className="text-gray-500 mr-2 text-xl" />
                  <select
                    name="location"
                    id="location"
                    className="outline-none"
                    value={locations}
                    onChange={(e) => setLocations(e.target.value)}
                  >
                    <option value="any">Location</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="on-site">On-Site</option>
                  </select>
                </div>
                {/* Role */}
                <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                  <HiOutlineWallet className="text-gray-500 mr-2 text-xl" />
                  <select
                    name="role"
                    id="role"
                    className="outline-none"
                    value={roles}
                    onChange={(e) => setRoles(e.target.value)}
                  >
                    <option value="any">Role</option>
                    <option value="software">Software Developer</option>
                    <option value="marketing">Marketing</option>
                    <option value="design">Product Design</option>
                  </select>
                </div>
                {/* Stipend */}
                <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                  <IoWalletOutline className="text-gray-500 mr-2 text-xl" />
                  <select
                    name="stipend"
                    id="stipend"
                    className="outline-none"
                    value={stipends}
                    onChange={(e) => setStipends(e.target.value)}
                  >
                    <option value="any">Stipend</option>
                    <option value="paid">Paid</option>
                    <option value="unpaid">Unpaid</option>
                    <option value="high">₹ 10,000+</option>
                  </select>
                </div>
                {/* Duration */}
                <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                  <WiTime3 className="text-gray-500 mr-2 text-xl" />
                  <select
                    name="duration"
                    id="duration"
                    className="outline-none"
                    value={durations}
                    onChange={(e) => setDurations(e.target.value)}
                  >
                    <option value="any">Duration</option>
                    <option value="1 month">1 Month</option>
                    <option value="3 months">3 Months</option>
                    <option value="6 months">6 Months</option>
                  </select>
                </div>
                {/* Skills */}
                <div className="p-2 flex border border-gray-300 rounded-md cursor-pointer">
                  <select
                    name="skills"
                    id="skills"
                    className="outline-none"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                  >
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
                    value={companyTypes}
                    onChange={(e) => setCompanyTypes(e.target.value)}
                  >
                    <option value="any">Company Type</option>
                    <option value="startup">Startup</option>
                    <option value="mnc">MNC</option>
                    <option value="mid">Mid-sized</option>
                  </select>
                </div>
              </div>
            )}

            {/* Show indicator that advanced filters are active */}
            {advancedFiltersActive && (
              <div className="mt-6 flex items-center justify-between bg-blue-50 p-3 rounded-lg border border-blue-200">
                <span className="text-blue-700 font-medium flex items-center">
                  <BsFilter className="mr-2" /> Advanced filters applied
                </span>
                <button
                  onClick={resetAdvancedFilters}
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  Clear advanced filters
                </button>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-12 gap-6 mt-20">
            {/* Filter Column */}
            <div className="col-span-3">
              <AdvancedFilter onApplyFilters={handleAdvancedFilterApply} />
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
                  {filteredInternships.length > 0 ? (
                    filteredInternships
                      .slice(0, showInternships)
                      .map((internship, index) => (
                        <InternshipCard key={index} {...internship} />
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

                {showInternships < filteredInternships.length && (
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
