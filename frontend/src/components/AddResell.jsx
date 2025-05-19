import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddResell = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [sizes, setSizes] = useState([]);
  const [condition, setCondition] = useState("used");

  const handleImageChange = (e, imageName) => {
    const file = e.target.files[0];
    if (file) {
      if (imageName === "image1") setImage1(file);
      if (imageName === "image2") setImage2(file);
      if (imageName === "image3") setImage3(file);
      if (imageName === "image4") setImage4(file);
    }
  };

  const handleSizeChange = (size) => {
    if (sizes.includes(size)) {
      setSizes(sizes.filter((s) => s !== size));
    } else {
      setSizes([...sizes, size]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("condition", condition.toLowerCase());
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("date", Date.now());

    image1 && formData.append("image1", image1);
    image2 && formData.append("image2", image2);
    image3 && formData.append("image3", image3);
    image4 && formData.append("image4", image4);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/resell/add",
        formData,
        { headers: { token} }
      );

      if (response.data.success) {
        toast.success("Product added successfully!");
        setProductName("");
        setDescription("");
        setPrice("");
        setCategory("Men");
        setSubCategory("Topwear");
        setSizes([]);
        setCondition("used");
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
      } else {
        toast.error("Failed to add product!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-xl font-bold mb-4">Add Resell Product</h2>

      <div className="flex gap-2">
        <div className="w-full">
          <label htmlFor="productName" className="block">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="w-full">
          <label htmlFor="price" className="block">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        ></textarea>
      </div>

      <div className="flex gap-4">
        <div className="w-full">
          <label htmlFor="category" className="block">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="subCategory" className="block">
            Sub Category
          </label>
          <select
            id="subCategory"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
      </div>

      {/* ✅ Image Upload */}
      <div>
        <label className="block">Product Images (Max 4)</label>
        <div className="flex gap-2">
          <div>
            <label htmlFor="image1" className="block text-sm text-gray-600">Image 1</label>
            <input
              type="file"
              id="image1"
              onChange={(e) => handleImageChange(e, "image1")}
              className="w-full p-1 border border-gray-300 rounded"
              accept="image/*"
            />
            {image1 && (
              <img
                src={URL.createObjectURL(image1)}
                alt="preview-1"
                className="mt-1 w-16 h-16 object-cover rounded"
              />
            )}
          </div>
          <div>
            <label htmlFor="image2" className="block text-sm text-gray-600">Image 2</label>
            <input
              type="file"
              id="image2"
              onChange={(e) => handleImageChange(e, "image2")}
              className="w-full p-1 border border-gray-300 rounded"
              accept="image/*"
            />
            {image2 && (
              <img
                src={URL.createObjectURL(image2)}
                alt="preview-2"
                className="mt-1 w-16 h-16 object-cover rounded"
              />
            )}
          </div>
          <div>
            <label htmlFor="image3" className="block text-sm text-gray-600">Image 3</label>
            <input
              type="file"
              id="image3"
              onChange={(e) => handleImageChange(e, "image3")}
              className="w-full p-1 border border-gray-300 rounded"
              accept="image/*"
            />
            {image3 && (
              <img
                src={URL.createObjectURL(image3)}
                alt="preview-3"
                className="mt-1 w-16 h-16 object-cover rounded"
              />
            )}
          </div>
          <div>
            <label htmlFor="image4" className="block text-sm text-gray-600">Image 4</label>
            <input
              type="file"
              id="image4"
              onChange={(e) => handleImageChange(e, "image4")}
              className="w-full p-1 border border-gray-300 rounded"
              accept="image/*"
            />
            {image4 && (
              <img
                src={URL.createObjectURL(image4)}
                alt="preview-4"
                className="mt-1 w-16 h-16 object-cover rounded"
              />
            )}
          </div>
        </div>
        <small className="text-sm text-gray-500">
          You can upload up to 4 images.
        </small>
      </div>

      <div>
        <p>Product Sizes</p>
        <div className="flex gap-2">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              className={`px-3 py-1 cursor-pointer rounded ${
                sizes.includes(size) ? "bg-pink-200 text-pink-800" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="condition" className="block mb-1">
          Condition
        </label>
        <select
          id="condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="new">New</option>
          <option value="like new">Like New</option>
          <option value="used">Used</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddResell;