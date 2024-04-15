import React from "react";
import avatar from './../images/avatarg.jpeg'

export default function Profile() {
  return (
    <div class="lg:mx-[400px] lg:my-[100px] sm:mx-[50px] my-[20px] ">
    <div>
      <h1 class="font-bold text-2xl">
        Welcome! Let's create your profile
      </h1>
      <p class="pt-5">
        Let others get to know you better! You can do these later
      </p>
    </div>
    <div class="mt-10">
      <h1 class="font-semibold">Add an avatar</h1>
      <div class="mt-5 flex flex-col items-center sm:flex-row sm:items-start">
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          class="hidden appearance-none border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-800 cursor-pointer"
        />
        
        <img
          src={avatar}
          alt="/"
          class="w-32 h-32 mt-3 object-cover rounded-full border border-gray-300"
          id="previewImage"
        />
        <label
          for="imageInput"
          class="mt-2 cursor-pointer border rounded w-[120px] h-[30px] sm:mt-0 sm:ml-4 flex items-center justify-center bg-white"
        >
          Choose Image
        </label>
      </div>
    </div>
    <div class="mt-20">
      <h1 class="font-semibold ">Add your location</h1>
      <input
        type="text"
        placeholder="Enter your location"
        class="w-full pt-5 border-b outline-none"
      />
    </div>
    <button type="submit" class="bg-pink-300 text-white w-[150px] h-[40px] mt-5 rounded-lg">
      Next
    </button>
    <div class="mt-2 ">
      <button class="border border-none text-sm">or press RETURN</button>
    </div>
  </div>
  
  );
}
