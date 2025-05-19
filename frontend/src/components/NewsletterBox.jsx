import React from 'react'

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault()
    // You can add your API call here
  }

  return (
    <div className='text-center px-4 py-10'>
      <p className='text-2xl font-semibold text-zinc-800 dark:text-white'>
        Subscribe now & get 20% off
      </p>
      <p className='text-zinc-500 dark:text-zinc-400 mt-3 max-w-xl mx-auto'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:w-1/2 flex flex-col sm:flex-row items-center gap-3 mx-auto my-6 border border-zinc-300 dark:border-zinc-600 rounded-lg px-3 py-2 bg-white dark:bg-zinc-800'
      >
        <input
          className='w-full sm:flex-1 outline-none px-4 py-2 bg-transparent text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500'
          type='email'
          placeholder='Enter your email'
          required
        />
        <button
          type='submit'
          className='bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-300 text-white dark:text-black text-xs px-6 py-3 rounded transition-colors duration-300'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox
