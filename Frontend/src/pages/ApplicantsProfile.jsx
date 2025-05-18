import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Briefcase,
  Calendar,
  Download,
  CheckCircle,
} from "lucide-react";
import Footer from "../components/Footer";

const ApplicantProfile = () => {
  const [isShortlisted, setIsShortlisted] = useState(true);

  const handleShortlist = () => {
    setIsShortlisted(!isShortlisted);
  };

  return (
    <>
    <div className="max-w-7xl mx-auto p-6 bg-white mt-10">
      {/* Header Section */}
      <div className="flex justify-between mb-8">
        {/* Left side - Name and Actions */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">Sarah Anderson</h1>
          <p className="text-gray-600">Applied for: Senior UX Designer</p>

          {/* Status Badge */}
          <div className="flex items-center">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              Shortlisted
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              className={`px-4 py-2 rounded ${
                isShortlisted
                  ? "bg-blue-700 text-white"
                  : "border border-blue-700 text-blue-700"
              }`}
              onClick={handleShortlist}
            >
              Shortlist
            </button>
            <button className="px-4 py-2 border border-blue-700 text-blue-700 rounded">
              Schedule Interview
            </button>
            <button className="px-4 py-2 border border-blue-700 text-blue-700 rounded">
              Message
            </button>
            <button className="px-4 py-2 border border-red-500 text-red-500 rounded">
              Reject
            </button>
            <button className="px-4 py-2 flex items-center gap-2 text-blue-700">
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>

        {/* Right side - Profile */}
        <div className="text-right flex flex-col items-end">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1670884522394-42db95a1b67a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sarah Anderson"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            Sarah Anderson
          </h2>
          <div className="flex items-center mt-2 text-gray-600">
            <MapPin size={16} className="mr-1" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center mt-2 text-gray-600">
            <Mail size={16} className="mr-1" />
            <span>sarah.anderson@email.com</span>
          </div>
          <div className="flex items-center mt-2 text-gray-600">
            <Phone size={16} className="mr-1" />
            <span>+1 (555) 123-4567</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.838 2.916-2.994 3.057zm-1 0c-2.156-.141-2.939-1.914-2.994-3.057h2.994v3.057zm-6.004-3.057c.069-.89.207-1.734.414-2.543h3.574c-.038.818-.064 1.679-.064 2.543 0 .864.026 1.725.064 2.543h-3.574c-.207-.809-.345-1.653-.414-2.543zm9.418-2.543h2.176c-.418.816-.719 1.67-.891 2.543h-2.229c.025-.833.05-1.691.075-2.543h.869zm0-4.057h-.87c-.025-.851-.05-1.691-.074-2.543h2.229c.172.873.473 1.727.891 2.543h-2.176zm-7.964 0c.59-1.143.838-2.916 2.994-3.057v3.057h-2.994zm4.995 0v-3.057c2.156.141 2.939 1.914 2.994 3.057h-2.994zm3.323 0c-.012-.843-.036-1.685-.075-2.543h2.043c.325.822.578 1.678.744 2.543h-2.712zm-7.043-2.543h-2.043c.166-.865.419-1.721.744-2.543h2.712c-.039.858-.063 1.7-.075 2.543h-1.338zm-2.79 0h-2.177c.418-.816.719-1.67.891-2.543h2.23c-.026.852-.051 1.692-.076 2.543h-.868zm8.178 2.543c.012.862.037 1.704.076 2.543h.868c.025-.852.05-1.692.075-2.543h-.871c-.014 0-.02 0-.026 0h-.122zm-9.402 7.057c-.325-.822-.578-1.678-.744-2.543h2.713c.038.858.063 1.7.075 2.543h-2.044zm-3.134-2.543h2.177c.026.851.051 1.692.076 2.543h.868c.012-.862.037-1.704.076-2.543h-.871c-.014 0-.02 0-.026 0h-2.3zm12.536 0c.172.873.473 1.727.891 2.543h-2.176c-.025-.851-.05-1.691-.075-2.543h1.36z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content - Two column layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="col-span-4">
          {/* Skills & Tools */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Skills & Tools
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                UI/UX Design
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Figma
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Adobe XD
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Prototyping
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                User Research
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Wireframing
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Design Systems
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                HTML/CSS
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Design Thinking
              </span>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Education</h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold">Stanford University</h3>
              <p className="text-gray-600">
                Master's in Human-Computer Interaction
              </p>
              <div className="flex items-center text-gray-500 mt-1">
                <Calendar size={16} className="mr-1" />
                <span>2018 - 2020</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">UC Berkeley</h3>
              <p className="text-gray-600">Bachelor's in Design & Technology</p>
              <div className="flex items-center text-gray-500 mt-1">
                <Calendar size={16} className="mr-1" />
                <span>2014 - 2018</span>
              </div>
            </div>
          </section>

          {/* Attachments */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Attachments
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                        stroke="#2563EB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Resume.pdf</p>
                    <p className="text-sm text-gray-500">2.4 MB</p>
                  </div>
                </div>
                <button className="text-blue-700">
                  <Download size={18} />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                        stroke="#2563EB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Portfolio.pdf</p>
                    <p className="text-sm text-gray-500">8.7 MB</p>
                  </div>
                </div>
                <button className="text-blue-700">
                  <Download size={18} />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                        stroke="#2563EB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Case Study.pdf</p>
                    <p className="text-sm text-gray-500">3.2 MB</p>
                  </div>
                </div>
                <button className="text-blue-700">
                  <Download size={18} />
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-4">
          {/* Work Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Work Experience
            </h2>

            <div className="mb-8">
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="p-2 bg-blue-100 rounded">
                    <Briefcase size={20} className="text-blue-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Senior UX Designer</h3>
                  <p className="text-gray-600">Design Co</p>
                  <div className="flex items-center text-gray-500 mt-1 mb-4">
                    <Calendar size={16} className="mr-1" />
                    <span>2020 - Present</span>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-baseline">
                      <span className="text-blue-700 mr-2">•</span>
                      <span>Led the redesign of core product features</span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-blue-700 mr-2">•</span>
                      <span>Managed a team of 3 designers</span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-blue-700 mr-2">•</span>
                      <span>Improved user engagement by 40%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="p-2 bg-blue-100 rounded">
                    <Briefcase size={20} className="text-blue-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">UX Designer</h3>
                  <p className="text-gray-600">Tech Solutions Inc</p>
                  <div className="flex items-center text-gray-500 mt-1 mb-4">
                    <Calendar size={16} className="mr-1" />
                    <span>2018 - 2020</span>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-baseline">
                      <span className="text-blue-700 mr-2">•</span>
                      <span>Designed mobile app interfaces</span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-blue-700 mr-2">•</span>
                      <span>Conducted user research</span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-blue-700 mr-2">•</span>
                      <span>Created design system</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="col-span-4">
          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Projects</h2>

            <div className="grid grid-cols-1 gap-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="E-commerce Redesign"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">E-commerce Redesign</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Complete redesign of e-commerce platform
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      Figma
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      React
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      Design System
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1699387204388-120141c76d51?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Healthcare App"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">     App</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Mobile app for healthcare providers
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      Adobe XD
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      iOS
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      Android
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Certifications
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <CheckCircle size={20} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="font-medium">Google UX Design</h3>
                  <p className="text-sm text-gray-500">Google • 2023</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <CheckCircle size={20} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="font-medium">Design Leadership</h3>
                  <p className="text-sm text-gray-500">Coursera • 2022</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ApplicantProfile;
