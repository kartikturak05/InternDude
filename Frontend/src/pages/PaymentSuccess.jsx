import React from 'react';
import { 
  FiCheck, 
  FiEye, 
  FiEdit2, 
  FiUser, 
  FiCopy, 
  FiMessageSquare,
  FiFileText
} from 'react-icons/fi';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Footer from '../components/Footer';

const PaymentSuccess = () => {
  return (
    <>
    <div className="max-w-6xl mx-auto p-6 flex flex-col items-center">
      {/* Success Header */}
      <div className="bg-green-500 p-4 rounded-full mb-4">
        <FiCheck className="text-white text-2xl" />
      </div>
      <h1 className="text-2xl font-bold mb-1">Payment Successful!</h1>
      <p className="text-gray-600 mb-4">Your Freelance Project has been posted successfully.</p>
      
      {/* Payment Confirmed Badge */}
      <div className="bg-green-50 text-green-600 px-4 py-2 rounded-full flex items-center mb-8">
        <FiCheck className="mr-2" />
        <span>Payment Confirmed</span>
      </div>

      {/* Project Details Card */}
      <div className="w-full border border-gray-200 rounded-lg p-6 mb-8">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-xl font-medium">Design a UI Kit for Our App</h2>
            
            <div className="mt-4">
              <p className="text-sm text-gray-500">Selected Plan</p>
              <p className="font-medium">Standard Package</p>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500">Amount Paid</p>
              <p className="text-2xl font-bold">₹2,000</p>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500">Validity</p>
              <p className="font-medium">Visible for 15 days</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="mb-4">
              <p className="text-sm text-gray-500">Project ID</p>
              <div className="flex items-center">
                <p className="font-medium">#PRJ12345</p>
                <button className="ml-2 text-gray-500">
                  <FiCopy size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full flex items-center justify-center mt-2 mb-2">
              <FiEye className="mr-2" /> View Public Listing
            </button>
            
            <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md w-full flex items-center justify-center">
              <FiFileText className="mr-2" /> Download Invoice
            </button>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
        {/* View Project Card */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="bg-blue-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
            <FiEye className="text-blue-500" />
          </div>
          <h3 className="font-medium mb-2">View Project Listing</h3>
          <p className="text-gray-600 text-sm mb-4">Check how your project appears to freelancers</p>
          <a href="#" className="text-blue-500 flex items-center">
            <span className="mr-1">→</span>
          </a>
        </div>

        {/* Edit Project Card */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="bg-blue-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
            <FiEdit2 className="text-blue-500" />
          </div>
          <h3 className="font-medium mb-2">Edit Project Details</h3>
          <p className="text-gray-600 text-sm mb-4">Make changes to your project requirements</p>
          <a href="#" className="text-blue-500 flex items-center">
            <span className="mr-1">→</span>
          </a>
        </div>

        {/* Track Applications Card */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="bg-blue-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
            <FiUser className="text-blue-500" />
          </div>
          <h3 className="font-medium mb-2">Track Applications</h3>
          <p className="text-gray-600 text-sm mb-4">Review and manage incoming proposals</p>
          <a href="#" className="text-blue-500 flex items-center">
            <span className="mr-1">→</span>
          </a>
        </div>
      </div>

      {/* Pro Tip Section */}
      <div className="bg-blue-50 p-6 rounded-lg w-full mb-8">
        <div className="flex items-start">
          <div className="bg-blue-500 rounded-full p-1 mr-3">
            <FiCheck className="text-white" />
          </div>
          <div>
            <h3 className="font-medium mb-2">Pro Tip</h3>
            <p className="text-gray-600 mb-4">Share your project link with your network for quicker responses.</p>
            
            <div className="flex flex-wrap gap-2">
              <button className="bg-gray-200 text-gray-800 px-3 py-2 rounded-md flex items-center">
                <FiCopy className="mr-2" /> Copy Link
              </button>
              <button className="bg-blue-600 text-white px-3 py-2 rounded-md flex items-center">
                <FaLinkedin className="mr-2" /> Share on LinkedIn
              </button>
              <button className="bg-blue-400 text-white px-3 py-2 rounded-md flex items-center">
                <FaTwitter className="mr-2" /> Share on Twitter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="text-center mb-4">
        <p className="text-gray-600">
          Need help? Reach out to our team at{" "}
          <a href="mailto:support@interndude.com" className="text-blue-500">
            support@interndude.com
          </a>
        </p>
      </div>

      {/* Talk to Support Button */}
      <button className="bg-blue-500 text-white px-6 py-3 rounded-md flex items-center justify-center">
        <FiMessageSquare className="mr-2" /> Talk to Support
      </button>
    </div>
    <Footer/>
    </>
  );
};

export default PaymentSuccess;