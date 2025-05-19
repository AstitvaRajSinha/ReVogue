import { v2 as cloudinary } from "cloudinary";
import resellProductModel from "../models/resellProductModel.js";

// Add resell product
const addResellProduct = async (req, res) => {
    try {
      const { name, description, price, category, subCategory, sizes, condition } = req.body;
  
      const image1 = req.files?.image1?.[0];
      const image2 = req.files?.image2?.[0];
      const image3 = req.files?.image3?.[0];
      const image4 = req.files?.image4?.[0];
  
      const images = [image1, image2, image3, image4].filter((item) => item !== undefined);
  
      if (!images || images.length === 0) {
        return res.status(400).json({ success: false, message: 'Please upload at least one image' });
      }
  
      const imagesUrl = await Promise.all(
        images.map(async (item) => {
          const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
          return result.secure_url;
        })
      );
  
      const newProduct = new resellProductModel({
        name,
        description,
        price: Number(price),
        image: imagesUrl,
        category,
        subCategory,
        sizes: JSON.parse(sizes || '[]'),
        date: Date.now(),
        condition,
        sellerId: req.user._id,
        approved: false,
        status: 'available',
      });
  
      await newProduct.save();
      res.status(201).json({ success: true, message: 'Product added successfully' });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error adding product' });
    }
  };
  

// List all approved resell products
const listApprovedResellProducts = async (req, res) => {
    try {
        const products = await resellProductModel.find({ approved: true });
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Remove resell product (by owner)
const removeResellProduct = async (req, res) => {
    try {
        const { id } = req.body;

        const product = await resellProductModel.findById(id);
        if (!product) return res.json({ success: false, message: "Product not found" });

        if (String(product.sellerId) !== req.user._id) {
            return res.json({ success: false, message: "Unauthorized" });
        }

        await resellProductModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Resell product removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Get single resell product
const singleResellProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await resellProductModel.findById(productId);
        res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export {
    addResellProduct,
    listApprovedResellProducts,
    removeResellProduct,
    singleResellProduct
};
