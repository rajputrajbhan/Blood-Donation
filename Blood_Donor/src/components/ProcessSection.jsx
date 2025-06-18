import React from 'react';
import {
  ClipboardDocumentIcon,
  HeartIcon,
  HandThumbUpIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const ProcessSection = () => {
  const steps = [
    {
      title: '1. Register',
      description: 'Sign up online or at a donation center.',
      icon: ClipboardDocumentIcon,
      color: 'bg-blue-500',
    },
    {
      title: '2. Health Check',
      description: 'Undergo a quick health screening.',
      icon: HeartIcon,
      color: 'bg-green-500',
    },
    {
      title: '3. Donate',
      description: 'The donation takes 10–15 minutes.',
      icon: HandThumbUpIcon,
      color: 'bg-red-500',
    },
    {
      title: '4. Recover',
      description: 'Rest with refreshments.',
      icon: SparklesIcon,
      color: 'bg-purple-500',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Donating blood is a simple and rewarding process. Here's what you can expect.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2" />

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative"
                  style={{
                    opacity: 0,
                    animation: `fadeIn 0.8s ease-out forwards ${index * 200}ms`,
                  }}
                >
                  {/* Step Number Circle */}
                  <div className={`w-16 h-16 mx-auto ${step.color} rounded-full flex items-center justify-center text-white mb-6 relative z-10 shadow-lg`}>
                    <step.icon className="w-8 h-8" />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 hover-scale shadow-hover animate-fade-in">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Before Donation
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Get adequate sleep</li>
                <li>• Eat a healthy meal</li>
                <li>• Drink plenty of water</li>
                <li>• Bring valid ID</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover-scale shadow-hover animate-fade-in-delay-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                During Donation
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Relax and stay calm</li>
                <li>• Communicate with staff</li>
                <li>• Follow instructions</li>
                <li>• Duration: 10-15 minutes</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover-scale shadow-hover animate-fade-in-delay-2">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                After Donation
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Rest for 10-15 minutes</li>
                <li>• Have refreshments</li>
                <li>• Avoid heavy lifting</li>
                <li>• Stay hydrated</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-full text-white bg-red-600 hover:bg-red-700 transition-colors duration-300">
              Schedule Your Donation
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

export default ProcessSection; 