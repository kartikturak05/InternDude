import { useState } from "react";
import JobCard from "./JobCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Freelance = [
  {
    title: "Freelance",
    Post: "Website UI Design",
    company: "Connex India",
    location: "Delhi",
    stipend: "10,000/month",
    duration: "6 days",
    paymentVerified: true,
  },
  {
    title: "Freelance",
    Post: "Website UI Design",
    company: "TechCorp",
    location: "Mumbai",
    stipend: "15,000/month",
    duration: "4 days",
    paymentVerified: true,
  },
  {
    title: "Freelance",
    Post: "Website UI Design",
    company: "SoftSolutions",
    location: "Bangalore",
    stipend: "12,000/month",
    duration: "6 days",
    paymentVerified: true,
  },
  {
    title: "Freelance",
    Post: "Website UI Design",
    company: "Innovate",
    location: "Pune",
    stipend: "18,000/month",
    duration: "5 days",
    paymentVerified: true,
  },
  {
    title: "Freelance",
    Post: "Website UI Design",
    company: "DevHub",
    location: "Hyderabad",
    stipend: "20,000/month",
    duration: "6 days",
    paymentVerified: true,
  },
  {
    title: "Freelance",
    Post: "Website UI Design",
    company: "Coders Inc.",
    location: "Chennai",
    stipend: "25,000/month",
    duration: "3 days",
    paymentVerified: true,
  },
  {
    title: "Freelance",
    Post: "Website UI Design",
    company: "Coders Inc.",
    location: "Chennai",
    stipend: "25,000/month",
    duration: "3 days",
    paymentVerified: true,
  },
  {
    title: "Freelance",
    Post: "Website UI Design",
    company: "Coders Inc.",
    location: "Chennai",
    stipend: "25,000/month",
    duration: "3 days",
    paymentVerified: true,
  },
  {
    title: "Freelance",
    Post: "Website UI Design",
    company: "Coders Inc.",
    location: "Chennai",
    stipend: "25,000/month",
    duration: "3 days",
    paymentVerified: true,
  },
  {
    title: "Freelance",
    Post: "Website UI Design",
    company: "Coders Inc.",
    location: "Chennai",
    stipend: "25,000/month",
    duration: "3 days",
    paymentVerified: true,
  },
  {
    title: "Freelance",
    Post: "Website UI Design",
    company: "Coders Inc.",
    location: "Chennai",
    stipend: "25,000/month",
    duration: "3 days",
    paymentVerified: true,
  },
];
const ITEMS_PER_PAGE = 4;
const FreelanceProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!Freelance || Freelance.length === 0) {
    return <div>Loading freelance projects...</div>;
  }

  const nextSlide = () => {
    if (currentIndex + ITEMS_PER_PAGE < Freelance.length) {
      setCurrentIndex((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  const prevSlide = () => {
    if (currentIndex - ITEMS_PER_PAGE >= 0) {
      setCurrentIndex((prev) => prev - ITEMS_PER_PAGE);
    }
  };

  const progress = ((currentIndex + ITEMS_PER_PAGE) / Freelance.length) * 100;

  return (
    <div className="mt-10 px-4">
      <div className="flex flex-col items-center">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-center">
          Freelance Projects on Intern Dude
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
          {Freelance.slice(currentIndex, currentIndex + ITEMS_PER_PAGE).map(
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
            disabled={currentIndex + ITEMS_PER_PAGE >= Freelance.length}
            className="p-3 rounded-full border bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreelanceProject;
