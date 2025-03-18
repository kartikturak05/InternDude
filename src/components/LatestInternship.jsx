import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InternshipStore from "../store/InternshipStore";

const Internship = [
  // IT Services
  {
    title: "Internship",
    categories: "IT Services",
    Post: "Web Developer",
    company: "Connex India",
    location: "Delhi",
    stipend: "10,000/month",
    duration: "6 months",
  },
  {
    title: "Internship",
    categories: "IT Services",
    Post: "React Developer",
    company: "Innovate",
    location: "Pune",
    stipend: "18,000/month",
    duration: "5 months",
  },
  {
    title: "Internship",
    categories: "IT Services",
    Post: "Software Engineer Intern",
    company: "Coders Inc.",
    location: "Chennai",
    stipend: "30,000/month",
    duration: "3 months",
  },
  {
    title: "Internship",
    categories: "IT Services",
    Post: "Full Stack Developer",
    company: "ByteTech",
    location: "Hyderabad",
    stipend: "22,000/month",
    duration: "4 months",
  },
  {
    title: "Internship",
    categories: "IT Services",
    Post: "Cyber Security Analyst",
    company: "SecureNet",
    location: "Bangalore",
    stipend: "25,000/month",
    duration: "6 months",
  },

  // Technology
  {
    title: "Internship",
    categories: "Technology",
    Post: "Frontend Developer",
    company: "TechCorp",
    location: "Mumbai",
    stipend: "15,000/month",
    duration: "4 months",
  },
  {
    title: "Internship",
    categories: "Technology",
    Post: "Backend Developer",
    company: "SoftSolutions",
    location: "Bangalore",
    stipend: "12,000/month",
    duration: "6 months",
  },
  {
    title: "Internship",
    categories: "Technology",
    Post: "Data Science Intern",
    company: "DataTech",
    location: "Delhi",
    stipend: "20,000/month",
    duration: "5 months",
  },
  {
    title: "Internship",
    categories: "Technology",
    Post: "AI & ML Engineer",
    company: "AI Innovate",
    location: "Chennai",
    stipend: "30,000/month",
    duration: "4 months",
  },
  {
    title: "Internship",
    categories: "Technology",
    Post: "Cloud Computing Intern",
    company: "CloudPro",
    location: "Hyderabad",
    stipend: "22,000/month",
    duration: "3 months",
  },

  // BFSI
  {
    title: "Internship",
    categories: "BFSI",
    Post: "Financial Analyst Intern",
    company: "FinanceCorp",
    location: "Delhi",
    stipend: "25,000/month",
    duration: "4 months",
  },
  {
    title: "Internship",
    categories: "BFSI",
    Post: "Investment Analyst Intern",
    company: "InvestPro",
    location: "Mumbai",
    stipend: "27,000/month",
    duration: "3 months",
  },
  {
    title: "Internship",
    categories: "BFSI",
    Post: "Banking Operations Intern",
    company: "BankServe",
    location: "Chennai",
    stipend: "20,000/month",
    duration: "6 months",
  },
  {
    title: "Internship",
    categories: "BFSI",
    Post: "Risk Management Intern",
    company: "RiskGuard",
    location: "Hyderabad",
    stipend: "24,000/month",
    duration: "5 months",
  },

  // Healthcare & Life Sciences
  {
    title: "Internship",
    categories: "Healthcare & Life Sciences",
    Post: "Biomedical Research Intern",
    company: "MediLabs",
    location: "Kolkata",
    stipend: "18,000/month",
    duration: "6 months",
  },
  {
    title: "Internship",
    categories: "Healthcare & Life Sciences",
    Post: "Pharmaceutical Research Intern",
    company: "HealthPlus",
    location: "Hyderabad",
    stipend: "22,000/month",
    duration: "4 months",
  },
  {
    title: "Internship",
    categories: "Healthcare & Life Sciences",
    Post: "Clinical Data Analyst",
    company: "BioAnalytics",
    location: "Delhi",
    stipend: "28,000/month",
    duration: "5 months",
  },
  {
    title: "Internship",
    categories: "Healthcare & Life Sciences",
    Post: "Hospital Management Intern",
    company: "MediCare",
    location: "Pune",
    stipend: "25,000/month",
    duration: "4 months",
  },

  // Manufacturing & Production
  {
    title: "Internship",
    categories: "Manufacturing & Production",
    Post: "Industrial Engineer Intern",
    company: "AutoTech",
    location: "Chennai",
    stipend: "22,000/month",
    duration: "3 months",
  },
  {
    title: "Internship",
    categories: "Manufacturing & Production",
    Post: "Mechanical Engineering Intern",
    company: "MechWorks",
    location: "Pune",
    stipend: "18,000/month",
    duration: "5 months",
  },
  {
    title: "Internship",
    categories: "Manufacturing & Production",
    Post: "Process Improvement Intern",
    company: "Manufactura",
    location: "Bangalore",
    stipend: "20,000/month",
    duration: "6 months",
  },
  {
    title: "Internship",
    categories: "Manufacturing & Production",
    Post: "Product Design Intern",
    company: "InnoDesign",
    location: "Mumbai",
    stipend: "25,000/month",
    duration: "4 months",
  },

  // Infrastructure, Transport & Real Estate
  {
    title: "Internship",
    categories: "Infrastructure, Transport & Real Estate",
    Post: "Civil Engineering Intern",
    company: "BuildTech",
    location: "Ahmedabad",
    stipend: "20,000/month",
    duration: "5 months",
  },
  {
    title: "Internship",
    categories: "Infrastructure, Transport & Real Estate",
    Post: "Urban Planning Intern",
    company: "MetroPlan",
    location: "Bangalore",
    stipend: "24,000/month",
    duration: "6 months",
  },
  {
    title: "Internship",
    categories: "Infrastructure, Transport & Real Estate",
    Post: "Construction Management Intern",
    company: "Constructo",
    location: "Delhi",
    stipend: "22,000/month",
    duration: "4 months",
  },
  {
    title: "Internship",
    categories: "Infrastructure, Transport & Real Estate",
    Post: "Real Estate Analyst",
    company: "PropertyHub",
    location: "Mumbai",
    stipend: "26,000/month",
    duration: "3 months",
  },
];

const ITEMS_PER_PAGE = 4;

const LatestInternship = ({ setShowJobDescription, setShowOptions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState("All");
  const location = InternshipStore((state) => state.location);
  const designations = InternshipStore((state) => state.designations);

  useEffect(() => {
    console.log("location = ", location);
    console.log("Designations = ", designations);
    setCurrentIndex(0);
  }, [location, category, designations]);

  const filteredInternships = Internship.filter((job) => {
    const categoryMatch =
      category === "All" ||
      job.categories.toLowerCase() === category.toLowerCase();
    const locationMatch =
      location === "All" ||
      job.location.toLowerCase() === location.toLowerCase();
    const designationMatch =
      designations === "All" ||
      job.Post.toLowerCase() === designations.toLowerCase();

    return categoryMatch && locationMatch && designationMatch;
  });

  const nextSlide = () => {
    if (currentIndex + ITEMS_PER_PAGE < filteredInternships.length) {
      setCurrentIndex((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  const prevSlide = () => {
    if (currentIndex - ITEMS_PER_PAGE >= 0) {
      setCurrentIndex((prev) => prev - ITEMS_PER_PAGE);
    }
  };

  // Updated Progress Bar Calculation based on filtered items
  const progress =
    filteredInternships.length > 0
      ? ((currentIndex + ITEMS_PER_PAGE) / filteredInternships.length) * 100
      : 0;

  // Ensure progress doesn't exceed 100%
  const clampedProgress = Math.min(progress, 100);

  return (
    <div className="mt-10 px-4">
      <div className="flex flex-col items-center">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-center">
          Internship Projects on Intern Dude
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 text-xs sm:text-sm">
          <div className="border border-blue-700 rounded-lg px-3 py-1 bg-gray-100 font-semibold cursor-pointer">
            All
          </div>
          <div className="border border-blue-700 rounded-lg px-3 py-1 cursor-pointer">
            IT Services
          </div>
          <div className="border border-blue-700 rounded-lg px-3 py-1 cursor-pointer">
            Technology
          </div>
          <div className="border border-blue-700 rounded-lg px-3 py-1 cursor-pointer">
            Manufacturing & Production
          </div>
          <div className="border border-blue-700 rounded-lg px-3 py-1 cursor-pointer">
            Healthcare & Life Sciences
          </div>
          <div className="border border-blue-700 rounded-lg px-3 py-1 cursor-pointer">
            BFSI
          </div>
          <div className="border border-blue-700 rounded-lg px-3 py-1 cursor-pointer">
            Infrastructure & Real Estate
          </div>
          <div className="font-bold text-xs">+4 more</div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-5 justify-items-center mt-10 w-full max-w-7xl mx-auto">
          {Internship.slice(currentIndex, currentIndex + ITEMS_PER_PAGE).map(
            (job, index) => (
              <JobCard key={index} {...job} />
            )
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center gap-4 mt-5 w-full max-w-md">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-3 rounded-full border bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="w-full h-2 bg-gray-200 rounded-lg">
            <div
              className="h-2 bg-blue-600 rounded-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentIndex + ITEMS_PER_PAGE >= Internship.length}
            className="p-3 rounded-full border bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestInternship;
