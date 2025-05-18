import React from 'react';
import { FaVideo, FaCalendarAlt, FaPencilAlt, FaArrowLeft, FaInfoCircle } from 'react-icons/fa';
import { FaCircleCheck } from "react-icons/fa6";
import Footer from '../components/Footer';

const InterviewScheduleSuccessful = () => {
  // Sample interview data - in a real app, this would come from props or context
  const interviewData = {
    candidateName: "Sarah Johnson",
    role: "Senior UX Designer",
    date: "Tuesday, December 12, 2023",
    time: "2:00 PM - 3:00 PM EST",
    mode: "Video Call",
    meetingLink: "meet.google.com/abc-defg-hij",
    instructions: "Please join 5 minutes early. Have your portfolio ready to share."
  };

  return (
    <>
    <div className="max-w-5xl mx-auto p-8 bg-white mt-10">
      {/* Success Banner */}
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="bg-green-100 p-4 rounded-full mb-6">
          <FaCircleCheck className="text-green-500 text-5xl" />
        </div>
        <h1 className="text-4xl font-bold text-center mb-2">Interview Successfully Scheduled!</h1>
        <p className="text-gray-600 text-center text-lg">
          The candidate has been notified. You'll be updated if they confirm or reschedule.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-8"></div>

      {/* Interview Details Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Interview Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
          {/* Candidate Name */}
          <div>
            <p className="text-gray-500 text-lg mb-1">Candidate Name</p>
            <p className="font-medium text-lg">{interviewData.candidateName}</p>
          </div>
          
          {/* Role */}
          <div>
            <p className="text-gray-500 text-lg mb-1">Role</p>
            <p className="font-medium text-lg">{interviewData.role}</p>
          </div>
          
          {/* Date */}
          <div>
            <p className="text-gray-500 text-lg mb-1">Date</p>
            <p className="font-medium text-lg">{interviewData.date}</p>
          </div>
          
          {/* Time */}
          <div>
            <p className="text-gray-500 text-lg mb-1">Time</p>
            <p className="font-medium text-lg">{interviewData.time}</p>
          </div>
          
          {/* Interview Mode */}
          <div>
            <p className="text-gray-500 text-lg mb-1">Interview Mode</p>
            <div className="flex items-center">
              <FaVideo className="text-gray-600 mr-2" />
              <p className="font-medium text-lg">{interviewData.mode}</p>
            </div>
          </div>
          
          {/* Meeting Link */}
          <div>
            <p className="text-gray-500 text-lg mb-1">Meeting Link</p>
            <a href={`https://${interviewData.meetingLink}`} 
               className="text-blue-600 hover:underline font-medium text-lg"
               target="_blank" 
               rel="noopener noreferrer">
              {interviewData.meetingLink}
            </a>
          </div>
        </div>
        
        {/* Additional Instructions */}
        <div className="mt-6">
          <p className="text-gray-500 text-lg mb-1">Additional Instructions</p>
          <p className="font-medium text-lg">{interviewData.instructions}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <button className="flex items-center justify-center border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition">
          <FaCalendarAlt className="mr-2" />
          <p className='text-lg'>Reschedule Interview</p>
        </button>
        
        <button className="flex items-center justify-center border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition">
          <FaPencilAlt className="mr-2" />
          <p className='text-lg'> Edit Details</p>
        </button>
        
        <button className="flex items-center justify-center bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition ml-auto">
          <FaArrowLeft className="mr-2" />
          <p className='text-lg'> Back to Applications</p>
        </button>
      </div>

      {/* Footer Note */}
      <div className="flex items-start bg-gray-50 p-4 rounded-lg">
        <FaInfoCircle className="text-gray-500 mr-3 mt-1" />
        <p className="text-gray-600 text-lg">
          The candidate will also receive an email and notification with these interview details. 
          You can track their response in your inbox.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default InterviewScheduleSuccessful;