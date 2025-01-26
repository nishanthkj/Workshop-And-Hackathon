import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Workshop and Hackathon 2025
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8">
          Unlocking Innovation in AI and Technology
        </p>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          March 15–17, 2025
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Hero;