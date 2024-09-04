import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-auto py-6 px-10 flex items-center shadow-lg justify-between fixed z-50 bg-white/50 '>
      <div className='flex max-sm:hidden flex-row gap-16 ml-20 items-center justify-center text-medium font-semibold '>
        <div className='text-black hover:drop-shadow-lg cursor-pointer'>
          Home
        </div>
        <div className='text-black hover:drop-shadow-lg cursor-pointer'>
          For businesses
        </div>
        <div className='text-black hover:drop-shadow-lg cursor-pointer'>
          For mentors
        </div>
        <div className='text-black hover:drop-shadow-lg cursor-pointer'>
          Company
        </div>
      </div>
      <div className='flex max-sm:hidden flex-row gap-10 mr-10 items-center justify-center'>
        <div className='flex items-center justify-center text-black bg-transparent border-[3px] rounded-lg
          px-10 py-1 border-black 
        '>
          Login
        </div>
        <div className='flex items-center justify-center text-white bg-black border-[3px] rounded-lg
          px-10 py-1 border-black
        '>
          Sign up
        </div>
      </div>
    </div>
  )
}

export default Navbar
