import React, { useState } from 'react';
import axios from 'axios';
import image3 from './../images/image3.png'

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState(null); // Define error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://122.15.204.67:3001/dribbble/users/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      // Check if response status is not OK
      if (res.status !== 201 && res.status !== 200) {
        throw new Error('Failed to create user');
      }
  
      // Clear form data after successful submission
      setFormData({
        name: '',
        username: '',
        email: '',
        password: ''
      });
  
      // Parse response data if it's not empty
      const data = res.status === 201 ? { message: 'User created successfully' } : res.data;
  
      if (data.success === false) {
        setError(data.message);
      } else {
        setError(null); // Clear error state if the request is successful
      }
    } catch (error) {
      setError(error.message || 'Server error'); // Generic error message
    }
  };
  

  

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  return (
    <div className="flex flex-col lg:flex-row">
    <div className="w-full lg:w-1/3 bg-[#edc687]">
      <div className="pt-12 ml-4 lg:ml-12">
        <p className="font-bold text-4xl font-serif">dribbble</p>
        <p className="font-semibold text-xl mt-2 lg:w-72">Discover the world's top Designers & Creatives.</p>
      </div>
      <div className="pt-12">
        <img src={image3} alt="Art by Peter Tarka" className="mx-auto lg:ml-0" />
      </div>
      <div className="pt-12 ml-4 lg:ml-12">
        Art by <span className="underline">Peter Tarka</span>
      </div>
    </div>
  
    <div className="w-full lg:w-2/3">
      <div className="mt-8 mr-4 lg:mr-8">
        <ul className="flex justify-end float-end lg:justify-start gap-4">
        <li>Already a member?</li>

          <li className="text-blue-900 cursor-pointer">Sign In</li>
        </ul>
      </div>
  
      <div className="text-center mt-16">
        <p className="font-bold text-3xl">Sign up to Dribbble</p>
        {/* Display error message if any */}
      </div>
  
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md">
        <form onSubmit={handleSubmit}>
          <div className='flex gap-4'>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label  className="block text-gray-700 font-semibold">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input type="checkbox" id="terms" name="terms" className="mr-2" />
            <label className="text-gray-700 ">
              Creating an account means you're okay with our{" "}
              <span className="text-blue-900">Terms of Service, Privacy Policy,</span> and our default
              <span className="text-blue-900"> Notification Setting</span>
            </label>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-pink-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Create Account
            </button>
        {error && <p className="text-red-300 mt-4">{error}</p>}

          </div>
        </form>
        <div className="mt-4 text-sm text-center">
          This site is protected by reCAPTCHA and the Google <span className="text-blue-900">Privacy Policy</span> and <span className="text-blue-900">Terms of Service</span> apply
        </div>
      </div>
    </div>
  </div>
  
  );
}
