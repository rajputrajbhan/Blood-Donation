import React from 'react';
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const EligibilitySection = () => {
  const criteria = [
    {
      title: 'Age: 17–65 years old',
      description: 'You must be within this age range to donate blood.',
      icon: CheckCircleIcon,
    },
    {
      title: 'Weight: At least 50kg',
      description: 'A minimum weight requirement ensures your safety during donation.',
      icon: CheckCircleIcon,
    },
    {
      title: 'Health: Good general health',
      description: 'Free from infections and certain medical conditions.',
      icon: CheckCircleIcon,
    },
    {
      title: 'Frequency: 56 days between donations',
      description: 'This interval allows your body to replenish red blood cells.',
      icon: CheckCircleIcon,
    },
  ];

  const additionalInfo = [
    'No recent tattoos or piercings (within last 3 months)',
    'No current medications that thin your blood',
    'No recent international travel to certain regions',
    'Adequate hemoglobin levels',
  ];

  return (
    <section id="eligibility" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Are You Eligible?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              To donate blood, you should meet these basic requirements. Our team will conduct a thorough screening to ensure your safety.
            </p>
          </div>

          {/* Main Criteria */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {criteria.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-lg p-6 hover-scale shadow-hover"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.8s ease-out forwards ${index * 200}ms`,
                }}
              >
                <div className="flex items-start space-x-4">
                  <item.icon className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
            <div className="flex items-start space-x-4 mb-6">
              <InformationCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-gray-900">
                Additional Considerations
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-600"
                >
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{info}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-full text-white bg-red-600 hover:bg-red-700 transition-colors duration-300">
              Check Full Eligibility
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection; 