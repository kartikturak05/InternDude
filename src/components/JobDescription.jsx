import React from "react";
import { LuShare2 } from "react-icons/lu";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GiHealthPotion } from "react-icons/gi";

const JobDescription = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
        {/* Header Section */}
        <div className="border-b">
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-400">CI</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Social Media Assistant
                </h1>
                <p className="text-gray-600">Connex India Delhi Internship</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <LuShare2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                Connex India is looking for Social Media Marketing expert to
                help manage our online networks. You will be responsible for
                monitoring our social media channels, creating content, finding
                effective ways to engage the community and incentivize others to
                engage on our channels.
              </p>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
              <div className="space-y-3">
                {[
                  "Community engagement to ensure that is supported and actively represented online",
                  "Focus on social media content development and publication",
                  "Marketing and strategy support",
                  "Stay on top of trends on social media platforms, and suggest content ideas to the team",
                  "Engage with online communities",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <RiVerifiedBadgeFill className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Who You Are */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Who You Are</h2>
              <div className="space-y-3">
                {[
                  "You get energy from people and building the ideal work environment",
                  "You have a sense for beautiful spaces and office experiences",
                  "You are a confident office manager, ready for added responsibilities",
                  "You're detail-oriented and creative",
                  "You're a growth marketer and know how to run campaigns",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <RiVerifiedBadgeFill className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Nice-To-Haves */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Nice-To-Haves</h2>
              <div className="space-y-3">
                {[
                  "Fluent in English",
                  "Project management skills",
                  "Copy editing skills",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <RiVerifiedBadgeFill className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">About This Role</h2>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">
                    5 applied of 10 capacity
                  </span>
                  <span className="text-gray-600">50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-1/2"></div>
                </div>
              </div>

              {/* Role details */}
              <div className="space-y-4">
                {[
                  { label: "Apply Before", value: "July 31, 2025" },
                  { label: "Internship Posted On", value: "Jan 1, 2025" },
                  { label: "Internship Type", value: "Full Time" },
                  { label: "Salary", value: "₹10,000/month" },
                  { label: "Timeline", value: "6 months" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  Marketing
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  Design
                </span>
              </div>
            </div>

            {/* Required Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Project management",
                  "Copywriting",
                  "Social Media Marketing",
                  "English",
                  "Copy Editing",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 w-56 border rounded-lg shadow-md"
                >
                  <GiHealthPotion className="w-10 h-10 text-green-500 mb-2" />
                  <div className="font-semibold text-lg">Full Healthcare</div>
                  <div className="text-sm text-gray-600">
                    We believe in thriving communities, and that starts with our
                    team being happy and healthy.
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* About company */}
        <div className="p-6 w-full flex items-center justify-between">
          <div>
            About company
          </div>
          <div>
            that two boxes
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobDescription;
