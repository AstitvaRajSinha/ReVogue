import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t border-zinc-300 dark:border-zinc-700'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>

          <p className='font-semibold text-xl text-zinc-600 dark:text-zinc-300'>Our Store</p>
          <p className='text-zinc-500 dark:text-zinc-400'>Rajpura<br />Chandigarh</p>

          <p className='text-zinc-500 dark:text-zinc-400'>
            Tel: 9015758347 <br /> Email: Revogue@gmail.com
          </p>

          <p className='font-semibold text-xl text-zinc-600 dark:text-zinc-300'>Careers at Revogue</p>
          <p className='text-zinc-500 dark:text-zinc-400'>Learn more about our teams and job openings.</p>

          <button className='border border-black dark:border-white px-8 py-4 text-sm text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500'>
            Explore Jobs
          </button>

        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
