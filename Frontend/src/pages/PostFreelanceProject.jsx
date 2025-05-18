import React, { useState, useRef } from 'react';
import { Calendar, Upload, X, Plus, ChevronLeft, Image } from 'lucide-react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const PostFreelanceProject = () => {
    const navigate = useNavigate();
  // State for form data
  const [formData, setFormData] = useState({
    projectTitle: '',
    category: '',
    subCategory: '',
    deliverables: '',
    description: '',
    skills: ['React', 'TypeScript', 'Node.js'],
    deadline: '',
    duration: '',
    durationType: 'Days',
    budgetType: 'fixed',
    budgetAmount: '',
    paymentType: 'fixed',
    companyName: 'Tech Solutions Inc.',
    companyDescription: '',
    contactEmail: ''
  });

  // State for file uploads
  const [files, setFiles] = useState([]);
  
  // State for company logo
  const [companyLogo, setCompanyLogo] = useState(null);
  
  // Ref for skills input
  const skillInputRef = useRef(null);
  
  // State for new skill input
  const [newSkill, setNewSkill] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle file drop
  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFiles = [...e.dataTransfer.files];
    setFiles(prevFiles => [...prevFiles, ...droppedFiles]);
  };

  // Handle file selection through browser
  const handleFileSelect = (e) => {
    const selectedFiles = [...e.target.files];
    setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
  };

  // Remove a file
  const removeFile = (indexToRemove) => {
    setFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  // Handle logo selection
  const handleLogoSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCompanyLogo(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Handle skill input change
  const handleSkillChange = (e) => {
    setNewSkill(e.target.value);
  };

  // Add a skill
  const addSkill = (e) => {
    if (e.key === 'Enter' && newSkill.trim()) {
      e.preventDefault(); // Prevent form submission
      setFormData(prevState => ({
        ...prevState,
        skills: [...prevState.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  // Add skill from button click
  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setFormData(prevState => ({
        ...prevState,
        skills: [...prevState.skills, newSkill.trim()]
      }));
      setNewSkill('');
      skillInputRef.current.focus();
    }
  };

  // Remove a skill
  const removeSkill = (skillToRemove) => {
    setFormData(prevState => ({
      ...prevState,
      skills: prevState.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  // Preview project
  const handlePreview = () => {
    console.log("Preview Project:", formData, files, companyLogo);
    navigate("/employer/PostOpportunity/PreviewFreelancePosted")
    // Implementation for preview would go here
  };

  

  return (
    <>
    <div className="max-w-6xl mx-auto p-6 text-base">
      <h1 className="text-3xl font-bold mb-8">Add Project Details</h1>

      {/* Project Overview Section */}
      <div className="bg-white rounded-lg shadow p-8 mb-8">
        <h2 className="text-xl font-semibold mb-6">Project Overview</h2>
        
        <div className="mb-6">
          <label className="block text-base font-medium mb-2">Project Title</label>
          <input
            type="text"
            name="projectTitle"
            placeholder="Enter project title"
            className="w-full p-3 border rounded text-base"
            value={formData.projectTitle}
            onChange={handleChange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-base font-medium mb-2">Category</label>
            <select
              name="category"
              className="w-full p-3 border rounded text-base"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select category</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          
          <div>
            <label className="block text-base font-medium mb-2">Sub-Category</label>
            <select
              name="subCategory"
              className="w-full p-3 border rounded text-base"
              value={formData.subCategory}
              onChange={handleChange}
            >
              <option value="">Select sub-category</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Full Stack</option>
              <option value="ui">UI Design</option>
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-base font-medium mb-2">Expected Deliverables</label>
          <textarea
            name="deliverables"
            placeholder="List the expected deliverables"
            className="w-full p-3 border rounded min-h-28 text-base"
            value={formData.deliverables}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <div className="mb-6">
          <label className="block text-base font-medium mb-2">Short Description</label>
          <textarea
            name="description"
            placeholder="Write a short description"
            className="w-full p-3 border rounded min-h-28 text-base"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <div>
          <label className="block text-base font-medium mb-2">Attach Files (Optional)</label>
          <div 
            className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer flex flex-col items-center justify-center"
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById('fileInput').click()}
          >
            <Upload className="text-gray-400 mb-3" size={32} />
            <p className="text-base text-gray-500">Drag & drop files here or click to browse</p>
            <input 
              id="fileInput" 
              type="file" 
              className="hidden" 
              multiple 
              onChange={handleFileSelect}
            />
          </div>
          
          {files.length > 0 && (
            <div className="mt-4">
              <p className="text-base font-medium mb-2">Uploaded Files</p>
              <ul className="space-y-2">
                {files.map((file, index) => (
                  <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                    <span className="text-base truncate max-w-md">{file.name}</span>
                    <button 
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={18} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Skills Required Section */}
      <div className="bg-white rounded-lg shadow p-8 mb-8">
        <h2 className="text-xl font-semibold mb-6">Skills Required</h2>
        
        <div>
          <label className="block text-base font-medium mb-3">Select Required Skills</label>
          <div className="flex flex-wrap gap-2 mb-4">
            {formData.skills.map((skill, index) => (
              <div key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center text-base">
                <span>{skill}</span>
                <button 
                  onClick={() => removeSkill(skill)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                  type="button"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              ref={skillInputRef}
              type="text"
              placeholder="Type to add more skills"
              className="w-full p-3 border rounded text-base"
              value={newSkill}
              onChange={handleSkillChange}
              onKeyDown={addSkill}
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Timeline & Budget Section */}
      <div className="bg-white rounded-lg shadow p-8 mb-8">
        <h2 className="text-xl font-semibold mb-6">Timeline & Budget</h2>
        
        <div className="mb-6">
          <label className="block text-base font-medium mb-2">Project Deadline</label>
          <div className="relative">
            <input
              type="date"
              name="deadline"
              className="w-full p-3 border rounded pl-12 text-base"
              value={formData.deadline}
              onChange={handleChange}
            />
            <Calendar className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-base font-medium mb-2">Estimated Duration</label>
          <div className="flex gap-3">
            <input
              type="number"
              name="duration"
              placeholder="Duration"
              className="w-full p-3 border rounded text-base"
              value={formData.duration}
              onChange={handleChange}
            />
            <select
              name="durationType"
              className="p-3 border rounded w-40 text-base"
              value={formData.durationType}
              onChange={handleChange}
            >
              <option value="Days">Days</option>
              <option value="Weeks">Weeks</option>
              <option value="Months">Months</option>
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-base font-medium mb-3">Budget</label>
          <div className="flex items-center gap-6 mb-4">
            <label className="flex items-center text-base">
              <input
                type="radio"
                name="budgetType"
                value="fixed"
                checked={formData.budgetType === 'fixed'}
                onChange={handleChange}
                className="mr-2 w-5 h-5"
              />
              Fixed Price
            </label>
            <label className="flex items-center text-base">
              <input
                type="radio"
                name="budgetType"
                value="range"
                checked={formData.budgetType === 'range'}
                onChange={handleChange}
                className="mr-2 w-5 h-5"
              />
              Range
            </label>
          </div>
          <div className="relative">
            <span className="absolute left-4 top-3.5 text-base">$</span>
            <input
              type="number"
              name="budgetAmount"
              placeholder="Enter budget amount"
              className="w-full p-3 border rounded pl-10 text-base"
              value={formData.budgetAmount}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div>
          <label className="block text-base font-medium mb-3">Payment Type</label>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className={`px-6 py-3 rounded text-base font-medium ${formData.paymentType === 'fixed' ? 'bg-blue-100 text-blue-800 border border-blue-300' : 'bg-gray-100'}`}
              onClick={() => setFormData({...formData, paymentType: 'fixed'})}
            >
              Fixed
            </button>
            <button
              type="button"
              className={`px-6 py-3 rounded text-base font-medium ${formData.paymentType === 'hourly' ? 'bg-blue-100 text-blue-800 border border-blue-300' : 'bg-gray-100'}`}
              onClick={() => setFormData({...formData, paymentType: 'hourly'})}
            >
              Hourly
            </button>
          </div>
        </div>
      </div>

      {/* Company Information Section */}
      <div className="bg-white rounded-lg shadow p-8 mb-8">
        <h2 className="text-xl font-semibold mb-6">Company Information</h2>
        
        <div className="mb-6">
          <label className="block text-base font-medium mb-2">Company Name</label>
          <div className="flex items-center">
            <div 
              className="w-30 h-30 rounded mr-3 flex items-center justify-center overflow-hidden cursor-pointer border"
              onClick={() => document.getElementById('logoInput').click()}
            >
              {companyLogo ? (
                <img src={companyLogo} alt="Company logo" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-blue-500 text-white flex items-center justify-center text-lg">
                  {formData.companyName.charAt(0)}
                </div>
              )}
              <input 
                id="logoInput" 
                type="file" 
                className="hidden"
                accept="image/*"
                onChange={handleLogoSelect}
              />
            </div>
            <input
              type="text"
              name="companyName"
              className="w-full p-3 border rounded text-base"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">Click on the logo to upload a company logo</p>
        </div>
        
        <div className="mb-6">
          <label className="block text-base font-medium mb-2">Company Description</label>
          <textarea
            name="companyDescription"
            placeholder="Write about your company"
            className="w-full p-3 border rounded min-h-28 text-base"
            value={formData.companyDescription}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <div>
          <label className="block text-base font-medium mb-2">Contact Information (Optional)</label>
          <input
            type="email"
            name="contactEmail"
            placeholder="Enter contact email"
            className="w-full p-3 border rounded text-base"
            value={formData.contactEmail}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button 
          className="flex items-center text-gray-600 hover:text-gray-800 text-base font-medium"
          onClick={() => console.log("Back clicked")}
        >
          <ChevronLeft size={22} />
          <span>Back</span>
        </button>
        
        <button 
          className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 text-base font-medium"
          onClick={handlePreview}
        >
          Preview Project
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PostFreelanceProject;