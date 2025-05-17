import { useState } from "react";
import {
  MapPin,
  Briefcase,
  DollarSign,
  Filter,
  ChevronDown,
  X,
} from "lucide-react";

export default function MyBookmarks() {
  const [activeTab, setActiveTab] = useState("All");
  const [filters, setFilters] = useState({
    location: null,
    mode: null,
    type: null,
    salary: null,
  });
  const [showLocationFilter, setShowLocationFilter] = useState(false);
  const [showModeFilter, setShowModeFilter] = useState(false);
  const [showTypeFilter, setShowTypeFilter] = useState(false);
  const [showSalaryFilter, setShowSalaryFilter] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [showSortOptions, setShowSortOptions] = useState(false);

  const bookmarks = [
    {
      id: 1,
      company: "TechVision Labs",
      logo: "https://plus.unsplash.com/premium_photo-1661328090120-a6ef40841abe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "San Francisco, CA",
      title: "UX/UI Design Intern",
      mode: "Hybrid",
      type: "Internship",
      salary: "$2000-3000/month",
      salaryValue: 2500, // For sorting/filtering
      posted: "2 days ago",
      postedDate: new Date(new Date().setDate(new Date().getDate() - 2)),
      deadline: "Dec 30, 2023",
      tags: ["UI/UX", "Figma", "Adobe XD"],
      description:
        "Join our design team to create innovative user experiences for our clients.",
      requirements: [
        "Bachelor's degree in Design or related field",
        "Proficiency in Figma and Adobe XD",
        "Understanding of user-centered design principles",
      ],
      benefits: [
        "Flexible work schedule",
        "Professional development opportunities",
        "Mentorship from senior designers",
      ],
    },
    {
      id: 2,
      company: "DataFlow Systems",
      logo: "https://plus.unsplash.com/premium_photo-1661328090120-a6ef40841abe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "New York, NY",
      title: "Software Developer",
      mode: "Remote",
      type: "Job",
      salary: "$80,000-100,000/year",
      salaryValue: 90000,
      posted: "1 week ago",
      postedDate: new Date(new Date().setDate(new Date().getDate() - 7)),
      deadline: "Jan 15, 2024",
      tags: ["React", "Node.js", "TypeScript"],
      description:
        "Build and maintain web applications using modern JavaScript frameworks.",
      requirements: [
        "3+ years of experience with React",
        "Strong TypeScript skills",
        "Experience with Node.js backend development",
      ],
      benefits: [
        "Competitive salary",
        "Remote work flexibility",
        "Health and dental insurance",
      ],
    },
    {
      id: 3,
      company: "GrowthMark",
      logo: "https://plus.unsplash.com/premium_photo-1661328090120-a6ef40841abe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Chicago, IL",
      title: "Marketing Coordinator",
      mode: "In-Office",
      type: "Internship",
      salary: "$1800-2500/month",
      salaryValue: 2150,
      posted: "3 days ago",
      postedDate: new Date(new Date().setDate(new Date().getDate() - 3)),
      deadline: "Dec 25, 2023",
      tags: ["Digital Marketing", "Social Media", "Analytics"],
      description:
        "Assist in planning and executing marketing campaigns across various channels.",
      requirements: [
        "Currently pursuing a degree in Marketing or Communications",
        "Experience with social media platforms",
        "Basic understanding of marketing analytics",
      ],
      benefits: [
        "Hands-on experience in a fast-paced marketing team",
        "Networking opportunities",
        "Possibility of full-time employment",
      ],
    },
    {
      id: 4,
      company: "CloudNine Solutions",
      logo: "https://plus.unsplash.com/premium_photo-1661328090120-a6ef40841abe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Austin, TX",
      title: "Cloud Engineer",
      mode: "Hybrid",
      type: "Job",
      salary: "$90,000-120,000/year",
      salaryValue: 105000,
      posted: "5 days ago",
      postedDate: new Date(new Date().setDate(new Date().getDate() - 5)),
      deadline: "Jan 10, 2024",
      tags: ["AWS", "DevOps", "Python"],
      description:
        "Design and implement cloud infrastructure solutions for enterprise clients.",
      requirements: [
        "5+ years of experience with AWS services",
        "Strong DevOps background",
        "Python programming skills",
      ],
      benefits: [
        "Competitive salary package",
        "Flexible work arrangements",
        "Professional development budget",
      ],
    },
    {
      id: 5,
      company: "FinTech Forward",
      logo: "https://plus.unsplash.com/premium_photo-1661328090120-a6ef40841abe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Boston, MA",
      title: "Financial Analyst Intern",
      mode: "Remote",
      type: "Internship",
      salary: "$2500-3500/month",
      salaryValue: 3000,
      posted: "1 day ago",
      postedDate: new Date(new Date().setDate(new Date().getDate() - 1)),
      deadline: "Dec 28, 2023",
      tags: ["Financial Modeling", "Excel", "SQL"],
      description:
        "Assist in financial data analysis and reporting for clients in the financial services sector.",
      requirements: [
        "Currently pursuing a degree in Finance, Economics, or related field",
        "Strong Excel skills",
        "Basic SQL knowledge",
      ],
      benefits: [
        "Competitive stipend",
        "Remote work flexibility",
        "Exposure to the fintech industry",
      ],
    },
    {
      id: 6,
      company: "Quantum Computing Inc",
      logo: "https://plus.unsplash.com/premium_photo-1661328090120-a6ef40841abe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Seattle, WA",
      title: "Quantum Research Assistant",
      mode: "In-Office",
      type: "Internship",
      salary: "$3000-4000/month",
      salaryValue: 3500,
      posted: "4 days ago",
      postedDate: new Date(new Date().setDate(new Date().getDate() - 4)),
      deadline: "Jan 5, 2024",
      tags: ["Quantum Computing", "Research", "Physics"],
      description:
        "Support research initiatives in quantum computing algorithms and applications.",
      requirements: [
        "Graduate student in Physics, Computer Science, or related field",
        "Understanding of quantum mechanics",
        "Programming experience in Python",
      ],
      benefits: [
        "Work with leading researchers",
        "Access to quantum computing resources",
        "Publication opportunities",
      ],
    },
    {
      id: 7,
      company: "EcoSystems Tech",
      logo: "https://plus.unsplash.com/premium_photo-1661328090120-a6ef40841abe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Portland, OR",
      title: "Sustainability Engineer",
      mode: "Hybrid",
      type: "Job",
      salary: "$85,000-110,000/year",
      salaryValue: 97500,
      posted: "6 days ago",
      postedDate: new Date(new Date().setDate(new Date().getDate() - 6)),
      deadline: "Jan 20, 2024",
      tags: ["Sustainability", "Environmental Engineering", "Green Tech"],
      description:
        "Design and implement sustainable technology solutions for corporate clients.",
      requirements: [
        "Bachelor's degree in Environmental Engineering or related field",
        "3+ years of experience in sustainability initiatives",
        "Project management skills",
      ],
      benefits: [
        "Competitive salary",
        "Work from home flexibility",
        "Eco-focused work environment",
      ],
    },
    {
      id: 8,
      company: "BioTech Innovations",
      logo: "https://plus.unsplash.com/premium_photo-1661328090120-a6ef40841abe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Cambridge, MA",
      title: "Bioinformatics Specialist",
      mode: "Remote",
      type: "Job",
      salary: "$95,000-130,000/year",
      salaryValue: 112500,
      posted: "3 days ago",
      postedDate: new Date(new Date().setDate(new Date().getDate() - 3)),
      deadline: "Dec 31, 2023",
      tags: ["Bioinformatics", "Genomics", "Machine Learning"],
      description:
        "Analyze biological data using computational methods to support research initiatives.",
      requirements: [
        "Master's or PhD in Bioinformatics or related field",
        "Experience with genomic data analysis",
        "Programming skills in Python or R",
      ],
      benefits: [
        "Competitive compensation",
        "Fully remote position",
        "Healthcare benefits",
      ],
    },
  ];

  // Available filter options
  const locations = [...new Set(bookmarks.map((b) => b.location))];
  const modes = [...new Set(bookmarks.map((b) => b.mode))];
  const types = [...new Set(bookmarks.map((b) => b.type))];
  const salaryRanges = [
    { label: "Under $30k/year", min: 0, max: 30000 },
    { label: "$30k-$60k/year", min: 30000, max: 60000 },
    { label: "$60k-$90k/year", min: 60000, max: 90000 },
    { label: "$90k-$120k/year", min: 90000, max: 120000 },
    { label: "Over $120k/year", min: 120000, max: Infinity },
    { label: "Under $2k/month", min: 0, max: 2000 },
    { label: "$2k-$3k/month", min: 2000, max: 3000 },
    { label: "$3k-$4k/month", min: 3000, max: 4000 },
    { label: "Over $4k/month", min: 4000, max: Infinity },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest first" },
    { value: "oldest", label: "Oldest first" },
    { value: "highestSalary", label: "Highest salary" },
    { value: "lowestSalary", label: "Lowest salary" },
    { value: "deadlineSoon", label: "Deadline approaching" },
  ];

  // Filter and sort bookmarks
  const filteredAndSortedBookmarks = bookmarks
    // First filter by tab
    .filter(
      (bookmark) =>
        activeTab === "All" ||
        (activeTab === "Internships" && bookmark.type === "Internship") ||
        (activeTab === "Jobs" && bookmark.type === "Job")
    )
    // Then apply additional filters
    .filter(
      (bookmark) => !filters.location || bookmark.location === filters.location
    )
    .filter((bookmark) => !filters.mode || bookmark.mode === filters.mode)
    .filter((bookmark) => !filters.type || bookmark.type === filters.type)
    .filter((bookmark) => {
      if (!filters.salary) return true;
      const range = salaryRanges.find((r) => r.label === filters.salary);
      return (
        range &&
        bookmark.salaryValue >= range.min &&
        bookmark.salaryValue <= range.max
      );
    })
    // Then sort
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.postedDate - a.postedDate;
        case "oldest":
          return a.postedDate - b.postedDate;
        case "highestSalary":
          return b.salaryValue - a.salaryValue;
        case "lowestSalary":
          return a.salaryValue - b.salaryValue;
        case "deadlineSoon":
          return new Date(a.deadline) - new Date(b.deadline);
        default:
          return 0;
      }
    });

  const getModeColor = (mode) => {
    switch (mode) {
      case "Hybrid":
        return "bg-blue-100 text-blue-700";
      case "Remote":
        return "bg-green-100 text-green-700";
      case "In-Office":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getTypeColor = (type) => {
    return type === "Internship"
      ? "bg-purple-100 text-purple-700"
      : "bg-gray-100 text-gray-700";
  };

  return (
    <div className="max-w-8xl mx-auto p-4 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Bookmarks</h1>
        <p className="text-gray-600">Your saved internships and jobs</p>
      </div>

      {/* Tabs */}
      <div className="flex mb-6 border-b">
        <div className="flex space-x-1 mb-2">
          {["All", "Internships", "Jobs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg ${
                activeTab === tab
                  ? "bg-blue-700 text-white"
                  : "text-gray-700 bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Selected filters */}
      {(filters.location || filters.mode || filters.type || filters.salary) && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.location && (
            <div className="flex items-center bg-blue-50 text-blue-700 rounded-full px-3 py-1">
              <span className="mr-2">{filters.location}</span>
              <button
                onClick={() => setFilters({ ...filters, location: null })}
                className="text-blue-700 hover:text-blue-900"
              >
                <X size={14} />
              </button>
            </div>
          )}
          {filters.mode && (
            <div className="flex items-center bg-blue-50 text-blue-700 rounded-full px-3 py-1">
              <span className="mr-2">{filters.mode}</span>
              <button
                onClick={() => setFilters({ ...filters, mode: null })}
                className="text-blue-700 hover:text-blue-900"
              >
                <X size={14} />
              </button>
            </div>
          )}
          {filters.type && (
            <div className="flex items-center bg-blue-50 text-blue-700 rounded-full px-3 py-1">
              <span className="mr-2">{filters.type}</span>
              <button
                onClick={() => setFilters({ ...filters, type: null })}
                className="text-blue-700 hover:text-blue-900"
              >
                <X size={14} />
              </button>
            </div>
          )}
          {filters.salary && (
            <div className="flex items-center bg-blue-50 text-blue-700 rounded-full px-3 py-1">
              <span className="mr-2">{filters.salary}</span>
              <button
                onClick={() => setFilters({ ...filters, salary: null })}
                className="text-blue-700 hover:text-blue-900"
              >
                <X size={14} />
              </button>
            </div>
          )}
          {(filters.location ||
            filters.mode ||
            filters.type ||
            filters.salary) && (
            <button
              onClick={() =>
                setFilters({
                  location: null,
                  mode: null,
                  type: null,
                  salary: null,
                })
              }
              className="text-blue-700 hover:text-blue-900 text-md underline ml-2"
            >
              Clear all
            </button>
          )}
        </div>
      )}

      {/* Filters */}
      <div className="flex justify-between mb-6 relative">
        <div className="flex space-x-2">
          <div className="relative">
            <button
              className="flex items-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
              onClick={() => {
                setShowLocationFilter(!showLocationFilter);
                setShowModeFilter(false);
                setShowTypeFilter(false);
                setShowSalaryFilter(false);
                setShowSortOptions(false);
              }}
            >
              <MapPin size={16} className="mr-2" />
              Location
              <ChevronDown size={16} className="ml-2" />
            </button>

            {showLocationFilter && (
              <div className="absolute z-10 mt-2 w-64 bg-white shadow-lg rounded-lg border p-2">
                {locations.map((location) => (
                  <div
                    key={location}
                    className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                    onClick={() => {
                      setFilters({ ...filters, location });
                      setShowLocationFilter(false);
                    }}
                  >
                    {location}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
              onClick={() => {
                setShowModeFilter(!showModeFilter);
                setShowLocationFilter(false);
                setShowTypeFilter(false);
                setShowSalaryFilter(false);
                setShowSortOptions(false);
              }}
            >
              <Briefcase size={16} className="mr-2" />
              Mode
              <ChevronDown size={16} className="ml-2" />
            </button>

            {showModeFilter && (
              <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg border p-2">
                {modes.map((mode) => (
                  <div
                    key={mode}
                    className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                    onClick={() => {
                      setFilters({ ...filters, mode });
                      setShowModeFilter(false);
                    }}
                  >
                    {mode}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
              onClick={() => {
                setShowTypeFilter(!showTypeFilter);
                setShowLocationFilter(false);
                setShowModeFilter(false);
                setShowSalaryFilter(false);
                setShowSortOptions(false);
              }}
            >
              <Briefcase size={16} className="mr-2" />
              Type
              <ChevronDown size={16} className="ml-2" />
            </button>

            {showTypeFilter && (
              <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg border p-2">
                {types.map((type) => (
                  <div
                    key={type}
                    className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                    onClick={() => {
                      setFilters({ ...filters, type });
                      setShowTypeFilter(false);
                    }}
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
              onClick={() => {
                setShowSalaryFilter(!showSalaryFilter);
                setShowLocationFilter(false);
                setShowModeFilter(false);
                setShowTypeFilter(false);
                setShowSortOptions(false);
              }}
            >
              <DollarSign size={16} className="mr-2" />
              Salary
              <ChevronDown size={16} className="ml-2" />
            </button>

            {showSalaryFilter && (
              <div className="absolute z-10 mt-2 w-64 bg-white shadow-lg rounded-lg border p-2">
                {salaryRanges.map((range) => (
                  <div
                    key={range.label}
                    className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                    onClick={() => {
                      setFilters({ ...filters, salary: range.label });
                      setShowSalaryFilter(false);
                    }}
                  >
                    {range.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="relative">
          <button
            className="flex items-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
            onClick={() => {
              setShowSortOptions(!showSortOptions);
              setShowLocationFilter(false);
              setShowModeFilter(false);
              setShowTypeFilter(false);
              setShowSalaryFilter(false);
            }}
          >
            <Filter size={16} className="mr-2" />
            Sort by
            <ChevronDown size={16} className="ml-2" />
          </button>

          {showSortOptions && (
            <div className="absolute right-0 z-10 mt-2 w-48 bg-white shadow-lg rounded-lg border p-2">
              {sortOptions.map((option) => (
                <div
                  key={option.value}
                  className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                  onClick={() => {
                    setSortBy(option.value);
                    setShowSortOptions(false);
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bookmarks List */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredAndSortedBookmarks.map((bookmark) => (
          <div
            key={bookmark.id}
            className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Card Header */}
            <div className="p-4 border-b">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={bookmark.logo}
                    alt={`${bookmark.company} logo`}
                    className="w-10 h-10 rounded mr-3"
                  />
                  <div>
                    <h3 className="font-medium text-lg text-gray-800">
                      {bookmark.company}
                    </h3>
                    <div className="flex items-center text-md text-gray-500">
                      <MapPin size={18} className="mr-1" />
                      {bookmark.location}
                    </div>
                  </div>
                </div>
                <button className="text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                {bookmark.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-3">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${getModeColor(
                    bookmark.mode
                  )}`}
                >
                  {bookmark.mode}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${getTypeColor(
                    bookmark.type
                  )}`}
                >
                  {bookmark.type}
                </span>
              </div>

              <div className="flex items-center text-md text-gray-700 mb-3">
                <DollarSign size={16} className="mr-1" />
                {bookmark.salary}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span>Posted {bookmark.posted}</span>
                <span>Deadline: {bookmark.deadline}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {bookmark.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button className="w-full py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredAndSortedBookmarks.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No bookmarks found
          </h3>
          <p className="text-gray-500">
            Try adjusting your filters or bookmark some opportunities
          </p>
        </div>
      )}
    </div>
  );
}
