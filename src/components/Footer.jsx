import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
         <div className="flex justify-around my-8">
        
        <div className="p-4 border-2 w-1/3">

        <img src={assets.logo} alt="" />
        <p className='text-purple-1000'>
        It's an Ultimate SERP Rank Tracking & Analytics
Platform for SEO Professionals,
here you experience the Power of
Real-Time Insights and Effortless SEO
Project Management

        </p>
        <div className='mt-6'>
            <img src={assets.multipleadImg} alt="" />
        
        </div>
        
        </div>




        <div className="p-4 border-2 w-1/3">
        <h1  className='text-2xl text-purple-1000 font-bold'>DM Cockpit
        </h1>

        <p >
        Download
        <br />
        <br />
Careers
<br />
<br />
About Us
<br />
<br />
Clients
<br />
<br />
Community
<br />
<br />
Reviews

        </p>
        
        </div>
        <div className="p-4 border-2 w-1/3">
        <h1  className='text-2xl text-purple-1000 font-bold'>Resources
        </h1>

        <p >
        Download
        <br />
        <br />
Careers
<br />
<br />
About Us
<br />
<br />
Clients
<br />
<br />
Community
<br />
<br />
Reviews

        </p>
        
        </div><div className="p-4 border-2 w-1/3">
        <h1  className='text-2xl text-purple-1000 font-bold'>Learn More
        </h1>

        <p >
        Download
        <br />
        <br />
Careers
<br />
<br />
About Us
<br />
<br />
Clients
<br />
<br />
Community
<br />
<br />
Reviews

        </p>
        
        </div>
        <div className="p-4 border-2 w-1/3">
        <h1  className= ' text-2xl text-purple-1000 font-bold'>
            Contact Us

            <div className='flex items-center justify-between'>
                <p>face</p>
                <p>Inst</p>
                <p>twit</p>

            </div>
        </h1>
        <div className='mt-7'>
            <img src={assets.dmcImage} alt="" />
        </div>

     
        
        </div>

        {/* <div className="p-4 border-2 w-1/3">Box 3</div>
        <div className="p-4 border-2 w-1/3">Box 3</div>
        <div className="p-4 border-2 w-1/3">Box 3</div> */}
    
      </div>
      <div className='w-full flex items-center justify-between text-center bg-purple-1000 p-8 text-white'>
        <div className='w-full flex items-center justify-between'>
            <h1 className='text-white'>English</h1>
            <div className='flex items-center justify-between gap-6' >
                <p>Security</p>
                <p>Terms and Policy</p>
                <p>Privacy and Policy</p>
                <p>Status</p>
            </div>

            <div className='text-white'>
                <h1 className='text-white'>All right are reserved</h1>
            </div>

            <div>
                <h1>Sign in</h1>
            </div>
        </div>

        
      </div>
    </div>
   
  )
}

export default Footer
