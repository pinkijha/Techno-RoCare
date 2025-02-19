import React from "react";

const AddServices = () => {
  return (
    <div className="h-screen flex rounded-xl shadow-sm  bg-white">
      <div className="px-6 py-5 w-full max-w-3xl ">
        {/* Service Name */}
        <label className="text-lg font-semibold text-gray-700 mb-1 block">
          Service Name
        </label>
        <input
          type="text"
          placeholder="Enter Service Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 mb-5"
        />

        {/* Service Subtitle */}
        <label className="text-lg font-semibold text-gray-700 mb-1 block">
          Service Subtitle
        </label>
        <input
          type="text"
          placeholder="Enter Service Subtitle"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 mb-5"
        />

        {/* Service Image Upload */}
        <label className="text-lg font-semibold text-gray-700 mb-1 block">
          Service Image
        </label>
        <input
          type="file"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none mb-5"
        />

        {/* Service Video Upload */}
        <label className="text-lg font-semibold text-gray-700 mb-1 block">
          Service Video
        </label>
        <input
          type="file"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none mb-5"
        />

        {/* Service Status */}
        <label className="text-lg font-semibold text-gray-700 mb-1 block">
          Service Status
        </label>
        <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none
         focus:ring-1 focus:ring-blue-300  mb-5">
          <option>Publish</option>
          <option>Unpublished</option>
        </select>

        {/* Submit Button */}
        <button className="bg-[#7EC1B1] text-white px-6 py-2 rounded-md hover:bg-teal-500 transition duration-300">
          Add Service
        </button>
      </div>
    </div>
  );
};

export default AddServices;
