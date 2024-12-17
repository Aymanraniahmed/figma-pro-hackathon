import React from 'react';
import { IoCartOutline } from 'react-icons/io5'; // Shopping cart icon
import { FaUserCircle } from 'react-icons/fa'; // User avatar icon
import { BiSearch } from 'react-icons/bi'; // Search icon
import Link from 'next/link';
import About from '../about/page';

const Navbar = () => {
  return (
    <div>
      {/* Top Navbar */}
      <div className="flex items-center justify-between h-16 px-6 bg-white shadow-md">
        {/* Left: Search Icon */}
        <BiSearch className="text-2xl text-gray-700 cursor-pointer hover:text-black" />

        {/* Center: Avion */}
        <h1 className="text-lg font-bold text-gray-800">Avion</h1>

        {/* Right: Cart Icon and User Avatar */}
        <div className="flex items-center space-x-4">
          <IoCartOutline className="text-2xl text-gray-700 cursor-pointer hover:text-black" />
          <FaUserCircle className="text-2xl text-gray-700 cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-300"></div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-center space-x-6 h-12 bg-gray-50">
      
        {/* <a href="" className="text-gray-700 hover:text-black">Plant pots</a> */}
        <a href="#" className="text-gray-700 hover:text-black">Ceramics</a>
        <a href="#" className="text-gray-700 hover:text-black">Tables</a>
        <a href="#" className="text-gray-700 hover:text-black">Chairs</a>
        <a href="#" className="text-gray-700 hover:text-black">Crockery</a>
        <a href="#" className="text-gray-700 hover:text-black">Tableware</a>
        <a href="#" className="text-gray-700 hover:text-black">Cutlery</a>
      </div>
    </div>

  );
};

export default Navbar;

