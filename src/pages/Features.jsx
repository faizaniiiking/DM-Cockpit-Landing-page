import React from 'react';
import { assets } from '../assets/assets';

const Features = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center bg-cover bg-center mt-20"
      style={{ backgroundImage: `url(${assets.whitebg})` }}
    >
      <h1 className="text-7xl text-purple-1000 font-extrabold border-yellow-900">Features</h1>
      <p className="text-4xl font-md mt-4 text-black">Here's Few More Reasons To Use DM Cockpit</p>

      <div className="mt-6 flex space-x-4">
        {/* SEO Button */}
        <button className="border-2 font-bold border-purple-600 text-purple-600 px-14 py-4 rounded-lg hover:border-purple-800 hover:bg-purple-1000 hover:text-white">
          SEO
        </button>

        {/* Performance Marketing Button */}
        <button className="border-2 font-bold border-purple-600 text-purple-600 px-14 py-2 rounded-lg hover:border-purple-800 hover:bg-purple-1000 hover:text-white">
          Performance Marketing
        </button>

        {/* Reporting Button */}
        <button className="border-2 font-bold border-purple-600 text-purple-600 px-14 py-2 rounded-lg hover:border-purple-800 hover:bg-purple-1000 hover:text-white">
          Reporting
        </button>
      </div>

      {/* Horizontal Boxes with Images and Text Below */}
      <div className="mt-12 flex space-x-6 p-6">
        <div className="flex flex-col items-center justify-center p-10 text-center hover:border-gray-400 hover:rounded-lg border-transparent">
          <img src={assets.rankingsvg} alt="Roket" className="h-24 w-24 object-contain" />
          <p className="mt-2 text-black">Rank Tracking</p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-center hover:border-gray-400 hover:rounded-lg border-transparent">
          <img src={assets.audit} alt="Logo" className="h-24 w-24 object-contain" />
          <p className="mt-2 text-black">Audit</p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-center hover:border-gray-400 hover:rounded-lg border-transparent">
          <img src={assets.analytic} alt="Header" className="h-24 w-24 object-contain" />
          <p className="mt-2 text-black">Analytics</p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-center hover:border-gray-400 hover:rounded-lg border-transparent">
          <img src={assets.perfomanceMarketing} alt="Roket" className="h-24 w-24 object-contain" />
          <p className="mt-2 text-black">Performance Marketing</p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-center hover:border-gray-400 hover:rounded-lg border-transparent">
          <img src={assets.rankingsvg} alt="Logo" className="h-24 w-24 object-contain" />
          <p className="mt-2 text-black">Rank Tracking</p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-center hover:border-gray-400 hover:rounded-lg border-transparent">
          <img src={assets.competitorAnalysis} alt="Header" className="h-24 w-24 object-contain" />
          <p className="mt-2 text-black">Competitor Analysis</p>
        </div>
      </div>

      {/* Image Container with Text */}
      <div className="w-3/5 mt-28 bg-gray-100 rounded-xl flex items-center justify-between relative border-2 border-gray-200">
        <div className="w-1/2 pr-4">
          <h1 className="text-4xl font-bold">
            <span className="text-green-500 ">01.</span > Rank Tracking
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            DM Cockpit Makes It Easy To Stay On Top Of Your Keyword Rankings
            <br />
            With 100% Accurate Tracking. It Allows You To Track The Performance
            <br />
            Of Your Website's Keywords Over Time And Identify
            <br />
            Opportunities For Improvement.
          </p>
          <button className="mt-4 px-6 py-2 border-2 border-black text-purple-600 rounded-lg hover:bg-black hover:text-white">
            Learn More
          </button>
        </div>

        <div className="w-1/2 pl-4 relative p-10">
          <img src={assets.humanSvg} alt="Human" className="w-full h-auto object-contain" />
        
        </div>
      </div>

      {/* Captain Categories */}
      {/* <div className="w-full mt-16">
        <h1 className="m-12 text-6xl font-extrabold text-purple-1000">DM Captain!</h1>
        <div className="w-full flex items-center justify-between">
          <div className='bg-gray-100'>
            <img src={assets.DMImages} alt="" />
          </div>
        </div>
      </div> */}4
      
      {/* Captain Categories */}
<div className="w-full mt-16">
  <h1 className="m-12 text-6xl font-extrabold text-purple-1000">DM Captain!</h1>
  <div className="flex items-center justify-center bg-gray-100">
    <img src={assets.DMImages} alt="DM Captain" className="max-w-full h-auto" />
  </div>
</div>

    </div>
  );
};

export default Features;
