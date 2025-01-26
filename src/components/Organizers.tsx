import React from 'react';

const Organizers = () => {
  const organizers = [
    {
      name: 'Dr. B G Naresh Kumar',
      role: 'Organizing Chair',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Dr. Hemanth S R',
      role: 'Convener',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Dr. Victor A I',
      role: 'Program Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'place holder',
      role: 'place holder',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section id="organizers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Organizers
          </h2>
          <p className="text-lg text-gray-600">
            The team behind Workshop and Hackathon 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={organizer.image}
                alt={organizer.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {organizer.name}
              </h3>
              <p className="text-blue-600">{organizer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Organizers;