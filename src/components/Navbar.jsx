import React, { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ul className="hidden md:flex space-x-6">
          {/* Dropdown Menu in an 'li' */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white focus:outline-none"
            >
              Services
            </button>

            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
                <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Web Development</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">SEO Services</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Content Writing</a></li>
              </ul>
            )}
          </li>

          <li><a href="#" className="text-white">Contact</a></li>
        </ul>
    );
}

export default Navbar;
