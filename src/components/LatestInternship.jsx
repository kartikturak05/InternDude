import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useStore from './store'; // Import Zustand store

const Internship = [
  // IT Services
  { title: "Internship", categories: "IT Services", Post: "Web Developer", company: "Connex India", location: "Delhi", stipend: "10,000/month", duration: "6 months" },
  { title: "Internship", categories: "IT Services", Post: "React Developer", company: "Innovate", location: "Pune", stipend: "18,000/month", duration: "5 months" },
  { title: "Internship", categories: "IT Services", Post: "Software Engineer Intern", company: "Coders Inc.", location: "Chennai", stipend: "30,000/month", duration: "3 months" },
  { title: "Internship", categories: "IT Services", Post: "Full Stack Developer", company: "ByteTech", location: "Hyderabad", stipend: "22,000/month", duration: "4 months" },
  { title: "Internship", categories: "IT Services", Post: "Cyber Security Analyst", company: "SecureNet", location: "Bangalore", stipend: "25,000/month", duration: "6 months" },

  // Technology
  { title: "Internship", categories: "Technology", Post: "Frontend Developer", company: "TechCorp", location: "Mumbai", stipend: "15,000/month", duration: "4 months" },
  { title: "Internship", categories: "Technology", Post: "Backend Developer", company: "SoftSolutions", location: "Bangalore", stipend: "12,000/month", duration: "6 months" },
  { title: "Internship", categories: "Technology", Post: "Data Science Intern", company: "DataTech", location: "Delhi", stipend: "20,000/month", duration: "5 months" },
  { title: "Internship", categories: "Technology", Post: "AI & ML Engineer", company: "AI Innovate", location: "Chennai", stipend: "30,000/month", duration: "4 months" },
  { title: "Internship", categories: "Technology", Post: "Cloud Computing Intern", company: "CloudPro", location: "Hyderabad", stipend: "22,000/month", duration: "3 months" },

  // BFSI
  { title: "Internship", categories: "BFSI", Post: "Financial Analyst Intern", company: "FinanceCorp", location: "Delhi", stipend: "25,000/month", duration: "4 months" },
  { title: "Internship", categories: "BFSI", Post: "Investment Analyst Intern", company: "InvestPro", location: "Mumbai", stipend: "27,000/month", duration: "3 months" },
  { title: "Internship", categories: "BFSI", Post: "Banking Operations Intern", company: "BankServe", location: "Chennai", stipend: "20,000/month", duration: "6 months" },
  { title: "Internship", categories: "BFSI", Post: "Risk Management Intern", company: "RiskGuard", location: "Hyderabad", stipend: "24,000/month", duration: "5 months" },

  // Healthcare & Life Sciences
  { title: "Internship", categories: "Healthcare & Life Sciences", Post: "Biomedical Research Intern", company: "MediLabs", location: "Kolkata", stipend: "18,000/month", duration: "6 months" },
  { title: "Internship", categories: "Healthcare & Life Sciences", Post: "Pharmaceutical Research Intern", company: "HealthPlus", location: "Hyderabad", stipend: "22,000/month", duration: "4 months" },
  { title: "Internship", categories: "Healthcare & Life Sciences", Post: "Clinical Data Analyst", company: "BioAnalytics", location: "Delhi", stipend: "28,000/month", duration: "5 months" },
  { title: "Internship", categories: "Healthcare & Life Sciences", Post: "Hospital Management Intern", company: "MediCare", location: "Pune", stipend: "25,000/month", duration: "4 months" },

  // Manufacturing & Production
  { title: "Internship", categories: "Manufacturing & Production", Post: "Industrial Engineer Intern", company: "AutoTech", location: "Chennai", stipend: "22,000/month", duration: "3 months" },
  { title: "Internship", categories: "Manufacturing & Production", Post: "Mechanical Engineering Intern", company: "MechWorks", location: "Pune", stipend: "18,000/month", duration: "5 months" },
  { title: "Internship", categories: "Manufacturing & Production", Post: "Process Improvement Intern", company: "Manufactura", location: "Bangalore", stipend: "20,000/month", duration: "6 months" },
  { title: "Internship", categories: "Manufacturing & Production", Post: "Product Design Intern", company: "InnoDesign", location: "Mumbai", stipend: "25,000/month", duration: "4 months" },

  // Infrastructure, Transport & Real Estate
  { title: "Internship", categories: "Infrastructure, Transport & Real Estate", Post: "Civil Engineering Intern", company: "BuildTech", location: "Ahmedabad", stipend: "20,000/month", duration: "5 months" },
  { title: "Internship", categories: "Infrastructure, Transport & Real Estate", Post: "Urban Planning Intern", company: "MetroPlan", location: "Bangalore", stipend: "24,000/month", duration: "6 months" },
  { title: "Internship", categories: "Infrastructure, Transport & Real Estate", Post: "Construction Management Intern", company: "Constructo", location: "Delhi", stipend: "22,000/month", duration: "4 months" },
  { title: "Internship", categories: "Infrastructure, Transport & Real Estate", Post: "Real Estate Analyst", company: "PropertyHub", location: "Mumbai", stipend: "26,000/month", duration: "3 months" }
];



const ITEMS_PER_PAGE = 4;

const LatestInternship = ({ setShowJobDescription, setShowOptions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState("All");


  const location = useStore((state) => state.location);

  useEffect(() => {
    console.log("location = ", location);
    setCurrentIndex(0);
  }, [location, category]);

  const nextSlide = () => {
    if (currentIndex + ITEMS_PER_PAGE < Internship.length) {
      setCurrentIndex((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  const prevSlide = () => {
    if (currentIndex - ITEMS_PER_PAGE >= 0) {
      setCurrentIndex((prev) => prev - ITEMS_PER_PAGE);
    }
  };

  // Progress Bar Calculation
  const progress = ((currentIndex + ITEMS_PER_PAGE) / Internship.length) * 92;

  const filteredInternships = Internship.filter((job) => {
    const categoryMatch = category === "All" || job.categories === category;
    const locationMatch = location === "All" || job.location === location;
    
    return categoryMatch && locationMatch;
  });
  


  return (
    <div>
      <div className="flex flex-col justify-around items-center mx-auto">
        <div className="text-3xl font-bold">
          Latest internship on Intern Dude
        </div>
        <div className="flex justify-around items-center mt-10">
          <div className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${category == 'All' ? 'bg-gray-100' : ''}   mr-2 font-semibold cursor-pointer`} onClick={() => setCategory("All")}> 
            All
          </div>
          <div className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${category == 'IT Services' ? 'bg-gray-100' : ''}   mr-2 font-semibold cursor-pointer`} onClick={() => setCategory("IT Services")}> 
            IT Services
          </div>
          <div className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${category == 'Technology' ? 'bg-gray-100' : ''}   mr-2 font-semibold cursor-pointer`} onClick={() => setCategory("Technology")}> 
            Technology
          </div>
          <div className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${category == 'Manufacturing & Production' ? 'bg-gray-100' : ''}   mr-2 font-semibold cursor-pointer`} onClick={() => setCategory("Manufacturing & Production")}> 
            Manufacturing & Production
          </div>
          <div className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${category == 'Healthcare & Life Sciences' ? 'bg-gray-100' : ''}   mr-2 font-semibold cursor-pointer`} onClick={() => setCategory("Healthcare & Life Sciences")}> 
            Healthcare & Life Sciences
          </div>
          <div className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${category == 'BFSI' ? 'bg-gray-100' : ''}   mr-2 font-semibold cursor-pointer`} onClick={() => setCategory("BFSI")}> 
            BFSI
          </div>
          <div className={`w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 ${category == 'Infrastructure , Transport & Real Estate' ? 'bg-gray-100' : ''}   mr-2 font-semibold cursor-pointer`} onClick={() => setCategory("Infrastructure , Transport & Real Estate")}> 
            Infrastructure , Transport & Real Estate
          </div>
          <div className="font-bold text-sm">+4 more</div>
        </div>

        <div className="flex justify-around items-center mt-10">
          {/* Card 1 */}
          <div className="flex justify-between items-center gap-5">
            {filteredInternships
              .slice(currentIndex, currentIndex + ITEMS_PER_PAGE)
              .map((job, index) => (
                <JobCard
                  key={index}
                  {...job}
                  setShowJobDescription={setShowJobDescription}
                  setShowOptions={setShowOptions}
                />
              ))}
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
            disabled={currentIndex + ITEMS_PER_PAGE >= Internship.length}
            className="p-2 rounded-full border"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestInternship;
