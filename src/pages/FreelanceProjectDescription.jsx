import React from 'react';
import { Star, MapPin, Clock, Check, ChevronRight, MessageCircle, X } from 'lucide-react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const FreelanceProjectDescription = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className="bg-white rounded-lg shadow-lg max-w-7xl mx-auto mt-5">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Logo Design for Tech Startup</h1>
          <div className="text-md text-gray-500 flex items-center mt-1">
            <span>Design</span>
            <span className="mx-2">→</span>
            <span>Logo & Branding</span>
          </div>
        </div>
        <button className="text-gray-500">
          <X size={30} />
        </button>
      </div>

      {/* Tags */}
      <div className="px-6 py-3 border-b border-gray-200 flex gap-3">
        <span className="px-3 py-1 text-md text-gray-600 bg-gray-100 rounded-full">UI/UX</span>
        <span className="px-3 py-1 text-md text-gray-600 bg-gray-100 rounded-full">Photoshop</span>
        <span className="px-3 py-1 text-md text-gray-600 bg-gray-100 rounded-full">Branding</span>
      </div>

      {/* Freelancer Info */}
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            <img 
              src="https://plus.unsplash.com/premium_photo-1740097670023-338a3d290b4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Freelancer" 
              className="rounded-full w-14 h-14"
            />
          </div>
          <div>
            <h2 className="font-semibold text-xl">Alex Thompson</h2>
            <div className="flex items-center text-md">
              <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
              <span className="ml-1 text-gray-700">4.8/5.0 (847 reviews)</span>
            </div>
            <div className="flex items-center text-md text-gray-500 mt-1">
              <MapPin className="w-4 h-4 mr-1" /> 
              <span>Based in New York</span>
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-1" />
              <span>Typically replies within 2 hours</span>
            </div>
          </div>
        </div>
        <a href="#" className="text-blue-600 text-md font-semibold cursor-pointer"
        onClick={()=> navigate("/employer/ViewApplicantsProfile")}
        >View Full Profile</a>
      </div>

      {/* Pricing Plans */}
      <div className="p-6 grid grid-cols-3 gap-6">
        {/* Basic Plan */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Basic Plan</h3>
          <p className="text-2xl font-bold mb-4">₹1000</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span>2 Logo Concepts</span>
            </li>
            <li className="flex items-center">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span>2 Revisions</span>
            </li>
            <li className="flex items-center">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span>Source Files</span>
            </li>
            <li className="flex items-center">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span>No Commercial Rights</span>
            </li>
            <li className="flex items-center text-gray-500 mt-4">
              <Clock className="w-5 h-5 mr-2" />
              <span>Delivery in 3 days</span>
            </li>
          </ul>
          <button className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-medium">
            Select Plan
          </button>
        </div>

        {/* Standard Plan */}
        <div className="border-2 border-blue-500 rounded-lg p-4 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Popular</span>
          </div>
          <h3 className="font-bold text-lg mb-2">Standard Plan</h3>
          <p className="text-2xl font-bold mb-4">₹2000</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span>4 Logo Concepts</span>
            </li>
            <li className="flex items-center">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span>4 Revisions</span>
            </li>
            <li className="flex items-center">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span>Source Files</span>
            </li>
            <li className="flex items-center">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span>Commercial Rights</span>
            </li>
            <li className="flex items-center text-gray-500 mt-4">
              <Clock className="w-5 h-5 mr-2" />
              <span>Delivery in 5 days</span>
            </li>
          </ul>
          <button className="w-full py-2 bg-blue-500 rounded-lg text-white font-medium">
            Select Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Premium Plan</h3>
          <p className="text-2xl font-bold mb-4">₹3000</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span>8 Logo Concepts</span>
            </li>
            <li className="flex items-center">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span>Unlimited Revisions</span>
            </li>
            <li className="flex items-center">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span>Source Files</span>
            </li>
            <li className="flex items-center">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span>Commercial Rights</span>
            </li>
            <li className="flex items-center">
              <Check className="text-green-500 w-5 h-5 mr-2" />
              <span>Priority Support</span>
            </li>
            <li className="flex items-center text-gray-500 mt-4">
              <Clock className="w-5 h-5 mr-2" />
              <span>Delivery in 7 days</span>
            </li>
          </ul>
          <button className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-medium">
            Select Plan
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="p-6 border-t border-gray-200">
        <h3 className="font-bold text-2xl mb-4">Description</h3>
        <p className="text-gray-700 mb-4">
          I will create a professional, high-quality custom logo design tailored to your brand's needs. With years of experience in
          branding and logo design, I ensure your logo will stand out and perfectly represent your business.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Check className="text-green-500 w-5 h-5 mr-2" />
            <span>Professional and unique logo design</span>
          </li>
          <li className="flex items-center">
            <Check className="text-green-500 w-5 h-5 mr-2" />
            <span>Multiple file formats (AI, EPS, PDF, PNG, JPG)</span>
          </li>
          <li className="flex items-center">
            <Check className="text-green-500 w-5 h-5 mr-2" />
            <span>Color variations included</span>
          </li>
        </ul>
      </div>

      {/* Recent Work */}
      <div className="p-6 border-t border-gray-200">
        <h3 className="font-bold text-2xl mb-4">Recent Work</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work sample" className="rounded-lg w-full h-40 object-cover" />
          <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work sample" className="rounded-lg w-full h-40 object-cover" />
          <img src="https://images.unsplash.com/photo-1572985919466-6d00864965c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work sample" className="rounded-lg w-full h-40 object-cover" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work sample" className="rounded-lg w-full h-40 object-cover" />
          <img src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work sample" className="rounded-lg w-full h-40 object-cover" />
          <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work sample" className="rounded-lg w-full h-40 object-cover" />
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-200 flex justify-between items-center">
        <div className="flex items-center text-gray-600">
          <button className="flex items-center">
            <span>Compare Plans</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center">
          <Clock className="w-5 h-5 mr-2 text-gray-600" />
          <span className="text-gray-600">Average delivery time: 3-5 days</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 border-t border-gray-200 flex justify-between">
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg">
          <MessageCircle className="w-5 h-5 mr-2" />
          <span>Chat with Freelancer</span>
        </button>
        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FreelanceProjectDescription;