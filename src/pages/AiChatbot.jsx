import React from 'react';
import { assets } from '../assets/assets';
import Footer from '../components/Footer';

const AiChatbot = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center flex-grow">
        <div className="text-center">
          <h2 className="mb-4">AI Chatbot Video</h2>
          <video className="w-full h-auto max-h-[60vh]" controls>
            <source src={assets.vidioChabot} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiChatbot;
