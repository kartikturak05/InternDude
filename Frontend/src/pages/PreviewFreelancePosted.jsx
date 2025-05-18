import React from 'react';
import { 
    FiEdit2, 
    FiFileText, 
    FiUser, 
    FiFolder, 
    FiGlobe,
    FiMapPin 
  } from 'react-icons/fi';
  

import { TfiArrowLeft } from "react-icons/tfi";
import { FiCalendar } from "react-icons/fi";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const PreviewFreelancePosted = () => {

    const navigate = useNavigate();

  // Sample data - in a real application, this would come from props or context
  const projectData = {
    title: "Senior Full Stack Developer for E-commerce Platform",
    budget: "₹20,000",
    duration: "2-3 weeks",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    description: "We are seeking a senior full-stack developer to help build our e-commerce platform. The ideal candidate will have extensive experience with React, Node.js, and database design. You will be responsible for implementing new features, optimizing performance, and ensuring code quality through proper testing and documentation.",
    requirements: [
      "5+ years of experience in full-stack development",
      "Strong proficiency in React and Node.js",
      "Experience with TypeScript and PostgreSQL",
      "Familiarity with AWS services",
      "Excellent problem-solving and communication skills"
    ],
    projectType: "Fixed Price",
    experienceLevel: "Expert",
    category: "Web Development",
    location: "Remote",
    language: "English",
    startDate: "Immediately"
  };

  return (
    <>
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 mt-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Preview Project</h1>
        <p className="text-gray-600 text-xl">Review your project details before posting</p>
      </div>

      {/* Project Title Section */}
      <div className="bg-white rounded-lg shadow mb-6 p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold">{projectData.title}</h2>
          <button className="text-blue-600 hover:text-blue-800 flex items-center">
            <FiEdit2 className="mr-1" size={16} />
            <span>Edit</span>
          </button>
        </div>
        <div className="mb-6">
          <span className="text-lg font-semibold">{projectData.budget}</span>
          <span className="text-gray-500 ml-6">{projectData.duration}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {projectData.skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Project Description Section */}
      <div className="bg-white rounded-lg shadow mb-6 p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold">Project Description</h2>
          <button className="text-blue-600 hover:text-blue-800 flex items-center">
            <FiEdit2 className="mr-1" size={16} />
            <span>Edit</span>
          </button>
        </div>
        <p className="text-gray-700 text-lg">
          {projectData.description}
        </p>
      </div>

      {/* Requirements Section */}
      <div className="bg-white rounded-lg shadow mb-6 p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold">Requirements</h2>
          <button className="text-blue-600 hover:text-blue-800 flex items-center">
            <FiEdit2 className="mr-1" size={16} />
            <span>Edit</span>
          </button>
        </div>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 text-md">
          {projectData.requirements.map((req, index) => (
            <li key={index} className='text-lg'>{req}</li>
          ))}
        </ul>
      </div>

      {/* Additional Details Section */}
      <div className="bg-white rounded-lg shadow mb-6 p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-semibold">Additional Details</h2>
          <button className="text-blue-600 hover:text-blue-800 flex items-center">
            <FiEdit2 className="mr-1" size={16} />
            <span>Edit</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <FiFileText className="mt-1 mr-3 text-gray-500" size={18} />
            <div>
              <p className="text-gray-500 text-lg mb-1">Project Type</p>
              <p className="font-medium text-md" >{projectData.projectType}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <FiUser className="mt-1 mr-3 text-gray-500" size={18} />
            <div>
              <p className="text-gray-500 text-lg mb-1">Experience Level</p>
              <p className="font-medium text-md" >{projectData.experienceLevel}</p>
            </div>
          </div>

          <div className="flex items-start">
            <FiFolder className="mt-1 mr-3 text-gray-500" size={18} />
            <div>
              <p className="text-gray-500 text-lg mb-1">Project Category</p>
              <p className="font-medium text-md" >{projectData.category}</p>
            </div>
          </div>

          <div className="flex items-start">
            <FiMapPin className="mt-1 mr-3 text-gray-500" size={18} />
            <div>
              <p className="text-gray-500 text-lg mb-1">Location Preference</p>
              <p className="font-medium text-md" >{projectData.location}</p>
            </div>
          </div>

          <div className="flex items-start">
            <FiGlobe className="mt-1 mr-3 text-gray-500" size={18} />
            <div>
              <p className="text-gray-500 text-lg mb-1">Languages Required</p>
              <p className="font-medium text-md" >{projectData.language}</p>
            </div>
          </div>

          <div className="flex items-start">
            <FiCalendar className="mt-1 mr-3 text-gray-500" size={18} />
            <div>
              <p className="text-gray-500 text-lg mb-1">Expected Start Date</p>
              <p className="font-medium text-md" >{projectData.startDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <button 
          className="flex items-center border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded hover:bg-gray-50"
          onClick={()=>navigate("/employer/PostOpportunity/PostNewFreelance")}
        >
          <TfiArrowLeft className="mr-2" size={16} />
          Back to Edit
        </button>
        
        <button 
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          onClick={()=> navigate("/employer/PostOpportunity/PreviewJobPosted/success")}
        >
          Post Project
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PreviewFreelancePosted;