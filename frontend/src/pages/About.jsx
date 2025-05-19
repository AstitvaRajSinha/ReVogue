import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t  dark:text-white'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16  dark:text-white'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>ReVogue was born from a vision to redefine online fashion by blending convenience, creativity, and community-driven commerce. Our platform is designed to make shopping not just easy, but exciting—offering users access to a curated collection of fashion-forward articles that reflect the latest trends and timeless styles.</p>
              <p>At the heart of ReVogue is a unique approach: alongside traditional purchases, we empower our users to rent fashion or even list their own fashion items for others to rent. This not only promotes sustainable fashion but also creates a circular community where style meets smart choices.</p>
              <p>
              Whether you're looking to elevate your wardrobe, rent a statement piece for a special occasion, or monetize your fashion finds, ReVogue is your go-to destination for all things stylish, sustainable, and shareable.
              </p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At ReVogue, our mission is to make fashion more accessible, flexible, and community-driven. We’re committed to building a platform that celebrates individuality, encourages reuse, and offers a seamless experience—from browsing and renting to listing and buying.</p>

          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Sustainable Fashion:</b>
    <p className='text-gray-600'>
      By enabling rentals and peer-to-peer sharing, we promote conscious consumption and reduce fashion waste.
    </p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Community Empowerment:</b>
    <p className='text-gray-600'>
      Our platform lets individuals showcase and monetize their own fashion collections, turning closets into opportunities.
    </p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Versatile Shopping Experience:</b>
    <p className='text-gray-600'>
      Whether you're buying, renting, or listing, ReVogue adapts to your needs—making fashion flexible and functional.
    </p>
  </div>
</div>



      <NewsletterBox/>
      
    </div>
  )
}

export default About
