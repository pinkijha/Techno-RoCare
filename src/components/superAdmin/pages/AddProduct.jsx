
import React, { useState } from "react";

const AddProduct = () => {
  const [images, setImages] = useState([""]);

  const addMoreImage = () => {
    setImages([...images, ""]);
  };

  return (
    <div className=" bg-gray-100 p-6 rounded-xl text-[#263138] space-y-6 shadow-sm">
      <label className="block font-semibold mb-1">Product Name</label>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="w-full p-2 mb-4 border rounded"
      />

      <label className="block font-semibold mb-1">Product Category</label>
      <select className="w-full p-2 mb-4 border rounded">
        <option>Select</option>
      </select>

      <label className="block font-semibold mb-1">Price</label>
      <input
        type="text"
        placeholder="Enter Price"
        className="w-full p-2 mb-4 border rounded"
      />

      <label className="block font-semibold mb-1">Warranty</label>
      <input
        type="text"
        placeholder="Enter Warranty"
        className="w-full p-2 mb-4 border rounded"
      />

      <label className="block font-semibold mb-1">Product Image</label>
      {images.map((_, index) => (
        <input
          key={index}
          type="file"
          className="w-full p-2 mb-2 border rounded"
        />
      ))}
      <button onClick={addMoreImage} className="text-blue-600 text-sm mb-4">
        + Add More Image
      </button>

      <label className="block font-semibold mb-1">Product Description</label>
      <textarea
        placeholder="Write Product Description"
        className="w-full p-2 border rounded"
        rows="4"
      ></textarea>

       {/* Submit Button */}
       <button className="bg-[#7EC1B1] cursor-pointer text-white px-6 py-2 rounded-md hover:bg-teal-500 transition duration-300">
          Add Product
        </button>
    </div>
  );
};

export default AddProduct;
