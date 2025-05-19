import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setVisible(location.pathname.includes('collection'))
  }, [location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-zinc-50 dark:bg-zinc-800 text-center'>
      <div className='inline-flex items-center justify-center border border-zinc-400 dark:border-zinc-600 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white dark:bg-zinc-700'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-inherit text-sm text-zinc-800 dark:text-white'
          type='text'
          placeholder='Search'
        />
        <img className='w-4 invert dark:invert-0' src={assets.search_icon} alt='search icon' />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className='inline w-3 cursor-pointer ml-2'
        src={assets.cross_icon}
        alt='close icon'
      />
    </div>
  ) : null
}

export default SearchBar
