import React, { useState } from "react";
import {
  Check,
  CreditCard,
  Building,
  ArrowLeft,
  HelpCircle,
  Lock,
  Wallet,
  Zap,
  Star,
} from "lucide-react";

const BoostApplicationPayment = () => {
  const [selectedPayment, setSelectedPayment] = useState("upi");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [showPromoField, setShowPromoField] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [upiId, setUpiId] = useState("");

  // Format card number with spaces every 4 digits
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setExpiryDate(value);
  };

  const handlePayment = () => {
    console.log("Processing boost payment...");
    // Navigate to success page or show success message
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Left Panel - Boost Details */}
      <div className="rounded-lg shadow-sm w-full lg:w-96 h-fit">
        <div className="bg-white p-6 rounded-lg">
          {/* Boost Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Zap className="w-3 h-3" />
              BOOST
            </div>
            <span className="text-orange-600 text-sm font-medium">
              Limited Time Offer
            </span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Boost Your Application
            </h2>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-orange-600">₹99</span>
              <span className="text-sm text-gray-600">only</span>
              <span className="text-gray-400 line-through text-lg">₹1,499</span>
            </div>
            <p className="text-orange-600 font-semibold text-sm">Save ₹1,400</p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-3">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-gray-700">
                Boost unlimited relevant applications
              </p>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-3">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-gray-700">
                Your applications highlighted on top
              </p>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-3">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-gray-700">
                500% higher chances of getting a response
              </p>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-3">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-gray-700">5x your chances of getting hired</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-blue-800">
                Why Boost Works
              </span>
            </div>
            <p className="text-blue-700 text-sm">
              Employers see boosted applications first, increasing your
              visibility and response rate significantly.
            </p>
          </div>

          <button
            className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            onClick={() => console.log("Go back clicked")}
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Go Back
          </button>
        </div>
      </div>

      {/* Right Panel - Payment Details */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Secure Payment</h2>
        <p className="text-gray-600 mb-6">
          Choose your preferred payment method to boost your application
        </p>

        {/* Payment Method Selection */}
        <div className="space-y-4 mb-6">
          {/* <div
            className={`border rounded-lg p-4 flex items-center cursor-pointer transition-colors ${
              selectedPayment === "credit"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setSelectedPayment("credit")}
          >
            <input
              type="radio"
              name="payment"
              checked={selectedPayment === "credit"}
              onChange={() => setSelectedPayment("credit")}
              className="mr-3"
            />
            <CreditCard className="text-gray-600 mr-3 w-5 h-5" />
            <span>Credit/Debit Card</span>
          </div> */}

          <div
            className={`border rounded-lg p-4 flex items-center cursor-pointer transition-colors ${
              selectedPayment === "upi"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setSelectedPayment("upi")}
          >
            <input
              type="radio"
              name="payment"
              checked={selectedPayment === "upi"}
              onChange={() => setSelectedPayment("upi")}
              className="mr-3"
            />
            <div className="bg-gradient-to-r from-green-400 to-blue-500 w-6 h-6 flex items-center justify-center rounded mr-3">
              <span className="text-white text-xs font-bold">₹</span>
            </div>
            <span>UPI</span>
          </div>

          {/* <div
            className={`border rounded-lg p-4 flex items-center cursor-pointer transition-colors ${
              selectedPayment === "netbanking"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setSelectedPayment("netbanking")}
          >
            <input
              type="radio"
              name="payment"
              checked={selectedPayment === "netbanking"}
              onChange={() => setSelectedPayment("netbanking")}
              className="mr-3"
            />
            <Building className="text-gray-600 mr-3 w-5 h-5" />
            <span>Net Banking</span>
          </div> */}

          <div
            className={`border rounded-lg p-4 flex items-center cursor-pointer transition-colors ${
              selectedPayment === "wallets"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setSelectedPayment("wallets")}
          >
            <input
              type="radio"
              name="payment"
              checked={selectedPayment === "wallets"}
              onChange={() => setSelectedPayment("wallets")}
              className="mr-3"
            />
            <Wallet className="text-gray-600 mr-3 w-5 h-5" />
            <span>Digital Wallets</span>
          </div>
        </div>

        {/* Credit Card Form */}
        {selectedPayment === "credit" && (
          <div className="space-y-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-gray-700 mb-2 font-medium"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="nameOnCard"
                className="block text-gray-700 mb-2 font-medium"
              >
                Name on Card
              </label>
              <input
                type="text"
                id="nameOnCard"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="John Smith"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="expiryDate"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <label
                    htmlFor="cvv"
                    className="block text-gray-700 font-medium"
                  >
                    CVV
                  </label>
                  <HelpCircle className="w-4 h-4 ml-1 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) =>
                    setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))
                  }
                  placeholder="123"
                  maxLength="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="saveCard"
                checked={saveCard}
                onChange={() => setSaveCard(!saveCard)}
                className="mr-2 rounded"
              />
              <label htmlFor="saveCard" className="text-gray-700">
                Save card for future payments
              </label>
            </div>
          </div>
        )}

        {/* UPI Form */}
        {selectedPayment === "upi" && (
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <label
              htmlFor="upiId"
              className="block text-gray-700 mb-2 font-medium"
            >
              UPI ID
            </label>
            <input
              type="text"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="yourname@paytm"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-sm text-gray-600 mt-2">
              Enter your UPI ID to proceed with payment
            </p>
          </div>
        )}

        {/* Net Banking */}
        {selectedPayment === "netbanking" && (
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <label
              htmlFor="bankSelect"
              className="block text-gray-700 mb-2 font-medium"
            >
              Select Bank
            </label>
            <select
              id="bankSelect"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>Choose your bank</option>
              <option>State Bank of India</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
              <option>Punjab National Bank</option>
              <option>Bank of Baroda</option>
            </select>
          </div>
        )}

        {/* Digital Wallets */}
        {selectedPayment === "wallets" && (
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <p className="text-gray-700 mb-3 font-medium">
              Select your wallet provider
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-white hover:border-blue-500 transition-colors text-center">
                <div className="font-medium">Paytm</div>
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-white hover:border-blue-500 transition-colors text-center">
                <div className="font-medium">PhonePe</div>
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-white hover:border-blue-500 transition-colors text-center">
                <div className="font-medium">Amazon Pay</div>
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-white hover:border-blue-500 transition-colors text-center">
                <div className="font-medium">Google Pay</div>
              </button>
            </div>
          </div>
        )}

        {/* Promo Code */}
        {!showPromoField ? (
          <button
            className="text-blue-600 font-medium mt-6 block hover:text-blue-700 transition-colors"
            onClick={() => setShowPromoField(true)}
          >
            Have a promo code? Click here
          </button>
        ) : (
          <div className="mt-6">
            <label
              htmlFor="promoCode"
              className="block text-gray-700 mb-2 font-medium"
            >
              Promo Code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="promoCode"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Apply
              </button>
            </div>
          </div>
        )}

        {/* Security Info */}
        <div className="mt-6 flex items-center text-green-600 bg-green-50 p-3 rounded-lg">
          <Lock className="w-5 h-5 mr-2" />
          <p className="text-sm font-medium">
            Your payment is encrypted and secure with 256-bit SSL
          </p>
        </div>

        {/* Pay Button */}
        <button
          className="w-full py-4 mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          onClick={handlePayment}
        >
          <Zap className="w-5 h-5" />
          Pay ₹99 and Boost Application
        </button>

        {/* Support Link */}
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-blue-600 text-sm hover:text-blue-700 transition-colors"
          >
            Need help? Contact Support
          </a>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-yellow-800" />
            </div>
            <span className="font-semibold text-yellow-800">
              30-Day Money Back Guarantee
            </span>
          </div>
          <p className="text-yellow-700 text-sm">
            If you don't see improved response rates, we'll refund your money.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2 text-gray-800">
              How does boost work?
            </h3>
            <p className="text-gray-600 text-sm">
              Your applications appear at the top of employer's candidate list
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-gray-800">
              Is this a one-time payment?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes, pay once and boost unlimited applications
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-gray-800">
              When will boost activate?
            </h3>
            <p className="text-gray-600 text-sm">
              Immediately after successful payment
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-gray-800">
              Can I cancel anytime?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes, with our 30-day money back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoostApplicationPayment;
