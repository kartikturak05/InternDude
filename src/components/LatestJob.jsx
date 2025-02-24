import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import JobStore from "../store/JobStore";

const Job = [
  {
    title: "Job",
    categories: "IT Services",
    Post: "Web Developer",
    company: "Connex India",
    location: "Delhi",
    stipend: "10,000/month",
    duration: "6 months",
  },
  {
    title: "Job",
    categories: "Technology",
    Post: "Frontend Developer",
    company: "TechCorp",
    location: "Mumbai",
    stipend: "15,000/month",
    duration: "4 months",
  },
  {
    title: "Job",
    categories: "Technology",
    Post: "Backend Developer",
    company: "SoftSolutions",
    location: "Bangalore",
    stipend: "12,000/month",
    duration: "6 months",
  },
  {
    title: "Job",
    categories: "IT Services",
    Post: "React Developer",
    company: "Innovate",
    location: "Pune",
    stipend: "18,000/month",
    duration: "5 months",
  },
  {
    title: "Job",
    categories: "IT Services",
    Post: "Full Stack Developer",
    company: "DevHub",
    location: "Hyderabad",
    stipend: "20,000/month",
    duration: "6 months",
  },
  {
    title: "Job",
    categories: "Technology",
    Post: "Software Engineer",
    company: "Coders Inc.",
    location: "Chennai",
    stipend: "25,000/month",
    duration: "3 months",
  },
  // ... add categories to other job entries as needed
];

const ITEMS_PER_PAGE = 4;

const LatestJob = ({ setShowJobDescription, setShowOptions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState("All");
  const location = JobStore((state) => state.location);
  const designations = JobStore((state) => state.designations);

  useEffect(() => {
    console.log("location = ", location);
    console.log("Designations = ", designations);
    setCurrentIndex(0);
  }, [location, category, designations]);

  const filteredJobs = Job.filter((job) => {
    const categoryMatch =
      category === "All" ||
      job.categories?.toLowerCase() === category.toLowerCase();
    const locationMatch =
      location === "All" ||
      job.location.toLowerCase() === location.toLowerCase();
    const designationMatch =
      designations === "All" ||
      job.Post.toLowerCase() === designations.toLowerCase();

    return categoryMatch && locationMatch && designationMatch;
  });

  const nextSlide = () => {
    if (currentIndex + ITEMS_PER_PAGE < filteredJobs.length) {
      setCurrentIndex((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  const prevSlide = () => {
    if (currentIndex - ITEMS_PER_PAGE >= 0) {
      setCurrentIndex((prev) => prev - ITEMS_PER_PAGE);
    }
  };

  // Progress Bar Calculation based on filtered items
  const progress =
    filteredJobs.length > 0
      ? ((currentIndex + ITEMS_PER_PAGE) / filteredJobs.length) * 100
      : 0;

  // Ensure progress doesn't exceed 100%
  const clampedProgress = Math.min(progress, 100);

  return (
    <div className="mt-20">
      <div className="flex flex-col justify-around items-center">
        <div className="text-3xl font-bold">Latest Job on Intern Dude</div>
        <div className="flex justify-around items-center mt-10">
          <div
            className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${
              category === "All" ? "bg-gray-100" : ""
            } mr-2 font-semibold cursor-pointer`}
            onClick={() => setCategory("All")}
          >
            All
          </div>
          <div
            className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${
              category === "IT Services" ? "bg-gray-100" : ""
            } mr-2 font-semibold cursor-pointer`}
            onClick={() => setCategory("IT Services")}
          >
            IT Services
          </div>
          <div
            className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${
              category === "Technology" ? "bg-gray-100" : ""
            } mr-2 font-semibold cursor-pointer`}
            onClick={() => setCategory("Technology")}
          >
            Technology
          </div>
          <div
            className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${
              category === "Manufacturing & Production" ? "bg-gray-100" : ""
            } mr-2 font-semibold cursor-pointer`}
            onClick={() => setCategory("Manufacturing & Production")}
          >
            Manufacturing & Production
          </div>
          <div
            className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${
              category === "Healthcare & Life Sciences" ? "bg-gray-100" : ""
            } mr-2 font-semibold cursor-pointer`}
            onClick={() => setCategory("Healthcare & Life Sciences")}
          >
            Healthcare & Life Sciences
          </div>
          <div
            className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${
              category === "BFSI" ? "bg-gray-100" : ""
            } mr-2 font-semibold cursor-pointer`}
            onClick={() => setCategory("BFSI")}
          >
            BFSI
          </div>
          <div
            className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${
              category === "Infrastructure, Transport & Real Estate"
                ? "bg-gray-100"
                : ""
            } mr-2 font-semibold cursor-pointer`}
            onClick={() => setCategory("Infrastructure, Transport & Real Estate")}
          >
            Infrastructure, Transport & Real Estate
          </div>
          <div className="font-bold text-sm">+4 more</div>
        </div>

        <div className="flex justify-around items-center mt-10">
          <div className="flex justify-between items-center gap-5">
            {filteredJobs.length === 0 ? (
              <div className="text-2xl font-semibold">No jobs found</div>
            ) : (
              filteredJobs
                .slice(currentIndex, currentIndex + ITEMS_PER_PAGE)
                .map((job, index) => (
                  <JobCard
                    key={index}
                    {...job}
                    setShowJobDescription={setShowJobDescription}
                    setShowOptions={setShowOptions}
                  />
                ))
            )}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center gap-4 mt-5 w-md">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-2 rounded-full border"
          >
            <ChevronLeft />
          </button>

          <div className="w-full h-2 bg-gray-200 rounded-lg">
            <div
              className="h-2 bg-blue-600 rounded-lg"
              style={{ width: `${clampedProgress}%` }}
            ></div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentIndex + ITEMS_PER_PAGE >= filteredJobs.length}
            className="p-2 rounded-full border"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestJob;