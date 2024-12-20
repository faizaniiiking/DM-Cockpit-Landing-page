import React from 'react'
import { assets } from '../assets/assets'

const AdBanner = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-green-400 to-purple-1000 p-2"> {/* Reduced padding */}
      {/* Left Image */}
      <img src={assets.roket_svg} alt="Rocket Icon" className="w-12 h-12 mr-4" />
      
      {/* Text and Button in the same line */}
      <div className="flex items-center gap-10">
        <h1 className="text-white text-xl font-bold mr-4"> {/* Increased font weight to extrabold */}
          Sign up today to accelerate your business!
        </h1>
        <button className="bg-white text-purple-900 font-extrabold rounded-2xl  p-2 px-10"> {/* Button with extrabold */}
          Join us
        </button>
      </div>

      {/* Right Image */}
      <img src={assets.roket_svg} alt="Rocket Icon" className="w-12 h-12 ml-4" />
    </div>
  )
}

export default AdBanner
