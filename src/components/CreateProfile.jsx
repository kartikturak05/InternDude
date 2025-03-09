import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaUser } from 'react-icons/fa';

// Step 1: Choose Language Component
const ChooseLanguage = ({ language, setLanguage, searchQuery, setSearchQuery }) => {
  const languages = [
    "English", "Hindi", "Spanish", "French", "German", "Chinese", "Japanese",
    "Korean", "Italian", "Portuguese", "Russian", "Arabic", "Dutch", "Turkish",
    "Bengali", "Urdu", "Tamil", "Telugu", "Marathi", "Gujarati", "Punjabi",
  ];

  const filteredLanguages = languages.filter(lang => 
    lang.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center w-full px-10 mt-10">
      <h2 className="text-xl font-semibold">Choose Your Language</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a language"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-96 h-10 p-4 border-2 border-gray-300 rounded-lg mt-5"
      />

      {/* Language List with Scrollbar */}
      <div className="w-96 mt-5 h-60 overflow-y-auto border-2 border-gray-300 rounded-lg">
        <div className="flex flex-col gap-2 p-2">
          {filteredLanguages.map((lang, index) => (
            <div
              key={index}
              className={`p-2 w-full text-center rounded-lg cursor-pointer hover:bg-gray-200 border-2 
                ${language === lang ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
              onClick={() => setLanguage(lang)}
            >
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Step 2: Personal Details Component
const PersonalDetails = ({ personalInfo, setPersonalInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-10 mt-10">
      <h2 className="text-xl font-semibold mb-6">Tell Us About Yourself</h2>
      
      <div className="w-96 space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={personalInfo.firstName}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-300 rounded-lg"
              placeholder="First Name"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={personalInfo.lastName}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-300 rounded-lg"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
          <div className="relative">
            <input
              type="date"
              name="dob"
              value={personalInfo.dob}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-300 rounded-lg"
            />
            <FaCalendarAlt className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300 rounded-lg"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300 rounded-lg"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>
    </div>
  );
};

// Step 3: Location Component
const LocationPreferences = ({ locationInfo, setLocationInfo }) => {
  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", 
    "Pune", "Ahmedabad", "Jaipur", "Lucknow", "New York", "London", 
    "Tokyo", "Paris", "Singapore", "Dubai", "Berlin", "Sydney"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocationInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-10 mt-10">
      <h2 className="text-xl font-semibold mb-6">Your Location Preferences</h2>
      
      <div className="w-96 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current City</label>
          <div className="relative">
            <select
              name="currentCity"
              value={locationInfo.currentCity}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-300 rounded-lg appearance-none"
            >
              <option value="">Select your current city</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
            <FaMapMarkerAlt className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Work Locations</label>
          <p className="text-xs text-gray-500 mb-2">Select up to 3 cities where you'd like to work</p>
          
          <div className="grid grid-cols-2 gap-2">
            {cities.slice(0, 8).map((city, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`city-${index}`}
                  name="preferredCities"
                  value={city}
                  checked={locationInfo.preferredCities.includes(city)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      if (locationInfo.preferredCities.length < 3) {
                        setLocationInfo(prev => ({
                          ...prev,
                          preferredCities: [...prev.preferredCities, city]
                        }));
                      }
                    } else {
                      setLocationInfo(prev => ({
                        ...prev,
                        preferredCities: prev.preferredCities.filter(c => c !== city)
                      }));
                    }
                  }}
                  className="mr-2"
                />
                <label htmlFor={`city-${index}`} className="text-sm">{city}</label>
              </div>
            ))}
          </div>
          
          <div className="mt-2">
            <select
              className="w-full p-2 border-2 border-gray-300 rounded-lg mt-2"
              onChange={(e) => {
                if (e.target.value && !locationInfo.preferredCities.includes(e.target.value) && locationInfo.preferredCities.length < 3) {
                  setLocationInfo(prev => ({
                    ...prev,
                    preferredCities: [...prev.preferredCities, e.target.value]
                  }));
                  e.target.value = "";
                }
              }}
            >
              <option value="">Select more cities</option>
              {cities.slice(8).map((city, index) => (
                <option key={index} value={city} disabled={locationInfo.preferredCities.includes(city)}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {locationInfo.preferredCities.map((city, index) => (
              <div key={index} className="bg-blue-100 px-2 py-1 rounded-full text-xs flex items-center">
                {city}
                <button 
                  className="ml-1 text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    setLocationInfo(prev => ({
                      ...prev,
                      preferredCities: prev.preferredCities.filter(c => c !== city)
                    }));
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Step 4: Current Status Component
const CurrentStatus = ({ statusInfo, setStatusInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStatusInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-10 mt-10">
      <h2 className="text-xl font-semibold mb-6">Your Current Status</h2>
      
      <div className="w-96 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">I am currently a:</label>
          <div className="grid grid-cols-2 gap-3">
            {["College Student", "Fresher", "Working Professional", "School Student", "Women Returning to Work"].map((status, index) => (
              <button
                key={index}
                type="button"
                className={`p-2 rounded-lg border-2 ${
                  statusInfo.currentStatus === status 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setStatusInfo(prev => ({ ...prev, currentStatus: status }))}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Conditional fields based on current status */}
        {(statusInfo.currentStatus === "College Student" || statusInfo.currentStatus === "Fresher" || statusInfo.currentStatus === "Working Professional") && (
          <div className="space-y-4 border-t pt-4">
            <h3 className="font-medium text-gray-700">Education Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
              <input
                type="text"
                name="degree"
                value={statusInfo.degree}
                onChange={handleChange}
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
                placeholder="e.g., B.Tech, MBA, BCA"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
              <input
                type="text"
                name="specialization"
                value={statusInfo.specialization}
                onChange={handleChange}
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
                placeholder="e.g., Computer Science, Marketing, Finance"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">College/University Name</label>
              <input
                type="text"
                name="collegeName"
                value={statusInfo.collegeName}
                onChange={handleChange}
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
                placeholder="Enter your institution name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year of Completion</label>
              <input
                type="number"
                name="yearOfCompletion"
                value={statusInfo.yearOfCompletion}
                onChange={handleChange}
                min="1960"
                max="2030"
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
                placeholder="YYYY"
              />
            </div>
          </div>
        )}

        {(statusInfo.currentStatus === "Working Professional" || statusInfo.currentStatus === "Women Returning to Work") && (
          <div className="border-t pt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
            <select
              name="yearsOfExperience"
              value={statusInfo.yearsOfExperience}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-300 rounded-lg"
            >
              <option value="">Select experience</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5-10 years">5-10 years</option>
              <option value="10+ years">10+ years</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

// Step 5: Work History Component
const WorkHistory = ({ workEntries, setWorkEntries }) => {
  const [currentEntry, setCurrentEntry] = useState({
    jobTitle: "",
    employmentType: "",
    company: "",
    startDate: "",
    endDate: "",
    location: "",
    currently: false
  });

  const employmentTypes = [
    "Full-Time", "Part-Time", "Contract", "Internship", 
    "Freelance", "Temporary", "Volunteer"
  ];

  const handleEntryChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentEntry(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'currently' && checked ? { endDate: "" } : {})
    }));
  };

  const addWorkEntry = () => {
    if (currentEntry.jobTitle && currentEntry.company && currentEntry.startDate) {
      setWorkEntries([...workEntries, { ...currentEntry, id: Date.now() }]);
      setCurrentEntry({
        jobTitle: "",
        employmentType: "",
        company: "",
        startDate: "",
        endDate: "",
        location: "",
        currently: false
      });
    }
  };

  const removeWorkEntry = (id) => {
    setWorkEntries(workEntries.filter(entry => entry.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-10 mt-10">
      <h2 className="text-xl font-semibold mb-6">Your Work History</h2>
      
      <div className="w-full max-w-lg space-y-6">
        {/* Existing work entries */}
        {workEntries.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-medium text-gray-700">Previous Entries</h3>
            {workEntries.map((entry, index) => (
              <div key={entry.id} className="p-3 border-2 border-gray-200 rounded-lg relative">
                <button 
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                  onClick={() => removeWorkEntry(entry.id)}
                >
                  ×
                </button>
                <div className="font-medium">{entry.jobTitle}</div>
                <div className="text-gray-600">{entry.company}</div>
                <div className="text-sm text-gray-500">
                  {entry.startDate} - {entry.currently ? "Present" : entry.endDate}
                </div>
                <div className="text-sm text-gray-500">
                  {entry.employmentType} • {entry.location}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Form to add new entry */}
        <div className="border-t pt-4">
          <h3 className="font-medium text-gray-700 mb-4">Add Work Experience</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={currentEntry.jobTitle}
                onChange={handleEntryChange}
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
                placeholder="e.g., Software Engineer, Marketing Manager"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type</label>
              <select
                name="employmentType"
                value={currentEntry.employmentType}
                onChange={handleEntryChange}
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
              >
                <option value="">Select employment type</option>
                {employmentTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
              <input
                type="text"
                name="company"
                value={currentEntry.company}
                onChange={handleEntryChange}
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
                placeholder="Enter company name"
              />
            </div>
            
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input
                  type="month"
                  name="startDate"
                  value={currentEntry.startDate}
                  onChange={handleEntryChange}
                  className="w-full p-2 border-2 border-gray-300 rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input
                  type="month"
                  name="endDate"
                  value={currentEntry.endDate}
                  onChange={handleEntryChange}
                  disabled={currentEntry.currently}
                  className={`w-full p-2 border-2 rounded-lg ${
                    currentEntry.currently ? "bg-gray-100 border-gray-200" : "border-gray-300"
                  }`}
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="currently"
                name="currently"
                checked={currentEntry.currently}
                onChange={handleEntryChange}
                className="mr-2"
              />
              <label htmlFor="currently" className="text-sm">I currently work here</label>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={currentEntry.location}
                onChange={handleEntryChange}
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
                placeholder="e.g., Mumbai, Remote"
              />
            </div>
            
            <button
              type="button"
              onClick={addWorkEntry}
              className={`w-full p-2 rounded-lg ${
                currentEntry.jobTitle && currentEntry.company && currentEntry.startDate
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!currentEntry.jobTitle || !currentEntry.company || !currentEntry.startDate}
            >
              Add Work Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component - Create Profile
const CreateProfile = () => {
  // State to track current step
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  
  // States for each step
  const [language, setLanguage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: ""
  });
  
  const [locationInfo, setLocationInfo] = useState({
    currentCity: "",
    preferredCities: []
  });
  
  const [statusInfo, setStatusInfo] = useState({
    currentStatus: "",
    degree: "",
    specialization: "",
    collegeName: "",
    yearOfCompletion: "",
    yearsOfExperience: ""
  });
  
  const [workEntries, setWorkEntries] = useState([]);

  // Function to go to next step
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Function to go to previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Check if current step is valid to proceed
  const isStepValid = () => {
    switch (currentStep) {
      case 1: // Language selection
        return language !== "";
      case 2: // Personal details
        return (
          personalInfo.firstName !== "" && 
          personalInfo.lastName !== "" && 
          personalInfo.dob !== "" && 
          personalInfo.email !== "" && 
          personalInfo.phone !== ""
        );
      case 3: // Location
        return locationInfo.currentCity !== "";
      case 4: // Current status
        if (!statusInfo.currentStatus) return false;
        
        if (statusInfo.currentStatus === "College Student" || 
            statusInfo.currentStatus === "Fresher" ||
            statusInfo.currentStatus === "Working Professional") {
          return (
            statusInfo.degree !== "" && 
            statusInfo.specialization !== "" && 
            statusInfo.collegeName !== "" && 
            statusInfo.yearOfCompletion !== ""
          );
        }
        
        if (statusInfo.currentStatus === "Working Professional" || 
            statusInfo.currentStatus === "Women Returning to Work") {
          return statusInfo.yearsOfExperience !== "";
        }
        
        return true;
      case 5: // Work history
        return true; // Work history is optional
      default:
        return false;
    }
  };

  // Render current step content
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ChooseLanguage 
                 language={language} 
                 setLanguage={setLanguage} 
                 searchQuery={searchQuery} 
                 setSearchQuery={setSearchQuery} 
               />;
      case 2:
        return <PersonalDetails personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />;
      case 3:
        return <LocationPreferences locationInfo={locationInfo} setLocationInfo={setLocationInfo} />;
      case 4:
        return <CurrentStatus statusInfo={statusInfo} setStatusInfo={setStatusInfo} />;
      case 5:
        return <WorkHistory workEntries={workEntries} setWorkEntries={setWorkEntries} />;
      default:
        return null;
    }
  };

  // Submit profile
  const handleSubmit = () => {
    // Construct the complete profile data
    const profileData = {
      language,
      personalInfo,
      locationInfo,
      statusInfo,
      workEntries
    };

    console.log("Profile Data:", profileData);
    // Here you would typically send the data to your API
    alert("Profile created successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-gray-500">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                currentStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}>
                <FaUser />
              </div>
              <span className="ml-1 text-xs">Language</span>
            </div>
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                currentStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}>
                <FaUser />
              </div>
              <span className="ml-1 text-xs">Personal</span>
            </div>
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                currentStep >= 3 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}>
                <FaMapMarkerAlt />
              </div>
              <span className="ml-1 text-xs">Location</span>
            </div>
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                currentStep >= 4 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}>
                <FaGraduationCap />
              </div>
              <span className="ml-1 text-xs">Status</span>
            </div>
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                currentStep >= 5 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}>
                <FaBriefcase />
              </div>
              <span className="ml-1 text-xs">Work</span>
            </div>
          </div>
        </div>
        
        {/* Current Step Content */}
        <div className="min-h-96">
          {renderStep()}
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10">
          <button
            type="button"
            onClick={prevStep}
            className={`flex items-center px-4 py-2 rounded-lg ${
              currentStep === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-blue-600 hover:bg-blue-50"
            }`}
            disabled={currentStep === 1}
          >
            <IoIosArrowBack className="mr-1" /> Back
          </button>
          
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className={`flex items-center px-4 py-2 rounded-lg ${
                isStepValid()
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!isStepValid()}
            >
              Next <IoIosArrowForward className="ml-1" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Complete Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;