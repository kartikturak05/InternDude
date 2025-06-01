import React from 'react';
import { X, Check, Zap } from 'lucide-react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function BoostApplicationDialog() {
    const navigate = useNavigate();
  return (
    <>
    <div className=" inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center  pt-20 pb-20">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">Your Application</span>
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <Zap className="w-3 h-3" />
                BOOSTED
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Boost your application
          </h2>
          
          <p className="text-blue-600 font-semibold mb-6">
            5x your chances of getting hired
          </p>

          {/* Features */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-gray-700">Boost unlimited relevant applications*</span>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-gray-700">Your applications highlighted on top</span>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-gray-700">500% higher chances of getting a response</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-orange-50 rounded-lg p-4 mb-6">
            <div className="text-orange-600 font-semibold text-sm mb-2">
              Limited Time Offer
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-orange-600">₹99</span>
              <span className="text-sm text-gray-600">only</span>
              <span className="text-gray-400 line-through">₹1499</span>
            </div>
            <div className="text-orange-600 font-semibold text-sm">
              Save ₹1400
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
          onClick={()=> navigate("/BoostApplication/PaymentsOptions")}
          >
            Boost Now
          </button>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 mt-4 text-center leading-relaxed">
            *Applications that are irrelevant for the job profile may not be boosted
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}