import React from 'react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Community Blood Drive",
      date: "June 1, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Central Community Center",
      image: "https://source.unsplash.com/800x600/?community",
      description: "Join us for our biggest blood drive of the year. Free health checkups available.",
    },
    {
      title: "University Campus Donation",
      date: "June 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "State University Campus",
      image: "https://source.unsplash.com/800x600/?university",
      description: "Special blood donation drive for university students and staff.",
    },
    {
      title: "Corporate Wellness Day",
      date: "June 30, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Tech Park Convention Center",
      image: "https://source.unsplash.com/800x600/?office",
      description: "Blood donation drive combined with corporate wellness programs.",
    },
  ];

  const pastEvents = [
    {
      title: "Emergency Blood Drive",
      date: "May 15, 2024",
      location: "City Hospital",
      impact: "200 donors",
    },
    {
      title: "Mobile Blood Bank",
      date: "May 1, 2024",
      location: "Rural Community Center",
      impact: "150 donors",
    },
    {
      title: "Youth Awareness Drive",
      date: "April 15, 2024",
      location: "High School Auditorium",
      impact: "100 donors",
    },
  ];

  return (
    <div className="pt-3 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Events</h1>

        {/* Featured Event */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="relative h-64">
            <img
              className="w-full h-full object-cover"
              src="https://source.unsplash.com/1600x900/?event"
              alt="Featured event"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-sm font-semibold mb-2">Featured Event</div>
              <h2 className="text-2xl font-bold mb-2">World Blood Donor Day Special Drive</h2>
              <p className="text-sm">June 14, 2024 • Multiple Locations</p>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                className="h-48 w-full object-cover"
                src={event.image}
                alt={event.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-red-600 font-medium">{event.date}</p>
                  <p className="text-gray-600">{event.time}</p>
                  <p className="text-gray-600">{event.location}</p>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Past Events */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Events</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {pastEvents.map((event, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    <p className="text-gray-600">{event.date} • {event.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-red-600 font-semibold">{event.impact}</div>
                    <div className="text-sm text-gray-600">Participated</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-red-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Want to Host a Blood Drive?</h3>
          <p className="mb-6">
            Partner with us to organize a blood donation drive in your community, school, or workplace.
          </p>
          <button className="bg-white text-red-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events; 