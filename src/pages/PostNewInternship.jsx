import React, { useState } from "react";
import {
  FaHome,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRupeeSign,
  FaTimes,
  FaPlus,
  FaCheckCircle,
  FaBuilding as FaCompany,
  FaGlobe,
} from "react-icons/fa";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const PostNewInternship = () => {

    const navigate = useNavigate();

  // State management for form data
  const [formData, setFormData] = useState({
    title: "",
    workMode: "",
    location: "",
    startDate: "",
    duration: "1",
    monthlyStipend: "",
    otherBenefits: "",
    description: "",
    skills: ["Figma", "Canva", "Adobe XD"],
    perks: "",
    openings: "",
    applicationDeadline: "",
    eligibility: {
      finalYear: false,
      specificCities: false,
    },
    questions: ["Why should we hire you?"],
    companyName: "Tech Solutions Inc.",
    companyWebsite: "https://techsolutions.com",
  });

  // State for new skill input
  const [newSkill, setNewSkill] = useState("");
  // State for new question input
  const [newQuestion, setNewQuestion] = useState("");

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle work mode selection
  const handleWorkModeChange = (mode) => {
    setFormData((prev) => ({
      ...prev,
      workMode: mode,
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      eligibility: {
        ...prev.eligibility,
        [name]: checked,
      },
    }));
  };

  // Add a new skill
  const addSkill = (e) => {
    if (e.key === "Enter" && newSkill.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }));
      setNewSkill("");
      e.preventDefault();
    }
  };

  // Remove a skill
  const removeSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  // Add a new question
  const addQuestion = () => {
    if (newQuestion.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        questions: [...prev.questions, newQuestion.trim()],
      }));
      setNewQuestion("");
    }
  };

  // Remove a question
  const removeQuestion = (index) => {
    setFormData((prev) => ({
      ...prev,
      questions: prev.questions.filter((_, i) => i !== index),
    }));
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <>
    <div className="max-w-6xl mx-auto pt-4 pb-2 text-4xl font-bold">Add Internship Details</div>
      <div className="max-w-6xl mx-auto p-4">
        <form onSubmit={handleSubmit}>
          {/* Internship Overview Section */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-3xl font-bold mb-4">Internship Overview</h2>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-900 mb-1">
                Internship Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Graphic Design Intern"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-900 mb-1">
                Work Mode
              </label>
              <div className="flex space-x-4 text-lg">
                <div
                  className={`flex items-center cursor-pointer ${
                    formData.workMode === "Remote"
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleWorkModeChange("Remote")}
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center mr-2 ${
                      formData.workMode === "Remote"
                        ? "border-blue-600"
                        : "border-gray-400"
                    }`}
                  >
                    {formData.workMode === "Remote" && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </div>
                  <FaHome className="mr-1" /> Remote
                </div>

                <div
                  className={`flex items-center cursor-pointer ${
                    formData.workMode === "On-Site"
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleWorkModeChange("On-Site")}
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center mr-2 ${
                      formData.workMode === "On-Site"
                        ? "border-blue-600"
                        : "border-gray-400"
                    }`}
                  >
                    {formData.workMode === "On-Site" && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </div>
                  <FaBuilding className="mr-1" /> On-Site
                </div>

                <div
                  className={`flex items-center cursor-pointer ${
                    formData.workMode === "Hybrid"
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleWorkModeChange("Hybrid")}
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center mr-2 ${
                      formData.workMode === "Hybrid"
                        ? "border-blue-600"
                        : "border-gray-400"
                    }`}
                  >
                    {formData.workMode === "Hybrid" && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </div>
                  <span>Hybrid</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-900 mb-1">
                Location
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <FaMapMarkerAlt />
                </div>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                  className="w-full border border-gray-300 rounded p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label className="block text-lg font-medium text-gray-900 mb-1">
                  Start Date
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <FaCalendarAlt />
                  </div>
                  <input
                    type="text"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    placeholder="yyyy / mm / dd"
                    className="w-full border border-gray-300 rounded p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label className="block text-lg font-medium text-gray-900 mb-1">
                  Duration
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stipend & Benefits Section */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Stipend & Benefits</h2>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-900 mb-1">
                Monthly Stipend
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <FaRupeeSign />
                </div>
                <input
                  type="text"
                  name="monthlyStipend"
                  value={formData.monthlyStipend}
                  onChange={handleChange}
                  placeholder="e.g., 5000"
                  className="w-full border border-gray-300 rounded p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-900 mb-1">
                Other Benefits (Optional)
              </label>
              <input
                type="text"
                name="otherBenefits"
                value={formData.otherBenefits}
                onChange={handleChange}
                placeholder="e.g., Letter of Recommendation, Certificate, Pre-placement offer"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* About the Internship Section */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">About the Internship</h2>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-900 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the responsibilities, scope, and expectations"
                className="w-full border border-gray-300 rounded p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-900 mb-1">
                Skills Required
              </label>
              <div className="flex flex-wrap gap-2 border border-gray-300 rounded p-2 focus-within:ring-2 focus-within:ring-blue-500">
                {formData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex items-center"
                  >
                    <span>{skill}</span>
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="ml-1 text-blue-600 hover:text-blue-800"
                    >
                      <FaTimes size={12} />
                    </button>
                  </div>
                ))}
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={addSkill}
                  placeholder="Add skills (press Enter)"
                  className="flex-grow border-none outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-900 mb-1">
                Perks/Tools
              </label>
              <input
                type="text"
                name="perks"
                value={formData.perks}
                onChange={handleChange}
                placeholder="e.g., MacBook, Access to paid tools"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Application Preferences Section */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Application Preferences</h2>

            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label className="block text-lg font-medium text-gray-900 mb-1">
                  Number of Openings
                </label>
                <input
                  type="text"
                  name="openings"
                  value={formData.openings}
                  onChange={handleChange}
                  placeholder="e.g., 3"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-lg font-medium text-gray-900 mb-1">
                  Application Deadline
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <FaCalendarAlt />
                  </div>
                  <input
                    type="text"
                    name="applicationDeadline"
                    value={formData.applicationDeadline}
                    onChange={handleChange}
                    placeholder="yyyy / mm / dd"
                    className="w-full border border-gray-300 rounded p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-900 mb-2">
                Who Can Apply?
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="finalYear"
                    name="finalYear"
                    checked={formData.eligibility.finalYear}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
                  />
                  <label
                    htmlFor="finalYear"
                    className="ml-2 block text-md text-gray-700"
                  >
                    Only Final Year Students
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="specificCities"
                    name="specificCities"
                    checked={formData.eligibility.specificCities}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
                  />
                  <label
                    htmlFor="specificCities"
                    className="ml-2 block text-md text-gray-700"
                  >
                    Only From Specific Cities
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-900 mb-2">
                Additional Questions
              </label>
              <div className="space-y-3">
                {formData.questions.map((question, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded relative">
                    <p>{question}</p>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeQuestion(index)}
                        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center mt-4">
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Add another question"
                className="flex-grow border border-gray-300 rounded-l p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={addQuestion}
                className="bg-blue-600 text-white px-3 py-2 rounded-r flex items-center hover:bg-blue-700"
              >
                <FaPlus className="mr-1" /> Add Question
              </button>
            </div>
          </div>

          {/* Company Info Section */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Company Info</h2>

            <div className="flex mb-4">
              <div className="w-1/4 mr-4">
                <div className="bg-gray-100 p-6 h-full flex items-center justify-center text-gray-500 border border-gray-300 rounded">
                  <FaCompany size={30} />
                </div>
              </div>
              <div className="w-3/4">
                <div className="mb-4">
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <FaGlobe />
                    </div>
                    <input
                      type="text"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      placeholder="Company Website"
                      className="w-full border border-gray-300 rounded p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="px-5 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={()=> navigate("/employer/PostOpportunity/PreviewInternship")}
            >
              Preview Internship
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default PostNewInternship;
