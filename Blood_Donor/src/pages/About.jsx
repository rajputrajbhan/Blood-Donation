import React from 'react';

const About = () => {
  return (
    <div className="pt-3 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Blood Donation Network, our mission is to ensure that everyone who needs blood has access to it. 
              We work tirelessly to connect donors with those in need, making the process of blood donation as 
              simple and efficient as possible.
            </p>
            <p className="text-gray-600">
              We believe that every drop of blood donated has the power to save lives, and we're committed to 
              building a community of regular donors who share our vision of a world where no one dies due to 
              lack of blood.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Organize blood donation camps
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Connect donors with recipients
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Raise awareness about blood donation
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Maintain blood bank directory
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Impact</h2>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">50,000+</div>
                  <div className="text-gray-600">Lives Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
                  <div className="text-gray-600">Blood Donation Camps</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">15,000+</div>
                  <div className="text-gray-600">Regular Donors</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for volunteers, donors, and partners who share our passion for saving lives. 
              Whether you want to donate blood, organize a blood donation camp, or support our mission in other 
              ways, we'd love to hear from you.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors duration-300">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 