import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex items-center gap-3 mb-4'>
      <p className='text-zinc-600 dark:text-zinc-300 uppercase tracking-wide text-sm sm:text-base'>
        {text1} <span className='text-zinc-600 dark:text-zinc-300 font-semibold'>{text2}</span>
      </p>
      <div className='w-8 sm:w-12 h-[1.5px] bg-zinc-700'></div>
    </div>
  )
}

export default Title
