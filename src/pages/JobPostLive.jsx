import React from 'react'
import { FaCheck } from 'react-icons/fa'

const JobPostLive = () => {
  return (
    <div className="mt-25 min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="flex flex-col items-center gap-4">
        {/* Success Icon */}
        <div className="bg-green-100 rounded-full p-4">
          <FaCheck className="text-green-600 text-6xl" />
        </div>

        {/* Heading and description */}
        <h1 className="text-xl md:text-4xl font-semibold text-center">
          Your Post is Now Live!
        </h1>
        <p className="text-gray-500 text-center text-md md:text-base">
          You can now track applications and chat with applicants.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-3 mt-4 w-full max-w-xs">
          <button className="bg-blue-800 text-white font-medium py-2 px-6 rounded-md w-full hover:bg-blue-900">
            View Applications
          </button>
          <button className="bg-gray-100 text-black font-medium py-2 px-6 rounded-md w-full hover:bg-gray-200">
            Post Another Project
          </button>
          <a href="#" className="text-blue-600 hover:underline text-sm mt-2">
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}

export default JobPostLive
