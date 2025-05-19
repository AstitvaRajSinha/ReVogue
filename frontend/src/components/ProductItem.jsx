// In your ProductItem component
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price, isResell }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link
            onClick={() => scrollTo(0, 0)}
            className='text-zinc-700 dark:text-zinc-200 cursor-pointer group'
            to={`/product/${id}`}
        >
            <div className='relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105'>
                <img
                    className='aspect-square w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'
                    src={image[0]}
                    alt={name || 'Product Image'}
                />

                {/* Resell Indicator */}
                {isResell && (
                    <div className='absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold py-1 px-2 rounded-md z-10'>
                        Resell
                    </div>
                )}

                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out'></div>
            </div>

            <p className='pt-3 pb-1 text-sm font-medium text-zinc-900 dark:text-white truncate'>
                {name}
            </p>
            <p className='text-sm font-semibold text-black dark:text-zinc-100'>
                {currency}{price}
            </p>
        </Link>
    );
};

export default ProductItem;