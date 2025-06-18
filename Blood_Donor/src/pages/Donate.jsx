import React, { useState } from 'react';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);

  const predefinedAmounts = [
    { value: 100, label: '₹100' },
    { value: 500, label: '₹500' },
    { value: 1000, label: '₹1,000' },
    { value: 5000, label: '₹5,000' },
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setDonationAmount(amount.toString());
  };

  const handleCustomAmount = (e) => {
    setSelectedAmount(null);
    setDonationAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here we'll add Paytm payment integration
    try {
      // This is where we'll make the API call to your backend to initiate Paytm payment
      const response = await fetch('/api/initiate-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: donationAmount,
          name,
          email,
          phone,
        }),
      });
      
      // Handle the response from your backend
      const data = await response.json();
      // Redirect to Paytm payment page or handle the payment flow
    } catch (error) {
      console.error('Payment initiation failed:', error);
    }
  };

  return (
    <div className="pt-3 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h1>
            <p className="text-xl text-gray-600">
              Your contribution helps us save more lives through blood donation initiatives
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Predefined Amounts */}
              <div>
                <label className="block text-gray-700 font-medium mb-3">
                  Select Amount
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount.value}
                      type="button"
                      className={`py-3 px-4 rounded-lg border-2 transition-all duration-300 ${
                        selectedAmount === amount.value
                          ? 'border-red-600 bg-red-50 text-red-600'
                          : 'border-gray-200 hover:border-red-600 hover:bg-red-50'
                      }`}
                      onClick={() => handleAmountSelect(amount.value)}
                    >
                      {amount.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={handleCustomAmount}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Enter amount"
                    min="1"
                  />
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Payment Button */}
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Proceed to Pay</span>
                <img
                  src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg"
                  alt="Paytm"
                  className="h-5"
                />
              </button>
            </form>

            {/* Security Notice */}
            <div className="mt-6 text-center text-gray-600 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure payment powered by Paytm</span>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <svg className="w-8 h-8 text-red-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-lg font-semibold mb-2">Secure</h3>
              <p className="text-gray-600">Your payment is protected with industry-standard encryption</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <svg className="w-8 h-8 text-red-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-lg font-semibold mb-2">Tax Benefits</h3>
              <p className="text-gray-600">Get tax exemption receipt for your donation</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <svg className="w-8 h-8 text-red-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-lg font-semibold mb-2">Instant</h3>
              <p className="text-gray-600">Your donation is processed immediately</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate; 