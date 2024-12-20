import React from 'react';
import { assets } from "../assets/assets";

const HeaderBanner = () => {
  return (
    <div
      className="relative mt-10 bg-center"
      style={{
        backgroundImage: `url(${assets.headerBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
        width: '100%',
      }}
    >
      {/* Header Text with bold "FREE" and Button positioned on the left */}
      <p className="absolute text-white text-xl font-bold bottom-24 left-32 bg-orange-500 p-4 rounded-full shadow-lg flex items-center space-x-2 cursor-pointer">
        <img src={assets.roket_svg} alt="Rocket" className="h-6 w-6" />
        <span>
          Start Your <strong className="font-extrabold text-white">FREE</strong> Trial Now
        </span>
      </p>

      {/* Contact Us Form Section on the Right Center */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg w-96 max-w-full">
        <h2 className="text-2xl font-md mb-4 text-purple-1000 flex items-center space-x-2">
          <span>Contact Us To</span>
          <strong className="font-extrabold text-purple-1000">Grow</strong>
          <img className="h-6 w-6" src={assets.growthChart} alt="Rocket" />
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" id="agree" className="mr-2" />
            <label htmlFor="agree" className="text-gray-700">I agree to the terms and conditions</label>
          </div>

          <button type="submit" className="w-full bg-purple-1000 text-white p-3 rounded-lg hover:bg-purple-900">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeaderBanner;
