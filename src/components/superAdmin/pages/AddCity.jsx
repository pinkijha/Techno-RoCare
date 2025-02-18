import React from 'react'

const AddCity = () => {
  return (
    <div className="min-h-screen flex rounded-xl shadow-sm  bg-gray-50 ">
    <div className="p-6 w-full max-w-3xl ">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">City Name</h2>
      <input
        type="text"
        placeholder="Enter City Name"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5"
      />

      <h2 className="text-lg font-semibold text-gray-700 mb-2">City Status</h2>
      <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5">
        <option>Publish</option>
        <option>Draft</option>
      </select>

      <button className="bg-[#7EC1B1] text-white px-6 py-2 rounded-md hover:bg-teal-500 transition duration-300">
        Add City
      </button>
    </div>
  </div>
  )
}

export default AddCity
