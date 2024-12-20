import React from "react";
import { assets } from "../assets/assets";

const Pricing = () => {
  return (
    <div className="p-8">
      {/* Plan & Pricing Header */}
      <h1 className="text-6xl font-bold text-purple-1000 mb-4 text-center">
        Plan & Pricing
      </h1>

      <p
        className="text-lg text-purple-600 text-center mt-4 mx-auto max-w-sm leading-relaxed"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          overflow: "hidden",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>

      {/* Are you an Agency Header */}
      <h1 className="text-5xl font-bold text-purple-1000 mb-4 text-center">
        Are you an <span className="text-green-600">Agency?</span>
      </h1>
      <p className="text-2xl text-purple-600 mb-6 text-center">
        Then Plans fit you{" "}
        <span className="text-orange-500 font-bold">perfectly</span>
      </p>

      {/* Parent Container with Border */}
      <div className="flex justify-center items-center mb-8">
        <div className="flex rounded-full border-2 border-black  space-x-2">
          <button className="px-8 py-3 rounded-full transition-all duration-300 ease-in-out font-extrabold text-green-500 hover:bg-green-500 hover:text-purple-1000">
            Agency
          </button>
          <button className="px-8 py-3 rounded-full transition-all duration-300 ease-in-out font-extrabold text-purple-1000 hover:bg-purple-950 hover:text-white">
            Individual
          </button>
        </div>
      </div>

      {/* Buttons for SEO, Social, and Digital */}
      <div className="mb-8 text-center">
        <button className="px-20  py-2 border-2 font-extrabold  border-black text-purple-1000 rounded-lg mr-4 transition-all duration-300 hover:bg-purple-1000 hover:text-white">
          SEO
        </button>
        <button className="px-10 py-2 border-2 font-extrabold border-black text-purple-1000 rounded-lg mr-4 transition-all duration-300 hover:bg-purple-1000 hover:text-white">
          Social and Ads
        </button>
        <button className="px-16 py-2 border-2 font-extrabold border-black text-purple-1000 rounded-lg transition-all duration-300 hover:bg-purple-1000 hover:text-white">
          Digital
        </button>
      </div>

      {/* Numbered Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
        <div className="border-2 border-gray-600 p-4 text-center rounded-2xl hover:bg-red-700 text-white   ">
          <h1 className="text-purple-1000 font-extrabold text-2xl ">Free Digital</h1>
          <p className="text-gray-400">For Professional Use</p>

          <p className="text-black">
            For Small Agencies
            <br />
            Agency Dashboard
            <br />
            Manage up to 50 Projects
            <br />
            Track 5,000 Keywords
            <br />
            5 Team Members
            <br />
            Competitor Analysis, On
            <br />
            Page / Website Audit, Backlink
            <br />
            Checker and Monitor,
            <br />
            Analytics & Reporting with
            <br />
            more features.
          </p>
          <button className="text-white font-extrabold bg-purple-1000 rounded-xl px-20 py-4 mt-4">Choose Plan</button>
        </div>
        

        <div className="border-2 border-gray-600 p-4 text-center rounded-2xl hover:bg-purple-1000 text-white  ">
          <h1 className="text-purple-1000 font-extrabold text-2xl">Free Digital</h1>
          <p className="text-gray-400">For Professional Use</p>

          <p className="text-black">
            For Small Agencies
            <br />
            Agency Dashboard
            <br />
            Manage up to 50 Projects
            <br />
            Track 5,000 Keywords
            <br />
            5 Team Members
            <br />
            Competitor Analysis, On
            <br />
            Page / Website Audit, Backlink
            <br />
            Checker and Monitor,
            <br />
            Analytics & Reporting with
            <br />
            more features.
          </p>
          <button className="text-white font-extrabold bg-purple-1000 rounded-xl px-20 py-4 mt-4">Choose Plan</button>
        </div>
        <div className="border-2 border-gray-600 p-4 text-center rounded-2xl hover:bg-purple-1000 text-white  ">
          <h1 className="text-purple-1000 font-extrabold text-2xl">Free Digital</h1>
          <p className="text-gray-400">For Professional Use</p>

          <p className="text-black">
            For Small Agencies
            <br />
            Agency Dashboard
            <br />
            Manage up to 50 Projects
            <br />
            Track 5,000 Keywords
            <br />
            5 Team Members
            <br />
            Competitor Analysis, On
            <br />
            Page / Website Audit, Backlink
            <br />
            Checker and Monitor,
            <br />
            Analytics & Reporting with
            <br />
            more features.
          </p>
          <button className="text-white font-extrabold bg-purple-1000 rounded-xl px-20 py-4 mt-4">Choose Plan</button>
        </div>
        <div className="border-2 border-gray-600 p-4 text-center rounded-2xl hover:bg-purple-1000 text-white  ">
          <h1 className="text-purple-1000 font-extrabold text-2xl">Free Digital</h1>
          <p className="text-gray-400">For Professional Use</p>

          <p className="text-black">
            For Small Agencies
            <br />
            Agency Dashboard
            <br />
            Manage up to 50 Projects
            <br />
            Track 5,000 Keywords
            <br />
            5 Team Members
            <br />
            Competitor Analysis, On
            <br />
            Page / Website Audit, Backlink
            <br />
            Checker and Monitor,
            <br />
            Analytics & Reporting with
            <br />
            more features.
          </p>
          <button className="text-white font-extrabold bg-purple-1000 rounded-xl px-20 py-4 mt-4">Choose Plan</button>
        </div>
        {/* <div className="border-2 border-gray-600 p-4 text-center">2</div>
        <div className="border-2 border-gray-600 p-4 text-center">3</div>
        <div className="border-2 border-gray-600 p-4 text-center">4</div> */}
      </div>

      {/* "As straightforward as it gets" Section */}
      <h1 className="text-3xl font-bold text-purple-1000 mt-8 text-center">
        As straightforward as it gets
      </h1>
      <p
        className="text-lg text-purple-900 text-center mt-4 mx-auto max-w-sm leading-relaxed"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          overflow: "hidden",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>

      {/* Image Section */}
      <div className="flex justify-center mt-6">
        <img
          src={assets.pricingImg}
          alt="Pricing"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Pricing;
