import React, { useEffect, useState,useRef  } from "react";
import { PiGreaterThanBold } from "react-icons/pi";
import { AiOutlineCloudUpload, AiOutlineCheckCircle } from 'react-icons/ai';

const GitOverview = ({ setSaveAndContinue, saveAndContinue }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  // Categories and Subcategories
  const categories = {
    "Web Development": ["Frontend", "Backend", "Full Stack", "DevOps"],
    "Mobile Development": ["Android", "iOS", "Flutter", "React Native"],
    "Data Science": ["Machine Learning", "AI", "Big Data", "Deep Learning"],
    "Cyber Security": [
      "Network Security",
      "Ethical Hacking",
      "Penetration Testing",
    ],
  };

  const handleClick = () => {
    if (saveAndContinue == "overview") {
      setSaveAndContinue("pricing");
    } else if (saveAndContinue == "pricing") {
      setSaveAndContinue("description");
    } else if (saveAndContinue == "description") {
      setSaveAndContinue("gallery");
    } else if (saveAndContinue == "gallery") {
      setSaveAndContinue("completed");
    }
  };

  return (
    <>
      {/* Form */}
      <div className="flex flex-col items-center justify-center border-2 border-gray-400 p-6 rounded-lg mt-5 w-96">
        {/* Gig Title */}
        <div>
          <label htmlFor="Title">
            Gig Title <br />
          </label>
          <input
            type="text"
            id="Title"
            placeholder="Website Design"
            className="pt-2 pb-2 pr-34 pl-2 border border-gray-500 rounded-lg w-full mt-2"
          />
        </div>

        {/* Category Selection */}
        <div className="mt-4 w-full">
          <label htmlFor="category">
            Category <br />
          </label>
          <select
            id="category"
            className="pt-2 pb-2 pr-8 pl-2 border border-gray-500 rounded-lg w-full mt-2"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedSubCategory(""); // Reset subcategory when category changes
            }}
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Selection (Dynamic) */}
        <div className="mt-4 w-full">
          <label htmlFor="subcategory">
            Sub Category <br />
          </label>
          <select
            id="subcategory"
            className="pt-2 pb-2 pr-8 pl-2 border border-gray-500 rounded-lg w-full mt-2"
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
            disabled={!selectedCategory} // Disable if no category is selected
          >
            <option value="">Select Subcategory</option>
            {selectedCategory &&
              categories[selectedCategory].map((subCategory) => (
                <option key={subCategory} value={subCategory}>
                  {subCategory}
                </option>
              ))}
          </select>
        </div>

        {/* Git Tags */}
        <div className="mt-4 w-full">
          <label htmlFor="GitTags">
            Git Tags <br />
          </label>
          <input
            type="text"
            id="GitTags"
            placeholder="Website Design"
            className="pt-2 pb-2 pr-10 pl-2 border border-gray-500 rounded-lg w-full mt-2"
          />
        </div>

        {/* Save & Continue */}
        <div
          className="bg-green-700 text-white pt-2 pb-2 pl-5 pr-5 rounded-lg mt-5 cursor-pointer"
          onClick={handleClick}
        >
          Save & Continue
        </div>
      </div>
    </>
  );
};

const Pricing = ({ setSaveAndContinue, saveAndContinue }) => {
  const handleClick = () => {
    if (saveAndContinue == "overview") {
      setSaveAndContinue("pricing");
    } else if (saveAndContinue == "pricing") {
      setSaveAndContinue("description");
    } else if (saveAndContinue == "description") {
      setSaveAndContinue("gallery");
    } else if (saveAndContinue == "gallery") {
      setSaveAndContinue("completed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border-2 border-gray-400 p-6 rounded-lg mt-5 w-2xl">
      {/* Pricing Grid */}
      <div className="max-w-2xl ">
        <div className=" flex flex-col border border-gray-300 rounded-lg ">
          {/* Basic Plan */}
          <div className="flex flex-row items-center">
            <div className="font-bold text-md bg-gray-100 px-6 py-3 border-b border-r pt-15 pb-15 pr-5">
              Basic Plan
            </div>
            <div className="px-6 py-3 border-b border-r pt-15 pb-15 pr-5">
              Describe Your Package
            </div>
            <div className="px-6 py-3 border-b pt-15 pb-15 pr-5">Price</div>
          </div>

          {/* Standard Plan */}
          <div className="flex flex-row items-center">
            <div className="font-bold text-md bg-gray-100 px-6 py-3 border-b border-r pt-15 pb-15 pr-5">
              Standard
            </div>
            <div className="px-6 py-3 border-b border-r pt-15 pb-15 pr-5">
              Describe Your Package
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="px-6 py-3 border-b pt-5  pr-5">Price</div>
              <div className="pr-5 pl-2">
                <input
                  type="text"
                  placeholder="Enter Price"
                  className=" border border-gray-500 rounded-lg pt-2 pb-2"
                />
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-row items-center">
            <div className="font-bold text-md bg-gray-100 px-6 py-3 border-r pt-15 pb-15 pr-5">
              Premium
            </div>
            <div className="px-6 py-3 border-r pt-15 pb-15 pr-5">
              Describe Your Package
            </div>
            <div className="px-6 py-3 pt-15 pb-15 pr-5">Price</div>
          </div>
        </div>
      </div>

      {/* Save & Continue Button */}
      <div
        className="bg-green-700 text-white pt-2 pb-2 pl-5 pr-5 rounded-lg mt-5 cursor-pointer hover:bg-green-800 transition"
        onClick={handleClick}
      >
        Save & Continue
      </div>
    </div>
  );
};

const Description = ({ setSaveAndContinue, saveAndContinue }) => {
  const [description, setDescription] = useState("Website Design");

  const handleClick = () => {
    if (saveAndContinue == "overview") {
      setSaveAndContinue("pricing");
    } else if (saveAndContinue == "pricing") {
      setSaveAndContinue("description");
    } else if (saveAndContinue == "description") {
      setSaveAndContinue("gallery");
    } else if (saveAndContinue == "gallery") {
      setSaveAndContinue("completed");
    }
  };
  return (
    <>
      <div className="flex flex-col items-start justify-center border-2 border-gray-400 p-6 rounded-lg mt-5 w-2xl">
        <div className="font-semibold font-sm text-left">Describe Your Gig</div>
        <div className="w-full h-full">
          <textarea
            name="Description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 border-gray-500 rounded-lg w-full mt-2"
            rows="13"
          ></textarea>
        </div>

        {/* Save & Continue Button */}
      </div>
      <div
        className="bg-green-700 text-white pt-2 pb-2 pl-5 pr-5 rounded-lg mt-5 cursor-pointer hover:bg-green-800 transition"
        onClick={handleClick}
      >
        Save & Continue
      </div>
    </>
  );
};

const Gallery = ({ setSaveAndContinue, saveAndContinue }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const dropRef = useRef(null);

  const handleFile = (file) => {
    if (file) {
      setUploadedFile(file);
      
      // Create a preview URL for images
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else if (file.type === 'application/pdf') {
        // For PDFs, we'll just show an icon or text
        setPreviewUrl('pdf');
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  // Drag events
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleClick = () => {
    if (saveAndContinue === "overview") {
      setSaveAndContinue("pricing");
    } else if (saveAndContinue === "pricing") {
      setSaveAndContinue("description");
    } else if (saveAndContinue === "description") {
      setSaveAndContinue("gallery");
    } else if (saveAndContinue === "gallery") {
      setSaveAndContinue("completed");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center border-2 border-gray-400 p-6 rounded-lg mt-5 max-w-2xl">
        {!uploadedFile ? (
          <div className="flex items-center justify-center w-96">
            <div 
              ref={dropRef}
              className={`cursor-pointer ${isDragging ? 'border-2 border-dashed border-blue-500 bg-blue-50' : ''}`}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <label htmlFor="dropzone-file" className="cursor-pointer">
                <div className="flex flex-col items-center justify-center rounded-lg w-96 h-auto pt-10 pb-10">
                  <div className="text-5xl text-blue-700">
                    <AiOutlineCloudUpload />
                  </div>
                  <p className="mb-2 text-lg mt-3">
                    <span className="font-semibold">Select your file</span> or drag
                    and drop
                  </p>
                  <p className="text-sm mt-2">png, pdf, jpg, docs Accepted</p>

                  <div className="mt-5 pt-3 pb-3 pl-9 pr-9 bg-blue-800/80 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition">
                    Browse
                  </div>

                  {/* Hidden file input */}
                  <input
                    type="file"
                    name="dropzone-file"
                    id="dropzone-file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                  />
                </div>
              </label>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-green-100 text-green-800 rounded-lg p-4 mb-4 flex items-center">
              <AiOutlineCheckCircle className="text-2xl mr-2" />
              <span>File successfully uploaded!</span>
            </div>
            
            {previewUrl && previewUrl !== 'pdf' ? (
              <div className="mt-4 mb-4">
                <img 
                  src={previewUrl} 
                  alt="Preview" 
                  className="max-w-full max-h-64 rounded-lg shadow-md" 
                />
              </div>
            ) : (
              <div className="mt-4 mb-4 p-8 bg-gray-100 rounded-lg">
                <p className="text-center">{uploadedFile.name}</p>
                <p className="text-center text-sm text-gray-500 mt-2">
                  {uploadedFile.type === 'application/pdf' ? 'PDF Document' : 'Document'}
                </p>
              </div>
            )}
            
            <div className="flex gap-4 mt-4">
              <button 
                className="pt-2 pb-2 pl-5 pr-5 bg-blue-700 text-white rounded-lg cursor-pointer hover:bg-blue-800 transition"
                onClick={() => {
                  setUploadedFile(null);
                  setPreviewUrl(null);
                }}
              >
                Upload Another File
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Save & Continue Button */}
      <div
        className="bg-green-700 text-white pt-2 pb-2 pl-5 pr-5 rounded-lg mt-5 cursor-pointer hover:bg-green-800 transition"
        onClick={() => setSaveAndContinue("completed")}
      >
        Publish
      </div>
    </>
  );
};

const PostNewGig = () => {
  const [overview, setOverview] = useState(true);

  const [saveAndContinue, setSaveAndContinue] = useState("overview");
  const [showComponent, setShowComponent] = useState("overview");

  useEffect(() => {
    if (saveAndContinue == "overview") {
      setShowComponent("overview");
    } else if (saveAndContinue == "pricing") {
      setShowComponent("pricing");
    } else if (saveAndContinue == "description") {
      setShowComponent("description");
    } else if (saveAndContinue == "gallery") {
      setShowComponent("gallery");
    }
  }, [saveAndContinue]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-4xl text-gray-800 font-bold mt-10">
        Post Your Gig
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-around mt-5 w-auto border border-gray-800 rounded-lg pt-3 pb-3 px-6">
        <div
          className={`text-lg ${
            saveAndContinue == "overview" ? "text-gray-900" : "text-gray-500"
          } font-semibold ml-5 mr-5 cursor-pointer`}

          onClick={() => setSaveAndContinue("overview")} // Set to overview
        >
          Overview
        </div>
        <PiGreaterThanBold />
        <div
          className={`text-lg ${
            saveAndContinue == "pricing" ? "text-gray-900" : "text-gray-500"
          } font-semibold ml-5 mr-5 cursor-pointer`}
          onClick={() => setSaveAndContinue("pricing")} // Set to pricing
        >
          Pricing
        </div>
        <PiGreaterThanBold />
        <div
          className={`text-lg ${
            saveAndContinue == "description" ? "text-gray-900" : "text-gray-500"
          } font-semibold ml-5 mr-5 cursor-pointer`}
          onClick={() => setSaveAndContinue("description")} // Set to desciption
        >
          Description
        </div>
        <PiGreaterThanBold />
        <div
          className={`text-lg ${
            saveAndContinue == "gallery" ? "text-gray-900" : "text-gray-500"
          } font-semibold ml-5 mr-5 cursor-pointer`}
          onClick={() => setSaveAndContinue("gallery")} // Set to gallery
        >
          Gallery
        </div>
        <PiGreaterThanBold />
      </div>

      {showComponent == "overview" && (
        <GitOverview
          setSaveAndContinue={setSaveAndContinue}
          saveAndContinue={saveAndContinue}
        />
      )}
      {showComponent == "pricing" && (
        <Pricing
          setSaveAndContinue={setSaveAndContinue}
          saveAndContinue={saveAndContinue}
        />
      )}

      {showComponent == "description" && (
        <Description
          setSaveAndContinue={setSaveAndContinue}
          saveAndContinue={saveAndContinue}
        />
      )}

      {showComponent == "gallery" && (
        <Gallery
          setSaveAndContinue={setSaveAndContinue}
          saveAndContinue={saveAndContinue}
        />
      )}
    </div>
  );
};

export default PostNewGig;
