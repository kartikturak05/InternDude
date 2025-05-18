import React from "react";

const ReviewsAndRatings = () => {
  return (
    <div className="flex flex-col justify-between items-center mt-20 mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
        Why 400,000+ Users Trust Intern Dude?
      </h2>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center mt-10 gap-y-8 sm:gap-y-0 sm:space-x-10 w-full">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-blue-600">10,000+</div>
          <div className="text-gray-700 mt-2 text-center">
            Active Job Listings
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-blue-600">400,000+</div>
          <div className="text-gray-700 mt-2 text-center">
            Successful Placements
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-blue-600">100+</div>
          <div className="text-gray-700 mt-2 text-center">
            Verified Companies
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-blue-600">4.9/5</div>
          <div className="text-gray-700 mt-2 text-center">User Rating</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndRatings;
