import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPencilAlt, 
  FaCalendarAlt,
  FaClock,
  FaChevronLeft
} from 'react-icons/fa';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const PreviewInternship = () => {

    const navigate = useNavigate();

  return (
    <>
    <div className="max-w-6xl mx-auto p-4 flex flex-col items-start justify-between">
        <div className='flex flex-col items-start justify-between'>
            <div className='text-4xl font-bold mt-3'>Preview Internship Posting</div>
            <div className='text-xl text-gray-600 mt-3'>Review Your Project details before Posting</div>
        </div>
        
      <div className="bg-white rounded-lg shadow mt-5">
        {/* Title and Company Section */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Frontend Developer Intern</h1>
            <p className="text-gray-600 mt-1">TechCorp Solutions</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <FaPencilAlt />
          </button>
        </div>

        {/* Work Mode and Location */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <p className="text-lg text-gray-500 mb-1">Work Mode</p>
            <p className="font-medium text-gray-800 text-lg">Hybrid</p>
            <div className="flex items-center mt-2 text-gray-600">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <FaPencilAlt />
          </button>
        </div>

        {/* Stipend */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <p className="text-xl text-gray-500 mb-1">Stipend</p>
            <p className="font-medium text-gray-800 text-lg">$2500 - $3500 per month</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <FaPencilAlt />
          </button>
        </div>

        {/* Duration and Application Deadline */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div className="flex space-x-16">
            <div className="flex items-start">
              <FaCalendarAlt className="text-gray-400 mr-3 mt-1" />
              <div>
                <p className="text-xl text-gray-500 mb-1">Duration</p>
                <p className="font-medium text-gray-800 text-lg">3 months</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaClock className="text-gray-400 mr-3 mt-1" />
              <div>
                <p className="text-xl text-gray-500 mb-1">Application Deadline</p>
                <p className="font-medium text-gray-800 text-lg">March 15, 2024</p>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <FaPencilAlt />
          </button>
        </div>

        {/* Skills Required */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-start">
          <div className="w-full">
            <p className="text-xl text-gray-500 mb-3">Skills Required</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-lg">React</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-lg">TypeScript</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-lg">HTML/CSS</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-lg">JavaScript</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-lg">Git</span>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <FaPencilAlt />
          </button>
        </div>

        {/* Description */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-start">
          <div className="w-full">
            <p className="text-xl text-gray-500 mb-3">Description</p>
            <div className="text-gray-700">
              <p className="mb-4 text-lg">
                We are seeking a motivated Frontend Developer Intern to join our dynamic team. This is an excellent opportunity to gain hands-on experience in a fast-paced tech environment.
              </p>

              <p className="font-medium mb-2 text-lg">What you'll do:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-lg">
                <li>Work on real-world projects using modern web technologies</li>
                <li>Collaborate with senior developers and other team members</li>
                <li>Participate in code reviews and team meetings</li>
                <li>Learn and implement best practices in frontend development</li>
              </ul>

              <p className="font-medium mb-2 text-lg">Requirements:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Currently pursuing a degree in Computer Science or related field</li>
                <li>Basic understanding of web development technologies</li>
                <li>Strong problem-solving skills</li>
                <li>Excellent communication and teamwork abilities</li>
              </ul>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <FaPencilAlt />
          </button>
        </div>
      </div>
      {/* Action Buttons */}
      <div className='w-full items-center justify-center flex flex-col'>
      <div className="flex justify-center items-center gap-4 mt-6 mb-10">
              <button className="flex items-center text-gray-600 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer"
              onClick={()=> navigate("/employer/PostOpportunity/PostNewJob")}>
                <FaChevronLeft className="mr-2" />
                Back
              </button>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
                onClick={() => navigate("/employer/PostOpportunity/PreviewJobPosted/success")}
              >
                Post Internship
              </button>
            </div>
      </div>       
    </div>
    <Footer/>
    </>
  );
};

export default PreviewInternship;