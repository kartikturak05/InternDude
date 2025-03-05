import React from "react";
import { FaLinkedin, FaEnvelope, FaPencilAlt, FaPlus } from "react-icons/fa";
import { MdLocationOn, MdWork } from "react-icons/md";
import Footer from "./Footer";

const ProfilePage = () => {
  return (
    <>  
    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Banner Image */}
      <div
        className="h-40 bg-yellow-100 bg-opacity-80"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/60/bf/7c/60bf7c84a3f4bb95b2a4d0697bbedbae.jpg')",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Profile Header */}
      <div className="relative px-6 py-4">
        <div className="flex justify-between items-start">
          <div className="flex items-end">
            <div className="relative -mt-16 mr-4">
              <img
                src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1741214526~exp=1741218126~hmac=b326febcd6aa472268476939a961c1dea7431019b16deb225531357a7a69e4a4&w=1380"
                alt="John Anderson"
                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">John Anderson</h1>
              <p className="text-gray-600">Senior UX/UI Designer</p>
              <div className="flex items-center text-sm mt-1">
                <MdLocationOn className="text-gray-500 mr-1" />
                <span className="text-gray-600 mr-4">San Francisco, CA</span>
                <MdWork className="text-gray-500 mr-1" />
                <span className="text-gray-600">Open to Work</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm flex items-center">
              <FaPlus className="mr-1" /> Download Resume
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="border-t border-b border-gray-200 px-6 py-2">
        <div className="flex space-x-4">
          <a href="#" className="p-2">
            <FaLinkedin className="text-gray-600 text-xl" />
          </a>
          <a href="#" className="p-2">
            <FaEnvelope className="text-gray-600 text-xl" />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-2/3 p-6">
          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">About</h2>
            <p className="text-gray-700">
              Passionate UI/UX designer with 6+ years of experience creating
              user-centered designs for web and mobile platforms. Specialized in
              design systems, interaction design, and user research. Currently
              working new opportunities in innovative tech companies.
            </p>
            <div className="flex flex-wrap mt-4">
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                UX/UI Design
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                Figma
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                Adobe XD
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                Prototyping
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                User Research
              </span>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Experience</h2>
              <button className="text-blue-500 text-sm flex items-center">
                <FaPlus className="mr-1" /> Add Experience
              </button>
            </div>

            {/* Experience Item 1 */}
            <div className="mb-6 flex">
              <div className="mr-4">
                <div className="bg-gray-200 w-12 h-12 rounded flex items-center justify-center">
                  <span className="text-gray-600 text-xs">Logo</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Senior UX/UI Designer</h3>
                <p className="text-gray-600">Design Co.</p>
                <p className="text-gray-500 text-sm">
                  2021 - Present · San Francisco, CA
                </p>
                <p className="text-gray-700 mt-2">
                  Led the redesign of core products resulting in 40% increase in
                  user engagement. Managed a team of 3 designers.
                </p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="flex">
              <div className="mr-4">
                <div className="bg-gray-200 w-12 h-12 rounded flex items-center justify-center">
                  <span className="text-gray-600 text-xs">Logo</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">UX/UI Designer</h3>
                <p className="text-gray-600">Creative Agency</p>
                <p className="text-gray-500 text-sm">
                  2018 - 2021 · New York, NY
                </p>
                <p className="text-gray-700 mt-2">
                  Designed mobile applications and conducted user research to
                  improve product usability.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Education</h2>
              <button className="text-blue-500 text-sm flex items-center">
                <FaPlus className="mr-1" /> Add Education
              </button>
            </div>

            {/* Education Item 1 */}
            <div className="mb-6 flex">
              <div className="mr-4">
                <div className="bg-gray-200 w-12 h-12 rounded flex items-center justify-center">
                  <span className="text-gray-600 text-xs">Logo</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Stanford University</h3>
                <p className="text-gray-600">
                  Master's in Human Computer Interaction
                </p>
                <p className="text-gray-500 text-sm">
                  2017 - 2019 · GPA: 3.8/4.0
                </p>
              </div>
            </div>

            {/* Education Item 2 */}
            <div className="flex">
              <div className="mr-4">
                <div className="bg-gray-200 w-12 h-12 rounded flex items-center justify-center">
                  <span className="text-gray-600 text-xs">Logo</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">University of California</h3>
                <p className="text-gray-600">Bachelor's in Design</p>
                <p className="text-gray-500 text-sm">
                  2013 - 2017 · GPA: 3.5/4.0
                </p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Projects</h2>
              <button className="text-blue-500 text-sm flex items-center">
                <FaPlus className="mr-1" /> Add Project
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Project 1 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://c8.alamy.com/comp/2GCA8GX/business-concept-e-commerce-word-cloud-design-background-template-2GCA8GX.jpg"
                  alt="E-commerce Redesign"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">E-commerce Redesign</h3>
                  <p className="text-gray-600 text-sm">
                    Complete redesign of an e-commerce platform focusing on user
                    experience and conversion optimization.
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661301075857-63868ae88c00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuayUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Banking App UI"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">Banking App UI</h3>
                  <p className="text-gray-600 text-sm">
                    Modern banking application interface design with focus on
                    accessibility and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3 bg-gray-50 p-6">
          {/* Profile Strength */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Profile Strength</h2>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Your profile is 85% complete
            </p>
          </div>

          {/* Skills & Endorsements */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">
              Skills & Endorsements
            </h2>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium">UI Design</h3>
                <span className="text-gray-600 text-sm">28 endorsements</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium">UX Research</h3>
                <span className="text-gray-600 text-sm">24 endorsements</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium">Prototyping/Wireframing</h3>
                <span className="text-gray-600 text-sm">20 endorsements</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium">Design Systems</h3>
                <span className="text-gray-600 text-sm">15 endorsements</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium">User Testing</h3>
                <span className="text-gray-600 text-sm">12 endorsements</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Job Preferences */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Job Preferences</h2>

            <div className="mb-3">
              <h3 className="text-sm font-medium text-gray-600">Looking for</h3>
              <div className="flex mt-1">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2">
                  UX/UI Designer
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                  Product Designer
                </span>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-sm font-medium text-gray-600">Job Type</h3>
              <p className="text-gray-800">Full-time, Remote</p>
            </div>

            <div className="mb-3">
              <h3 className="text-sm font-medium text-gray-600">
                Salary Range
              </h3>
              <p className="text-gray-800">$90,000 - $120,000 / year</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-600">
                Status/Noticed
              </h3>
              <p className="text-gray-800">2 weeks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProfilePage;
