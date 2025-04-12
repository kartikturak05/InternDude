import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const OpportunityCard = ({ type, title, description, selectedType, onSelect }) => {
  const isSelected = selectedType === type;

  const cardClasses = `
    md:w-xl sm:w-[400px] cursor-pointer p-6 rounded-xl 
    border-2 transition-all duration-300 shadow-md 
    ${isSelected ? "bg-blue-100 border-blue-600" : "bg-white border-gray-200 hover:border-blue-400"}
  `;

  return (
    <div className={cardClasses} onClick={() => onSelect(type)}>
      <h2 className="text-xl font-semibold  text-gray-800 mb-2 text-start">{title}</h2>
      <p className=" text-gray-600 text-start">{description}</p>
    </div>
  );
};


const PostOpportunity = () => {
  const [selectedType, setSelectedType] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedType) {
      console.log("Selected:", selectedType);
      // Navigate to next step or show form
    } else {
      alert("Please select one option");
    }
  };

  useEffect(() => {
    // Check if the user is logged in or not

    {selectedType == "job" && navigate("/employer/PostOpportunity/PostNewJob")}
    {selectedType == "internship" && navigate("/employer/PostOpportunity/PostNewInternship")}
    {selectedType == "freelance" && navigate("/PostNewFreelance")}
    
  }, [selectedType]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
        What would you like to post?
      </h1>
      <p className="text-gray-500 text-center mb-8 text-lg">
        Choose the type of opportunity you want to create
      </p>

      <div className="flex flex-col gap-6 items-center w-full mb-10">
        <OpportunityCard
          type="job"
          title="Full-Time Job"
          description="Hire a permanent employee for your organization"
          selectedType={selectedType}
          onSelect={setSelectedType}
        />

        <OpportunityCard
          type="internship"
          title="Internship"
          description="Post an internship opportunity for students and freshers"
          selectedType={selectedType}
          onSelect={setSelectedType}
        />

        <OpportunityCard
          type="freelance"
          title="Freelance Project"
          description="Looking for a student/freelancer to work on a short-term project. You define the deliverables and payout."
          selectedType={selectedType}
          onSelect={setSelectedType}
        />
      </div>

      <button
        onClick={handleContinue}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-blue-700 transition-all duration-300 md:w-xl sm:w-[400px]"
      >
        Continue
      </button>
    </div>
  );
};

export default PostOpportunity;
