import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      title: "The Importance of Regular Blood Donation",
      author: "Dr. Sarah Johnson",
      date: "May 15, 2024",
      category: "Health",
      image: "https://source.unsplash.com/800x600/?hospital",
      excerpt: "Regular blood donation not only helps others but also provides several health benefits to the donor...",
    },
    {
      title: "Understanding Different Blood Types",
      author: "Dr. Michael Chen",
      date: "May 12, 2024",
      category: "Education",
      image: "https://source.unsplash.com/800x600/?medical",
      excerpt: "Learn about the different blood types, their compatibility, and why knowing your blood type is important...",
    },
    {
      title: "Blood Donation Myths Debunked",
      author: "Emma Williams",
      date: "May 10, 2024",
      category: "Awareness",
      image: "https://source.unsplash.com/800x600/?healthcare",
      excerpt: "Common myths about blood donation that prevent people from donating and the truth behind them...",
    },
    {
      title: "Tips for a Successful Blood Donation",
      author: "James Anderson",
      date: "May 8, 2024",
      category: "Tips",
      image: "https://source.unsplash.com/800x600/?doctor",
      excerpt: "Follow these essential tips to ensure a smooth and successful blood donation experience...",
    },
  ];

  return (
    <div className="pt-3 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Blog</h1>
        
        {/* Featured Post */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="https://source.unsplash.com/800x600/?blood-donation"
                alt="Featured blog post"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">Featured</div>
              <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                Latest Updates in Blood Donation Technology
              </h2>
              <p className="mt-4 text-gray-600">
                Discover how new technologies are making blood donation more efficient and accessible than ever before...
              </p>
              <div className="mt-4">
                <button className="text-red-600 hover:text-red-800 font-medium">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                className="h-48 w-full object-cover"
                src={blog.image}
                alt={blog.title}
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                    {blog.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">By {blog.author}</span>
                  <button className="text-red-600 hover:text-red-800 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest news and articles about blood donation.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs; 