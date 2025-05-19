import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
        setCategory(prev=> prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0 ) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-zinc-200 dark:border-zinc-700'>

      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 text-zinc-800 dark:text-zinc-100'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category Filter */}
        <div className={`border border-zinc-300 dark:border-zinc-700 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-zinc-700 dark:text-zinc-300'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-zinc-700 dark:text-zinc-400'>
            {['Men', 'Women', 'Kids'].map((cat) => (
              <label className='flex gap-2 items-center' key={cat}>
                <input className='w-3' type="checkbox" value={cat} onChange={toggleCategory}/> {cat}
              </label>
            ))}
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-zinc-300 dark:border-zinc-700 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-zinc-700 dark:text-zinc-300'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-zinc-700 dark:text-zinc-400'>
            {['Topwear', 'Bottomwear', 'Winterwear'].map((sub) => (
              <label className='flex gap-2 items-center' key={sub}>
                <input className='w-3' type="checkbox" value={sub} onChange={toggleSubCategory}/> {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4 text-zinc-800 dark:text-zinc-100'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            {/* Product Sort */}
            <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-sm text-zinc-800 dark:text-zinc-100 px-2 rounded'>
              <option value="relavent">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}  isResell={item.isResell}  />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
