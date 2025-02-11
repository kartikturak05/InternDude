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
  const [paymentVerified, setPaymentVerified] = useState(false);

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

  // Progress Bar Calculation
  const progress = ((currentIndex + ITEMS_PER_PAGE) / Freelance.length) * 92;

  return (
    <div className="mt-20">
      <div className="flex flex-col justify-around items-center ">
        <div className="text-3xl font-bold">
          Freelance Project on Intern Dude
        </div>
        <div className="flex justify-around items-center mt-10">
          <div className="w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 bg-gray-100 mr-2 font-semibold cursor-pointer">
            All
          </div>
          <div className="w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 mr-2 cursor-pointer">
            IT Services
          </div>
          <div className="w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 mr-2 cursor-pointer">
            Technology
          </div>
          <div className="w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 mr-2 cursor-pointer">
            Manufacturing & Production
          </div>
          <div className="w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 mr-2 cursor-pointer">
            Healthcare & Life Sciences
          </div>
          <div className="w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 mr-2 cursor-pointer">
            BFSI
          </div>
          <div className="w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 mr-2 cursor-pointer">
            Infrastructure , Transport & Real Estate
          </div>
          <div className="font-bold text-sm">+4 more</div>
        </div>

        <div className="flex justify-around items-center mt-10">
          {/* Card 1 */}
          <div className="flex justify-between items-center gap-5">
            {Freelance.slice(currentIndex, currentIndex + ITEMS_PER_PAGE).map(
              (Freelance, index) => (
                <JobCard key={index} {...Freelance} />
              )
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

            <div className=" w-full h-2 bg-gray-200 rounded-lg">
              <div
                className=" h-2 bg-blue-600 rounded-lg"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex + ITEMS_PER_PAGE >= Freelance.length}
              className="p-2 rounded-full border"
            >
              <ChevronRight />
            </button>
          </div>
      </div>
    </div>
  );
};

export default FreelanceProject;
