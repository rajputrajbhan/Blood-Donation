import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen  relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-float">
            Be a Lifesaver: Donate Blood
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 opacity-90">
            Your single donation can save up to three lives. Join our mission today!
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to="/auth/register-donor"
              className="inline-block px-8 py-3 bg-white text-red-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              I Am Donor
            </Link>
            
            <a
              href="#why-donate"
              className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-white mb-2">3+</div>
              <div className="text-white opacity-90">Lives Saved Per Donation</div>
            </div>
            <div className="animate-fade-in-delay-1">
              <div className="text-4xl font-bold text-white mb-2">15k+</div>
              <div className="text-white opacity-90">Active Donors</div>
            </div>
            <div className="animate-fade-in-delay-2">
              <div className="text-4xl font-bold text-white mb-2">50k+</div>
              <div className="text-white opacity-90">Lives Impacted</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection; 