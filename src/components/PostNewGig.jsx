import React, { useState } from "react";
import { PiGreaterThanBold } from "react-icons/pi";

const PostNewGig = () => {
  const [overview, setOverview] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  // Categories and Subcategories
  const categories = {
    "Web Development": ["Frontend", "Backend", "Full Stack", "DevOps"],
    "Mobile Development": ["Android", "iOS", "Flutter", "React Native"],
    "Data Science": ["Machine Learning", "AI", "Big Data", "Deep Learning"],
    "Cyber Security": ["Network Security", "Ethical Hacking", "Penetration Testing"],
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-4xl text-gray-800 font-bold mt-10">Post Your Gig</div>

      {/* Progress Steps */}
      <div className="flex items-center justify-around mt-5 w-auto border border-gray-800 rounded-lg pt-3 pb-3 px-6">
        <div className={`text-lg ${overview ? "text-gray-900" : "text-gray-500"} font-semibold ml-5 mr-5`}>
          Overview
        </div>
        <PiGreaterThanBold />
        <div className="text-lg text-gray-500 font-semibold ml-5 mr-5">Pricing</div>
        <PiGreaterThanBold />
        <div className="text-lg text-gray-500 font-semibold ml-5 mr-5">Description</div>
        <PiGreaterThanBold />
        <div className="text-lg text-gray-500 font-semibold ml-5 mr-5">Gallery</div>
        <PiGreaterThanBold />
      </div>

      {/* Form */}
      <div className="flex flex-col items-center justify-center border-2 border-gray-400 p-6 rounded-lg mt-5 w-96">
        {/* Gig Title */}
        <div>
          <label htmlFor="Title">Gig Title <br /></label>
          <input
            type="text"
            id="Title"
            placeholder="Website Design"
            className="pt-2 pb-2 pr-34 pl-2 border border-gray-500 rounded-lg w-full mt-2"
          />
        </div>

        {/* Category Selection */}
        <div className="mt-4 w-full">
          <label htmlFor="category">Category <br /></label>
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
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Subcategory Selection (Dynamic) */}
        <div className="mt-4 w-full">
          <label htmlFor="subcategory">Sub Category <br /></label>
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
                <option key={subCategory} value={subCategory}>{subCategory}</option>
              ))}
          </select>
        </div>

        {/* Git Tags */}
        <div className="mt-4 w-full">
          <label htmlFor="GitTags">Git Tags <br /></label>
          <input
            type="text"
            id="GitTags"
            placeholder="Website Design"
            className="pt-2 pb-2 pr-10 pl-2 border border-gray-500 rounded-lg w-full mt-2"
          />
        </div>

        {/* Save & Continue */}
        <div className="bg-green-700 text-white pt-2 pb-2 pl-5 pr-5 rounded-lg mt-5 cursor-pointer">
          Save & Continue
        </div>
      </div>
    </div>
  );
};

export default PostNewGig;
