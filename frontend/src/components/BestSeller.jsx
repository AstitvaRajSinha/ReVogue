import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <section className="my-16 px-4 sm:px-10 lg:px-20">
      <div className="text-center mb-10">
        <Title text1="BEST" text2="SELLERS" />
        <p className="max-w-xl mx-auto mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
          Discover our most loved products, handpicked by our customers. These top-selling items blend quality with style.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {bestSeller.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-950 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 p-3"
          >
            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
