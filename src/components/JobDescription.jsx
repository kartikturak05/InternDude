import React from "react";
import { LuShare2 } from "react-icons/lu";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GiHealthPotion } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiVideoOn } from "react-icons/ci";
import { GiSummits } from "react-icons/gi";
import { TbCoffee } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdHolidayVillage } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const JobDescription = ({setShowJobDescription}) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 top-30 left-25 z-50 absolute ">
       {/* Hide Job Description */}
       <div className="absolute right-10 top-10 text-3xl font-semibold cursor-pointer text-blue-900"
        onClick={()=>  {  
          // setShowJobDescription(false);
          navigate("/");
        }}
       >
          X
        </div>
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg">
        {/* Header Section */}
        <div className="border-b pt-5">
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-400"></span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Social Media Assistant
                </h1>
                <p className="text-gray-800">Connex India . Delhi . Internship</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <LuShare2 className="w-5 h-5 text-gray-800" />
              </button>
              <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
             
              >
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
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-800 leading-relaxed">
                Connex India is looking for Social Media Marketing expert to
                help manage our online networks. You will be responsible for
                monitoring our social media channels, creating content, finding
                effective ways to engage the community and incentivize others to
                engage on our channels.
              </p>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
              <div className="space-y-3 ">
                {[
                  "Community engagement to ensure that is supported and actively represented online",
                  "Focus on social media content development and publication",
                  "Marketing and strategy support",
                  "Stay on top of trends on social media platforms, and suggest content ideas to the team",
                  "Engage with online communities",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <RiVerifiedBadgeFill className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Who You Are */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Who You Are</h2>
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
                    <p className="text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Nice-To-Haves */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Nice-To-Haves</h2>
              <div className="space-y-3">
                {[
                  "Fluent in English",
                  "Project management skills",
                  "Copy editing skills",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <RiVerifiedBadgeFill className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg  p-6">
              <h2 className="text-2xl  font-bold mb-4">About This Role</h2>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-800">
                    5 applied of 10 capacity
                  </span>
                  <span className="text-gray-800">50%</span>
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
                    <span className="text-gray-800">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Categories</h3>
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
              <h3 className="text-2xl font-bold mb-3">Required Skills</h3>
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
        <div className="flex justify-center p-6 flex-col">
          <div className="text-3xl font-bold text-gray-700 m-1">
            Perks & Benefits
          </div>
          <div className="text-md text-gray-700 m-1 mb-3">
            This job Comes with the saveral perks
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            <div className="flex flex-col items-start text-center p-4 w-64  rounded-lg ">
              <GiHealthPotion className="w-10 h-10 text-blue-500 mb-2" />
              <div className="font-semibold text-xl mt-2 mb-2">Full Healthcares</div>
              <div className="text-md text-gray-800 text-left">
              We believe in thriving communities and that starts with our team being happy and healthy.
              </div>
            </div>

            <div className="flex flex-col items-start text-center p-4 w-64  rounded-lg ">
              <MdHolidayVillage   className="w-10 h-10 text-blue-500 mb-2" />
              <div className="font-semibold text-xl mt-2 mb-2">Unlimited Vacation</div>
              <div className="text-md text-gray-800 text-left">
              We believe you should have a flexible schedule that makes space for family, wellness, and fun.
              </div>
            </div>
            <div className="flex flex-col items-start text-center p-4 w-64  rounded-lg ">
              <CiVideoOn className="w-10 h-10 text-blue-500 mb-2" />
              <div className="font-semibold text-xl mt-2 mb-2">Skill Development</div>
              <div className="text-md text-gray-800 text-left">
              We believe in always learning and leveling up our skills. Whether it's a conference or online course.
              </div>
            </div>
            <div className="flex flex-col items-start text-center p-4 w-64  rounded-lg ">
              <GiSummits  className="w-10 h-10 text-blue-500 mb-2" />
              <div className="font-semibold text-xl mt-2 mb-2">Team Summits</div>
              <div className="text-md text-gray-800 text-left">
              Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.
              </div>
            </div>

            <div className="flex flex-col items-start text-center p-4 w-64  rounded-lg ">
              <TbCoffee   className="w-10 h-10 text-blue-500 mb-2" />
              <div className="font-semibold text-xl mt-2 mb-2">Remote Working</div>
              <div className="text-md text-gray-800 text-left">
              You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.
              </div>
            </div>

            <div className="flex flex-col items-start text-center p-4 w-64  rounded-lg ">
              <FaHandHoldingHeart   className="w-10 h-10 text-blue-500 mb-2" />
              <div className="font-semibold text-xl mt-2 mb-2 ">We give back.</div>
              <div className="text-md text-gray-800 text-left">
              We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two. 
              </div>
            </div>
          </div>
        </div>

        {/* About company */}
        <div className="p-6 w-full flex items-center justify-between">
          {/* Left Section */}
          <div className="flex flex-col space-y-4">
            {/* Company Logo and Name */}
            <div className="flex items-center space-x-3">
              <img
                src="CompanyLogo.png"
                alt="Company Logo"
                className="w-12 h-12"
              />
              <div className="ml-3">
                <div className="font-semibold text-2xl">Connex India</div>
                <div className="flex items-center space-x-2 text-base text-blue-900 font-semibold">
                  <span>Read More about Connex India</span>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>

            {/* Company Description */}
            <div className="max-w-md text-gray-700 text-md">
              Connex India is a technology company that builds economic
              infrastructure for the internet. Businesses of every size—from new
              startups to public companies—use our software to accept payments
              and manage their businesses online.
            </div>
          </div>

          {/* Right Section */}
          <div className="w-auto h-60">
            <img
              src="companySkeleton.png"
              alt="Company Overview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Similar Jobs Section */}
        <div className="flex flex-col items-center justify-around bg-gray-50 pb-10" >
          {/* Heading */}
          <div className="flex flex-row items-center justify-between w-full pt-6 pb-6 pl-22 pr-22">
            <div className="text-2xl font-bold ">Similar Jobs</div>
            <div className="flex items-center space-x-2 text-base text-blue-900 font-semibold">
              <span>Show ALL Internships</span>
              <FaArrowRightLong />
            </div>
          </div>

          {/* Suggested Jobs */}

          <div className="grid grid-cols-2  gap-x-12 gap-y-7">
            <div className="flex flex-row items-top pt-3 pb-3 pl-5 pr-25 bg-white">
              <img
                src="CompanyLogo.png"
                alt="Company Logo"
                className="w-14 h-14"
              />
              <div className="flex flex-col items-start justify-between ml-5">
                <div className="text-lg font-semibold">
                  Social Media Assistant
                </div>
                <div className="text-gray-800">Connex India . Delhi, India</div>
                <div className="flex flex-row items-center justify-between  mt-3">
                  <div className="mr-3 pl-2 pr-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Full Time
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Marketing
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Design
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-top pt-3 pb-3 pl-5 pr-25 bg-white">
              <img
                src="CompanyLogo.png"
                alt="Company Logo"
                className="w-14 h-14"
              />
              <div className="flex flex-col items-start justify-between ml-5">
                <div className="text-lg font-semibold">
                  Social Media Assistant
                </div>
                <div className="text-gray-800">Connex India . Delhi, India</div>
                <div className="flex flex-row items-center justify-between  mt-3">
                  <div className="mr-3 pl-2 pr-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Full Time
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Marketing
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Design
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-top pt-3 pb-3 pl-5 pr-25 bg-white">
              <img
                src="CompanyLogo.png"
                alt="Company Logo"
                className="w-14 h-14"
              />
              <div className="flex flex-col items-start justify-between ml-5">
                <div className="text-lg font-semibold">
                  Social Media Assistant
                </div>
                <div className="text-gray-800">Connex India . Delhi, India</div>
                <div className="flex flex-row items-center justify-between  mt-3">
                  <div className="mr-3 pl-2 pr-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Full Time
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Marketing
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Design
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-top pt-3 pb-3 pl-5 pr-25 bg-white">
              <img
                src="CompanyLogo.png"
                alt="Company Logo"
                className="w-14 h-14"
              />
              <div className="flex flex-col items-start justify-between ml-5">
                <div className="text-lg font-semibold">
                  Social Media Assistant
                </div>
                <div className="text-gray-800">Connex India . Delhi, India</div>
                <div className="flex flex-row items-center justify-between  mt-3">
                  <div className="mr-3 pl-2 pr-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Full Time
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Marketing
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Design
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-top pt-3 pb-3 pl-5 pr-25 bg-white">
              <img
                src="CompanyLogo.png"
                alt="Company Logo"
                className="w-14 h-14"
              />
              <div className="flex flex-col items-start justify-between ml-5">
                <div className="text-lg font-semibold">
                  Social Media Assistant
                </div>
                <div className="text-gray-800">Connex India . Delhi, India</div>
                <div className="flex flex-row items-center justify-between  mt-3">
                  <div className="mr-3 pl-2 pr-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Full Time
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Marketing
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Design
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-top pt-3 pb-3 pl-5 pr-25 bg-white">
              <img
                src="CompanyLogo.png"
                alt="Company Logo"
                className="w-14 h-14"
              />
              <div className="flex flex-col items-start justify-between ml-5">
                <div className="text-lg font-semibold">
                  Social Media Assistant
                </div>
                <div className="text-gray-800">Connex India . Delhi, India</div>
                <div className="flex flex-row items-center justify-between  mt-3">
                  <div className="mr-3 pl-2 pr-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Full Time
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Marketing
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Design
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-top pt-3 pb-3 pl-5 pr-25 bg-white">
              <img
                src="CompanyLogo.png"
                alt="Company Logo"
                className="w-14 h-14"
              />
              <div className="flex flex-col items-start justify-between ml-5">
                <div className="text-lg font-semibold">
                  Social Media Assistant
                </div>
                <div className="text-gray-800">Connex India . Delhi, India</div>
                <div className="flex flex-row items-center justify-between  mt-3">
                  <div className="mr-3 pl-2 pr-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Full Time
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Marketing
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Design
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-top pt-3 pb-3 pl-5 pr-25 bg-white">
              <img
                src="CompanyLogo.png"
                alt="Company Logo"
                className="w-14 h-14"
              />
              <div className="flex flex-col items-start justify-between ml-5">
                <div className="text-lg font-semibold">
                  Social Media Assistant
                </div>
                <div className="text-gray-800">Connex India . Delhi, India</div>
                <div className="flex flex-row items-center justify-between  mt-3">
                  <div className="mr-3 pl-2 pr-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Full Time
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Marketing
                  </div>
                  <div className="mr-3 px-3 py-1 bg-neutral-500 text-white rounded-full text-sm font-semibold">
                    Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
