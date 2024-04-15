import React from "react";
import avatar from './../images/avatarg.jpeg'


function Header() {
  return (
    <nav className="py-4 border-blue-900 flex flex-col lg:flex-row lg:items-center border-b outline-none">
    <div className="max-w-7xl  px-8 flex justify-between mx-auto items-center">
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-black">
        <a href="/" className="hover:text-gray-300 font-bold">
          dribbble
        </a>
        <a href="/" className="hover:text-gray-300">
          Inspiration
        </a>
        <a href="/" className="hover:text-gray-300">
          Find work
        </a>
        <a href="/" className="hover:text-gray-300">
          Learn Design
        </a>
        <a href="/" className="hover:text-gray-300">
          Go Pro
        </a>
        <a href="/" className="hover:text-gray-300">
          Hire Designers
        </a>
      </div>
  
      <div className="flex flex-col lg:flex-row items-center mt-4 gap-4  lg:mt-0 float-end">
        <input
          type="text"
          placeholder="Search"
          className="float-end px-4 py-1 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600 mb-2 lg:mb-0 lg:mr-4"
        />
        <img
          src={avatar}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover mr-4 lg:mr-0"
        />
        <label htmlFor="file-upload" className="bg-pink-500 hover:bg-blue-600 px-3 py-1 rounded-md cursor-pointer">
          Upload
          <input id="file-upload" type="file" className="hidden"  accept="image/*"/>
        </label>
  
      </div>
    </div>
  </nav>
  );
}

export default Header;
