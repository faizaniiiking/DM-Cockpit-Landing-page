import React, { useState } from "react";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";

const Resources = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null); // Close the currently open question if it's clicked again
    } else {
      setActiveQuestion(index); // Open the clicked question
    }
  };

  return (
    <div className="p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-1000 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-purple-1000">Ask Us Anything</p>
      </div>

      {/* FAQ Container with Two Columns */}
      <div className="flex justify-between gap-8  p-10 mt-10 mx-10">
        {/* Left Column */}
        <div className="w-full sm:w-1/2 space-y-4">
          {/* FAQ questions */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleQuestion(0)}
              className="text-left text-lg font-medium w-full text-purple-1000"
            >
              What is your refund policy?
            </button>
            {activeQuestion === 0 && (
              <p className="text-purple-1000 mt-2">
                We offer a 30-day money-back guarantee on all our products.
              </p>
            )}
          </div>

          

          <div className="border-b pb-4">
            <button
              onClick={() => toggleQuestion(1)}
              className="text-left text-lg font-medium w-full text-purple-1000"
            >
              How do I get started?
            </button>
            {activeQuestion === 1 && (
              <p className="text-purple-1000 mt-2">
                To get started, simply create an account and follow the setup
                guide.
              </p>
            )}
          </div>
        </div>
        

        {/* Right Column */}
        <div className="w-full sm:w-1/2 space-y-4 ">
          {/* FAQ questions */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleQuestion(2)}
              className="text-left text-lg font-medium w-full text-purple-1000"
            >
              What is your pricing model?
            </button>
            {activeQuestion === 2 && (
              <p className="text-purple-1000 mt-2">
                We offer a subscription model based on usage. Visit our pricing
                page for more details.
              </p>
            )}
          </div>

          <div className="border-b pb-4">
            <button
              onClick={() => toggleQuestion(3)}
              className="text-left text-lg font-medium w-full text-purple-1000"
            >
              Can I cancel my subscription anytime?
            </button>
            {activeQuestion === 3 && (
              <p className="text-purple-500 mt-2">
                Yes, you can cancel your subscription anytime with no additional
                fees.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
   

      {/* Testimonials Section */}
<div className="text-center my-8">
  <h1 className="text-2xl font-bold text-purple-1000 mb-4">
    Testimonials
  </h1>
  <p className="text-lg text-purple-900 mb-6">
    Lorem Ipsum Dolor Sit Amet, Consectetur
  </p>
  <div className="flex justify-center gap-4">
    <div className="flex justify-center items-center">
      <img
        src={assets.womenTestimonalImg}
        alt="Testimonial 1"
        className="w-16 h-16 rounded-full border "
      />
    </div>
    <div className="flex justify-center items-center">
      <img
        src={assets.MenmiddleimgTesmonal}
        alt="Testimonial 2"
        className="w-24 h-24 rounded-full b "
      />
    </div>
    <div className="flex justify-center items-center">
      <img
        src={assets.menTestimonalsImg}
        alt="Testimonial 3"
        className="w-16 h-16 rounded-full"
      />
    </div>
  </div>
</div>
<h1 className="text-center"><img className="mx-auto block" src={assets.starImg} alt="" /></h1>



      {/* Centered Paragraph with 4 Lines */}
      <div className="text-center my-8">
        <p className="max-w-2xl mx-auto text-center leading-relaxed h-[6.4em] overflow-hidden">
          The Argument In Favor Of Using Filler Text Goes Something Like This:
          If You Use Real Content In The Design Process, Anytime You Reach A
          Review Point You’ll End Up Reviewing And Negotiating The Content Itself
          And Not The Design. This Will Just Slow Down The Design Process
        </p>
        <h3 className="text-green-500">Aleesha Brown</h3>
        <p className="text-gray-400">C E O O F C O M A P N Y</p>
      </div>

      {/* Clientele Section */}
      <div className="text-center my-8">
        <h1 className="text-7xl font-bold text-purple-1000 mb-4">Clientele</h1>
        <p className="text-lg text-purple-900 mb-4">
          Trusted by 1,25000+ customers worldwide
        </p>
        <div>
          <img src={assets.companylogo} alt="Company Logo" className="mx-auto" />
        </div>
      </div>

      {/* Integration Info Section */}
      <div className="text-center my-8 mt-12">
        <h1 className="text-4xl font-bold text-purple-1000 mb-4">
          DmCockpit integrates with the
        </h1>
        <h1 className="text-4xl font-bold text-green-500 mb-6">App you use!</h1>
       
      </div>
      <div className="p-8">
  {/* Existing content */}

  {/* 12 Boxes Layout (6 in one row and 6 below) */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 my-8">
    {/* First row (6 boxes) */}
    <div className="border-2 p-4 flex justify-center items-center">
      <img src={assets.instImg} alt="Image 1" className="w-full h-full object-cover" />
    </div>
    <div className="border-2 p-4 flex justify-center items-center">
      <img src={assets.instImg} alt="Image 2" className="w-full h-full object-cover" />
    </div>
    <div className="border-2 p-4 flex justify-center items-center">
      <img src={assets.instImg} alt="Image 3" className="w-full h-full object-cover" />
    </div>
    <div className="border-2 p-4 flex justify-center items-center">
      <img src= {assets.instImg}alt="Image 4" className="w-full h-full object-cover" />
    </div>
    <div className="border-2 p-4 flex justify-center items-center">
      <img src={assets.instImg} alt="Image 5" className="w-full h-full object-cover" />
    </div>
    <div className="border-2 p-4 flex justify-center items-center">
      <img src={assets.instImg} alt="Image 6" className="w-full h-full object-cover" />
    </div>

    {/* Second row (6 boxes) */}
    <div className="border-2 p-4 flex justify-center items-center">
      <img src={assets.instImg} alt="Image 7" className="w-full h-full object-cover" />
    </div>
    <div className="border-2 p-4 flex justify-center items-center">
      <img src={assets.instImg} alt="Image 8" className="w-full h-full object-cover" />
    </div>
    <div className="border-2 p-4 flex justify-center items-center">
      <img src={assets.instImg} alt="Image 9" className="w-full h-full object-cover" />
    </div>
    <div className="border-2 p-4 flex justify-center items-center">
      <img src={assets.instImg} alt="Image 10" className="w-full h-full object-cover" />
    </div>
    <div className="border-2 p-4 flex justify-center items-center">
      <img src= {assets.instImg} alt="Image 11" className="w-full h-full object-cover" />
    </div>
    <div className="border-2 p-4 flex justify-center items-center">
      <img src= {assets.instImg} alt="Image 12" className="w-full h-full object-cover" />
    </div>
  </div>


</div>

{/* still have question contianer  */}



<div className="flex items-center justify-between rounded-4xl">
  {/* Rocket Banner Section */}
  <div
    className="flex-1 h-96 bg-cover bg-center relative rounded-2xl"
    style={{
      backgroundImage: `url(${assets.rocketBanner})`,
    }}
  >
    <div className="absolute text-center text-white w-full top-1/2 transform -translate-y-1/2">
      <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
      <form className="space-y-6">
        <div>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="px-4 py-2 border border-gray-300 rounded-lg mx-4 w-11/12 sm:w-96"  // Adjust width and margins
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-lg mx-4 w-11/12 sm:w-96"  // Adjust width and margins
          />
        </div>
        <div>
          <button
            type="submit"
            className="  bg-green-500 text-white py-2 px-10 rounded-lg mx-4"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>

  {/* Lady Stand Section */}
  <div className="flex-1 flex justify-center items-center h-96">
    <img src={assets.ladystand} alt="Lady Stand" className="max-h-full" />
  </div>
</div>

{/* Rectangle Banner Image */}

{/* <div className="flex justify-center mt-8">
  <img src={assets.RectangleBanner} alt="Rectangle Banner" />
  <img src={assets.laptopImg} alt="" />
</div> */}

<div className="flex justify-center mt-8 relative">
  {/* Rectangle Banner as background */}
  <div
    className="relative w-full h-[400px] bg-cover bg-center rounded-lg"
    style={{
      backgroundImage: `url(${assets.RectangleBanner})`,
    }}
  >
    {/* Left side: Laptop Image on top */}
    <div className="absolute left-0 top-0 w-1/2 h-full flex justify-center items-center">
      <img
        src={assets.laptopImg}
        alt="Laptop"
        className="w-3/4 h-auto"
      />
    </div>

    {/* Right side: Text */}
    <div className="absolute right-0 top-0 w-1/2 h-full flex justify-center items-center text-white p-8">
      <div>
        <h2 className="text-4xl font-bold mb-4">S I G N  U P  N O W
        </h2>
        <h1 className="text-6xl font-extrabold">GET <span className="text-green-500">30 DAYS</span> FREE TRIAL
        </h1>
        <p className="text-4xl m-4">For Agency.</p>
        <button className="border border-gray-400 text-white px-7 py-4 mt-4 rounded-full">Sign Up Now</button>
      </div>
    </div>
  </div>
</div>















<div className="flex justify-around my-8">
  <div className=" flex items-center justify-between p-4 border-2 w-1/3"><img src={assets.lockerResouces} alt="" /> <p>Free 24-Hours Support</p></div>
  <div className=" flex items-center justify-between p-4 border-2 w-1/3"><img src={assets.telephoneResources} alt="" /><p>Serious about security & privacy</p></div>
  <div className=" flex items-center justify-between  p-4 border-2 w-1/3"><img src={assets.lockerResouces} alt="" /><p>Curated Features for user needs</p></div>
</div>

      
    </div>
  );
};

export default Resources;
