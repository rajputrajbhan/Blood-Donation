import React from 'react';
import { HeartIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';

const WhyDonateSection = () => {
  const cards = [
    {
      title: 'Save Lives',
      description: 'Each donation can help patients in critical conditions.',
      buttonText: 'Learn More',
      buttonColor: '#dc2626',
      icon: HeartIcon,
      delay: 0,
    },
    {
      title: 'Community Impact',
      description: 'Your contribution strengthens the community.',
      buttonText: 'Get Involved',
      buttonColor: '#14b8a6',
      icon: UserGroupIcon,
      delay: 200,
    },
    {
      title: 'Health Benefits',
      description: 'Donating can improve your health.',
      buttonText: 'Read More',
      buttonColor: '#dc2626',
      icon: SparklesIcon,
      delay: 400,
    },
  ];

  return (
    <section id="why-donate" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Donate Blood?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how your blood donation can make a significant impact on your community and your own health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="bg-white rounded-xl shadow-lg p-8 hover-scale shadow-hover"
              style={{
                opacity: 0,
                animation: `fadeIn 0.8s ease-out forwards ${card.delay}ms`,
              }}
            >
              <card.icon className="w-12 h-12 text-red-600 mb-6" />
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {card.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {card.description}
              </p>
              
              <button
                className="inline-flex items-center text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: card.buttonColor }}
              >
                {card.buttonText}
                <svg
                  className="w-4 h-4 ml-2"
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
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 hover-scale shadow-hover animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Physical Benefits
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Free health screening
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Reduced risk of heart disease
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Burns calories
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover-scale shadow-hover animate-fade-in-delay-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Emotional Benefits
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Sense of contribution
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Community connection
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Personal satisfaction
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDonateSection; 