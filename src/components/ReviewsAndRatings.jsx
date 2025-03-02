import React from 'react';

const ReviewsAndRatings = () => {
  return (
    <div className="flex flex-col justify-between items-center mt-20  mx-auto">
      <h2 className="text-4xl font-bold text-gray-900">Why 400,000+ Users Trust Intern Dude?</h2>

      <div className="flex justify-around items-center mt-10 space-x-10 w-full">
        <div className="flex flex-col items-center ">
          <div className="text-3xl font-bold text-blue-600">10,000+</div>
          <div className="text-gray-700 mt-2">Active Job Listings</div>
        </div>
        <div className="flex flex-col items-center ml-40">
          <div className="text-3xl font-bold text-blue-600">4000,000+</div>
          <div className="text-gray-700 mt-2">Successful Placements</div>
        </div>
        <div className="flex flex-col items-center ml-40">
          <div className="text-3xl font-bold text-blue-600">100+</div>
          <div className="text-gray-700 mt-2">Verified Companies</div>
        </div>
        <div className="flex flex-col items-center ml-40">
          <div className="text-3xl font-bold text-blue-600">4.9/5</div>
          <div className="text-gray-700 mt-2">User Rating</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndRatings;
