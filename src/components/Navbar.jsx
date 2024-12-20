import React from 'react';
import { assets } from '../assets/assets'; // Make sure this path is correct
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white text-purple-1000">
      {/* Logo */}
      <div>
        <img src={assets.logo} alt="Logo" className="h-10" />
      </div>

      {/* Navigation */}
      <div>
        <nav>
          <ul className="flex space-x-10">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? 'text-green-500 border-b-2 border-green-500 pb-2' 
                    : 'hover:text-gray-400'
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/features" 
                className={({ isActive }) => 
                  isActive 
                    ? 'text-green-500 border-b-2 border-green-500 pb-2' 
                    : 'hover:text-gray-400'
                }
              >
                Features
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/pricing" 
                className={({ isActive }) => 
                  isActive 
                    ? 'text-green-500 border-b-2 border-green-500 pb-2' 
                    : 'hover:text-gray-400'
                }
              >
                Pricing
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/resources" 
                className={({ isActive }) => 
                  isActive 
                    ? 'text-green-500 border-b-2 border-green-500 pb-2' 
                    : 'hover:text-gray-400'
                }
              >
                Resources
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/aichatbot" 
                className={({ isActive }) => 
                  isActive 
                    ? 'text-green-500 border-b-2 border-green-500 pb-2' 
                    : 'hover:text-gray-400'
                }
              >
                AI Chatbot
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Contact & Buttons */}
      <div className="flex items-center space-x-4">
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            isActive 
              ? 'text-green-500 border-b-2 border-green-500 pb-2' 
              : 'hover:text-gray-400'
          }
        >
          Contact Us
        </NavLink>

        {/* Sign Up Button with Shadow */}
        <button className="bg-purple-1000 text-white px-12 py-2 rounded-2xl shadow-2xl hover:bg-purple-900">
          Sign Up
        </button>

        {/* Log In Button */}
        <button className="bg-green-500 text-white px-12 py-2 rounded-2xl hover:bg-green-700">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
