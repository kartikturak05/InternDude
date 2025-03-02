import React from 'react';

const SuccessStories = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Software Engineer",
      image: "4617491.png",
      text: "I got my dream job through InternDude. I am very thankful to the team for their support and guidance."
    },
    {
      name: "Jane Smith",
      role: "Product Designer",
      image: "4617491.png",
      text: "InternDude helped me land an amazing internship! The resume tips and guidance were extremely useful."
    },
    {
      name: "Rahul Kumar",
      role: "Data Analyst",
      image: "4617491.png",
      text: "I never thought I'd get an internship this fast! Thanks to InternDude for making this possible."
    }
  ];

  return (
    <div className="w-full mt-20 px-6">
      <div className="max-w-screen-xl mx-auto p-10  border-gray-400 rounded-xl shadow-lg">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-left text-gray-900 ">Real Stories, Real Success</h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" border-gray-400 p-5 rounded-xl shadow-xl">
              <div className="flex items-center  pt-5 pb-5">
                <img src={testimonial.image} alt={testimonial.name} className="w-15 h-15 rounded-full mr-3" />
                <div>
                  <div className="font-bold text-black text-lg">{testimonial.name}</div>
                  <div className="text-sm text-blue-700 font-semibold">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-1">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SuccessStories;
