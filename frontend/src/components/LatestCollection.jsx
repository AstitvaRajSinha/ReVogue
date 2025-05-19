import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <section className="w-full py-16 px-4 md:px-10 lg:px-20 bg-white dark:bg-transparent">
      {/* Section Title */}
      <div className="text-center mb-12">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Discover our latest hand-picked pieces that blend comfort and style, perfect for every season.
        </p>
      </div>

      {/* Products Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {latestProducts.map((item, index) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              isResell={item.isResell}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LatestCollection;
