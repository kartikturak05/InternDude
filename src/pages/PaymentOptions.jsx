import React, { useState } from 'react';
import { 
  Check, 
  CreditCard, 
  Building, 
  ArrowLeft, 
  HelpCircle, 
  Lock,
  Wallet
} from 'lucide-react';

import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";
import { SiAmericanexpress } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";

import Footer from '../components/Footer';

const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState('credit');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);
  const [showPromoField, setShowPromoField] = useState(false);
  const [promoCode, setPromoCode] = useState('');

  // Format card number with spaces every 4 digits
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setExpiryDate(value);
  };

  const handlePayment = () => {
    // In a real app, this would handle the payment processing
    console.log('Processing payment...');
    
  };

  return (
    <>
    <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto p-4 bg-gray-50 mt-10">
      {/* Left Panel - Plan Details */}
      <div className="rounded-lg shadow-sm w-full md:w-96 h-auto">
        <div className='bg-white pt-4 pb-4 pl-2 pr-2'>
        <div className="mb-6">
          <p className="text-gray-600 text-sm">Selected Plan</p>
          <h2 className="text-xl font-bold">Standard Plan</h2>
          <p className="text-blue-600 font-bold text-2xl mt-1">₹2,000 <span className="text-gray-500 text-sm font-normal">/post</span></p>
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-start">
            <Check className="text-blue-600 mt-1 mr-2 w-5 h-5" />
            <p>Access to top student freelancers</p>
          </div>
          <div className="flex items-start">
            <Check className="text-blue-600 mt-1 mr-2 w-5 h-5" />
            <p>15-day visibility</p>
          </div>
          <div className="flex items-start">
            <Check className="text-blue-600 mt-1 mr-2 w-5 h-5" />
            <p>Highlighted listing</p>
          </div>
          <div className="flex items-start">
            <Check className="text-blue-600 mt-1 mr-2 w-5 h-5" />
            <p>Up to 30 applications</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 text-sm">Project Title</p>
          <p className="font-semibold">Design a UI Kit for Our App</p>
        </div>

        <button 
          className="flex items-center text-blue-600 font-medium"
          onClick={() => console.log('Change plan clicked')}
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Change Plan
        </button>
        </div>
      </div>

      {/* Right Panel - Payment Details */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Secure Your Project Posting</h2>
        <p className="text-gray-600 mb-6">Choose your preferred payment method</p>

        {/* Payment Method Selection */}
        <div className="space-y-4 mb-6">
          <div 
            className={`border rounded-lg p-4 flex items-center cursor-pointer ${selectedPayment === 'credit' ? 'border-blue-500' : 'border-gray-200'}`}
            onClick={() => setSelectedPayment('credit')}
          >
            <input 
              type="radio" 
              name="payment" 
              checked={selectedPayment === 'credit'} 
              onChange={() => setSelectedPayment('credit')}
              className="mr-3"
            />
            <CreditCard className="text-gray-600 mr-3" />
            <span>Credit/Debit Card</span>
          </div>

          <div 
            className={`border rounded-lg p-4 flex items-center cursor-pointer ${selectedPayment === 'upi' ? 'border-blue-500' : 'border-gray-200'}`}
            onClick={() => setSelectedPayment('upi')}
          >
            <input 
              type="radio" 
              name="payment" 
              checked={selectedPayment === 'upi'} 
              onChange={() => setSelectedPayment('upi')}
              className="mr-3"
            />
            <div className="bg-gray-100 w-6 h-6 flex items-center justify-center rounded mr-3">
            <FaGooglePay />
            </div>
            <span>UPI</span>
          </div>

          <div 
            className={`border rounded-lg p-4 flex items-center cursor-pointer ${selectedPayment === 'netbanking' ? 'border-blue-500' : 'border-gray-200'}`}
            onClick={() => setSelectedPayment('netbanking')}
          >
            <input 
              type="radio" 
              name="payment" 
              checked={selectedPayment === 'netbanking'} 
              onChange={() => setSelectedPayment('netbanking')}
              className="mr-3"
            />
            <Building className="text-gray-600 mr-3" />
            <span>Net Banking</span>
          </div>

          <div 
            className={`border rounded-lg p-4 flex items-center cursor-pointer ${selectedPayment === 'wallets' ? 'border-blue-500' : 'border-gray-200'}`}
            onClick={() => setSelectedPayment('wallets')}
          >
            <input 
              type="radio" 
              name="payment" 
              checked={selectedPayment === 'wallets'} 
              onChange={() => setSelectedPayment('wallets')}
              className="mr-3"
            />
            <Wallet className="text-gray-600 mr-3" />
            <span>Wallets</span>
          </div>
        </div>

        {/* Credit Card Form (shown when credit card is selected) */}
        {selectedPayment === 'credit' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-gray-700 mb-2">Card Number</label>
              <div className="relative">
                <input 
                  type="text" 
                  id="cardNumber" 
                  value={cardNumber} 
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <div className="absolute right-3 top-2 flex items-center space-x-1">
                  <div><RiVisaLine size={25}/></div>
                  <div><SiMastercard size={25}/></div>
                  <div><SiAmericanexpress size={25}/></div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="nameOnCard" className="block text-gray-700 mb-2">Name on Card</label>
              <input 
                type="text" 
                id="nameOnCard" 
                value={cardName} 
                onChange={(e) => setCardName(e.target.value)}
                placeholder="John Smith"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="expiryDate" className="block text-gray-700 mb-2">Expiry Date</label>
                <input 
                  type="text" 
                  id="expiryDate" 
                  value={expiryDate} 
                  onChange={handleExpiryDateChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <label htmlFor="cvv" className="block text-gray-700">CVV</label>
                  <HelpCircle className="w-4 h-4 ml-1 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  id="cvv" 
                  value={cvv} 
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                  placeholder="123"
                  maxLength="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="saveCard" 
                checked={saveCard} 
                onChange={() => setSaveCard(!saveCard)}
                className="mr-2"
              />
              <label htmlFor="saveCard" className="text-gray-700">Save card for future payments</label>
            </div>
          </div>
        )}

        {/* Other Payment Methods Content */}
        {selectedPayment === 'upi' && (
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="text-center text-gray-600">Enter your UPI ID to proceed</p>
            <input 
              type="text" 
              placeholder="yourname@bank"
              className="w-full px-4 py-2 mt-3 border border-gray-300 rounded-lg"
            />
          </div>
        )}

        {selectedPayment === 'netbanking' && (
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="text-center text-gray-600">Select your bank</p>
            <select className="w-full px-4 py-2 mt-3 border border-gray-300 rounded-lg">
              <option>Select a bank</option>
              <option>State Bank of India</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
            </select>
          </div>
        )}

        {selectedPayment === 'wallets' && (
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="text-center text-gray-600">Select your wallet provider</p>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                Paytm
              </button>
              <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                PhonePe
              </button>
              <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                Amazon Pay
              </button>
              <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                Google Pay
              </button>
            </div>
          </div>
        )}

        {/* Promo Code */}
        {!showPromoField ? (
          <button 
            className="text-blue-600 font-medium mt-6 block"
            onClick={() => setShowPromoField(true)}
          >
            Have a promo code?
          </button>
        ) : (
          <div className="mt-6">
            <label htmlFor="promoCode" className="block text-gray-700 mb-2">Promo code</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                id="promoCode" 
                value={promoCode} 
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Apply
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 flex items-center text-green-600">
          <Lock className="w-4 h-4 mr-2" />
          <p className="text-sm">Your payment is encrypted and secure</p>
        </div>

        <div className="mt-6 flex items-center justify-center space-x-6">
          <div className="text-gray-400 text-5xl font-bold">S</div>
          <div className="text-gray-400 text-5xl">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8H21L16 13L18 20L12 16L6 20L8 13L3 8H9L12 2Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Pay Button */}
        <button 
          className="w-full py-3 mt-6 bg-blue-600 text-white font-medium rounded-lg"
          onClick={handlePayment}
        >
          Pay ₹2,000 and Post Project
        </button>

        <div className="mt-4 text-center">
          <a href="#" className="text-blue-600 text-sm">
            Facing issues? Contact Support
          </a>
        </div>

        {/* FAQ */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-1">Can I upgrade plan later?</h3>
            <p className="text-gray-600 text-sm">Yes, you can upgrade anytime</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">Is payment refundable?</h3>
            <p className="text-gray-600 text-sm">Terms and conditions apply</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PaymentOptions;