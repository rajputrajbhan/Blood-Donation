import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-slate-200'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-red-600">
              Blood Donation Network
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 px-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-red-600 transition-colors duration-300 ${
                location.pathname === '/' ? 'text-red-600' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-gray-700 hover:text-red-600 transition-colors duration-300 ${
                location.pathname === '/about' ? 'text-red-600' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/blogs"
              className={`text-gray-700 hover:text-red-600 transition-colors duration-300 ${
                location.pathname === '/blogs' ? 'text-red-600' : ''
              }`}
            >
              Blogs
            </Link>
            <Link
              to="/events"
              className={`text-gray-700 hover:text-red-600 transition-colors duration-300 ${
                location.pathname === '/events' ? 'text-red-600' : ''
              }`}
            >
              Events
            </Link>
            <Link
              to="/news"
              className={`text-gray-700 hover:text-red-600 transition-colors duration-300 ${
                location.pathname === '/news' ? 'text-red-600' : ''
              }`}
            >
              News
            </Link>
            <Link
              to="/donate"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300"
            >
              Donate Us
            </Link>
            <Link
              to="/signup"
              className="border border-red-600 text-red-600 px-6 py-2 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-300"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="pb-4 space-y-2">
            <Link
              to="/"
              className={`block py-2 text-gray-700 hover:text-red-600 ${
                location.pathname === '/' ? 'text-red-600' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block py-2 text-gray-700 hover:text-red-600 ${
                location.pathname === '/about' ? 'text-red-600' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/blogs"
              className={`block py-2 text-gray-700 hover:text-red-600 ${
                location.pathname === '/blogs' ? 'text-red-600' : ''
              }`}
            >
              Blogs
            </Link>
            <Link
              to="/events"
              className={`block py-2 text-gray-700 hover:text-red-600 ${
                location.pathname === '/events' ? 'text-red-600' : ''
              }`}
            >
              Events
            </Link>
            <Link
              to="/news"
              className={`block py-2 text-gray-700 hover:text-red-600 ${
                location.pathname === '/news' ? 'text-red-600' : ''
              }`}
            >
              News
            </Link>
            <Link
              to="/donate"
              className="block w-full bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 text-center"
            >
              Donate Us
            </Link>
            <Link
              to="/auth/register-donor"
              className="block w-full border border-red-600 text-red-600 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
