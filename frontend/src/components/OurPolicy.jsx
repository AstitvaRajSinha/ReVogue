import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='py-20 px-4 bg-zinc-50 dark:bg-transparent rounded-2xl'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        
        {/* Exchange Policy */}
        <div className='bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center'>
          <img
            src={assets.exchange_icon}
            className='w-16 mx-auto mb-6 transition-transform transform hover:scale-110'
            alt='Exchange Icon'
          />
          <p className='text-lg font-semibold text-zinc-900 dark:text-white mb-2'>
            Easy Exchange Policy
          </p>
          <p className='text-sm text-zinc-600 dark:text-zinc-400'>
            We offer a hassle-free exchange policy for your convenience.
          </p>
        </div>

        {/* Return Policy */}
        <div className='bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center'>
          <img
            src={assets.quality_icon}
            className='w-16 mx-auto mb-6 transition-transform transform hover:scale-110'
            alt='Return Icon'
          />
          <p className='text-lg font-semibold text-zinc-900 dark:text-white mb-2'>
            7 Days Return Policy
          </p>
          <p className='text-sm text-zinc-600 dark:text-zinc-400'>
            Enjoy 7 days of easy returns, no questions asked.
          </p>
        </div>

        {/* Support */}
        <div className='bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center'>
          <img
            src={assets.support_img}
            className='w-16 mx-auto mb-6 transition-transform transform hover:scale-110'
            alt='Support Icon'
          />
          <p className='text-lg font-semibold text-zinc-900 dark:text-white mb-2'>
            24/7 Customer Support
          </p>
          <p className='text-sm text-zinc-600 dark:text-zinc-400'>
            Our team is here for you—anytime, anywhere.
          </p>
        </div>

      </div>
    </div>
  )
}

export default OurPolicy
