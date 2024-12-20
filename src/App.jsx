import React from 'react';
import AdBanner from './components/AdBanner';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import AiChatbot from './pages/AiChatbot';
import ContactUs from './pages/ContactUs';
import HeaderBanner from './components/HeaderBanner';
import Footer from './components/Footer';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
        <div>
          <AdBanner />
          <Navbar />
          {/* <Home /> */}
          <HeaderBanner />
          <Features/>
          <Pricing/>
          <Resources/>
          <Footer/>
        </div>
       
    },
    {
      path:"/features",
      element: <div>
      <AdBanner />
      <Navbar />
      <Features />
    </div>

    },
    {
      path:"/pricing",
      element:  <div>
      <AdBanner />
      <Navbar />
      <Pricing />
    </div>

    },
    {
      path:"/resources",
      element: <div>
      <AdBanner />
      <Navbar />
      <Resources />
    </div>

    },
    {
      path:"/aichatbot",
      element:   <div>
      <AdBanner />
      <Navbar />
      <AiChatbot />
    </div>

    },
    {
      path:"/contact",
      element:   <div>
      <AdBanner />
      <Navbar />
      <ContactUs />
    </div>



    }



  ]);

  return (
    <div>
      <RouterProvider router={router} />

    </div>
  );
};

export default App;
