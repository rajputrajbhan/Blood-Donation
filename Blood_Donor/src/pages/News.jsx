import React from 'react';

const News = () => {
  const newsArticles = [
    {
      title: "Record-Breaking Blood Donation Drive Success",
      date: "May 20, 2024",
      category: "Achievement",
      image: "https://source.unsplash.com/800x600/?hospital",
      summary: "Our recent citywide blood donation drive collected over 1,000 units of blood in a single day...",
      author: "Sarah Thompson",
    },
    {
      title: "New Mobile Blood Bank Service Launched",
      date: "May 18, 2024",
      category: "Innovation",
      image: "https://source.unsplash.com/800x600/?ambulance",
      summary: "We're proud to announce our new mobile blood bank service that will reach remote areas...",
      author: "Michael Roberts",
    },
    {
      title: "Partnership with Local Hospitals Expanded",
      date: "May 15, 2024",
      category: "Partnership",
      image: "https://source.unsplash.com/800x600/?medical",
      summary: "Five new hospitals have joined our network, expanding our reach and impact...",
      author: "Dr. Emily Chen",
    },
  ];

  const pressReleases = [
    {
      title: "Annual Report Shows 50% Increase in Blood Donations",
      date: "May 10, 2024",
      type: "Report",
    },
    {
      title: "Blood Donation Network Receives Healthcare Excellence Award",
      date: "May 5, 2024",
      type: "Award",
    },
    {
      title: "New Blood Storage Facility Opening Next Month",
      date: "May 1, 2024",
      type: "Announcement",
    },
  ];

  return (
    <div className="pt-3 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Latest News</h1>

        {/* Featured News */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="relative">
            <img
              className="w-full h-96 object-cover"
              src="https://source.unsplash.com/1600x900/?healthcare"
              alt="Featured news"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="text-sm font-semibold mb-2">Breaking News</div>
              <h2 className="text-3xl font-bold mb-4">
                Groundbreaking Research Shows Long-term Benefits of Regular Blood Donation
              </h2>
              <p className="text-lg mb-4">
                New study reveals regular blood donors have improved cardiovascular health and reduced risk of various diseases.
              </p>
              <div className="flex items-center text-sm">
                <span>May 22, 2024</span>
                <span className="mx-2">•</span>
                <span>By Dr. James Wilson</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent News Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent News</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                className="h-48 w-full object-cover"
                src={article.image}
                alt={article.title}
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">By {article.author}</span>
                  <button className="text-red-600 hover:text-red-800 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Releases */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Releases</h2>
          <div className="divide-y divide-gray-200">
            {pressReleases.map((release, index) => (
              <div key={index} className="py-4 hover:bg-gray-50 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{release.title}</h3>
                    <p className="text-gray-600">{release.date}</p>
                  </div>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {release.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button className="text-red-600 hover:text-red-800 font-medium">
              View All Press Releases →
            </button>
          </div>
        </div>

        {/* Media Contact */}
        <div className="mt-12 bg-gray-900 rounded-xl shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Media Contact</h3>
          <p className="mb-6">
            For press inquiries and media resources, please contact our communications team.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors duration-300">
              Contact Press Office
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Download Media Kit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News; 