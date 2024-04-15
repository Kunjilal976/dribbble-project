import React, { useState } from "react";
import img1 from './../images/img1.jpg'
import img2 from './../images/img2.jpg'
import img3 from './../images/img3.jpg'


export default function AssignWork() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  return (
    <div className="container mx-auto px-4 lg:px-20 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">What brings you to Dribbble?</h1>
        <p className="mt-2">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg flex flex-col items-center">
          <img src={img1} alt="col1" className="w-[300px] h-[200px]"/>
          <p className="mb-4 pt-4 font-bold">
            I'm a designer looking to share my work
          </p>
          <input
            type="checkbox"
            id="designer"
            className="mr-2"
            checked={selectedOptions.includes("designer")}
            onChange={() => handleCheckboxChange("designer")}
          />
        </div>
        <div className="border p-4 rounded-lg flex flex-col items-center">
          <img src={img2} alt="col1" className="w-[300px] h-[200px]" />
          <p className="mb-4 pt-4 font-bold">I'm looking to hire a designer</p>
          <input
            type="checkbox"
            id="hire"
            className="mr-2 "
            checked={selectedOptions.includes("hire")}
            onChange={() => handleCheckboxChange("hire")}
          />
        </div>
        <div className="relative border  p-4 pt-0 rounded-lg flex flex-col items-center">
          <img src={img3} alt="col1" className="w-[300px] h-[200px]" />
          <p className="font-bold">I'm looking for design inspiration</p>
          <br />
          <p className="text-center">
            With over 7 million shots froma vast community of designer,Dribbble
            is the leading source for design inspiration.
          </p>
          <input
            type="checkbox"
            id="inspiration"
            className="mr-2 mt-4"
            checked={selectedOptions.includes("inspiration")}
            onChange={() => handleCheckboxChange("inspiration")}
          />
        </div>
      </div>
      <div className="mt-8 text-center">
        <h1 className="text-lg font-semibold mb-2">
          Anything else? You can select multiple
        </h1>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4">
            Finish
          </button>
          <button className="border border-none py-2 px-4 rounded-lg">
            or Press RETURN
          </button>
        </div>
      </div>
    </div>
  );
}
