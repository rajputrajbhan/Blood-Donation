// src/pages/auth/DonorRegister.jsx
import { useState } from 'react';
import { sendOTP, resendOTP, registerDonor } from '../../api/services/authService';

import DonorPhoto from '../../assets/DonorPhoto/Blood-Donation-1.jpg'

// Indian states and cities data (partial, expandable)
const stateCityData = {
  'Andhra Pradesh': ['Amaravati', 'Visakhapatnam', 'Vijayawada', 'Guntur'],
  Assam: ['Dispur', 'Guwahati', 'Silchar', 'Dibrugarh'],
  Bihar: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur'],
  Gujarat: ['Gandhinagar', 'Ahmedabad', 'Surat', 'Vadodara'],
  Karnataka: ['Bengaluru', 'Mysore', 'Mangalore', 'Hubli'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
  // Add more states and cities as needed
};

const DonorRegister = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    age: '',
    weight: '',
    gender: '',
    bloodGroup: '',
    address: { state: '', city: '', street: '', zipCode: '' },
    medicalHistory: '',
    role: 'Donor',
    otp: '',
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpResend, setResendOTP] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['state', 'city', 'street', 'zipCode'].includes(name)) {
      setForm((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value },
        // Reset city when state changes
        ...(name === 'state' && { address: { ...prev.address, state: value, city: '' } }),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleOTP = async () => {
    try {
      await sendOTP(form.email);
      alert('OTP sent to email');
      setOtpSent(true);
    } catch (err) {
      alert(err.response?.data?.message || 'Error sending OTP');
    }
  };

  const handleResendOTP = async () => {
    try { 
      await resendOTP(form.email);
      alert('OTP resent to email');
      setResendOTP(true);
    } catch (err) {
      alert(err.response?.data?.message || 'Error resending OTP');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await registerDonor(form);
      alert(data.message);
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen overflow-y-auto flex bg-gray-100">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 overflow-y-auto max-h-screen">
        <div className="bg-white p-8 mt-96 rounded-lg  shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">Blood Donor Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="age"
                placeholder="Age"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="number"
                name="weight"
                placeholder="Weight (kg)"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <select
              name="gender"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <select
              name="bloodGroup"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select Blood Group</option>
              <option>A+</option>
              <option>B+</option>
              <option>O+</option>
              <option>AB+</option>
              <option>A-</option>
              <option>B-</option>
              <option>O-</option>
              <option>AB-</option>
            </select>
            <input
              type="text"
              name="medicalHistory"
              placeholder="Medical History (if any)"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <select
              name="state"
              onChange={handleChange}
              value={form.address.state}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select State</option>
              {Object.keys(stateCityData).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <select
              name="city"
              onChange={handleChange}
              value={form.address.city}
              required
              disabled={!form.address.state}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
            >
              <option value="">Select City</option>
              {form.address.state &&
                stateCityData[form.address.state].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              name="zipCode"
              placeholder="ZIP Code"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {!otpSent ? (
              <button
                type="button"
                onClick={handleOTP}
                className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-300"
              >
                Send OTP
              </button>
            ) : (
              <>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <>
                  <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Register
                </button>

                <button
                  type="button"
                  onClick={handleResendOTP}
                  className="w-full bg-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-400 transition duration-300 mt-2"
                >
                  Resend OTP
                </button>
                </>
              </>
            )}
            <p className="text-center mt-4 text-gray-600">
              Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
            </p>
          </form>
        </div>
      </div>
      {/* Image Section */}
      <div className="hidden lg:flex w-full lg:w-1/2 pt-10 pr-6 pb-24 ">
        <img
          src={DonorPhoto}
          alt="Blood Donation"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default DonorRegister;